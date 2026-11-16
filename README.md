# Java, Spring, Microservices & System Design Interview Guide (Junior to Senior)

One place to prepare for backend and full-stack interviews: **system design, microservices, Java (8 to 25), Spring Boot (2 to 4), Kafka, databases, Node.js, Next.js and AWS.**

Answers are written in **simple English**, with a real-life story first, a small example, a simple diagram where it helps, and a **"Say this in the interview"** line you can use as it is.

> 📱 **Study on your phone: [interviewprep.ankitbansal.dev](https://interviewprep.ankitbansal.dev/)** — search any topic, swipe one card at a time, follow a plan, revise with flashcards.
>
> Started in 2019, rebuilt in 2026 for modern Java and senior-level interviews.
> Want to help? Read [CONTRIBUTING.md](CONTRIBUTING.md).

**Table of contents**

- [How to use this guide](#how-to-use-this-guide)
- [Study plans](#study-plans)
  - [2-week plan](#2-week-plan)
  - [1-month plan](#1-month-plan)
  - [2-month plan](#2-month-plan)
- [Crash course (last-minute preparation)](#crash-course-last-minute-preparation)
  - [The day before (about 6 hours)](#the-day-before-about-6-hours)
  - [The last hour](#the-last-hour)
  - [One-page sheet](#one-page-sheet)
- [Top 20 questions to master first](#top-20-questions-to-master-first)
- [Behavioral questions](#behavioral-questions)
- [System Design](#system-design)
- [General Topics](#general-topics)
  - [DS Algo](#ds-algo)
  - [OOPS](#oops)
  - [Principles](#principles)
  - [Clean Code](#clean-code)
  - [Design Patterns](#design-patterns)
  - [Object Oriented Design](#object-oriented-design)
- [Frontend](#frontend)
  - [General](#general)
  - [Js](#js)
  - [HTML](#html)
  - [CSS](#css)
  - [Next.js](#nextjs)
- [Backend](#backend)
  - [Java](#java)
  - [Spring](#spring)
  - [Database Connectivity - JDBC, Spring JDBC & JPA, Hibernate](#database-connectivity---jdbc-spring-jdbc--jpa-hibernate)
  - [Unit Testing](#unit-testing)
- [Web Services](#web-services)
  - [SOAP Web Services](#soap-web-services)
  - [RESTful Web Services](#restful-web-services)
- [Databases](#databases)
  - [SQL, transactions and locking](#sql-transactions-and-locking)
  - [MongoDB](#mongodb)
  - [MySQL](#mysql)
- [Microservices](#microservices)
  - [Microservices patterns](#microservices-patterns)
  - [Microservices questions](#microservices-questions)
  - [Apache Kafka](#apache-kafka)
  - [Docker](#docker)
  - [Kubernetes](#kubernetes)
  - [Redis](#redis)
  - [Akka](#akka)
- [Questions to Ask after interview](#questions-to-ask-after-interview)
- [Open source contributions](#open-source-contributions)

## How to use this guide

1. **Pick a plan** below: [2 weeks](#2-week-plan), [1 month](#1-month-plan) or [2 months](#2-month-plan). Interview tomorrow? Go to the [crash course](#crash-course-last-minute-preparation).
2. **Read the question first. Try to answer it out loud** before you read the answer. Speaking is the skill you are training.
3. **Draw it.** For system design, draw boxes and arrows on paper or [Excalidraw](https://excalidraw.com).
4. **Add your own story.** For each topic, think: "Where did I use this at work? What went wrong?" Senior interviews are won with real stories.
5. **Tick the day and commit.** Each plan has one row per day. Mark it done and push. Small daily progress beats a big weekend.

Every answer follows the same shape:

| Part | Why it is there |
|---|---|
| **In one line** | Your first sentence in the interview |
| **Story** | Helps you remember and explain |
| **How it works** | The real details |
| **Diagram / Example** | Show, don't only tell |
| **Good and bad** | Seniors always talk about trade-offs |
| **Say this in the interview** | Ready-made answer in simple words |
| **They may ask next** | Follow-up questions |

## Study plans

**Every day, in every plan:**
- **Coding:** solve 2 problems (pattern of the week below). Time-box 40 minutes each.
- **Speak:** explain today's topic out loud for 2 minutes. Record yourself on the phone if you can.
- **Revise:** read yesterday's "Say this in the interview" lines once more (10 minutes).
- **Commit:** tick the day (✅) in the plan table and push. Commit message: `day-07: caching`.

**Coding pattern of the week** (use it for the daily 2 problems):

| Week | Pattern |
|---|---|
| 1 | Arrays, hashing, two pointers |
| 2 | Sliding window, stack, queue |
| 3 | Binary search, linked list |
| 4 | Trees, BST, recursion |
| 5 | Graphs (BFS, DFS, topological sort) |
| 6 | Heap, intervals, greedy |
| 7 | Dynamic programming |
| 8 | Mixed, timed (like a real interview) |

The 2-week plan uses weeks 1–2 only, mixed. The 1-month plan uses weeks 1–4.

### 2-week plan

For: interviews already scheduled. About **6–8 hours a day**. Focus only on what is asked most.

| Day | Study | Practice | Done when you can... |
|---|---|---|---|
| 1 | [How to answer a system design question](docs/system-design.md#how-to-answer-a-system-design-question), [Capacity estimation](docs/system-design.md#capacity-estimation) | Estimate numbers for 3 systems (orders, chat, video) | do the "1M orders per day" math without notes |
| 2 | [Scaling](docs/system-design.md#vertical-vs-horizontal-scaling), [Stateless services](docs/system-design.md#stateless-services), [Load balancing](docs/system-design.md#load-balancing), [Caching](docs/system-design.md#caching), [CDN](docs/system-design.md#cdn) | Draw a 3-tier app with cache and CDN | explain cache-aside and 2 cache problems |
| 3 | [Replication](docs/system-design.md#database-replication-read-replicas), [Sharding](docs/system-design.md#partitioning-and-sharding), [Consistent hashing](docs/system-design.md#consistent-hashing), [Consistency](docs/system-design.md#database-consistency-strong-vs-eventual), [CAP](docs/system-design.md#cap-theorem), [Indexes](docs/system-design.md#database-indexes) | Pick a shard key for orders, chat, and users | say when you need strong vs eventual consistency |
| 4 | [Message queues](docs/system-design.md#message-queues-and-pubsub), [WebSockets vs SSE](docs/system-design.md#long-polling-vs-websockets-vs-server-sent-events), [Unique IDs](docs/system-design.md#unique-id-generation), [Rate limiting](docs/system-design.md#rate-limiting-algorithms) | Design a [rate limiter](docs/system-design/rate-limiter.md) (30 min) | draw token bucket and explain it |
| 5 | [Monolith vs microservices](docs/microservices.md#monolith-vs-microservices), [Sync vs async](docs/microservices.md#sync-vs-async-communication), [Saga](docs/microservices.md#saga-pattern), [Outbox](docs/microservices.md#transactional-outbox-pattern), [Idempotency](docs/microservices.md#idempotency) | Draw the order saga with compensations | explain the "dual write" problem |
| 6 | [Timeouts](docs/microservices.md#timeouts), [Retries + jitter](docs/microservices.md#retry-with-exponential-backoff-and-jitter), [Circuit breaker](docs/microservices.md#circuit-breaker), [Bulkhead](docs/microservices.md#bulkhead), [API gateway](docs/microservices.md#api-gateway-and-bff) | Explain what happens when payment service is slow | describe circuit breaker states |
| 7 | [Kafka basics](docs/kafka.md#kafka-basics-in-simple-words), [Partitions](docs/kafka.md#kafka-partitions-and-consumer-groups), [Ordering](docs/kafka.md#kafka-message-ordering), [Delivery](docs/kafka.md#kafka-delivery-guarantees), [Duplicates](docs/kafka.md#handling-duplicate-events) | **Mock 1:** [Amazon order processing](docs/system-design/amazon-order-processing.md) (45 min) | guarantee order per customer and handle duplicates |
| 8 | [SQL joins](docs/databases.md#sql-joins-and-self-join), [Transactions](docs/databases.md#transactions-and-isolation-levels), [Locking](docs/databases.md#optimistic-vs-pessimistic-locking) | Write 5 SQL queries by hand (joins, 2nd highest salary) | explain optimistic vs pessimistic with the "last seat" story |
| 9 | [Java concurrency story](docs/java-concurrency.md), [Virtual threads](docs/java.md#virtual-threads) | Write a thread-safe counter 3 ways | explain race condition, volatile, deadlock |
| 10 | [Java 8 to 25](docs/java.md#java-8-to-17-to-21-to-25-what-changed), [JVM memory](docs/java.md#jvm-memory-basics), [G1 vs ZGC](docs/java.md#g1-vs-zgc) | Rewrite one old Java 8 class with records, switch, sealed | list 3 changes per LTS version |
| 11 | [Spring Boot 2 to 4](docs/spring.md#spring-boot-2-to-3-to-4-what-changed), [MVC vs WebFlux](docs/spring.md#spring-mvc-vs-webflux), [Spring](#spring) core questions (DI, [@Transactional](docs/spring-ecosystem.md#transactional-deep-dive)) | Explain why `@Transactional` fails on self-call | explain auto-configuration and bean lifecycle |
| 12 | [Case studies](docs/system-design.md#case-studies): [news feed](docs/system-design/news-feed.md) + [WhatsApp](docs/system-design/whatsapp.md) | **Mock 2:** design WhatsApp (45 min) | handle offline users and message order |
| 13 | [Case studies](docs/system-design.md#case-studies): [BookMyShow](docs/system-design/bookmyshow-ticket-booking.md) + [YouTube](docs/system-design/youtube-video-streaming.md) | **Mock 3:** design BookMyShow (45 min) | stop double booking of the same seat |
| 14 | [Behavioral questions](#behavioral-questions), [Crash course](#crash-course-last-minute-preparation) | Say 6 STAR stories out loud | answer "tell me about yourself" in 2 minutes |

### 1-month plan

For: you have a few weeks before interviews start. About **4–5 hours a day**. Sundays are for a mock interview and revision.

| Day | Study | Practice / Mock |
|---|---|---|
| 1 | [How to answer a system design question](docs/system-design.md#how-to-answer-a-system-design-question) | Read the 60-minute plan, try it on "URL shortener" |
| 2 | [Capacity estimation](docs/system-design.md#capacity-estimation) | Do numbers for orders, chat, video |
| 3 | [Scaling](docs/system-design.md#vertical-vs-horizontal-scaling), [Stateless services](docs/system-design.md#stateless-services), [Load balancing](docs/system-design.md#load-balancing) | Draw a 3-tier app |
| 4 | [Caching](docs/system-design.md#caching), [CDN](docs/system-design.md#cdn) | List cache problems and fixes |
| 5 | [Replication](docs/system-design.md#database-replication-read-replicas), [Sharding](docs/system-design.md#partitioning-and-sharding), [Consistent hashing](docs/system-design.md#consistent-hashing) | Pick shard keys for 3 systems |
| 6 | [Consistency](docs/system-design.md#database-consistency-strong-vs-eventual), [CAP](docs/system-design.md#cap-theorem), [SQL vs NoSQL](docs/system-design.md#sql-vs-nosql), [Indexes](docs/system-design.md#database-indexes) | Choose a database for 5 use cases |
| 7 | **Mock:** [URL shortener](docs/system-design/url-shortener.md) + [rate limiter](docs/system-design/rate-limiter.md) | Revise week 1 |
| 8 | [Message queues](docs/system-design.md#message-queues-and-pubsub), [WebSockets vs SSE](docs/system-design.md#long-polling-vs-websockets-vs-server-sent-events), [Blob storage](docs/system-design.md#blob-storage-files-images-videos) | Draw file upload with pre-signed URL |
| 9 | [Unique IDs](docs/system-design.md#unique-id-generation), [Rate limiting](docs/system-design.md#rate-limiting-algorithms), [Bloom filter](docs/system-design.md#bloom-filter) | Explain Snowflake ID bits |
| 10 | [Geohash](docs/system-design.md#geohash-and-quadtree-location-search), [Inverted index](docs/system-design.md#inverted-index-how-search-works), [Video streaming](docs/system-design.md#video-streaming-basics-hls-and-adaptive-bitrate) | Explain how search is fast |
| 11 | [Monolith vs microservices](docs/microservices.md#monolith-vs-microservices), [Sync vs async](docs/microservices.md#sync-vs-async-communication), [API gateway](docs/microservices.md#api-gateway-and-bff) | Explain availability math for 5 services |
| 12 | [Saga](docs/microservices.md#saga-pattern), [Outbox](docs/microservices.md#transactional-outbox-pattern), [Idempotency](docs/microservices.md#idempotency) | Draw order saga with compensation |
| 13 | [Timeouts](docs/microservices.md#timeouts), [Retries](docs/microservices.md#retry-with-exponential-backoff-and-jitter), [Circuit breaker](docs/microservices.md#circuit-breaker), [Bulkhead](docs/microservices.md#bulkhead) | "Payment service is slow. What happens?" |
| 14 | **Mock:** [Amazon order processing](docs/system-design/amazon-order-processing.md) | Revise week 2 |
| 15 | [Kafka basics](docs/kafka.md#kafka-basics-in-simple-words), [Partitions](docs/kafka.md#kafka-partitions-and-consumer-groups), [Ordering](docs/kafka.md#kafka-message-ordering) | How many partitions for 10k msg/s? |
| 16 | [Delivery guarantees](docs/kafka.md#kafka-delivery-guarantees), [Duplicates](docs/kafka.md#handling-duplicate-events) | Write an idempotent consumer |
| 17 | [SQL joins](docs/databases.md#sql-joins-and-self-join), [Transactions](docs/databases.md#transactions-and-isolation-levels), [Locking](docs/databases.md#optimistic-vs-pessimistic-locking) | 10 SQL queries by hand |
| 18 | [Case studies](docs/system-design.md#case-studies): [news feed](docs/system-design/news-feed.md), [WhatsApp](docs/system-design/whatsapp.md) | Design both, 30 min each |
| 19 | [Case studies](docs/system-design.md#case-studies): [YouTube](docs/system-design/youtube-video-streaming.md), [YouTube search](docs/system-design/youtube-search-typeahead.md) | Design both, 30 min each |
| 20 | [Case studies](docs/system-design.md#case-studies): [BookMyShow](docs/system-design/bookmyshow-ticket-booking.md), [payments](docs/system-design/payment-gateway.md) / [banking](docs/system-design/bank-ledger-wallet.md) | Design both, 30 min each |
| 21 | **Mock:** [Uber](docs/system-design/uber-ride-hailing.md) or [Hotstar live](docs/system-design/hotstar-live-streaming.md) | Revise week 3 |
| 22 | [Java concurrency story](docs/java-concurrency.md) (eras 1–4) | Thread-safe counter 3 ways, deadlock example |
| 23 | [Java](#java) collections: HashMap, ConcurrentHashMap internals | Explain `put()` step by step |
| 24 | [Java 8 to 25](docs/java.md#java-8-to-17-to-21-to-25-what-changed), [Virtual threads](docs/java.md#virtual-threads), [Streams](docs/java-streams.md) | 10 [stream coding problems](docs/java-streams.md#stream-coding-problems-with-answers) |
| 25 | [JVM memory](docs/java.md#jvm-memory-basics), [G1 vs ZGC](docs/java.md#g1-vs-zgc) | Explain 3 kinds of OutOfMemoryError |
| 26 | [Spring](#spring) core: DI, bean lifecycle, auto-configuration, [@Transactional](docs/spring-ecosystem.md#transactional-deep-dive) | Explain self-invocation problem |
| 27 | [Spring Boot 2 to 4](docs/spring.md#spring-boot-2-to-3-to-4-what-changed), [MVC vs WebFlux](docs/spring.md#spring-mvc-vs-webflux), [security (OAuth2, JWT)](docs/spring-ecosystem.md#jwt-and-oauth2-resource-server) | Explain JWT flow with a diagram |
| 28 | **Mock:** Java + Spring deep dive (ask a friend or use AI as interviewer) | Revise week 4 |
| 29 | [Behavioral questions](#behavioral-questions), [Next.js](#nextjs) / Node.js if your role needs it | 6 STAR stories out loud |
| 30 | [Crash course](#crash-course-last-minute-preparation) + rest | Sleep well |

### 2-month plan

For: building strong depth while applying for jobs. About **3–4 hours a day**. This is also the **build plan for this guide**: each day, the answers for that topic are written or improved here and committed.

**Week 1: System design basics**

| Day | Topic | Commit to this guide |
|---|---|---|
| 1 | [How to answer a system design question](docs/system-design.md#how-to-answer-a-system-design-question), [Capacity estimation](docs/system-design.md#capacity-estimation) | Review answers, add your own numbers |
| 2 | [Scaling](docs/system-design.md#vertical-vs-horizontal-scaling), [Stateless services](docs/system-design.md#stateless-services), [Load balancing](docs/system-design.md#load-balancing) | Add your production story |
| 3 | [Caching](docs/system-design.md#caching), [CDN](docs/system-design.md#cdn) | Add a cache incident you saw |
| 4 | [Replication](docs/system-design.md#database-replication-read-replicas), [Sharding](docs/system-design.md#partitioning-and-sharding), [Consistent hashing](docs/system-design.md#consistent-hashing) | Review answers |
| 5 | [Consistency](docs/system-design.md#database-consistency-strong-vs-eventual), [CAP](docs/system-design.md#cap-theorem), [SQL vs NoSQL](docs/system-design.md#sql-vs-nosql), [Indexes](docs/system-design.md#database-indexes) | Review answers |
| 6 | [Message queues](docs/system-design.md#message-queues-and-pubsub), [WebSockets vs SSE](docs/system-design.md#long-polling-vs-websockets-vs-server-sent-events), [Blob storage](docs/system-design.md#blob-storage-files-images-videos), [IDs](docs/system-design.md#unique-id-generation) | Review answers |
| 7 | **Mock:** [URL shortener](docs/system-design/url-shortener.md). Revise the week. | Review answers |

**Week 2: Microservices, Kafka, databases**

| Day | Topic | Commit to this guide |
|---|---|---|
| 8 | [Monolith vs microservices](docs/microservices.md#monolith-vs-microservices), [Sync vs async](docs/microservices.md#sync-vs-async-communication), [API gateway](docs/microservices.md#api-gateway-and-bff) | Answer old [Microservices](#microservices) questions |
| 9 | [Saga](docs/microservices.md#saga-pattern), [Outbox](docs/microservices.md#transactional-outbox-pattern), [Idempotency](docs/microservices.md#idempotency) | CQRS and event sourcing answers |
| 10 | [Timeouts](docs/microservices.md#timeouts), [Retries](docs/microservices.md#retry-with-exponential-backoff-and-jitter), [Circuit breaker](docs/microservices.md#circuit-breaker), [Bulkhead](docs/microservices.md#bulkhead) | Load shedding, backpressure, graceful degradation |
| 11 | [Kafka basics](docs/kafka.md#kafka-basics-in-simple-words), [Partitions](docs/kafka.md#kafka-partitions-and-consumer-groups), [Ordering](docs/kafka.md#kafka-message-ordering) | Answer old Kafka questions |
| 12 | [Delivery guarantees](docs/kafka.md#kafka-delivery-guarantees), [Duplicates](docs/kafka.md#handling-duplicate-events) | Kafka vs RabbitMQ answer |
| 13 | [SQL joins](docs/databases.md#sql-joins-and-self-join), [Transactions](docs/databases.md#transactions-and-isolation-levels), [Locking](docs/databases.md#optimistic-vs-pessimistic-locking) | Answer old MySQL questions |
| 14 | **Mock:** [Amazon order processing](docs/system-design/amazon-order-processing.md). Revise. | Rate limiter case study |

**Week 3: Case studies, part 1**

| Day | Topic | Commit to this guide |
|---|---|---|
| 15 | [Rate limiting](docs/system-design.md#rate-limiting-algorithms), [Bloom filter](docs/system-design.md#bloom-filter) | Review [rate limiter](docs/system-design/rate-limiter.md) |
| 16 | [News feed (Facebook / Instagram)](docs/system-design/news-feed.md) | Case study: news feed |
| 17 | [WhatsApp](docs/system-design/whatsapp.md) (chat, groups, online status) | Case study: WhatsApp |
| 18 | [YouTube](docs/system-design/youtube-video-streaming.md) (upload and watch) | Case study: YouTube |
| 19 | [YouTube search and typeahead](docs/system-design/youtube-search-typeahead.md) | Case study: search + typeahead |
| 20 | [BookMyShow](docs/system-design/bookmyshow-ticket-booking.md) (seat booking) | Case study: BookMyShow |
| 21 | **Mock:** one of this week's systems. Revise. | Fix gaps found in the mock |

**Week 4: Case studies, part 2**

| Day | Topic | Commit to this guide |
|---|---|---|
| 22 | [Payment gateway](docs/system-design/payment-gateway.md) and [bank ledger](docs/system-design/bank-ledger-wallet.md) | Case study: payments / banking |
| 23 | [Uber / Ola](docs/system-design/uber-ride-hailing.md) (location, matching) | Case study: Uber |
| 24 | [Hotstar live](docs/system-design/hotstar-live-streaming.md) (millions join at once) | Case study: Hotstar live |
| 25 | [Notification service](docs/system-design/notification-service.md), [distributed job scheduler](docs/system-design/job-scheduler.md) | Case studies: notifications, scheduler |
| 26 | [Dropbox / Google Drive](docs/system-design/dropbox-file-storage.md) | Case study: Dropbox |
| 27 | [Flash sale](docs/system-design/flash-sale.md), [stock exchange](docs/system-design/stock-exchange.md) | Case studies: flash sale, stock exchange |
| 28 | **Mock:** random system. Revise. | Fix gaps |

**Week 5: Java**

| Day | Topic | Commit to this guide |
|---|---|---|
| 29 | [Java concurrency story](docs/java-concurrency.md) | Executors, CompletableFuture answers |
| 30 | Collections: HashMap, ConcurrentHashMap internals | Update old collection answers |
| 31 | [Java 8 to 25](docs/java.md#java-8-to-17-to-21-to-25-what-changed) | Update old [Java](#java) answers |
| 32 | [JVM memory](docs/java.md#jvm-memory-basics), [G1 vs ZGC](docs/java.md#g1-vs-zgc) | Memory leak and high GC debugging story |
| 33 | [Virtual threads](docs/java.md#virtual-threads), [streams](docs/java-streams.md) | Solve 15 [stream problems](docs/java-streams.md#stream-coding-problems-with-answers) |
| 34 | OOP, SOLID, design patterns | Answer old [OOPS](#oops) and [Design Patterns](#design-patterns) questions |
| 35 | **Mock:** Java deep dive. Revise. | Fix gaps |

**Week 6: Spring and low-level design**

| Day | Topic | Commit to this guide |
|---|---|---|
| 36 | DI, bean lifecycle, auto-configuration | Answer old [Spring](#spring) core questions |
| 37 | [@Transactional](docs/spring-ecosystem.md#transactional-deep-dive), propagation, [JPA N+1 problem](docs/spring-ecosystem.md#the-n1-problem-and-how-to-fix-it) | Answer old JPA / Hibernate questions |
| 38 | [Spring Boot 2 to 4](docs/spring.md#spring-boot-2-to-3-to-4-what-changed), [observability](docs/spring-ecosystem.md#observability-with-actuator-micrometer-and-opentelemetry) | Review answers |
| 39 | [Spring Security](docs/spring-ecosystem.md#spring-security), [OAuth2](docs/spring-ecosystem.md#oauth2-login-oidc-and-spring-authorization-server), [JWT](docs/spring-ecosystem.md#jwt-and-oauth2-resource-server) | Review answers |
| 40 | [MVC vs WebFlux](docs/spring.md#spring-mvc-vs-webflux), [testing](docs/spring-ecosystem.md#testing-spring-boot-apps) (JUnit 5, Mockito, Testcontainers) | Review answers |
| 41 | Low-level design: parking lot, BookMyShow classes | LLD case studies |
| 42 | **Mock:** low-level design. Revise. | Fix gaps |

**Week 7: Full stack and cloud**

| Day | Topic | Commit to this guide |
|---|---|---|
| 43 | Node.js event loop and scaling | Node.js answers |
| 44 | [Next.js](#nextjs) | Next.js answers |
| 45 | AWS services you must know | AWS answers |
| 46 | [Docker](#docker), [Kubernetes](#kubernetes) | Update old Docker / Kubernetes answers |
| 47 | [Redis](#redis) in depth | Update old Redis answers |
| 48 | Observability, disaster recovery, multi-region | Answers |
| 49 | **Mock:** full-stack system (Next.js + Spring + AWS). Revise. | Fix gaps |

**Week 8: Harder systems, behavioral, final polish**

| Day | Topic | Commit to this guide |
|---|---|---|
| 50 | Multi-tenant SaaS, multi-region | Case studies |
| 51 | Leaderboard, top-K trending, ad click counting | Case studies |
| 52 | Google Docs, Slack | Case studies |
| 53 | [Behavioral questions](#behavioral-questions) | Write your 8 STAR stories (keep them private if you want) |
| 54 | Weak areas from your mock notes | Fix gaps |
| 55 | **Full mock loop:** coding + system design + behavioral | Fix gaps |
| 56 | [Crash course](#crash-course-last-minute-preparation) + rest | Final commit |

## Crash course (last-minute preparation)

You don't have time to learn new things now. Your goal is to **remember** and **speak clearly**.

### The day before (about 6 hours)

| Time | Do this |
|---|---|
| 1 hour | Read the [Top 20 questions](#top-20-questions-to-master-first). Only the **In one line** and **Say this in the interview** parts. |
| 1 hour | Read [How to answer a system design question](docs/system-design.md#how-to-answer-a-system-design-question) and [Capacity estimation](docs/system-design.md#capacity-estimation). Do one estimate on paper. |
| 1.5 hours | One full mock design out loud, with a timer: [Amazon order processing](docs/system-design/amazon-order-processing.md) or the system the company is famous for. |
| 1 hour | Java + Spring: [concurrency](docs/java.md#java-concurrency-and-shared-data), [Java 8 to 25](docs/java.md#java-8-to-17-to-21-to-25-what-changed), [virtual threads](docs/java.md#virtual-threads), [Spring Boot 2 to 4](docs/spring.md#spring-boot-2-to-3-to-4-what-changed). |
| 1 hour | 2 easy-medium coding problems. Only to warm up, not to learn. |
| 30 min | Read your [STAR stories](#behavioral-questions). Practice "tell me about yourself". Read about the company. |
| Night | Stop. Sleep 7–8 hours. A tired brain cannot design systems. |

### The last hour

- Read the one-page sheet below. Nothing else.
- Keep water, paper and a pen ready. Open your drawing tool. Test camera and microphone.
- Write 3 questions for the interviewer ([ideas here](#questions-to-ask-after-interview)).

### One-page sheet

**System design steps (60 minutes):**
1. Clarify (5 min): who uses it, main features, scale, what is out of scope.
2. Numbers (5 min): users, requests per second, storage. 1 day ≈ 100,000 seconds.
3. APIs + data model (10 min).
4. Simple design first (10 min): client → load balancer → services → database / cache / queue.
5. Deep dive (15 min): the 2–3 hard parts.
6. Failures + trade-offs (10 min): "What if X goes down?"
7. Summary (5 min).

**Numbers to remember:**

| Thing | Number |
|---|---|
| Seconds in a day | 86,400 ≈ 100,000 |
| 1 million per day | ≈ 12 per second (peak ≈ 2–3x) |
| Read from memory (RAM) | ~100 nanoseconds |
| Read from SSD | ~100 microseconds |
| Network call in same data center | ~0.5 ms |
| Network call across continents | ~150 ms |
| One server (simple API) | ~1,000–5,000 requests/second |

**Lines that always work:**
- "Let me first clarify the requirements before I design."
- "I will start simple, then scale the parts that need it."
- "This is a trade-off. We get X, but we pay Y."
- "What happens if this service goes down? Let me walk through it."
- "For money, I choose strong consistency. For likes and views, eventual consistency is fine."
- "I will make this operation idempotent, so retries are safe."

**Useful sentences when you are stuck** (it is normal, and it is fine):
- "Let me take a minute to think about this."
- "Can I ask a question to understand this better?"
- "Let me say what I understood, so we are on the same page."
- "I have not used this directly, but here is how I would approach it."

## Top 20 questions to master first

If you only have little time, master these. Each link goes to the full answer.

| # | Question | Area |
|---|---|---|
| 1 | [Design Amazon order processing](docs/system-design/amazon-order-processing.md) | System design |
| 2 | [Estimate capacity for 1 million orders per day](docs/system-design.md#capacity-estimation) | System design |
| 3 | [How many service instances do you need, and why?](docs/system-design.md#capacity-estimation) | System design |
| 4 | [Sync vs async communication between microservices](docs/microservices.md#sync-vs-async-communication) | Microservices |
| 5 | [Saga pattern](docs/microservices.md#saga-pattern) | Microservices |
| 6 | [Kafka partitions and consumer groups](docs/kafka.md#kafka-partitions-and-consumer-groups) | Kafka |
| 7 | [How do you guarantee message ordering?](docs/kafka.md#kafka-message-ordering) | Kafka |
| 8 | [How do you handle duplicate events?](docs/kafka.md#handling-duplicate-events) | Kafka |
| 9 | [Database consistency: strong vs eventual](docs/system-design.md#database-consistency-strong-vs-eventual) | Databases |
| 10 | [SQL joins and self join](docs/databases.md#sql-joins-and-self-join) | Databases |
| 11 | [Optimistic vs pessimistic locking](docs/databases.md#optimistic-vs-pessimistic-locking) | Databases |
| 12 | [Exponential backoff with jitter](docs/microservices.md#retry-with-exponential-backoff-and-jitter) | Resilience |
| 13 | [Circuit breaker](docs/microservices.md#circuit-breaker) | Resilience |
| 14 | [Java concurrency and shared data](docs/java.md#java-concurrency-and-shared-data) | Java |
| 15 | [Java 8 → 17 → 21 → 25](docs/java.md#java-8-to-17-to-21-to-25-what-changed) | Java |
| 16 | [G1 vs ZGC](docs/java.md#g1-vs-zgc) | Java |
| 17 | [Virtual threads](docs/java.md#virtual-threads) | Java |
| 18 | [Spring Boot 2 → 3 → 4](docs/spring.md#spring-boot-2-to-3-to-4-what-changed) | Spring |
| 19 | [Spring MVC vs WebFlux](docs/spring.md#spring-mvc-vs-webflux) | Spring |
| 20 | [Next.js architecture and Server Components](docs/nextjs.md#nextjs-architecture-and-server-components) | Frontend |

## Behavioral questions

Senior interviews always have a behavioral round. Prepare **8 real stories** from your work. One story can answer many questions.

**Use STAR to tell a story:**

| Letter | Meaning | How long |
|---|---|---|
| **S**ituation | Where were you? What was the project? | 2 lines |
| **T**ask | What was your job or the problem? | 1 line |
| **A**ction | What did **you** do? Say "I", not "we". | Most of the story |
| **R**esult | What changed? Use numbers: "latency went from 2 s to 300 ms". | 2 lines |

**Stories to prepare:**
1. A hard technical problem you solved (production issue, performance fix).
2. A system you designed from scratch.
3. A disagreement with a teammate or manager, and how you solved it.
4. A mistake you made, and what you learned.
5. A time you helped or mentored someone.
6. A time you delivered under a tight deadline.
7. A time you changed something without being asked (ownership).
8. A time you had to say "no" or push back on a requirement.

**Common questions:**
- Tell me about yourself. (2 minutes: current role → biggest achievement → what you want next.)
- Why are you looking for a change? / Tell me about your layoff.
- Tell me about a project you are proud of.
- Tell me about a time you failed.
- How do you handle conflict in the team?
- How do you make technical decisions?
- How do you mentor juniors?
- Why this company?

**About a layoff: keep it short, honest and positive.** Layoffs are common and interviewers know it. Example:

> "My company reduced the team size in a restructuring, and my role was affected along with many others. It was not about performance. I used the time to sharpen my system design and modern Java skills, and I am excited to bring my 10+ years of backend experience to a team like yours."

Then stop. Do not over-explain.

## System Design

**Basics, all in one file: [docs/system-design.md](docs/system-design.md)**

- [How interviewers run the system design round](docs/system-design.md#how-interviewers-run-the-system-design-round) (what they score, how they push you, red flags, a sample opening)
- [How to answer a system design question](docs/system-design.md#how-to-answer-a-system-design-question) (steps, 60-minute plan, questions to ask)
- [Capacity estimation](docs/system-design.md#capacity-estimation) (1 million orders a day, how many servers)
- [Building blocks](docs/system-design.md#building-blocks): scaling, load balancing, caching, CDN, replication, sharding, consistent hashing, consistency, CAP, SQL vs NoSQL, indexes, queues, WebSockets, blob storage, IDs, rate limiting, Bloom filter, geohash, search, video streaming

**Case studies, one file each** ([full list and status](docs/system-design.md#case-studies)):

- **Reads and protection:** [URL shortener (TinyURL)](docs/system-design/url-shortener.md) · [Rate limiter](docs/system-design/rate-limiter.md)
- **Social and real time:** [News feed (Facebook, Instagram)](docs/system-design/news-feed.md) · [WhatsApp](docs/system-design/whatsapp.md)
- **Video and search:** [YouTube / Netflix](docs/system-design/youtube-video-streaming.md) · [YouTube search and typeahead](docs/system-design/youtube-search-typeahead.md) · [Hotstar live (IPL)](docs/system-design/hotstar-live-streaming.md)
- **Booking and shopping:** [BookMyShow](docs/system-design/bookmyshow-ticket-booking.md) · [Flash sale](docs/system-design/flash-sale.md) · [Amazon order processing](docs/system-design/amazon-order-processing.md)
- **Money:** [Payment gateway](docs/system-design/payment-gateway.md) · [Bank ledger and wallet](docs/system-design/bank-ledger-wallet.md) · [Stock exchange](docs/system-design/stock-exchange.md)
- **Location, files, platform:** [Uber / Ola](docs/system-design/uber-ride-hailing.md) · [Dropbox / Google Drive](docs/system-design/dropbox-file-storage.md) · [Notification service](docs/system-design/notification-service.md) · [Distributed job scheduler](docs/system-design/job-scheduler.md)
- Coming next: web crawler, key-value store, distributed cache, leaderboard, top-K trending, ad click counting, Google Docs, multi-tenant SaaS, metrics and logging.

**Older practice list** (from 2019, still good): full-text search, elevator, coffee vending machine, parking system, Quartz scheduler, web crawler, Pastebin, push notifications, Instagram, Dropbox, Messenger, Twitter, Netflix, BookMyShow, typeahead, rate limiter, event management, Twitter search, news feed, Yelp / nearby friends, Uber, Quora, UberEats, Reddit, HackerRank.

## General Topics
### DS Algo
[Codechef DS certification and preparation path with required links](https://www.codechef.com/certification/data-structures-and-algorithms/prepare#foundation) 
* Asymptotic analysis (Big-O notation)
  Basic Data Structures: 
  * Arrays, 
  * Strings, 
  * Stacks, 
  * Queues,
  * Trees,
  * Graphs
* Basic math operations (addition, subtraction, multiplication, division, exponentiation)
* Sqrt(n) primality testing
* Euclid’s GCD Algorithm
* Basic Recursion
* Greedy Algorithms
* Basic Dynamic Programming
* Naive string searching
* O(n logn) Sorting
* Binary Searching
* Divide and Conquer

[Standford Algorithms Playlist 1](https://www.youtube.com/playlist?list=PLXFMmlk03Dt7Q0xr1PIAriY5623cKiH7V)  
[Standford Algorithms Playlist 2](https://www.youtube.com/playlist?list=PLXFMmlk03Dt5EMI2s2WQBsLsZl7A5HEK6)  
[Sample DS Interview questions](https://www.toptal.com/algorithms/interview-questions)  
[Geeks for Geeks for almost all types of algorithms example in the world](https://www.geeksforgeeks.org/)  

### OOPS 
* Object
* Class
* Inheritance
* Polymorphism
* Abstraction
* Encapsulation
* Object-Oriented design:
    * Coupling
    * Cohesion
    * Association
    * Aggregation
    * Composition  
  
[OOPs concept theory](https://www.javatpoint.com/java-oops-concepts)  
[Characteristics of good OOD ](https://www.geeksforgeeks.org/characteristics-of-good-object-oriented-design/)  

### Principles
* [SOLID](https://en.wikipedia.org/wiki/SOLID)
    1. **S**ingle Responsibility
    2. **O**pen/Closed
    3. **L**iskov Substitution
    4. **I**nterface Segregation
    5. **D**ependency Inversion
* YAGNI “You Aren’t Gonna Need It”
* KISS “Keep It Simple, Stupid”
* DRY "Dont Repeat Yourself"

### Clean Code
-- **Gist link** -- https://gist.github.com/bansalankit92/6119c4f7fabe11b7a174a99f5a7bb376
* [General rules](https://gist.github.com/bansalankit92/6119c4f7fabe11b7a174a99f5a7bb376#general-rules)
* [Names rules](https://gist.github.com/bansalankit92/6119c4f7fabe11b7a174a99f5a7bb376#names-rules)
* [Functions rules](https://gist.github.com/bansalankit92/6119c4f7fabe11b7a174a99f5a7bb376#functions-rules)
* [Comment rules](https://gist.github.com/bansalankit92/6119c4f7fabe11b7a174a99f5a7bb376#comment-rules)
* [Formatting / Source code structure](https://gist.github.com/bansalankit92/6119c4f7fabe11b7a174a99f5a7bb376#formatting---source-code-structure)
* [Classes and Objects](https://gist.github.com/bansalankit92/6119c4f7fabe11b7a174a99f5a7bb376#classes-and-objects)
* [Objects/Data structures/POJO](https://gist.github.com/bansalankit92/6119c4f7fabe11b7a174a99f5a7bb376#objects-data-structures-pojo)
* [Exceptions/ Error Handling](https://gist.github.com/bansalankit92/6119c4f7fabe11b7a174a99f5a7bb376#exceptions--error-handling)
* [Tests rules](https://gist.github.com/bansalankit92/6119c4f7fabe11b7a174a99f5a7bb376#tests)
* [Design rules](https://gist.github.com/bansalankit92/6119c4f7fabe11b7a174a99f5a7bb376#design-rules)
* [Understandability tips](https://gist.github.com/bansalankit92/6119c4f7fabe11b7a174a99f5a7bb376#understandability-tips)
* [Refactor](https://gist.github.com/bansalankit92/6119c4f7fabe11b7a174a99f5a7bb376#refactor)
* [Code smells](https://gist.github.com/bansalankit92/6119c4f7fabe11b7a174a99f5a7bb376#code-smells)

### Design Patterns
-- Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint that you can customize to solve a particular design problem in your code.

* **Creational patterns** provide object creation mechanisms that increase flexibility and reuse of existing code.
  * [Factory Method](https://refactoring.guru/design-patterns/factory-method)
  * [Abstract Factory Method](https://refactoring.guru/design-patterns/abstract-factory)
  * [Builder](https://refactoring.guru/design-patterns/builder)
  * [Prototype](https://refactoring.guru/design-patterns/prototype)
  * [Singleton](https://refactoring.guru/design-patterns/singleton)

* **Structural patterns** explain how to assemble objects and classes into larger structures, while keeping the structures flexible and efficient.
  * [Adapter](https://refactoring.guru/design-patterns/adapter)
  * [Bridge](https://refactoring.guru/design-patterns/bridge)
  * [Composite](https://refactoring.guru/design-patterns/composite)
  * [Decorator](https://refactoring.guru/design-patterns/decorator)
  * [Facade](https://refactoring.guru/design-patterns/facade)
  * [Flyweight](https://refactoring.guru/design-patterns/flyweight)
  * [Proxy](https://refactoring.guru/design-patterns/proxy)

* **Behavioral patterns** take care of effective communication and the assignment of responsibilities between objects.
  * [Chain Of Responsibility](https://refactoring.guru/design-patterns/chain-of-responsibility)
  * [Command](https://refactoring.guru/design-patterns/command)
  * [Iterator](https://refactoring.guru/design-patterns/iterator)
  * [Mediator](https://refactoring.guru/design-patterns/mediator)
  * [Memento](https://refactoring.guru/design-patterns/memento)
  * [Observer](https://refactoring.guru/design-patterns/observer)
  * [State](https://refactoring.guru/design-patterns/state)
  * [Strategy](https://refactoring.guru/design-patterns/strategy)
  * [Template Method](https://refactoring.guru/design-patterns/template-method)
  * [Visitor](https://refactoring.guru/design-patterns/visitor)

### Object Oriented Design

**Object-Oriented Design and UML**

* Object-Oriented Basics
* OO Analysis and Design
* What is UML?
* Use Case Diagrams
* Class Diagram
* Sequence diagram
* Activity Diagrams

**Object Oriented Design Case Studies**
* Design a Library Management System
* Design a Parking Lot
* Design Amazon - Online Shopping System
* Design Stack Overflow
* Design a Movie Ticket Booking System
* Design an ATM
* Design an Airline Management System
* Design Blackjack and a Deck of Cards
* Design a Hotel Management System
* Design a Restaurant Management system
* Design Chess
* Design an Online Stock Brokerage System
* Design a Car Rental System
* Design LinkedIn
* Design Cricinfo
* Design Facebook - a social network

## Frontend  
### General

* What did you learn yesterday/this week?
* What excites or interests you about coding?
* What is a recent technical challenge you experienced and how did you solve it?
* When building a new web site or maintaining one, can you explain some techniques you have used to increase performance?
* Can you describe some SEO best practices or techniques you have used lately?
* Can you explain any common techniques or recent issues solved in regards to front-end security?
* What actions have you personally taken on recent projects to increase maintainability of your code?
* Which version control systems are you familiar with?
* Can you describe your workflow when you create a web page?
* If you have 5 different stylesheets, how would you best integrate them into the site?
* Can you describe the difference between progressive enhancement and graceful degradation?
* How would you optimize a website's assets/resources?
* What does CORS stand for and what issue does it address?
* Do you have any pet projects? What kind?
* Explain your current project with data flow architecture, file structure,...?

### Js
**Basics**
* JavaScript Fundamentals
* Code quality
* Objects: (this, GC, new)
* Data types and DS
* Advanced working with functions (Closures, NFE, call/apply)
* Object properties configuration
* Prototypes, inheritance
* Classes
* Error handling
* Promises, async/await, callbacks
* Generators, advanced iteration
* Modules

**Advanced**
* Browser: Document, Events, Interfaces
* Frames and windows
* Binary data, files
* Network requests - websockets/http
* Storage and IndexDB
* Animation
* Web components
* Regular expressions
* Web workers
* Caching API
* Accessibility

**New features**
* ES2015
* ES6
* ES7  

[JavaScript Concepts JavaScript Professionals Must Know Well](http://javascriptissexy.com/16-javascript-concepts-you-must-know-well/)  
### HTML
* What were some of the key goals and motivations for the HTML5 specification?
* What are some of the key new features in HTML5?
* What are “web workers”?
* How do you indicate the character set being used by an HTML5 document? How does this differ from older HTML standards?
* Discuss the differences between an HTML specification and a browser’s implementation thereof.
* Briefly describe the correct usage of the following HTML5 semantic elements: `<header>, <article>, <section>, <footer>`.
* Can a `<section>` contain `<article>` elements? Can an `<article>` contain `<section>` elements? Provide usage examples.
* Can a web page contain multiple `<header>` elements? What about `<footer>` elements?
* Describe the relationship between the `<header>` and `<h1>` tags in HTML5.
* Give a simple implementation of the `<video>` tag to embed a video stored at http://www.example.com/amazing_video.mp4. Give the video a width of 640 pixels by 360 pixels. Provide the user with controls.
* Write the code necessary to create a 300 pixel by 300 pixel `<canvas>`. Within it, paint a blue 100 pixel by 100 pixel square with the top-left corner of the square located 50 pixels from both the top and left edges of the canvas.
* What is HTML5 Web Storage? Explain localStorage, sessionStorage, cookies.
* What is the difference between span and div?
* What is the Geolocation API in HTML5?
* What’s one main result if you do not specify a doctype in an HTML page?
* What’s the difference between the `<svg> and <canvas>` elements?
* Describe the difference between `<script>, <script async> and <script defer>`.
* Why is it generally a good idea to position CSS `<link>s between <head></head> and JS <script>`s just before `</body>`? Do you know any exceptions?
* Why Meta tags are used in HTML?

### CSS
* CSS Selectors
* CSS Box Model
* CSS Layout
* Styling Text with CSS
* Styling Boxes with CSS
* CSS Units
* CSS Colors and Gradients
* CSS Transitions and Animations
* CSS Transforms
* CSS Pseudo-classes and Pseudo-elements
* CSS At-Rules (e.g. Media Queries)
* CSS Specificity
* CSS Preprocessors
* CSS Naming Systems and Architecture

**Interview Questions**
* Describe Floats and how they work.
* Describe z-index and how stacking context is formed.
* Describe BFC (Block Formatting Context) and how it works.
* How would you approach fixing browser-specific styling issues?
* Have you ever used a grid system, and if so, what do you prefer?
* Have you used or implemented media queries or mobile specific layouts/CSS?
* Can you give an example of an @media property other than screen?
* What are the advantages/disadvantages of using CSS preprocessors?
* Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
* What does * { box-sizing: border-box; } do? What are its advantages?
* What is the CSS display property and can you give a few examples of its use?
* What’s the difference between inline and inline-block?
* What’s the difference between the “nth-of-type()” and “nth-child()” selectors?
* What’s the difference between a relative, fixed, absolute and statically positioned element?
* What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
* Have you played around with the new CSS Flexbox or Grid specs?
* Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?
* What is CSS selector specificity and how does it work?


### Next.js
Answers: [docs/nextjs.md](docs/nextjs.md)
- [Next.js architecture and Server Components](docs/nextjs.md#nextjs-architecture-and-server-components) (App Router, Server vs Client Components, SSR / SSG / ISR, caching, Next.js 15 → 16, calling a Spring Boot backend)
- Coming next: Server Actions, Route Handlers, performance for large apps, React 19 basics.

## Backend
### Java

Answers: [docs/java.md](docs/java.md)

**Modern Java (answered in simple English):**
- ⭐ [Java streams and functional programming](docs/java-streams.md): pipeline diagrams, collectors, map-reduce, gatherers, and **65 coding problems** (top 5, group by, sort a map by value, second highest, frequency count, anagrams...)
- ⭐ [Java concurrency: from threads to virtual threads](docs/java-concurrency.md): the full story in 7 eras (Thread → ExecutorService → Fork/Join → CompletableFuture → Flow → virtual threads → structured concurrency), with architecture diagrams and 44 interview questions
- [Java concurrency and shared data](docs/java.md#java-concurrency-and-shared-data) (race condition, synchronized, volatile, atomic, ConcurrentHashMap, deadlock)
- [Java 8 → 17 → 21 → 25: what changed](docs/java.md#java-8-to-17-to-21-to-25-what-changed) (records, sealed classes, pattern matching, and how to migrate)
- [JVM memory basics](docs/java.md#jvm-memory-basics) (heap, stack, metaspace, OutOfMemoryError)
- [G1 vs ZGC](docs/java.md#g1-vs-zgc)
- [Virtual threads](docs/java.md#virtual-threads)

**Core Java questions** ([2019 answers](docs/java.md#core-java-questions-2019-answers-being-updated), being updated to Java 21/25):

* Object oriented programming basics
* Advanced object oriented concepts
* Java Platform
* Wrapper Classes
* Strings
* Advanced object oriented concepts
* Modifiers
* Exception handling
* Miscellaneous topics
* Collections
* Advanced collections
* Generics
* Multi threading
* Functional Programming - Lamdba expressions and Streams
* New Features Java 7,8,11
  
[OOPs in Java](https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/)  
[Solid Principles in Java](https://www.baeldung.com/solid-principles)

### Spring

Answers: [docs/spring.md](docs/spring.md)
- [Spring Boot 2 → 3 → 4: what changed](docs/spring.md#spring-boot-2-to-3-to-4-what-changed)
- [Spring MVC vs WebFlux](docs/spring.md#spring-mvc-vs-webflux)
- [Spring Reactive (WebFlux) in depth](docs/spring.md#spring-reactive-webflux-in-depth): reactive programming, Mono and Flux, operators, backpressure, schedulers, WebClient, R2DBC, testing, debugging, and [31 interview questions](docs/spring.md#spring-reactive-interview-questions)
- ⭐ [Spring ecosystem: the libraries companies use](docs/spring-ecosystem.md): Security (JWT, OAuth2), Data JPA (N+1, @Transactional), validation, caching, scheduling, testing (Testcontainers), Spring Cloud (Gateway, Config, OpenFeign), observability, Kafka / RabbitMQ, Batch, Modulith, Spring AI, GraphQL, native images, and 60 interview questions
- The older questions below are answered across these files.

#### Spring Core
- What Is Spring Framework?
- What Are the Benefits of Using Spring?
- What Spring Sub-Projects Do You Know? Describe Them Briefly.
- What Is Dependency Injection?
- How Can We Inject Beans in Spring?
- Which Is the Best Way of Injecting Beans and Why
- What Is the Difference Between Beanfactory and Applicationcontext?
- What Is a Spring Bean?
- What Is the Default Bean Scope in Spring Framework?
- How to Define the Scope of a Bean?
- Are Singleton Beans Thread-Safe?
- What Does the Spring Bean Lifecycle Look Like?
- What Is the Spring Java-Based Configuration?
- Can We Have Multiple Spring Configuration Files in One Project?
- What Is Spring Security?
- What Is Spring Boot?
- Name Some of the Design Patterns Used in the Spring Framework?
- How Does the Scope Prototype Work?
- What is Loose Coupling?
- What is a Dependency?
- What is IOC (Inversion of Control)?
- Can you give few examples of Dependency Injection?
- What is Auto Wiring?
- What are the important roles of an IOC Container?
- What are Bean Factory and Application Context?
- Can you compare Bean Factory with Application Context?
- How do you create an application context with Spring?
- How does Spring know where to search for Components or Beans?
- What is a Component Scan? 
- How do you define a component scan in XML and Java Configurations?
- How is it done with Spring Boot?
- What does @Component signify?
- What does @Autowired signify?
- What’s the difference Between @Controller, @Component, @Repository, and @Service Annotations in Spring?
- What is the default scope of a bean? 
- Are Spring beans thread safe?
- What are the other scopes available?
- How is Spring’s singleton bean different from Gang of Four Singleton Pattern?
- What are the different types of dependency injections?
- What is setter injection?
- What is constructor injection?
- How do you choose between setter and constructor injections?
- What are the different options available to create Application Contexts for Spring?
- What is the difference between XML and Java Configurations for Spring?
- How do you choose between XML and Java Configurations for Spring?
- How does Spring do Autowiring?
- What are the different kinds of matching used by Spring for Autowiring?
- How do you debug problems with Spring Framework?
- How do you solve NoUniqueBeanDefinitionException?
- How do you solve NoSuchBeanDefinitionException?
- What is @Primary?
- What is @Qualifier?
- What is CDI (Contexts and Dependency Injection)? 
- Does Spring Support CDI?
- Would you recommed to use CDI or Spring Annotations?
- What are the major features in different versions of Spring?
- What are new features in Spring Framework 4.0?
- What are new features in Spring Framework 5.0?
- What are important Spring Modules?
- What are important Spring Projects?
- What is the simplest way of ensuring that we are using single version of all Spring related dependencies?
- Name some of the design patterns used in Spring Framework?
- What do you think about Spring Framework?
- Why is Spring Popular?
- Can you give a big picture of the Spring Framework?
 
#### Spring Web MVC
- How to Get Servletcontext and Servletconfig Objects in a Spring Bean?
- What Is a Controller in Spring Mvc?
- How Does the @Requestmapping Annotation Work?
- What is Model 1 architecture?
- What is Model 2 architecture?
- What is Model 2 Front Controller architecture?
- Can you show an example controller method in Spring MVC?
- Can you explain a simple flow in Spring MVC?
- What is a ViewResolver?
- What is Model?
- What is ModelAndView?
- What is a RequestMapping?
- What is Dispatcher Servlet?
- How do you set up Dispatcher Servlet?
- What is a form backing object?
- How is validation done using Spring MVC?
- What is BindingResult?
- How do you map validation results to your view?
- What are Spring Form Tags?
- What is a Path Variable?
- What is a Model Attribute?
- What is a Session Attribute?
- What is a init binder?
- How do you set default date format with Spring?
- Why is Spring MVC so popular?

#### Spring Boot

- What is Spring Boot?
- What are the important Goals of Spring Boot?
- What are the important Features of Spring Boot?
- Compare Spring Boot vs Spring?
- Compare Spring Boot vs Spring MVC?
- What is the importance of @SpringBootApplication?
- What is Auto Configuration?
- How can we find more information about Auto Configuration?
- What is an embedded server? Why is it important?
- What is the default embedded server with Spring Boot?
- What are the other embedded servers supported by Spring Boot?
- What are Starter Projects?
- Can you give examples of important starter projects?
- What is Starter Parent?
- What are the different things that are defined in Starter Parent?
- How does Spring Boot enforce common dependency management for all its Starter projects?
- What is Spring Initializr?
- What is application.properties?
- What are some of the important things that can customized in application.properties?
- How do you externalize configuration using Spring Boot?
- How can you add custom application properties using Spring Boot? 
- What is @ConfigurationProperties?
- What is a profile?
- How do you define beans for a specific profile?
- How do you create application configuration for a specific profile?
- How do you have different configuration for different environments?
- What is Spring Boot Actuator? 
- How do you monitor web services using Spring Boot Actuator?
- How do you find more information about your application envrionment using Spring Boot?
- What is a CommandLineRunner?
 
**Spring Data Access**
* What Is Spring Jdbctemplate Class and How to Use It?
* How Would You Enable Transactions in Spring and What Are Their Benefits?
* What Is Spring Dao?
- What is Spring Data?
- What is the need for Spring Data?
- What is Spring Data JPA?
- What is a CrudRepository?
- What is a PagingAndSortingRepository?
 
#### Spring Aspect-Oriented Programming (AOP)
* What Is Aspect-Oriented Programming?
* What Are Aspect, Advice, Pointcut, and Joinpoint in Aop?
* What Is Weaving?
- What are cross cutting concerns?
- How do you implement cross cutting concerns in a web application?
- If you would want to log every request to a web application, what are the options you can think of?
- If you would want to track performance of every request, what options can you think of?
- What is an Aspect and Pointcut in AOP?
- What are the different types of AOP advices?
- What is weaving?
- Compare Spring AOP vs AspectJ?
 
#### Spring 5
Answered in [Spring Reactive interview questions](docs/spring.md#spring-reactive-interview-questions).
* What Is Reactive Programming?
* What Is Spring Webflux?
* What Are the Mono and Flux Types?
* What Is the Use of Webclient and Webtestclient?
* What Are the Disadvantages of Using Reactive Streams?
* Is Spring 5 Compatible with Older Versions of Java?
* How Ow Spring 5 Integrates with Jdk 9 Modularity?
* Can We Use Both Web Mvc and Webflux in the Same Application?
 
### Database Connectivity - JDBC, Spring JDBC & JPA, Hibernate
- What is Spring JDBC? How is different from JDBC?
- What is a JdbcTemplate?
- What is a RowMapper?
- What is JPA?
- What is Hibernate?
- How do you define an entity in JPA?
- What is an Entity Manager?
- What is a Persistence Context?
- How do you map relationships in JPA?
- What are the different types of relationships in JPA?
- How do you define One to One Mapping in JPA?
- How do you define One to Many Mapping in JPA?
- How do you define Many to Many Mapping in JPA?
- How do you define a datasource in a Spring Context?
- What is the use of persistence.xml
- How do you configure Entity Manager Factory and Transaction Manager?
- How do you define transaction management for Spring – Hibernate integration?
- What is Hibernate Framework?
- What is Java Persistence API (JPA)?
- What are the important benefits of using Hibernate Framework?
- What are the advantages of Hibernate over JDBC?
- Name some important interfaces of Hibernate framework?
- What is hibernate configuration file?
- What is hibernate mapping file?
- Name some important annotations used for Hibernate mapping?
- What is Hibernate SessionFactory and how to configure it?
- Hibernate SessionFactory is thread safe?
- What is Hibernate Session and how to get it?
- Hibernate Session is thread safe?
- What is difference between openSession and getCurrentSession?
- What is difference between Hibernate Session get() and load() method?
- What is hibernate caching? Explain Hibernate first level cache?
- How to configure Hibernate Second Level Cache using EHCache?
- What are different states of an entity bean?
- What is use of Hibernate Session merge() call?
- What is difference between Hibernate save(), saveOrUpdate() and persist() methods?
- What will happen if we don’t have no-args constructor in Entity bean?
- What is difference between sorted collection and ordered collection, which one is better?
- What are the collection types in Hibernate?
- How to implement Joins in Hibernate?
- Why we should not make Entity Class final?
- What is HQL and what are it’s benefits?
- What is Query Cache in Hibernate?
- Can we execute native sql query in hibernate?
- What is the benefit of native sql query support in hibernate?
- What is Named SQL Query?
- What are the benefits of Named SQL Query?
- What is the benefit of Hibernate Criteria API?
- How to log hibernate generated sql queries in log files?
- What is Hibernate Proxy and how it helps in lazy loading?
- How to implement relationships in hibernate?
- How transaction management works in Hibernate?
- What is cascading and what are different types of cascading?
- How to integrate log4j logging in hibernate application?
- How to use application server JNDI DataSource with Hibernate framework?
- How to integrate Hibernate and Spring frameworks?
- What is HibernateTemplate class?
- How to integrate Hibernate with Servlet or Struts2 web applications?
- Which design patterns are used in Hibernate framework?
- What are best practices to follow with Hibernate framework?
- What is Hibernate Validator Framework?
- What is Spring JDBC? How is different from JDBC?
- What is a JdbcTemplate?
- What is a RowMapper?
- What is JPA?
- What is Hibernate?
- How do you define an entity in JPA?
- What is an Entity Manager?
- What is a Persistence Context?
- How do you map relationships in JPA?
- What are the different types of relationships in JPA?
- How do you define One to One Mapping in JPA?
- How do you define One to Many Mapping in JPA?
- How do you define Many to Many Mapping in JPA?
- How do you define a datasource in a Spring Context?
- What is the use of persistence.xml
- How do you configure Entity Manager Factory and Transaction Manager?
- How do you define transaction management for Spring – Hibernate integration?

https://www.journaldev.com/3633/hibernate-interview-questions-and-answers

### Unit Testing
- How does Spring Framework Make Unit Testing Easy?
- What is Mockito?
- What is your favorite mocking framework?
- How do you do mock data with Mockito?
- What are the different mocking annotations that you worked with?
- What is MockMvc?
- What is @WebMvcTest?
- What is @MockBean?
- How do you write a unit test with MockMVC?
- What is JSONAssert?
- How do you write an integration test with Spring Boot?
- What is @SpringBootTest?
- What is @LocalServerPort?
- What is TestRestTemplate?

## Web Services

### SOAP Web Services

- What is a Web Service?
- What is SOAP Web Service?
- What is SOAP?
- Waht is a SOAP Envelope?
- What is SOAP Header and SOAP Body?
- Can you give an example of SOAP Request and SOAP Response?
- What is a SOAP Header? What kind of information is sent in a SOAP Header?
- Can you give an example of a SOAP Header with Authentication information?
- What is WSDL (Web Service Definition Language)? 
- What are the different parts of a WSDL?
- What is Contract First Approach?
- What is an XSD?
- Can you give an example of an XSD?
- What is JAXB?
- How do you configure a JAXB Plugin?
- What is an Endpoint?
- Can you show an example endpoint written with Spring Web Services?
- What is a MessageDispatcherServlet?
- How do you configure a MessageDispatcherServlet?
- How do you generate a WSDL using Spring Web Services?
- How do you implement error handling for SOAP Web Services?
- What is a SOAP Fault?

### RESTful Web Services

- What is REST?
- What are the key concepts in designing RESTful API?
- What are the Best Practices of RESTful Services?
- Can you show the code for an example Get Resource method with Spring REST?
- What happens when we return a bean from a Request Mapping Method?
- What is GetMapping and what are the related methods available in Spring MVC?
- Can you show the code for an example Post Resource method with Spring REST?
- What is the appropriate HTTP Response Status for successful execution of a Resource Creation?
- Why do we use ResponseEntity in a RESTful Service?
- What is HATEOAS? 
- Can you give an Example Response for HATEOAS?
- How do we implement it using Spring?
- How do you document RESTful web services?
- Can you give a brief idea about Swagger Documentation?
- How do you automate generation of Swagger Documentation from RESTful Web Services?
- How do you add custom information to Swagger Documentation generated from RESTful Web Services?
- What is Swagger-UI?
- What is "Representation" of a Resource?
- What is Content Negotiation? 
- Which HTTP Header is used for Content Negotiation?
- How do we implement it using Spring Boot?
- How do you add XML support to your RESTful Services built with Spring Boot?
- How do you implement Exception Handling for RESTFul Web Services?
- What are the best practices related to Exception Handling with respect to RESTful Web Services?
- What are the different error status that you would return in RESTful Web Services?
- How would you implement them using Spring Boot?
- What HTTP Response Status do you return for validation errors?
- How do you handle Validation Errors with RESTful Web Services?
- Why do we need Versioning for  RESTful Web Services?
- What are the versioning options that are available?
- How do you implement Versioning for RESTful Web Services?

https://github.com/in28minutes/in28minutes-initiatives/blob/master/The-in28Minutes-CourseGuides/spring-interview-questions.md

## Databases

### SQL, transactions and locking
Answers: [docs/databases.md](docs/databases.md)
- [SQL joins and self join](docs/databases.md#sql-joins-and-self-join) (with sample tables, second highest salary, find duplicates)
- [Transactions and isolation levels](docs/databases.md#transactions-and-isolation-levels) (ACID, dirty / non-repeatable / phantom reads, MVCC)
- [Optimistic vs pessimistic locking](docs/databases.md#optimistic-vs-pessimistic-locking) (the "last seat" story, `@Version`, `SELECT ... FOR UPDATE`, deadlocks)
- Also see: [SQL vs NoSQL](docs/system-design.md#sql-vs-nosql), [Database indexes](docs/system-design.md#database-indexes), [Replication](docs/system-design.md#database-replication-read-replicas), [Sharding](docs/system-design.md#partitioning-and-sharding)

### MongoDB
* Does Mongodb Support Foreign Key Constraints?   	
* Which are the most important features of MongoDB?   	
* How many indexes does MongoDB create by default for a new collection?   	
* Explain what is MongoDB?   	
* What is “Namespace” in MongoDB?   	
* Why does Profiler use in MongoDB?   	
* If you remove an object attribute, is it deleted from the database?   	
* Does MongoDB need a lot space of Random Access Memory (RAM)?   	
* What is a replica set?   	
*  What Is Replication In MongoDB?   	
*  Compare SQL databases and MongoDB at a high level.   	
*  What is BSON in MongoDB?   	
*  How is data stored in MongoDB?   	
*  Mention the command to insert a document in a database called school and collection called persons.   	
*  What are Indexes in MongoDB?   	
*  Can you create an index on an array field in MongoDB? If yes, what happens in this case?   	
*  When should we embed one document within another in MongoDB?   	
*  What do you understand by NoSQL databases? Explain.   	
*  What is the difference between MongoDB and MySQL?   	
*  What is the difference b/w MongoDB and CouchDB?   	
*  Explain the structure of ObjectID in MongoDB   	
*  What is sharding?   	
*  What are NoSQL databases? What are the different types of NoSQL databases?   	
*  How is MongoDB better than other SQL databases?   	
*  What does MongoDB not being ACID compliant really mean?   	
*  How can you achieve primary key - foreign key relationships in MongoDB?   	
*  Does MongoDB pushes the writes to disk immediately or lazily?   	
*  If you remove a document from database, does MongoDB remove it from disk?   	
*  What is a covered query in MongoDB?   	
*  How can you achieve transaction and locking in MongoDB?   	
*  What is Aggregation in MongoDB?   	
*  What is Sharding in MongoDB? Explain.   	
*  Why are MongoDB data files large in size?   	
*  Why MongoDB is not preferred over a 32-bit system?   	
*  Mention the command to check whether you are on the master server or not.   	
*  Can one MongoDB operation lock more than one databases? If yes, how?   	
*  What is oplog?   	
*  Is there an “upsert” option in the mongodb insert command?   	
*  How to query MongoDB with “like”?   	
*  Find objects between two dates MongoDB   	
*  How can I combine data from multiple collections into one collection?   	
*  When to use MongoDB or other document oriented database systems?   	
*  How do I perform the SQL JOIN equivalent in MongoDB?   	
*  How to query MongoDB with %like%?   	
*  What is use of capped collection in MongoDB?   	
*  Does MongoDB support ACID transaction management and locking functionalities?   	
*  Should I normalize my data before storing it in MongoDB?    
**Senior**
*  How replication works in MongoDB?   	
*  What are alternatives to MongoDB?   	
*  Where can I run MongoDB?   	
*  How does MongoDB ensure high availability?   	
*  Is MongoDB schema-less?   	
*  Why is a covered query important?   	
*  Does MongoDB provide a facility to do text searches? How?   	
*  What happens if an index does not fit into RAM?   	
*  Mention the command to list all the indexes on a particular collection.   	
*  At what interval does MongoDB write updates to the disk?   	
*  What are Primary and Secondary Replica sets?   	
*  By default, MongoDB writes and reads data from both primary and secondary replica sets. True or False.   	
*  How does Journaling work in MongoDB?   	
*  How does MongoDB provide concurrency?   
*  How can you isolate your cursors from intervening with the write operations?   	
*  Update MongoDB field using value of another field   	
*  How to remove a field completely from a MongoDB document?   	
*  When to Redis or MongoDB?   	
*  MongoDB relationships. What to use - embed or reference?   	
*  How to get the last N records from find?   	
*  How to find MongoDB records where array field is not empty?   	
*  How to check if a field contains a substring?   	   
  **Expert**
*  What's the advantage of the backup features in Ops Manager versus traditional backup strategies?   	
*  What is a Storage Engine in MongoDB   	
*  Which are the two storage engines used by MongoDB?   	
*  What is splitting in mongodb?   	
*  How to condense large volumes of data in Mongo?   	
*  What are three primary concerns when choosing a data management system?   	
*  How to find document with array that contains a specific value?   	
*  Is it possible to update MongoDB field using value of another field?   	
*  Explain what is horizontal scalability?   	
*  What are the differences between MongoDB and MySQL?  
  
https://www.fullstack.cafe/   
http://www.globalguideline.com/interview_questions/Questions.php?sc=MongoDB

### MySQL
* Define a temp table    	
* What is a view?    	
* What is PRIMARY KEY?    	
* What is the difference between WHERE clause and HAVING clause?    	
* What’s the difference between a local temp table and a global temp table?    	
* What is FOREIGN KEY?    	
* What is Normalization?    	
* What is DEFAULT?    	
* What is blocking?    	
*  How can a column with a default value be added to an existing table?    	
*  What is the difference between inner and outer join?    	
*  What is the difference between JOIN and UNION?    	
*  What is the difference between UNION and UNION ALL?    	
*  How to select first 5 records from a table?    	
*  Describe the difference between truncate and delete    	
*  What are the difference between clustered and a non-clustered index?    	
*  What are the advantages of using Stored Procedures?    	
*  What is Denormalization?    	
*  Define ACID Properties    	
*  What is a cursor how does it work?    	
*  What is collation?    	
*  What are row constructors?    	
*  Is table size reduced, when you delete data from the table?    	
*  What is the difference between “INNER JOIN” and “OUTER JOIN”?    	
*  How do I UPDATE from a SELECT in SQL Server?    	
*  How a database index can help performance?    	
*  How does a hash table index work?    	
*  Finding duplicate values in a SQL table    	
*  How do I perform an IF…THEN in an SQL SELECT?    	
*  Discuss INNER JOIN ON vs WHERE clause    	
*  Explain Function vs. Stored Procedure in SQL Server    	
*  What is the difference among UNION, MINUS and INTERSECT?    	
*  How can we transpose a table using SQL (changing rows to column or vice-versa) ?    	
*  How to generate row number in SQL Without ROWNUM    	
*  What's the difference between a primary key and a unique key?    	
*  Name types of Triggers    	
*  What is a linked server?    	
*  Explain a usage difference between user defined functions and stored procedures    	
*  How does truncate and delete operation effect Identity?    	
*  Explain the difference between exclusive lock and update lock    	
*  What are DMV's and DMF's?    	
*  What are statistics?    	
*  How deadlock is resolved?    	
*  What is a filegroup?    	
*  What would happen without an index?    	
*  How does B-trees index work?    	
*  What is the cost of having a database index?    	
*  Delete duplicate values in a SQL table    	
*  How can I do an UPDATE statement with JOIN in SQL?    	
*  How does primary key constraint and unique key constraint effect null?    	
*  What is Optimistic Locking and Pessimistic locking?    	
*  How does database indexing work?    	
*  Name some disadvantages of a hash index    	
*  What are some other types of indexes?    	
*  Insert results of a stored procedure into a temporary table    	
*  Select first row in each GROUP BY group (greatest-n-per-group problem)? 

## Microservices

Answers: [docs/microservices.md](docs/microservices.md)

### Microservices patterns

| Group | Patterns |
|---|---|
| Breaking the system into services | [Monolith vs microservices](docs/microservices.md#monolith-vs-microservices) · Split by business area (DDD) · Strangler fig (replace old system piece by piece) · Anti-corruption layer |
| Data | Database per service · [Saga](docs/microservices.md#saga-pattern) · [Transactional outbox](docs/microservices.md#transactional-outbox-pattern) · CQRS · Event sourcing · CDC (Debezium) · API composition |
| Talking between services | [Sync vs async](docs/microservices.md#sync-vs-async-communication) · [Idempotency](docs/microservices.md#idempotency) · Pub/sub · Dead-letter queue |
| Front door | [API gateway and BFF](docs/microservices.md#api-gateway-and-bff) · Service discovery · Service mesh / sidecar |
| Staying alive when things fail | [Timeouts](docs/microservices.md#timeouts) · [Retry with backoff and jitter](docs/microservices.md#retry-with-exponential-backoff-and-jitter) · [Circuit breaker](docs/microservices.md#circuit-breaker) · [Bulkhead](docs/microservices.md#bulkhead) · Rate limiting · Fallback · Load shedding |
| Seeing what is happening | Logs · Metrics · Distributed tracing (OpenTelemetry) · Health checks · Correlation IDs |
| Releasing safely | Blue-green · Canary · Rolling · Feature flags · 12-factor app |
| Security | OAuth2 / OIDC · JWT · mTLS between services · Secrets management |
| Testing | Contract testing (Pact, Spring Cloud Contract) · Testcontainers |
| Mistakes to avoid | Distributed monolith · Shared database · Chatty services · Too-small services |

Linked items have full answers. The rest are added following the [2-month plan](#2-month-plan).

**Note on the old Netflix stack:** Zuul, Hystrix and Ribbon are retired. Today we use **Spring Cloud Gateway**, **Resilience4j** and **Spring Cloud LoadBalancer**. See [API gateway and BFF](docs/microservices.md#api-gateway-and-bff).

### Microservices questions

* Why Would You Opt For Microservices Architecture? 
* List down the advantages of Microservices Architecture 
* Define Microservice Architecture 
* What Are The Fundamentals Of Microservices Design? 
* What are the features of Microservices? 
* How does Microservice Architecture work? 
* What is the difference between Monolithic, SOA and Microservices Architecture? 
* What are the challenges you face while working Microservice Architectures? 
* How can we perform Cross-Functional testing? 
*  What are main differences between Microservices and Monolithic Architecture? 
*  What are the standard patterns of orchestrating microservices? 
*  What are smart endpoints and dumb pipes? 
*  What is the difference between a proxy server and a reverse proxy server? 
*  Whether do you find GraphQL the right fit for designing microservice architecture? 
*  What is Idempotence? 
*  What are the pros and cons of Microservice Architecture? 
*  What do you understand by Distributed Transaction? 
*  What do you understand by Contract Testing? 
*  What is the role of an architect in Microservices architecture? 
*  Can we create State Machines out of Microservices? 
*  Explain what is the API Gateway pattern 
*  Mention some benefits and drawbacks of an API Gateway 
*  What is Materialized View pattern and when will you use it? 
*  How should the various services share a common DB Schema and code? 
*  What Did The Law Stated By Melvin Conway Implied? 
*  Name the main differences between SOA and Microservices? 
*  What is the difference between cohesion and coupling? 
*  What is a Consumer-Driven Contract (CDC)? 
*  What are Reactive Extensions in Microservices? 
*  What is the most accepted transaction strategy for microservices 
*  What does it mean that shifting to microservices creates a run-time problem? 
*  Why would one use sagas over 2PC and vice versa? 
*  Provide an example of "smart pipes" and "dumb endpoint" 
*  How would you implement SSO for Microservice Architecture? 
*  Microservices Design Pattern (Saga Pattern)   
[Good Reads](https://microservices.io/patterns/microservices.html)   

### Apache Kafka

Answers: [docs/kafka.md](docs/kafka.md)
- [Kafka basics in simple words](docs/kafka.md#kafka-basics-in-simple-words) (topic, partition, offset, broker, KRaft)
- [Partitions and consumer groups](docs/kafka.md#kafka-partitions-and-consumer-groups) (how many partitions, rebalancing, consumer crash)
- [Message ordering](docs/kafka.md#kafka-message-ordering)
- [Delivery guarantees](docs/kafka.md#kafka-delivery-guarantees) (at-most-once, at-least-once, exactly-once)
- [Handling duplicate events](docs/kafka.md#handling-duplicate-events) (idempotent consumer, retry topics, DLQ)

**More questions to practice:**

**Topics**  
* Architecture
* Workflow
* Cluster
* Producer
* Consumer
* Broker
* Queuing
* Client
* Connect
* Docker
* Monitoring Tools
* Role of Zookeeper
* Streams
* Spark Streaming
* Performance Tuning
* Load Testing
* Storm Kafka Integration
* Security  
[Tutorials](https://data-flair.training/blogs/apache-kafka-tutorial/)   

**Interview Questions**  

- [Q.1 What is Apache Kafka?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q1-what-is-apache-kafka-)
- [Q.2 Enlist the several components in Kafka.](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q2-enlist-the-several-components-in-kafka)
- [Q.3 Explain the role of the offset.](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q3-explain-the-role-of-the-offset)
- [Q.4 What is a Consumer Group?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q4-what-is-a-consumer-group-)
- [Q.5 What is the role of the ZooKeeper in Kafka?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q5-what-is-the-role-of-the-zookeeper-in-kafka-)
- [Q.6 Is it possible to use Kafka without ZooKeeper?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q6-is-it-possible-to-use-kafka-without-zookeeper-)
- [Q.7 What do you know about Partition in Kafka?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q7-what-do-you-know-about-partition-in-kafka-)
- [Q.8 Why is Kafka technology significant to use?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q8-why-is-kafka-technology-significant-to-use-)
- [Q.9 What are main APIs of Kafka?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q9-what-are-main-apis-of-kafka-)
- [Q.10 What are consumers or users?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q10-what-are-consumers-or-users-)
- [Q.11 Explain the concept of Leader and Follower.](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q11-explain-the-concept-of-leader-and-follower)
- [Q.12 What ensures load balancing of the server in Kafka?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q12-what-ensures-load-balancing-of-the-server-in-kafka-)
- [Q.13 What roles do Replicas and the ISR play?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q13-what-roles-do-replicas-and-the-isr-play-)
- [Q.14 Why are Replications critical in Kafka?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q14-why-are-replications-critical-in-kafka-)
- [Q.15 If a Replica stays out of the ISR for a long time, what does it signify?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q15-if-a-replica-stays-out-of-the-isr-for-a-long-time--what-does-it-signify-)
- [Q.16 What is the process for starting a Kafka server?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q16-what-is-the-process-for-starting-a-kafka-server-)
- [Q.17 In the Producer, when does QueueFullException occur?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q17-in-the-producer--when-does-queuefullexception-occur-)
- [Q.18 Explain the role of the Kafka Producer API.](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q18-explain-the-role-of-the-kafka-producer-api)
- [Q.19 What is the main difference between Kafka and Flume?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q19-what-is-the-main-difference-between-kafka-and-flume-)
- [Q.20 Is Apache Kafka is a distributed streaming platform? if yes, what you can do with it?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q20-is-apache-kafka-is-a-distributed-streaming-platform--if-yes--what-you-can-do-with-it-)
- [Q. 21 What can you do with Kafka?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q-21-what-can-you-do-with-kafka-)
- [Q.22 What is the purpose of retention period in Kafka cluster?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q22-what-is-the-purpose-of-retention-period-in-kafka-cluster-)
- [Q.23 Explain the maximum size of a message that can be received by the Kafka?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q23-explain-the-maximum-size-of-a-message-that-can-be-received-by-the-kafka-)
- [Q.24 What are the types of traditional method of message transfer?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q24-what-are-the-types-of-traditional-method-of-message-transfer-)
- [Q.25 What does ISR stand in Kafka environment?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q25-what-does-isr-stand-in-kafka-environment-)
- [Q.26 What is Geo-Replication in Kafka?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q26-what-is-geo-replication-in-kafka-)
- [Q.27 Explain Multi-tenancy?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q27-explain-multi-tenancy-)
- [Q.28 What is the role of Consumer API?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q28-what-is-the-role-of-consumer-api-)
- [Q.29 Explain the role of Streams API?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q29-explain-the-role-of-streams-api-)
- [Q.30 What is the role of Connector API?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q30-what-is-the-role-of-connector-api-)
- [Q.31 Explain Producer?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q31-explain-producer-)
- [Q.32 Compare: RabbitMQ vs Apache Kafka](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q32-compare--rabbitmq-vs-apache-kafka)
- [Q.33 Compare: Traditional queuing systems vs Apache Kafka](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q33-compare--traditional-queuing-systems-vs-apache-kafka)
- [Q.34 Why Should we use Apache Kafka Cluster?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q34-why-should-we-use-apache-kafka-cluster-)
- [Q.35 Explain the term “Log Anatomy”.](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q35-explain-the-term--log-anatomy-)
- [Q.36 What is Data Log in Kafka?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q36-what-is-data-log-in-kafka-)
- [Q.37 Explain how to Tune Kafka for Optimal Performance.](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q37-explain-how-to-tune-kafka-for-optimal-performance)
- [Q.38 State Disadvantages of Apache Kafka.](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q38-state-disadvantages-of-apache-kafka)
- [Q.39 Enlist all Apache Kafka Operations.](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q39-enlist-all-apache-kafka-operations)
- [Q.40 Explain Apache Kafka Use Cases?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q40-explain-apache-kafka-use-cases-)
- [Q.41 Some of the most notable applications of Kafka.](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q41-some-of-the-most-notable-applications-of-kafka)
- [Q.42 Features of Kafka Stream.](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q42-features-of-kafka-stream)
- [Q.43 What do you mean by Stream Processing in Kafka?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q43-what-do-you-mean-by-stream-processing-in-kafka-)
- [Q.44 What are the types of System tools?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q44-what-are-the-types-of-system-tools-)
- [Q.45 What are Replication Tool and its types?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q45-what-are-replication-tool-and-its-types-)
- [Q.46 What is Importance of Java in Apache Kafka?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q46-what-is-importance-of-java-in-apache-kafka-)
- [Q.47 State one best feature of Kafka.](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q47-state-one-best-feature-of-kafka)
- [Q.48 Explain the term “Topic Replication Factor”.](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q48-explain-the-term--topic-replication-factor-)
- [Q.49 Explain some Kafka Streams real-time Use Cases.](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q49-explain-some-kafka-streams-real-time-use-cases)
- [Q.50 What are Guarantees provided by Kafka?](https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038#q50-what-are-guarantees-provided-by-kafka-)
  
https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038
  
<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Questions generated with markdown-toc</a></i></small>

[Reference Interview Questions](https://data-flair.training/blogs/kafka-interview-questions/)

### Docker

**Tutorials**
* [Getting Started](https://docs.docker.com/get-started/)
* [Orientation](https://docs.docker.com/get-started/part1/)
* [Containers](https://docs.docker.com/get-started/part2/)
* [Services](https://docs.docker.com/get-started/part3/)
* [Swarms](https://docs.docker.com/get-started/part4/)
* [Stack](https://docs.docker.com/get-started/part5/)

[Interview Questions and Answers](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593)

- [What is Hypervisor?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-hypervisor)
- [What is virtualization?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-virtualization)
- [What is containerization?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-containerization)
- [Difference between virtualization and containerization](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#difference-between-virtualization-and-containerization)
- [What is Docker?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-docker)
- [What is a Docker Container?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-a-docker-container)
- [What are Docker Images?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-are-docker-images)
- [What is Docker Hub?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-docker-hub)
- [Explain Docker Architecture?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#explain-docker-architecture)
- [What is a Dockerfile?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-a-dockerfile)
- [Tell us something about Docker Compose.](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#tell-us-something-about-docker-compose)
- [What is Docker Swarm?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-docker-swarm)
- [What is a Docker Namespace?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-a-docker-namespace)
- [What is the lifecycle of a Docker Container?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-the-lifecycle-of-a-docker-container)
- [What is Docker Machine?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-docker-machine)
- [Tell some important Docker commands?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#tell-some-important-docker-commands)
- [Suppose you have 3 containers running and out of these, you wish to access one of them. How do you access a running container?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#suppose-you-have-3-containers-running-and-out-of-these--you-wish-to-access-one-of-them-how-do-you-access-a-running-container)
- [Will you lose your data, when a docker container exits?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#will-you-lose-your-data--when-a-docker-container-exits)
- [Where all do you think Docker is being used?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#where-all-do-you-think-docker-is-being-used)
- [How is Docker different from other containerization methods?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#how-is-docker-different-from-other-containerization-methods)
- [Can I use JSON instead of YAML for my compose file in Docker?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#can-i-use-json-instead-of-yaml-for-my-compose-file-in-docker)
- [How have you used Docker in your previous position?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#how-have-you-used-docker-in-your-previous-position)
- [How far do Docker containers scale? Are there any requirements for the same?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#how-far-do-docker-containers-scale--are-there-any-requirements-for-the-same)
- [What platforms does docker run on?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-platforms-does-docker-run-on)
- [Is there a way to identify the status of a Docker container?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#is-there-a-way-to-identify-the-status-of-a-docker-container)
- [Can you remove a paused container from Docker?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#can-you-remove-a-paused-container-from-docker)
- [Can a container restart by itself?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#can-a-container-restart-by-itself)
- [Is it better to directly remove the container using the rm command or stop the container followed by remove container?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#is-it-better-to-directly-remove-the-container-using-the-rm-command-or-stop-the-container-followed-by-remove-container)
- [Will cloud overtake the use of Containerization?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#will-cloud-overtake-the-use-of-containerization)
- [How many containers can run per host?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#how-many-containers-can-run-per-host)
- [Is it a good practice to run stateful applications on Docker? or What type of applications - Stateless or Stateful are more suitable for Docker Container?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#is-it-a-good-practice-to-run-stateful-applications-on-docker--or-what-type-of-applications---stateless-or-stateful-are-more-suitable-for-docker-container)
- [Suppose you have an application that has many dependant services. Will docker compose wait for the current container to be ready to move to the running of the next service?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#suppose-you-have-an-application-that-has-many-dependant-services-will-docker-compose-wait-for-the-current-container-to-be-ready-to-move-to-the-running-of-the-next-service)
- [How will you monitor Docker in production?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#how-will-you-monitor-docker-in-production)
- [Is it a good practice to run Docker compose in production?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#is-it-a-good-practice-to-run-docker-compose-in-production)
- [What changes are expected in your docker compose file while moving it to production?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-changes-are-expected-in-your-docker-compose-file-while-moving-it-to-production)
- [Have you used Kubernetes? If you have, which one would you prefer amongst Docker and Kubernetes?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#have-you-used-kubernetes--if-you-have--which-one-would-you-prefer-amongst-docker-and-kubernetes)
- [Are you aware of load balancing across containers and hosts? How does it work?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#are-you-aware-of-load-balancing-across-containers-and-hosts--how-does-it-work)
- [What is a Docker Registry?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-a-docker-registry)
- [How to build envrionment-agnostic systems with Docker?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#how-to-build-envrionment-agnostic-systems-with-docker)
- [When would you use ‘docker kill’ or ‘docker rm -f’?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#when-would-you-use--docker-kill--or--docker-rm--f-)
- [How to link containers?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#how-to-link-containers)
- [What is the difference between the `COPY` and `ADD` commands in a Dockerfile?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-the-difference-between-the--copy--and--add--commands-in-a-dockerfile)
- [What is the difference between CMD and ENTRYPOINT in a Dockerfile?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-the-difference-between-cmd-and-entrypoint-in-a-dockerfile)
- [How do I transfer a Docker image from one machine to another one without using a repository, no matter private or public?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#how-do-i-transfer-a-docker-image-from-one-machine-to-another-one-without-using-a-repository--no-matter-private-or-public)
- [Do I lose my data when the Docker container exits?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#do-i-lose-my-data-when-the-docker-container-exits)
- [What is Build Cache in Docker?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-build-cache-in-docker)
- [What is the difference between ‘docker run’ and ‘docker create’?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-the-difference-between--docker-run--and--docker-create-)
- [What’s the difference between a repository and a registry?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-s-the-difference-between-a-repository-and-a-registry)
- [What is the default CPU limit set for a container?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-the-default-cpu-limit-set-for-a-container)
- [Can you create containers without their own PID namespace](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#can-you-create-containers-without-their-own-pid-namespace)
- [Explain basic Docker usage workflow?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#explain-basic-docker-usage-workflow)
- [What is the difference between Docker Image and Layer?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-the-difference-between-docker-image-and-layer)
- [Could you explain what is Emulation?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#could-you-explain-what-is-emulation)
- [Should I use Vagrant or Docker for creating an isolated environment?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#should-i-use-vagrant-or-docker-for-creating-an-isolated-environment)
- [What is the difference between “expose” and “publish” in Docker?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-the-difference-between--expose--and--publish--in-docker)
- [Docker Compose vs. Dockerfile - which is better?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#docker-compose-vs-dockerfile---which-is-better)
- [What exactly do you mean by “Dockerized node”? Can this node be on-premises or in the cloud?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-exactly-do-you-mean-by--dockerized-node---can-this-node-be-on-premises-or-in-the-cloud)
- [How can we control the startup order of services in Docker compose?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#how-can-we-control-the-startup-order-of-services-in-docker-compose)
- [How will you monitor Docker in production?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#how-will-you-monitor-docker-in-production--1)
- [What happens if you add more than one CMD instruction to a Dockerfile?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-happens-if-you-add-more-than-one-cmd-instruction-to-a-dockerfile)
- [When you limit the memory for a container, does it reserve (guarantee) the memory?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#when-you-limit-the-memory-for-a-container-does-it-reserve-guarantee-the-memory)
- [What is an orphant volume and how to remove it?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-an-orphant-volume-and-how-to-remove-it)
- [How virtualization works at low level?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#how-virtualization-works-at-low-level)
- [What is Paravirtualization?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#what-is-paravirtualization)
- [How is Docker different from a virtual machine?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#how-is-docker-different-from-a-virtual-machine)
- [Is it possible to generate a Dockerfile from an image?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#is-it-possible-to-generate-a-dockerfile-from-an-image)
- [Can you explain dockerfile ONBUILD instruction?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#can-you-explain-dockerfile-onbuild-instruction)
- [Why did Docker jump from version 1.13 to 17.03?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#why-did-docker-jump-from-version-113-to-1703)
- [How does Docker run containers in non-Linux systems?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#how-does-docker-run-containers-in-non-linux-systems)
- [How containers works at low level?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#how-containers-works-at-low-level)
- [Name some limitations of containers vs VM](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#name-some-limitations-of-containers-vs-vm)
- [How to use Docker with multiple environments?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#how-to-use-docker-with-multiple-environments)
- [Why Docker compose does not wait for a container to be ready before moving on to start next service in dependency order?](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593#why-docker-compose-does-not-wait-for-a-container-to-be-ready-before-moving-on-to-start-next-service-in-dependency-order)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Docker questions link generated with markdown-toc</a></i></small>

References:   
[https://www.edureka.co/blog/interview-questions/docker-interview-questions/](https://www.edureka.co/blog/interview-questions/docker-interview-questions/)    
[https://www.educba.com/docker-interview-questions/](https://www.educba.com/docker-interview-questions/)    
[https://www.fullstack.cafe/](https://www.fullstack.cafe/)


### Kubernetes
**[Tutorial/Concept](https://kubernetes.io/docs/concepts/)**
- Architecture
- Containers - Images
- Jobs
- Labels & Selectors
- Namespace
- [Nodes](https://kubernetes.io/docs/concepts/architecture/nodes/)
- Service
- Workloads - Pods
- Replication Controller
- Ingress
- Replica Sets
- Deployments
- Volumes Snapshots
- Configurations
- Secrets
- Network Policy
- Secret
- Scheduling
- Cluster Administration
- Extension  

**Interview Questions**   
https://www.edureka.co/blog/interview-questions/kubernetes-interview-questions/  
https://www.algrim.co/posts/145-kubernetes-interview-questions#q-1

### Redis

**Topics**

* Configuration
* Data types
* Key-Value Pair Commands 
* SCAN & MATCH
* Client & Config Commands
* Keys
* Strings
* Hashes
* Lists
* Sets
* Sorted Sets
* HyperLogLog
* Publish Subscribe
* Transactions
* Scripting
* Connections
* Server
* Backup
* Security
* Pipelining
* Partitioning
* Data Persistence
	* RDB & Snapshotting
	* AOF - Append Only File
	* RDB & AOF in Action   
* Redis Cluster   
   
**Interview Questions**
* What Is Redis?
* What Is Main Feature Of Redis?
* What Is Limitations Of Redis?
* What Is Advantages Of Using Redis?
* List The Data Structures Supported By Redis?
* List Out The Operation Keys Of Redis?
* What Is Redis-cli?
* Explain Repl?
* What The Basic Features Are Of Redis Which Makes It Awesome Compared To Memcache?
* We All Know That Reds Is Fast, But Is It Also Durable?
* What Are The Main Features Of Redis?
* What Are The Things You Must Have To Take Care While Using Redis?
* What Is The Difference Between Overriding A Value By Using Set Vs Append?
* What Do You Mean By Data Modeling In Redis?
* Why Redis Is Different As Compared To Other Key-value Stores?
* How Do I Move A Redis Database From One Server To Another?
* How to start stop restart Redis?
* How To Get All Keys From Redis?
* How To Get Array Data From Redis?
* How To Set Multiple Values (array) In Redis?
* How To Get Set Value From Redis?
* How To Check Redis Is Running?
* How To Remove All Database?
* How To Delete Current Database?
* What Do You Mean By "redis Is Binary Safe"?
* How Does Redis Differ From Mongodb? Is There A Use Case When For Redis If Using Mongodb?
* How to persist or take snapshot of Redis data?
* Explain Redis use cases
* How we will use redis to oauth token and authentication
* Explain some important redis commands
* Explain sharding and partitioning in redis
* Can we use Redis for pub sub messaging
* How to secure redis
* Explain Pipelining in Redis
* Can we add or write scripts in redis
* How we maintain transactions in Redis
* Can we use redis as primary database
* Can we save blob data in redis
* What is maximun allowed key size.    
**Expert**    
* How can we create auto expire keys and explain it?
* Explain some blocking operations on list
* How Automatic creation and removal of keys happens?
* Can we create Lexicographical scores?
* Explain HyperLogLogs
* Can we iterate the key space of a large collection incrementally?
* How can we insert huge data at once (pre-existing data)  
* Explain Some Tricks for ram/memory optimization
* How can we use Redis as LRU cache
* How can we use Redis in distributed systems
* How can we create secondary indexes with redis  

https://redis.io/documentation   
https://redis.io/topics/data-types-intro  


##### Difference between Apache Kafka and Redis
* Redis pub-sub is mostly like a fire and forget system where all the messages you produced will be delivered to all the consumers at once and the data is kept no where. You have limitation in memory with respect to redis. Also number of producers and consumers can affect the performance in Redis.
* Kafka on other hand is a high throughput, distributed log that can be used like a queue. Here any number of users can produce and consumers can consume at any time they want. It also provides persistence for the messages sent through the queue.
* One main difference is that Redis Pub/Sub is push based while Kafka Pub/Sub is pull based. That means messages published to Redis will be automatically delivered to subscribers instantly, while in Kafka Data/messages are never pushed out to consumers, the consumer will ask for messages when the consumer is ready to handle the message.    
**Use Redis**
* If you want fire and forget kind of system, where all the messages that you produce are delivered instantly to consumers.
* If speed is most concerned.
* If you can live up with data loss.
* If you don't want your system to hold the message that has been sent.
* Amount of data that is gonna be dealt is not huge.    
**Use kafka**
* If you want reliability.
* If you want your system to have a copy of messages that has been sent even after consumption.
* If you can't live up with data loss.
* If Speed is not a big concern.
* If data size is huge

https://stackoverflow.com/a/37993809/4428927  

### Akka
Akka is a open-source library or a toolkit written in Scala to create concurrent, distributed and fault-tolerant application.   
     
**Tutorials**    
* Akka Actor
* Akka ActorSystem
* Akka Props
* Akka Child Actor
* Akka Actor Lifecycle
* Actor Send, Reply, Forward Messages
* Actors
	* Location transparency
	* Supervision and monitoring
	* Actor paths and addresses
	* Message delivery reliability 
* Akka Dispatchers
* Akka Routers   
* Akka HTTP    
* Akka FSM
* Akka TestKit
**Experts**
* Fault tolerance
* Routing
* Dispatching
* Persistence
* Streams
* Clusters
	* Pub Sub
	* Sharding
	* Distributed Data
	* Cluster aware routers
* Network
* Discovery
* Co-ordination  

https://doc.akka.io/docs/akka/current/general/index.html

## Questions to Ask after interview
Please always do ask atleast one question when interview ask you "If you have any questions for us?"  

* What is the most important/valuable thing you have learnt from working here? 
* How do your clients and customers define success? 
* What would you change around here if you could? 
* How do you evaluate new technologies? Who makes the final decisions? 
* How do you know what to work on each day? 
* Do you tend to roll your own solutions more often or rely on third party tools? What's the rationale in a specific case? 
* How do you measure individual performance? 
* What does a typical day look like for you? 
* What do you think the company can improve at? 
*  What is your policy on working from home/remotely? 
*  What are the engineering challenges that the company/team is facing? 
*  What is the most fulfilling/exciting/technically complex project that you've worked on here so far? 
*  What is your stack? What is the rationale for/story behind this specific stack? 
*  What do you measure? What are your most important product metrics? 
*  What does the company do to nurture and train its employees?
*  If you hire person, what do you have for him to study product you're working on and processes in general? Do you have specifications, requirements, documentation? 
*  Tell me about the main products of your company. 
*  How do you train/ramp up engineers who are new to the team? 
*  What are some weaknesses of the organization?   	 	
*  Why did you choose to come to this company?   	 	
*  What is the most frustrating part about working here?   	 	
*  How does the engineering team balance resources between feature requests and engineering maintenance?   	 	
*  What makes your product competitive?   	 	
*  Is the team growing, and what sort of opportunities will there be in the next year/3 years?   	 	
*  What is your team's biggest challenge right now?   	 	
*  What is the current team composition like?   	 	
*  Why have the last few people left?   	 	
*  How are you funded?   	 	
*  What is unique about working at this company that you have not experienced elsewhere?   	 	
*  When was the last time you interacted with a founder? What was it regarding? Generally how involved are the founders in the day-to-day?   	 	
*  What has been the worst technical blunder that has happened in the recent past? How did you guys deal with it? What changes were implemented afterwards to make sure it didn't happen again?   	 	
*  What is the most costly technical decision made early on that the company is living with now?   	 	
*  How much time do you spend on new project development versus maintenance?   	 	
*  What are your highest priorities right now? For example, new features, new products, solidifying existing code, reducing operations overhead?   	 	
*  Does the company culture encourage entrepreneurship? Could you give me any specific examples?   	 	
*  What would I work on if I joined this team and who would I work most closely with?   	 	
*  Are you profitable? If no, what's your plan for becoming profitable?   	 	
*  How long does the average engineer stay at the company?   

## Open source contributions
[Awesome Repo for beginners](https://github.com/MunGell/awesome-for-beginners)

For contributing go through this article on [First Time Contributions](https://github.com/firstcontributions/first-contributions)
