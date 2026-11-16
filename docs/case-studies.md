# System design case studies

[← Back to README](../README.md)

Each case study follows the same 11 steps. See the full list of systems in the [README](../README.md#case-studies).

## Amazon order processing

**In one line:** Take the order, hold the stock, take the money once, then ship and tell the customer.

**Story:** A big kirana store takes orders on the phone. The owner writes each order in a register.
He keeps the items aside in a box with the customer's name. He takes money only once, even if the customer calls twice.
When the store grows to 100 phone lines, one owner is not enough.
He hires separate people for stock, money and delivery. They pass notes to each other.
That is an order system: Order, Inventory, Payment and Shipping services passing messages.

**1. Clarify the question**

Ask these first. Write the answers you assume on the board.

- **Which part of the flow?** Place order → reserve stock → payment → confirm → shipping → notifications. Plus order history and status tracking.
- **What is out of scope?** Search, recommendations and the product catalog. Say this out loud.
- **How many orders?** Assume 1 million orders a day, and 10x on a sale day.
- **One seller or many warehouses?** Assume many warehouses, but stock is checked per item (SKU).
- **Can the customer cancel?** Yes, before shipping.
- **Online payment only?** Assume card or UPI through an outside payment provider (like Razorpay or Stripe).

**2. Requirements**

Functional (what it does):

- Customer places an order with one or more items.
- System holds the stock for a short time, then takes payment.
- Customer gets a confirmation, then shipping updates (email, SMS, app push).
- Customer can see one order and the list of past orders.
- Customer can cancel before shipping.

Non-functional (how well it does it):

- **Never charge twice. Never create a duplicate order.**
- **Never sell more items than we have** (no "overselling"), even in a flash sale.
- Never lose an order once we said "order placed".
- Checkout answers in under 2 seconds.
- 99.9%+ uptime. Shipping and emails can be a few seconds late. That is fine.

**3. Numbers**

See [Capacity estimation](system-design.md#capacity-estimation) for the method. (That section uses slightly different guesses and gets 9 instances. That is fine: interviewers check your steps, not the exact number.)

| What | Calculation | Result |
|---|---|---|
| Orders, average | 1,000,000 ÷ 86,400 seconds | ~12 orders/second |
| Orders, sale-day peak | 12 × 10 | ~120 orders/second |
| Reads (status, history) | about 10 reads per order | ~120/s average, ~1,200/s peak |
| Read : write | | about 10 : 1 |
| DB writes at peak | ~5 rows per order (order, items, outbox, status) | ~600 writes/second |
| Storage | ~2 KB per order × 1M a day | ~2 GB/day, ~730 GB/year |
| Storage with 2 replicas | 730 GB × 3 (primary + 2 copies) | ~2.2 TB/year |

**Order Service instances:**

- Peak traffic is about 1,300 requests/second (120 writes + 1,200 reads).
- One Spring Boot instance (2 CPU) can handle about 200 such requests/second. This is a rough guess. Confirm it with a load test.
- 1,300 ÷ 200 ≈ 7 instances.
- Add room in case one zone (one data center) goes down. Run about 10 instances across 3 zones.
- Turn on autoscaling (add instances automatically when traffic goes up).

**Key point:** 600 writes/second is easy for one PostgreSQL primary. We do not need sharding on day one. We plan for it.

**4. APIs**

| API | What it does |
|---|---|
| `POST /orders` | Place an order. Needs an `Idempotency-Key` header. |
| `GET /orders/{orderId}` | Get one order and its status. |
| `GET /users/{userId}/orders?cursor=...&limit=20` | Order history, newest first, page by page. |
| `POST /orders/{orderId}/cancel` | Cancel before shipping. |
| `POST /payments/webhook` | The payment provider calls us when a payment finishes. |

Status changes from Shipping (packed, shipped, delivered) come as Kafka events, not public APIs.

Place an order:

```http
POST /orders
Idempotency-Key: 6f1c2a9e-0b4d-4c7a-9a51-2e8f0d3b7c11

{ "items": [ { "sku": "PHONE-128GB", "qty": 1 } ],
  "addressId": "addr_9", "paymentMethodId": "pm_77" }
```

```json
{ "orderId": "ord_3_918273", "status": "CONFIRMED", "total": "24999.00", "currency": "INR" }
```

- The `userId` comes from the login token, not the body. So nobody can order for someone else.
- The `Idempotency-Key` (a unique id the app makes once per checkout) stops duplicate orders. See part 7.
- If payment is slow, we return `"status": "PAYMENT_PENDING"` and the app checks again.

**5. Data model**

Each service owns its own tables. No service reads another service's database.

| Table | Owner | Main columns |
|---|---|---|
| `orders` | Order | `order_id`, `user_id`, `idempotency_key`, `status`, `total_amount`, `currency`, `version`, `created_at` |
| `order_items` | Order | `order_id`, `sku`, `qty`, `unit_price` |
| `outbox` | Order | `event_id`, `order_id`, `event_type`, `payload`, `created_at`, `sent` |
| `payments` | Payment | `payment_id`, `order_id` (unique), `provider_ref`, `amount`, `status` |
| `inventory` | Inventory | `sku`, `warehouse_id`, `available`, `reserved`, `version` |
| `reservations` | Inventory | `order_id`, `sku`, `qty`, `expires_at`, `status` |

**Which database and why:**

- **PostgreSQL or MySQL.** Orders and money need transactions (all-or-nothing writes) and unique constraints. A SQL database gives both.
- **Start with one primary + read replicas** (read-only copies). History and status reads go to replicas.
- **When we grow, shard by `user_id`.** Sharding means splitting data across many databases.
  - "Show my orders" then hits only one shard. This is the most common read.
  - We put the shard number inside the `order_id` (`ord_3_918273` lives in shard 3). So `GET /orders/{id}` also hits one shard.
- **Why not shard by `order_id`?** One user's orders would be spread across all shards. Order history would need to ask every shard.

**Order status (state machine):** An order can only move along these arrows. Any other change is rejected.

```mermaid
stateDiagram-v2
    [*] --> CREATED
    CREATED --> PAYMENT_PENDING : stock held
    CREATED --> CANCELLED : out of stock
    PAYMENT_PENDING --> CONFIRMED : payment success
    PAYMENT_PENDING --> CANCELLED : payment failed or timed out
    CONFIRMED --> SHIPPED : warehouse dispatched
    CONFIRMED --> CANCELLED : user cancels, refund
    SHIPPED --> DELIVERED
    DELIVERED --> [*]
    CANCELLED --> [*]
```

We update status with a check: `UPDATE orders SET status='CONFIRMED' WHERE order_id=? AND status='PAYMENT_PENDING'`. If 0 rows change, someone else already moved it.

**6. Simple architecture**

```mermaid
flowchart LR
    C["Mobile / Web app"] --> G["API Gateway"]
    G --> O["Order Service"]
    O --> ODB["Order DB (PostgreSQL)"]
    O --> I["Inventory Service + DB"]
    O --> P["Payment Service"]
    P --> PP["Payment provider (card / UPI)"]
    O --> K["Kafka"]
    K --> S["Shipping Service"]
    K --> N["Notification Service"]
```

- **API Gateway:** one front door. Checks login, rate limits, sends the call to the right service.
- **Order Service:** the "boss" of the order. It calls Inventory and Payment in order (this is called *orchestration*).
- **Kafka:** a message queue. After confirm, Shipping and Notification read the event in their own time.

Happy path, step by step:

```mermaid
sequenceDiagram
    participant U as App
    participant O as Order Service
    participant DB as Order DB
    participant I as Inventory
    participant P as Payment
    participant K as Kafka
    participant S as Shipping / Notification
    U->>O: POST /orders (Idempotency-Key)
    O->>DB: insert order CREATED (unique key)
    O->>I: reserve stock (hold 10 min)
    I-->>O: reserved
    O->>P: charge (key = orderId)
    P-->>O: success
    O->>DB: status CONFIRMED + outbox row (one transaction)
    O-->>U: 201 CONFIRMED
    DB-->>K: outbox relay publishes OrderConfirmed
    K-->>S: Shipping and Notification read the event
```

**7. Deep dive**

**(a) No double charge, no duplicate order**

Story: you press the lift button 5 times. Only one lift comes. That is *idempotency* — doing it again gives the same result. See [Idempotency](microservices.md#idempotency).

1. When the checkout page opens, the app makes one `Idempotency-Key` (a UUID, a random unique id).
2. The app sends the same key on every retry (slow network, double tap).
3. The `orders` table has `UNIQUE (user_id, idempotency_key)`.
4. Second insert fails on the unique constraint. We load the first order and return it. No new order.
5. For money, Order Service sends `order_id` as the idempotency key to the payment provider. Most providers support this. Charging twice with the same key charges once.
6. The `payments` table has `UNIQUE (order_id)` as a second safety net.

**(b) Don't oversell during a flash sale**

Problem: 1,000 phones, 1 lakh (100,000) people click "Buy" in the same minute.

- **Wrong way:** read `available`, check `> 0`, then write `available - 1`. Two requests read "1" at the same time. Both sell. Now we sold 2 phones but had 1.
- **Right way:** do the check and the minus in one SQL statement. The database locks the row for us.

```java
public interface InventoryRepository extends JpaRepository<Inventory, String> {

    @Modifying
    @Query("""
        UPDATE Inventory i
        SET i.available = i.available - :qty, i.reserved = i.reserved + :qty
        WHERE i.sku = :sku AND i.available >= :qty
        """) // check + minus in ONE atomic step, so no oversell
    int reserve(String sku, int qty); // 1 = reserved, 0 = out of stock
}
```

- **Reservation with TTL** (time to live, an expiry time): we hold stock for 10 minutes. A small job releases holds that expired and were never paid. So stock is not stuck forever.
- **Hot item problem:** every buyer updates the same DB row. They wait in line for the row lock. The DB slows down.
- **Fix for hot items — Redis gate:** keep the stock count in Redis. Each buyer does `DECR stock:PHONE-128GB`.
  - Redis runs one command at a time, so `DECR` is safe.
  - If the result is below 0, do `INCR` back and say "sold out". The DB is never touched.
  - Only the 1,000 winners go to the DB reserve. The DB is still the source of truth.
- **Optional queue:** for very big sales, put "buy" requests in a queue. Workers process them in order. The app shows "You are in the line".

More on locks: [Optimistic vs pessimistic locking](databases.md#optimistic-vs-pessimistic-locking).

**(c) Keep services in sync without 2PC**

*2PC (two-phase commit)* means locking all databases until all agree. It is slow, and one stuck service blocks everyone. We do not use it.

- **Saga:** a chain of local steps. If a later step fails, we run an "undo" step (*compensation*). Payment failed → release stock → order CANCELLED. See [Saga pattern](microservices.md#saga-pattern).
- **Transactional outbox:** we save the status change and the event in the same DB transaction. A relay (a small background job) sends outbox rows to Kafka later. So we never "save but forget to send". See [Transactional outbox pattern](microservices.md#transactional-outbox-pattern).
- **Idempotent consumers:** Kafka can deliver the same event twice. Shipping keeps a `processed_events` table and skips seen `event_id`s. See [Handling duplicate events](kafka.md#handling-duplicate-events).
- **Kafka key = `order_id`:** all events of one order go to one partition (one ordered lane inside a topic). So they stay in order. See [Kafka message ordering](kafka.md#kafka-message-ordering).
- **Stuck-order job:** if Order Service crashes mid-way, a job finds orders stuck in CREATED or PAYMENT_PENDING for over 10 minutes. It continues them or cancels them.

**8. What can go wrong**

| Problem | What we do |
|---|---|
| **Payment times out.** We don't know if money was taken. | Never guess. Keep the order in `PAYMENT_PENDING`. Ask the provider "what happened to this order_id?" Retry with the same key is also safe. A nightly *reconciliation* job (matching our records with the provider's report) catches the rest. |
| **Money taken, but our service crashed before saving.** | The provider's webhook tells us. The stuck-order job also asks the provider. Then we confirm the order. If stock is gone, we refund. |
| **Kafka is down.** | Orders still get placed. Events wait in the outbox table. The relay sends them when Kafka is back. |
| **Inventory Service is down.** | [Circuit breaker](microservices.md#circuit-breaker) fails fast with "please try again". No money is taken yet. Retries use [Retry with exponential backoff and jitter](microservices.md#retry-with-exponential-backoff-and-jitter). |
| **Duplicate events.** | Consumers check `event_id` and skip repeats. Status updates only move forward in the state machine. |
| **Same item sold twice.** | Prevented by the conditional `UPDATE ... WHERE available >= qty`. |
| **A whole region goes down.** | Order DB has a standby copy in another region. We promote it to primary and switch DNS (point our domain to the new region). The last few seconds of data may be lost, so reconciliation with the payment provider fixes those orders. |

**9. Trade-offs**

| We chose | We get | We give up |
|---|---|---|
| SQL (PostgreSQL) | Transactions, unique constraints, easy money logic | Sharding is manual work later |
| Shard by `user_id` | "My orders" hits one shard | Seller or admin reports need a separate store (data warehouse) |
| Orchestration (Order Service drives steps) | Easy to read, one place to see the flow | Order Service has more logic |
| Sync inventory + payment, async shipping + emails | User knows quickly if the order worked | Checkout depends on 2 services being up |
| Saga + outbox, not 2PC | Fast, no global locks | Data is correct only after a few seconds (*eventual consistency*) |
| 10-minute stock hold | No oversell, stock not stuck forever | Some items look "sold out" for a few minutes, then come back |
| Redis gate for hot items | DB survives flash sales | One more system to run; Redis and DB counts must be synced |

**10. Say this in the interview**

> "I will focus on placing an order, reserving stock, payment, confirmation, shipping and notifications. Search and catalog are out of scope.
> 1 million orders a day is about 12 per second, and around 120 per second on a sale day. So one PostgreSQL primary with read replicas is enough to start, and I will shard by user_id later.
> Order Service orchestrates a saga: create order, reserve stock with a 10-minute hold, charge payment, then confirm. If payment fails, we release the stock.
> To avoid double orders, I use an idempotency key with a unique constraint in the database.
> To avoid double charges, I pass the order id as the idempotency key to the payment provider.
> To avoid overselling, I use a conditional update, and a Redis counter in front for flash-sale items.
> After confirm, I write an outbox row in the same transaction, and Kafka sends it to Shipping and Notification. Consumers skip duplicate events."

**11. They may ask next**

- **Why not two-phase commit (2PC)?** It locks all services until everyone agrees. It is slow, and one slow service blocks all. Kafka and payment providers don't support it anyway.
- **Why not make the whole flow async with Kafka (choreography)?** We can. But the user wants a quick yes or no at checkout. Orchestration is easier to explain and debug. Choreography fits when many teams react to the same event.
- **How do you find an order by id if you shard by user_id?** The shard number is part of the order id. So we go straight to the right shard.
- **What if payment is UPI with a redirect?** Return `PAYMENT_PENDING`. The provider calls our webhook later. We check the webhook's signature, then confirm. The webhook handler is idempotent.
- **How does the user see live status?** Simple: the app polls `GET /orders/{id}` every few seconds. Better: send a push notification on each status event.
- **How does cancel after payment work?** Another saga: mark CANCELLED, release stock, ask the provider for a refund with an idempotency key. Not allowed after SHIPPED; that becomes a return.
- **How do you scale to 100 million orders a day?** That is about 1,200 orders per second. Shard the Order DB by user_id, add Kafka partitions, and scale services sideways (more instances).
- **What do you monitor?** Orders per minute, payment failure rate, and checkout latency (p99: 99% of requests are faster). Also stuck orders and unsent outbox rows. Alert when any of them jumps.
