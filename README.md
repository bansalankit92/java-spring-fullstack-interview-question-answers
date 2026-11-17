# Java, Spring, Microservices & System Design Interview Guide (Junior to Senior)

One place to prepare for backend and full-stack interviews: **system design (HLD and LLD), distributed systems, DSA, microservices, Java (8 to 25), OOP and design patterns, Spring Boot (2 to 4), Hibernate, SQL, Redis, MongoDB, Kafka, REST, gRPC, GraphQL, Docker, Kubernetes, cloud (AWS, GCP, Azure), React, Next.js, Node.js, testing, senior/staff leadership and AI/LLMs.**

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
  - [Node.js](#nodejs)
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
- [AI and LLMs](#ai-and-llms)
- [Production-ready apps](#production-ready-apps)
- [Questions to ask the interviewer](#questions-to-ask-the-interviewer)
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
- **Coding:** solve 2 problems (pattern of the week below). Time-box 40 minutes each. Use the [16 patterns and 47 problems](docs/dsa-coding-round.md) and its [4-week DSA plan](docs/dsa-coding-round.md#a-4-week-dsa-plan).
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
| 8 | [SQL joins](docs/databases.md#sql-joins-and-self-join), [Transactions](docs/databases.md#transactions-and-isolation-levels), [Locking](docs/databases.md#optimistic-vs-pessimistic-locking) | Do 5 of the [SQL query problems](docs/sql.md#sql-query-problems-with-answers) by hand (2nd highest salary, top N per group) | explain optimistic vs pessimistic with the "last seat" story |
| 9 | [Java concurrency story](docs/java-concurrency.md), [Virtual threads](docs/java.md#virtual-threads) | Write a thread-safe counter 3 ways | explain race condition, volatile, deadlock |
| 10 | [Java 8 to 25](docs/java.md#java-8-to-17-to-21-to-25-what-changed), [JVM memory](docs/java.md#jvm-memory-basics), [G1 vs ZGC](docs/java.md#g1-vs-zgc) | Rewrite one old Java 8 class with records, switch, sealed | list 3 changes per LTS version |
| 11 | [Spring Boot 2 to 4](docs/spring.md#spring-boot-2-to-3-to-4-what-changed), [MVC vs WebFlux](docs/spring.md#spring-mvc-vs-webflux), [Spring Core](docs/spring.md#spring-core-ioc-beans-and-annotations) (DI, [scopes](docs/spring.md#bean-scopes-singleton-prototype-and-web-scopes), [AOP proxies](docs/spring.md#how-spring-aop-works-proxies)), [@Transactional](docs/spring-ecosystem.md#transactional-deep-dive) | Explain why `@Transactional` fails on self-call | explain auto-configuration and bean lifecycle |
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
| 17 | [SQL joins](docs/databases.md#sql-joins-and-self-join), [Transactions](docs/databases.md#transactions-and-isolation-levels), [Locking](docs/databases.md#optimistic-vs-pessimistic-locking) | 10 [SQL query problems](docs/sql.md#sql-query-problems-with-answers) by hand |
| 18 | [Case studies](docs/system-design.md#case-studies): [news feed](docs/system-design/news-feed.md), [WhatsApp](docs/system-design/whatsapp.md) | Design both, 30 min each |
| 19 | [Case studies](docs/system-design.md#case-studies): [YouTube](docs/system-design/youtube-video-streaming.md), [YouTube search](docs/system-design/youtube-search-typeahead.md) | Design both, 30 min each |
| 20 | [Case studies](docs/system-design.md#case-studies): [BookMyShow](docs/system-design/bookmyshow-ticket-booking.md), [payments](docs/system-design/payment-gateway.md) / [banking](docs/system-design/bank-ledger-wallet.md) | Design both, 30 min each |
| 21 | **Mock:** [Uber](docs/system-design/uber-ride-hailing.md) or [Hotstar live](docs/system-design/hotstar-live-streaming.md) | Revise week 3 |
| 22 | [Java concurrency story](docs/java-concurrency.md) (eras 1–4) | Thread-safe counter 3 ways, deadlock example |
| 23 | [Java](#java) collections: HashMap, ConcurrentHashMap internals | Explain `put()` step by step |
| 24 | [Java 8 to 25](docs/java.md#java-8-to-17-to-21-to-25-what-changed), [Virtual threads](docs/java.md#virtual-threads), [Streams](docs/java-streams.md) | 10 [stream coding problems](docs/java-streams.md#stream-coding-problems-with-answers) |
| 25 | [JVM memory](docs/java.md#jvm-memory-basics), [G1 vs ZGC](docs/java.md#g1-vs-zgc) | Explain 3 kinds of OutOfMemoryError |
| 26 | [Spring Core](docs/spring.md#spring-core-ioc-beans-and-annotations): DI, [scopes](docs/spring.md#bean-scopes-singleton-prototype-and-web-scopes), [lifecycle](docs/spring.md#bean-lifecycle), [auto-configuration](docs/spring.md#auto-configuration-and-conditional), [AOP proxies](docs/spring.md#how-spring-aop-works-proxies), [@Transactional](docs/spring-ecosystem.md#transactional-deep-dive) | Explain self-invocation problem |
| 27 | [Spring Boot 2 to 4](docs/spring.md#spring-boot-2-to-3-to-4-what-changed), [MVC vs WebFlux](docs/spring.md#spring-mvc-vs-webflux), [security (OAuth2, JWT)](docs/spring-ecosystem.md#jwt-and-oauth2-resource-server) | Explain JWT flow with a diagram |
| 28 | **Mock:** Java + Spring deep dive (ask a friend or use AI as interviewer) | Revise week 4 |
| 29 | [Behavioral questions](#behavioral-questions), [Next.js](docs/nextjs.md) / [Node.js](docs/nodejs.md) if your role needs it | 6 STAR stories out loud |
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
| 13 | [SQL joins](docs/databases.md#sql-joins-and-self-join), [Transactions](docs/databases.md#transactions-and-isolation-levels), [Locking](docs/databases.md#optimistic-vs-pessimistic-locking) | [SQL query problems](docs/sql.md#sql-query-problems-with-answers) + old [MySQL](#mysql) questions |
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
| 32 | [Core Java deep dive](docs/java-core.md) (HashMap, generics, JVM), [JVM memory](docs/java.md#jvm-memory-basics), [G1 vs ZGC](docs/java.md#g1-vs-zgc) | Memory leak and high GC debugging story |
| 33 | [Virtual threads](docs/java.md#virtual-threads), [streams](docs/java-streams.md) | Solve 15 [stream problems](docs/java-streams.md#stream-coding-problems-with-answers) |
| 34 | [OOP, SOLID, design patterns](docs/oop-clean-code.md) | Self-test with [OOPS](#oops) and [Design Patterns](#design-patterns) questions |
| 35 | **Mock:** Java deep dive. Revise. | Fix gaps |

**Week 6: Spring and low-level design**

| Day | Topic | Commit to this guide |
|---|---|---|
| 36 | [Spring Core](docs/spring.md#spring-core-ioc-beans-and-annotations): DI, [scopes](docs/spring.md#bean-scopes-singleton-prototype-and-web-scopes), [lifecycle](docs/spring.md#bean-lifecycle), [AOP](docs/spring.md#spring-aop), [filters vs interceptors](docs/spring.md#filters-vs-interceptors-vs-aop), [how Boot works](docs/spring.md#how-spring-boot-works) | Self-test with [Spring questions](docs/spring-questions.md) |
| 37 | [@Transactional](docs/spring-ecosystem.md#transactional-deep-dive), propagation, [Hibernate and JPA](docs/hibernate-jpa.md) | Self-test with [JPA / Hibernate](#database-connectivity---jdbc-spring-jdbc--jpa-hibernate) questions |
| 38 | [Spring Boot 2 to 4](docs/spring.md#spring-boot-2-to-3-to-4-what-changed), [observability](docs/spring-ecosystem.md#observability-with-actuator-micrometer-and-opentelemetry) | Review answers |
| 39 | [Spring Security](docs/spring-ecosystem.md#spring-security), [OAuth2](docs/spring-ecosystem.md#oauth2-login-oidc-and-spring-authorization-server), [JWT](docs/spring-ecosystem.md#jwt-and-oauth2-resource-server) | Review answers |
| 40 | [MVC vs WebFlux](docs/spring.md#spring-mvc-vs-webflux), [testing](docs/spring-testing.md) (JUnit 6, Mockito, Testcontainers) | Review answers |
| 41 | [Low-level design](docs/lld-case-studies.md): parking lot, BookMyShow, elevator, Splitwise | Design 2 case studies on paper first |
| 42 | **Mock:** low-level design. Revise. | Fix gaps |

**Week 7: Full stack and cloud**

| Day | Topic | Commit to this guide |
|---|---|---|
| 43 | [Node.js](docs/nodejs.md) event loop and scaling | Review answers |
| 44 | [React](docs/react.md) (with the [machine coding round](docs/react.md#machine-coding-round-react)), [Next.js](docs/nextjs.md) | Build 2 machine-coding problems |
| 45 | [Cloud: AWS, GCP, Azure](docs/cloud.md) | Name the service for each need on all 3 clouds |
| 46 | [Docker and Kubernetes](docs/docker-kubernetes.md) | Self-test with [Docker](#docker) / [Kubernetes](#kubernetes) questions |
| 47 | [Redis](docs/redis.md) and [MongoDB](docs/mongodb.md) | Self-test with [Redis](#redis) / [MongoDB](#mongodb) questions |
| 48 | [Production-ready apps](docs/production-ready.md): observability, incidents, disaster recovery | Review answers |
| 49 | **Mock:** full-stack system (Next.js + Spring + AWS). Revise. | Fix gaps |

**Week 8: Harder systems, behavioral, final polish**

| Day | Topic | Commit to this guide |
|---|---|---|
| 50 | Multi-tenant SaaS, multi-region | Case studies |
| 51 | Leaderboard, top-K trending, ad click counting | Case studies |
| 52 | [AI and LLMs](#ai-and-llms): LLM basics and RAG | Build a small RAG demo |
| 53 | [Behavioral questions](#behavioral-questions), [staff-level stories](docs/senior-engineering.md) | Write your 8 STAR stories (keep them private if you want) |
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
| 1 hour | 2 easy-medium [coding problems](docs/dsa-coding-round.md#problems-with-answers). Only to warm up, not to learn. |
| 30 min | Read your [STAR stories](#behavioral-questions). Practice "tell me about yourself". Read about the company. |
| Night | Stop. Sleep 7–8 hours. A tired brain cannot design systems. |

### The last hour

- Read the one-page sheet below. Nothing else.
- Keep water, paper and a pen ready. Open your drawing tool. Test camera and microphone.
- Write 3 questions for the interviewer ([ideas here](#questions-to-ask-the-interviewer)).

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

For senior and staff topics (design docs, tech debt, leading incidents, mentoring, influence) and 15 sample staff-level answers, see [Senior and staff engineering](docs/senior-engineering.md).

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

**Distributed systems fundamentals:** [docs/distributed-systems.md](docs/distributed-systems.md): clocks, Raft, quorums, consistency models, 2PC, CRDTs, Elasticsearch and RabbitMQ.

**Low-level design (LLD / object-oriented design):** [docs/lld-case-studies.md](docs/lld-case-studies.md): UML basics, a repeatable method and 20 case studies (parking lot, BookMyShow, elevator, vending machine, Splitwise, ATM, chess…).

**Older practice list** (from 2019, still good): full-text search, elevator, coffee vending machine, parking system, Quartz scheduler, web crawler, Pastebin, push notifications, Instagram, Dropbox, Messenger, Twitter, Netflix, BookMyShow, typeahead, rate limiter, event management, Twitter search, news feed, Yelp / nearby friends, Uber, Quora, UberEats, Reddit, HackerRank.

## General Topics
### DS Algo
Answers: [dsa-coding-round.md](docs/dsa-coding-round.md#questions-from-the-readme-list)

[Codechef DS certification and preparation path with required links](https://www.codechef.com/certification/data-structures-and-algorithms/prepare#foundation) 
* [Asymptotic analysis (Big-O notation)](docs/dsa-coding-round.md#asymptotic-analysis-big-o-notation)
  Basic Data Structures: 
  * [Arrays,](docs/dsa-coding-round.md#arrays)
  * [Strings,](docs/dsa-coding-round.md#strings)
  * [Stacks,](docs/dsa-coding-round.md#stacks)
  * [Queues,](docs/dsa-coding-round.md#queues)
  * [Trees,](docs/dsa-coding-round.md#trees)
  * [Graphs](docs/dsa-coding-round.md#graphs)
* [Basic math operations (addition, subtraction, multiplication, division, exponentiation)](docs/dsa-coding-round.md#basic-math-operations-addition-subtraction-multiplication-division-exponentiation)
* [Sqrt(n) primality testing](docs/dsa-coding-round.md#sqrtn-primality-testing)
* [Euclid’s GCD Algorithm](docs/dsa-coding-round.md#euclids-gcd-algorithm)
* [Basic Recursion](docs/dsa-coding-round.md#basic-recursion)
* [Greedy Algorithms](docs/dsa-coding-round.md#greedy-algorithms)
* [Basic Dynamic Programming](docs/dsa-coding-round.md#basic-dynamic-programming)
* [Naive string searching](docs/dsa-coding-round.md#naive-string-searching)
* [O(n logn) Sorting](docs/dsa-coding-round.md#on-logn-sorting)
* [Binary Searching](docs/dsa-coding-round.md#binary-searching)
* [Divide and Conquer](docs/dsa-coding-round.md#divide-and-conquer)

[Standford Algorithms Playlist 1](https://www.youtube.com/playlist?list=PLXFMmlk03Dt7Q0xr1PIAriY5623cKiH7V)  
[Standford Algorithms Playlist 2](https://www.youtube.com/playlist?list=PLXFMmlk03Dt5EMI2s2WQBsLsZl7A5HEK6)  
[Sample DS Interview questions](https://www.toptal.com/algorithms/interview-questions)  
[Geeks for Geeks for almost all types of algorithms example in the world](https://www.geeksforgeeks.org/)  

### OOPS 
Answers: [oop-clean-code.md](docs/oop-clean-code.md#questions-from-the-readme-list)

* [Object](docs/oop-clean-code.md#object)
* [Class](docs/oop-clean-code.md#class)
* [Inheritance](docs/oop-clean-code.md#inheritance-1)
* [Polymorphism](docs/oop-clean-code.md#polymorphism-1)
* [Abstraction](docs/oop-clean-code.md#abstraction-1)
* [Encapsulation](docs/oop-clean-code.md#encapsulation-1)
* [Object-Oriented design:](docs/oop-clean-code.md#object-oriented-design)
    * [Coupling](docs/oop-clean-code.md#coupling)
    * [Cohesion](docs/oop-clean-code.md#cohesion)
    * [Association](docs/oop-clean-code.md#association)
    * [Aggregation](docs/oop-clean-code.md#aggregation)
    * [Composition](docs/oop-clean-code.md#composition)
  
[OOPs concept theory](https://www.javatpoint.com/java-oops-concepts)  
[Characteristics of good OOD ](https://www.geeksforgeeks.org/characteristics-of-good-object-oriented-design/)  

### Principles
Answers: [oop-clean-code.md](docs/oop-clean-code.md#questions-from-the-readme-list)

* [SOLID](docs/oop-clean-code.md#solid)
    1. [**S**ingle Responsibility](docs/oop-clean-code.md#single-responsibility)
    2. [**O**pen/Closed](docs/oop-clean-code.md#openclosed)
    3. [**L**iskov Substitution](docs/oop-clean-code.md#liskov-substitution)
    4. [**I**nterface Segregation](docs/oop-clean-code.md#interface-segregation)
    5. [**D**ependency Inversion](docs/oop-clean-code.md#dependency-inversion)
* [YAGNI “You Aren’t Gonna Need It”](docs/oop-clean-code.md#yagni-you-arent-gonna-need-it-1)
* [KISS “Keep It Simple, Stupid”](docs/oop-clean-code.md#kiss-keep-it-simple-stupid)
* [DRY "Dont Repeat Yourself"](docs/oop-clean-code.md#dry-dont-repeat-yourself-1)

### Clean Code
Answers: [oop-clean-code.md](docs/oop-clean-code.md#questions-from-the-readme-list)

-- **Gist link** -- https://gist.github.com/bansalankit92/6119c4f7fabe11b7a174a99f5a7bb376
* [General rules](docs/oop-clean-code.md#general-rules)
* [Names rules](docs/oop-clean-code.md#names-rules)
* [Functions rules](docs/oop-clean-code.md#functions-rules)
* [Comment rules](docs/oop-clean-code.md#comment-rules)
* [Formatting / Source code structure](docs/oop-clean-code.md#formatting--source-code-structure)
* [Classes and Objects](docs/oop-clean-code.md#classes-and-objects)
* [Objects/Data structures/POJO](docs/oop-clean-code.md#objectsdata-structurespojo)
* [Exceptions/ Error Handling](docs/oop-clean-code.md#exceptions-error-handling)
* [Tests rules](docs/oop-clean-code.md#tests-rules)
* [Design rules](docs/oop-clean-code.md#design-rules)
* [Understandability tips](docs/oop-clean-code.md#understandability-tips)
* [Refactor](docs/oop-clean-code.md#refactor)
* [Code smells](docs/oop-clean-code.md#code-smells)

### Design Patterns
Answers: [oop-clean-code.md](docs/oop-clean-code.md#questions-from-the-readme-list)

-- Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint that you can customize to solve a particular design problem in your code.

* [**Creational patterns** provide object creation mechanisms that increase flexibility and reuse of existing code.](docs/oop-clean-code.md#creational-patterns-provide-object-creation-mechanisms-that-increase-flexibility-and-reuse-of-existing-code)
  * [Factory Method](docs/oop-clean-code.md#factory-method-1)
  * [Abstract Factory Method](docs/oop-clean-code.md#abstract-factory-method)
  * [Builder](docs/oop-clean-code.md#builder-1)
  * [Prototype](docs/oop-clean-code.md#prototype-1)
  * [Singleton](docs/oop-clean-code.md#singleton-1)

* [**Structural patterns** explain how to assemble objects and classes into larger structures, while keeping the structures flexible and efficient.](docs/oop-clean-code.md#structural-patterns-explain-how-to-assemble-objects-and-classes-into-larger-structures-while-keeping-the-structures-flexible-and-efficient)
  * [Adapter](docs/oop-clean-code.md#adapter-1)
  * [Bridge](docs/oop-clean-code.md#bridge-1)
  * [Composite](docs/oop-clean-code.md#composite-1)
  * [Decorator](docs/oop-clean-code.md#decorator-1)
  * [Facade](docs/oop-clean-code.md#facade-1)
  * [Flyweight](docs/oop-clean-code.md#flyweight-1)
  * [Proxy](docs/oop-clean-code.md#proxy-1)

* [**Behavioral patterns** take care of effective communication and the assignment of responsibilities between objects.](docs/oop-clean-code.md#behavioral-patterns-take-care-of-effective-communication-and-the-assignment-of-responsibilities-between-objects)
  * [Chain Of Responsibility](docs/oop-clean-code.md#chain-of-responsibility-1)
  * [Command](docs/oop-clean-code.md#command-1)
  * [Iterator](docs/oop-clean-code.md#iterator-1)
  * [Mediator](docs/oop-clean-code.md#mediator-1)
  * [Memento](docs/oop-clean-code.md#memento-1)
  * [Observer](docs/oop-clean-code.md#observer-1)
  * [State](docs/oop-clean-code.md#state-1)
  * [Strategy](docs/oop-clean-code.md#strategy-1)
  * [Template Method](docs/oop-clean-code.md#template-method-1)
  * [Visitor](docs/oop-clean-code.md#visitor-1)

### Object Oriented Design
Answers: [lld-case-studies.md](docs/lld-case-studies.md#questions-from-the-readme-list)

**Object-Oriented Design and UML**

* [Object-Oriented Basics](docs/lld-case-studies.md#object-oriented-basics-1)
* [OO Analysis and Design](docs/lld-case-studies.md#oo-analysis-and-design-1)
* [What is UML?](docs/lld-case-studies.md#what-is-uml-1)
* [Use Case Diagrams](docs/lld-case-studies.md#use-case-diagrams-1)
* [Class Diagram](docs/lld-case-studies.md#class-diagram-21)
* [Sequence diagram](docs/lld-case-studies.md#sequence-diagram-1)
* [Activity Diagrams](docs/lld-case-studies.md#activity-diagrams-1)

**Object Oriented Design Case Studies**
* [Design a Library Management System](docs/lld-case-studies.md#design-a-library-management-system-1)
* [Design a Parking Lot](docs/lld-case-studies.md#design-a-parking-lot-1)
* [Design Amazon - Online Shopping System](docs/lld-case-studies.md#design-amazon---online-shopping-system-1)
* [Design Stack Overflow](docs/lld-case-studies.md#design-stack-overflow-1)
* [Design a Movie Ticket Booking System](docs/lld-case-studies.md#design-a-movie-ticket-booking-system-1)
* [Design an ATM](docs/lld-case-studies.md#design-an-atm-1)
* [Design an Airline Management System](docs/lld-case-studies.md#design-an-airline-management-system-1)
* [Design Blackjack and a Deck of Cards](docs/lld-case-studies.md#design-blackjack-and-a-deck-of-cards-1)
* [Design a Hotel Management System](docs/lld-case-studies.md#design-a-hotel-management-system-1)
* [Design a Restaurant Management system](docs/lld-case-studies.md#design-a-restaurant-management-system-1)
* [Design Chess](docs/lld-case-studies.md#design-chess-1)
* [Design an Online Stock Brokerage System](docs/lld-case-studies.md#design-an-online-stock-brokerage-system-1)
* [Design a Car Rental System](docs/lld-case-studies.md#design-a-car-rental-system-1)
* [Design LinkedIn](docs/lld-case-studies.md#design-linkedin-1)
* [Design Cricinfo](docs/lld-case-studies.md#design-cricinfo-1)
* [Design Facebook - a social network](docs/lld-case-studies.md#design-facebook---a-social-network-1)

## Frontend  

**Answers (simple English, with diagrams and code):**

| Topic | What's inside |
|---|---|
| [React](docs/react.md) | How React renders, hooks (stale closures, when not to use `useEffect`), performance, React 19, architecture for big apps, design systems, state, data fetching, testing, the "500k-line app in 90 days" question |
| [JavaScript](docs/javascript.md) | Event loop, closures, `this`, prototypes, promises, V8 engine, callbacks, functional programming, DOM events, generators, Proxy, Web Workers, 15 output puzzles, 45 coding problems (debounce, `Promise.all`, Promise from scratch, LRU…) |
| [TypeScript](docs/typescript.md) | Narrowing, generics, utility and mapped types, `satisfies`, tsconfig, TS 6 → 7, 16 coding tasks |
| [CSS and Tailwind](docs/css-tailwind.md) | Box model, specificity, flexbox, grid, responsive, modern CSS, Tailwind v4, 14 coding tasks |
| [Frontend UI and web](docs/frontend-ui.md) | What happens when you type a URL, browser rendering, accessibility, Core Web Vitals, frontend security, frontend system design |
| [Next.js](docs/nextjs.md) | App Router, Server vs Client Components, rendering, caching and Cache Components, Server Actions, auth and BFF with Spring, deployment, security, e-commerce page design |
| [Testing JS, React and Node](docs/js-testing.md) | Vitest vs Jest, Testing Library, MSW, Playwright, accessibility tests, flaky tests, CI |

The older question lists below are answered in these files.

### General
Answers: [frontend-ui.md](docs/frontend-ui.md#general-questions-from-the-readme-list)


* [What did you learn yesterday/this week?](docs/frontend-ui.md#what-did-you-learn-yesterdaythis-week)
* [What excites or interests you about coding?](docs/frontend-ui.md#what-excites-or-interests-you-about-coding)
* [What is a recent technical challenge you experienced and how did you solve it?](docs/frontend-ui.md#what-is-a-recent-technical-challenge-you-experienced-and-how-did-you-solve-it)
* [When building a new web site or maintaining one, can you explain some techniques you have used to increase performance?](docs/frontend-ui.md#when-building-a-new-web-site-or-maintaining-one-can-you-explain-some-techniques-you-have-used-to-increase-performance)
* [Can you describe some SEO best practices or techniques you have used lately?](docs/frontend-ui.md#can-you-describe-some-seo-best-practices-or-techniques-you-have-used-lately)
* [Can you explain any common techniques or recent issues solved in regards to front-end security?](docs/frontend-ui.md#can-you-explain-any-common-techniques-or-recent-issues-solved-in-regards-to-front-end-security)
* [What actions have you personally taken on recent projects to increase maintainability of your code?](docs/frontend-ui.md#what-actions-have-you-personally-taken-on-recent-projects-to-increase-maintainability-of-your-code)
* [Which version control systems are you familiar with?](docs/frontend-ui.md#which-version-control-systems-are-you-familiar-with)
* [Can you describe your workflow when you create a web page?](docs/frontend-ui.md#can-you-describe-your-workflow-when-you-create-a-web-page)
* [If you have 5 different stylesheets, how would you best integrate them into the site?](docs/frontend-ui.md#if-you-have-5-different-stylesheets-how-would-you-best-integrate-them-into-the-site)
* [Can you describe the difference between progressive enhancement and graceful degradation?](docs/frontend-ui.md#can-you-describe-the-difference-between-progressive-enhancement-and-graceful-degradation)
* [How would you optimize a website's assets/resources?](docs/frontend-ui.md#how-would-you-optimize-a-websites-assetsresources)
* [What does CORS stand for and what issue does it address?](docs/frontend-ui.md#what-does-cors-stand-for-and-what-issue-does-it-address)
* [Do you have any pet projects? What kind?](docs/frontend-ui.md#do-you-have-any-pet-projects-what-kind)
* [Explain your current project with data flow architecture, file structure,...?](docs/frontend-ui.md#explain-your-current-project-with-data-flow-architecture-file-structure)

### Js
Answers: [javascript.md](docs/javascript.md#questions-from-the-readme-list)

**Basics**
* [JavaScript Fundamentals](docs/javascript.md#javascript-fundamentals)
* [Code quality](docs/javascript.md#code-quality)
* [Objects: (this, GC, new)](docs/javascript.md#objects-this-gc-new)
* [Data types and DS](docs/javascript.md#data-types-and-ds)
* [Advanced working with functions (Closures, NFE, call/apply)](docs/javascript.md#advanced-working-with-functions-closures-nfe-callapply)
* [Object properties configuration](docs/javascript.md#object-properties-configuration)
* [Prototypes, inheritance](docs/javascript.md#prototypes-inheritance)
* [Classes](docs/javascript.md#classes)
* [Error handling](docs/javascript.md#error-handling)
* [Promises, async/await, callbacks](docs/javascript.md#promises-asyncawait-callbacks)
* [Generators, advanced iteration](docs/javascript.md#generators-advanced-iteration)
* [Modules](docs/javascript.md#modules)

**Advanced**
* [Browser: Document, Events, Interfaces](docs/javascript.md#browser-document-events-interfaces)
* [Frames and windows](docs/javascript.md#frames-and-windows)
* [Binary data, files](docs/javascript.md#binary-data-files)
* [Network requests - websockets/http](docs/javascript.md#network-requests---websocketshttp)
* [Storage and IndexDB](docs/javascript.md#storage-and-indexdb)
* [Animation](docs/javascript.md#animation)
* [Web components](docs/javascript.md#web-components)
* [Regular expressions](docs/javascript.md#regular-expressions)
* [Web workers](docs/javascript.md#web-workers)
* [Caching API](docs/javascript.md#caching-api)
* [Accessibility](docs/javascript.md#accessibility)

**New features**
* [ES2015](docs/javascript.md#es2015)
* [ES6](docs/javascript.md#es6)
* [ES7](docs/javascript.md#es7)

[JavaScript Concepts JavaScript Professionals Must Know Well](http://javascriptissexy.com/16-javascript-concepts-you-must-know-well/)  
### HTML
Answers: [frontend-ui.md](docs/frontend-ui.md#html-questions-from-the-readme-list)

* [What were some of the key goals and motivations for the HTML5 specification?](docs/frontend-ui.md#what-were-some-of-the-key-goals-and-motivations-for-the-html5-specification)
* [What are some of the key new features in HTML5?](docs/frontend-ui.md#what-are-some-of-the-key-new-features-in-html5)
* [What are “web workers”?](docs/frontend-ui.md#what-are-web-workers)
* [How do you indicate the character set being used by an HTML5 document? How does this differ from older HTML standards?](docs/frontend-ui.md#how-do-you-indicate-the-character-set-being-used-by-an-html5-document-how-does-this-differ-from-older-html-standards)
* [Discuss the differences between an HTML specification and a browser’s implementation thereof.](docs/frontend-ui.md#discuss-the-differences-between-an-html-specification-and-a-browsers-implementation-thereof)
* [Briefly describe the correct usage of the following HTML5 semantic elements: `<header>, <article>, <section>, <footer>`.](docs/frontend-ui.md#briefly-describe-the-correct-usage-of-the-following-html5-semantic-elements-header-article-section-footer)
* [Can a `<section>` contain `<article>` elements? Can an `<article>` contain `<section>` elements? Provide usage examples.](docs/frontend-ui.md#can-a-section-contain-article-elements-can-an-article-contain-section-elements-provide-usage-examples)
* [Can a web page contain multiple `<header>` elements? What about `<footer>` elements?](docs/frontend-ui.md#can-a-web-page-contain-multiple-header-elements-what-about-footer-elements)
* [Describe the relationship between the `<header>` and `<h1>` tags in HTML5.](docs/frontend-ui.md#describe-the-relationship-between-the-header-and-h1-tags-in-html5)
* [Give a simple implementation of the `<video>` tag to embed a video stored at http://www.example.com/amazing_video.mp4. Give the video a width of 640 pixels by 360 pixels. Provide the user with controls.](docs/frontend-ui.md#give-a-simple-implementation-of-the-video-tag-to-embed-a-video-stored-at-httpwwwexamplecomamazing_videomp4-give-the-video-a-width-of-640-pixels-by-360-pixels-provide-the-user-with-controls)
* [Write the code necessary to create a 300 pixel by 300 pixel `<canvas>`. Within it, paint a blue 100 pixel by 100 pixel square with the top-left corner of the square located 50 pixels from both the top and left edges of the canvas.](docs/frontend-ui.md#write-the-code-necessary-to-create-a-300-pixel-by-300-pixel-canvas-within-it-paint-a-blue-100-pixel-by-100-pixel-square-with-the-top-left-corner-of-the-square-located-50-pixels-from-both-the-top-and-left-edges-of-the-canvas)
* [What is HTML5 Web Storage? Explain localStorage, sessionStorage, cookies.](docs/frontend-ui.md#what-is-html5-web-storage-explain-localstorage-sessionstorage-cookies)
* [What is the difference between span and div?](docs/frontend-ui.md#what-is-the-difference-between-span-and-div)
* [What is the Geolocation API in HTML5?](docs/frontend-ui.md#what-is-the-geolocation-api-in-html5)
* [What’s one main result if you do not specify a doctype in an HTML page?](docs/frontend-ui.md#whats-one-main-result-if-you-do-not-specify-a-doctype-in-an-html-page)
* [What’s the difference between the `<svg> and <canvas>` elements?](docs/frontend-ui.md#whats-the-difference-between-the-svg-and-canvas-elements)
* [Describe the difference between `<script>, <script async> and <script defer>`.](docs/frontend-ui.md#describe-the-difference-between-script-script-async-and-script-defer)
* [Why is it generally a good idea to position CSS `<link>s between <head></head> and JS <script>`s just before `</body>`? Do you know any exceptions?](docs/frontend-ui.md#why-is-it-generally-a-good-idea-to-position-css-links-between-headhead-and-js-scripts-just-before-body-do-you-know-any-exceptions)
* [Why Meta tags are used in HTML?](docs/frontend-ui.md#why-meta-tags-are-used-in-html)

### CSS
Answers: [css-tailwind.md](docs/css-tailwind.md#questions-from-the-readme-list)

* [CSS Selectors](docs/css-tailwind.md#css-selectors)
* [CSS Box Model](docs/css-tailwind.md#css-box-model)
* [CSS Layout](docs/css-tailwind.md#css-layout)
* [Styling Text with CSS](docs/css-tailwind.md#styling-text-with-css)
* [Styling Boxes with CSS](docs/css-tailwind.md#styling-boxes-with-css)
* [CSS Units](docs/css-tailwind.md#css-units)
* [CSS Colors and Gradients](docs/css-tailwind.md#css-colors-and-gradients)
* [CSS Transitions and Animations](docs/css-tailwind.md#css-transitions-and-animations)
* [CSS Transforms](docs/css-tailwind.md#css-transforms)
* [CSS Pseudo-classes and Pseudo-elements](docs/css-tailwind.md#css-pseudo-classes-and-pseudo-elements)
* [CSS At-Rules (e.g. Media Queries)](docs/css-tailwind.md#css-at-rules-eg-media-queries)
* [CSS Specificity](docs/css-tailwind.md#css-specificity)
* [CSS Preprocessors](docs/css-tailwind.md#css-preprocessors)
* [CSS Naming Systems and Architecture](docs/css-tailwind.md#css-naming-systems-and-architecture)

**Interview Questions**
* [Describe Floats and how they work.](docs/css-tailwind.md#describe-floats-and-how-they-work)
* [Describe z-index and how stacking context is formed.](docs/css-tailwind.md#describe-z-index-and-how-stacking-context-is-formed)
* [Describe BFC (Block Formatting Context) and how it works.](docs/css-tailwind.md#describe-bfc-block-formatting-context-and-how-it-works)
* [How would you approach fixing browser-specific styling issues?](docs/css-tailwind.md#how-would-you-approach-fixing-browser-specific-styling-issues)
* [Have you ever used a grid system, and if so, what do you prefer?](docs/css-tailwind.md#have-you-ever-used-a-grid-system-and-if-so-what-do-you-prefer)
* [Have you used or implemented media queries or mobile specific layouts/CSS?](docs/css-tailwind.md#have-you-used-or-implemented-media-queries-or-mobile-specific-layoutscss)
* [Can you give an example of an @media property other than screen?](docs/css-tailwind.md#can-you-give-an-example-of-an-media-property-other-than-screen)
* [What are the advantages/disadvantages of using CSS preprocessors?](docs/css-tailwind.md#what-are-the-advantagesdisadvantages-of-using-css-preprocessors)
* [Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.](docs/css-tailwind.md#explain-your-understanding-of-the-box-model-and-how-you-would-tell-the-browser-in-css-to-render-your-layout-in-different-box-models)
* [What does * { box-sizing: border-box; } do? What are its advantages?](docs/css-tailwind.md#what-does---box-sizing-border-box--do-what-are-its-advantages)
* [What is the CSS display property and can you give a few examples of its use?](docs/css-tailwind.md#what-is-the-css-display-property-and-can-you-give-a-few-examples-of-its-use)
* [What’s the difference between inline and inline-block?](docs/css-tailwind.md#whats-the-difference-between-inline-and-inline-block)
* [What’s the difference between the “nth-of-type()” and “nth-child()” selectors?](docs/css-tailwind.md#whats-the-difference-between-the-nth-of-type-and-nth-child-selectors)
* [What’s the difference between a relative, fixed, absolute and statically positioned element?](docs/css-tailwind.md#whats-the-difference-between-a-relative-fixed-absolute-and-statically-positioned-element)
* [What existing CSS frameworks have you used locally, or in production? How would you change/improve them?](docs/css-tailwind.md#what-existing-css-frameworks-have-you-used-locally-or-in-production-how-would-you-changeimprove-them)
* [Have you played around with the new CSS Flexbox or Grid specs?](docs/css-tailwind.md#have-you-played-around-with-the-new-css-flexbox-or-grid-specs)
* [Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?](docs/css-tailwind.md#can-you-explain-the-difference-between-coding-a-web-site-to-be-responsive-versus-using-a-mobile-first-strategy)
* [What is CSS selector specificity and how does it work?](docs/css-tailwind.md#what-is-css-selector-specificity-and-how-does-it-work)


### Next.js
Answers: [docs/nextjs.md](docs/nextjs.md)
- [Next.js architecture and Server Components](docs/nextjs.md#nextjs-architecture-and-server-components) (App Router, Server vs Client Components, SSR / SSG / ISR, caching, Next.js 15 → 16, calling a Spring Boot backend)
- Coming next: Server Actions, Route Handlers, performance for large apps, React 19 basics.

## Backend

**Answers (simple English, with diagrams and code):**

| Topic | What's inside |
|---|---|
| [Core Java deep dive](docs/java-core.md) | HashMap and ConcurrentHashMap internals, collections Big-O, strings, generics, exceptions, class loading, JIT, Java memory model, 15 coding questions |
| [Java](docs/java.md) · [concurrency](docs/java-concurrency.md) · [streams](docs/java-streams.md) | Java 8 → 25, JVM memory, GC, threads to virtual threads, 65 stream problems |
| [DSA: the coding round](docs/dsa-coding-round.md) | How the round is scored, Big-O, 16 patterns, 47 problems with tested Java, a 4-week plan |
| [OOP, SOLID, design patterns, clean code](docs/oop-clean-code.md) | 4 pillars, SOLID with bad/good code, all 23 GoF patterns, clean code, code smells |
| [Spring and Spring Boot](docs/spring.md) | **Spring Core** (IoC, bean scopes, lifecycle, stereotypes, annotations cheat sheet), how Boot works, **AOP proxies**, **DispatcherServlet, filters vs interceptors**, Boot 2 → 4, WebFlux |
| [Spring questions (README list)](docs/spring-questions.md) | Every Spring Core, MVC, Boot, AOP and Spring 5 question below, answered |
| [Spring ecosystem](docs/spring-ecosystem.md) | Security (filter chain, JWT, OAuth2), Data JPA, validation, caching, Spring Cloud, observability, Batch, Spring AI |
| [Testing Spring and Java](docs/spring-testing.md) | JUnit 6, Mockito, test slices, `@MockitoBean`, Testcontainers, flaky tests, coverage |
| [Hibernate and JPA](docs/hibernate-jpa.md) | Entity states, persistence context, dirty checking, N+1, caching, batching, locking, Hibernate 7 |
| [SQL](docs/sql.md) · [transactions and locking](docs/databases.md) | Indexes, EXPLAIN, window functions, CTEs, MVCC, partitioning, 25 query problems |
| [Redis](docs/redis.md) · [MongoDB](docs/mongodb.md) | Caching patterns, locks, rate limiting, cluster · schema design, indexes, aggregation, sharding |
| [REST APIs and web services](docs/web-services.md) | HTTP semantics, status codes, API design, pagination, versioning, ETags, webhooks, SOAP |
| [gRPC, GraphQL and WebSockets](docs/api-protocols.md) | HTTP/2, Protobuf, streaming, deadlines, gRPC load balancing, Spring gRPC, DataLoader, federation, scaling WebSockets, choosing an API style |
| [Distributed systems](docs/distributed-systems.md) | Clocks, Raft consensus, quorums, consistency models, 2PC and TCC, CRDTs, gossip, Elasticsearch internals, RabbitMQ vs Kafka vs SQS |
| [Kafka](docs/kafka.md) · [Microservices](docs/microservices.md) | KRaft, replication, exactly-once, DLT · 12-factor, saga, outbox, CQRS, DDD, anti-patterns |
| [Node.js](docs/nodejs.md) | Event loop, libuv, streams, auth, databases, queues, WebSockets, 12 coding problems |
| [Debugging Spring Boot](docs/spring-debugging.md) | Startup errors, missing beans, breakpoints inside Spring, slow apps |

The older question lists below link each question to its answer.

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

* [Object oriented programming basics](docs/java-core.md#object-oriented-programming-basics)
* [Advanced object oriented concepts](docs/java-core.md#advanced-object-oriented-concepts)
* [Java Platform](docs/java-core.md#java-platform)
* [Wrapper Classes](docs/java-core.md#wrapper-classes)
* [Strings](docs/java-core.md#strings-1)
* [Advanced object oriented concepts](docs/java-core.md#advanced-object-oriented-concepts)
* [Modifiers](docs/java-core.md#modifiers)
* [Exception handling](docs/java-core.md#exception-handling)
* [Miscellaneous topics](docs/java-core.md#miscellaneous-topics)
* [Collections](docs/java-core.md#collections-1)
* [Advanced collections](docs/java-core.md#advanced-collections)
* [Generics](docs/java-core.md#generics-1)
* [Multi threading](docs/java-core.md#multi-threading)
* [Functional Programming - Lamdba expressions and Streams](docs/java-core.md#functional-programming---lamdba-expressions-and-streams)
* [New Features Java 7,8,11](docs/java-core.md#new-features-java-7811)
  
[OOPs in Java](https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/)  
[Solid Principles in Java](https://www.baeldung.com/solid-principles)

### Spring

Answers: [docs/spring.md](docs/spring.md)
- [Spring Boot 2 → 3 → 4: what changed](docs/spring.md#spring-boot-2-to-3-to-4-what-changed)
- [Spring MVC vs WebFlux](docs/spring.md#spring-mvc-vs-webflux)
- ⭐ [Debugging Spring Boot from the inside](docs/spring-debugging.md): startup errors, missing beans, where a property came from, breakpoints inside Spring, `@Transactional` and JPA, slow apps, a one-page checklist
- [Spring Reactive (WebFlux) in depth](docs/spring.md#spring-reactive-webflux-in-depth): reactive programming, Mono and Flux, operators, backpressure, schedulers, WebClient, R2DBC, testing, debugging, and [31 interview questions](docs/spring.md#spring-reactive-interview-questions)
- ⭐ [Spring ecosystem: the libraries companies use](docs/spring-ecosystem.md): Security (JWT, OAuth2), Data JPA (N+1, @Transactional), validation, caching, scheduling, testing (Testcontainers), Spring Cloud (Gateway, Config, OpenFeign), observability, Kafka / RabbitMQ, Batch, Modulith, Spring AI, GraphQL, native images, and 60 interview questions
- The older questions below are answered across these files.

#### Spring Core
Answers: [spring-questions.md](docs/spring-questions.md#spring-core)

- [What Is Spring Framework?](docs/spring-questions.md#what-is-spring-framework)
- [What Are the Benefits of Using Spring?](docs/spring-questions.md#what-are-the-benefits-of-using-spring)
- [What Spring Sub-Projects Do You Know? Describe Them Briefly.](docs/spring-questions.md#what-spring-sub-projects-do-you-know-describe-them-briefly)
- [What Is Dependency Injection?](docs/spring-questions.md#what-is-dependency-injection)
- [How Can We Inject Beans in Spring?](docs/spring-questions.md#how-can-we-inject-beans-in-spring)
- [Which Is the Best Way of Injecting Beans and Why](docs/spring-questions.md#which-is-the-best-way-of-injecting-beans-and-why)
- [What Is the Difference Between Beanfactory and Applicationcontext?](docs/spring-questions.md#what-is-the-difference-between-beanfactory-and-applicationcontext)
- [What Is a Spring Bean?](docs/spring-questions.md#what-is-a-spring-bean)
- [What Is the Default Bean Scope in Spring Framework?](docs/spring-questions.md#what-is-the-default-bean-scope-in-spring-framework)
- [How to Define the Scope of a Bean?](docs/spring-questions.md#how-to-define-the-scope-of-a-bean)
- [Are Singleton Beans Thread-Safe?](docs/spring-questions.md#are-singleton-beans-thread-safe)
- [What Does the Spring Bean Lifecycle Look Like?](docs/spring-questions.md#what-does-the-spring-bean-lifecycle-look-like)
- [What Is the Spring Java-Based Configuration?](docs/spring-questions.md#what-is-the-spring-java-based-configuration)
- [Can We Have Multiple Spring Configuration Files in One Project?](docs/spring-questions.md#can-we-have-multiple-spring-configuration-files-in-one-project)
- [What Is Spring Security?](docs/spring-questions.md#what-is-spring-security)
- [What Is Spring Boot?](docs/spring-questions.md#what-is-spring-boot)
- [Name Some of the Design Patterns Used in the Spring Framework?](docs/spring-questions.md#name-some-of-the-design-patterns-used-in-the-spring-framework)
- [How Does the Scope Prototype Work?](docs/spring-questions.md#how-does-the-scope-prototype-work)
- [What is Loose Coupling?](docs/spring-questions.md#what-is-loose-coupling)
- [What is a Dependency?](docs/spring-questions.md#what-is-a-dependency)
- [What is IOC (Inversion of Control)?](docs/spring-questions.md#what-is-ioc-inversion-of-control)
- [Can you give few examples of Dependency Injection?](docs/spring-questions.md#can-you-give-few-examples-of-dependency-injection)
- [What is Auto Wiring?](docs/spring-questions.md#what-is-auto-wiring)
- [What are the important roles of an IOC Container?](docs/spring-questions.md#what-are-the-important-roles-of-an-ioc-container)
- [What are Bean Factory and Application Context?](docs/spring-questions.md#what-are-bean-factory-and-application-context)
- [Can you compare Bean Factory with Application Context?](docs/spring-questions.md#can-you-compare-bean-factory-with-application-context)
- [How do you create an application context with Spring?](docs/spring-questions.md#how-do-you-create-an-application-context-with-spring)
- [How does Spring know where to search for Components or Beans?](docs/spring-questions.md#how-does-spring-know-where-to-search-for-components-or-beans)
- [What is a Component Scan?](docs/spring-questions.md#what-is-a-component-scan)
- [How do you define a component scan in XML and Java Configurations?](docs/spring-questions.md#how-do-you-define-a-component-scan-in-xml-and-java-configurations)
- [How is it done with Spring Boot?](docs/spring-questions.md#how-is-it-done-with-spring-boot)
- [What does @Component signify?](docs/spring-questions.md#what-does-component-signify)
- [What does @Autowired signify?](docs/spring-questions.md#what-does-autowired-signify)
- [What’s the difference Between @Controller, @Component, @Repository, and @Service Annotations in Spring?](docs/spring-questions.md#whats-the-difference-between-controller-component-repository-and-service-annotations-in-spring)
- [What is the default scope of a bean?](docs/spring-questions.md#what-is-the-default-scope-of-a-bean)
- [Are Spring beans thread safe?](docs/spring-questions.md#are-spring-beans-thread-safe)
- [What are the other scopes available?](docs/spring-questions.md#what-are-the-other-scopes-available)
- [How is Spring’s singleton bean different from Gang of Four Singleton Pattern?](docs/spring-questions.md#how-is-springs-singleton-bean-different-from-gang-of-four-singleton-pattern)
- [What are the different types of dependency injections?](docs/spring-questions.md#what-are-the-different-types-of-dependency-injections)
- [What is setter injection?](docs/spring-questions.md#what-is-setter-injection)
- [What is constructor injection?](docs/spring-questions.md#what-is-constructor-injection)
- [How do you choose between setter and constructor injections?](docs/spring-questions.md#how-do-you-choose-between-setter-and-constructor-injections)
- [What are the different options available to create Application Contexts for Spring?](docs/spring-questions.md#what-are-the-different-options-available-to-create-application-contexts-for-spring)
- [What is the difference between XML and Java Configurations for Spring?](docs/spring-questions.md#what-is-the-difference-between-xml-and-java-configurations-for-spring)
- [How do you choose between XML and Java Configurations for Spring?](docs/spring-questions.md#how-do-you-choose-between-xml-and-java-configurations-for-spring)
- [How does Spring do Autowiring?](docs/spring-questions.md#how-does-spring-do-autowiring)
- [What are the different kinds of matching used by Spring for Autowiring?](docs/spring-questions.md#what-are-the-different-kinds-of-matching-used-by-spring-for-autowiring)
- [How do you debug problems with Spring Framework?](docs/spring-questions.md#how-do-you-debug-problems-with-spring-framework)
- [How do you solve NoUniqueBeanDefinitionException?](docs/spring-questions.md#how-do-you-solve-nouniquebeandefinitionexception)
- [How do you solve NoSuchBeanDefinitionException?](docs/spring-questions.md#how-do-you-solve-nosuchbeandefinitionexception)
- [What is @Primary?](docs/spring-questions.md#what-is-primary)
- [What is @Qualifier?](docs/spring-questions.md#what-is-qualifier)
- [What is CDI (Contexts and Dependency Injection)?](docs/spring-questions.md#what-is-cdi-contexts-and-dependency-injection)
- [Does Spring Support CDI?](docs/spring-questions.md#does-spring-support-cdi)
- [Would you recommed to use CDI or Spring Annotations?](docs/spring-questions.md#would-you-recommed-to-use-cdi-or-spring-annotations)
- [What are the major features in different versions of Spring?](docs/spring-questions.md#what-are-the-major-features-in-different-versions-of-spring)
- [What are new features in Spring Framework 4.0?](docs/spring-questions.md#what-are-new-features-in-spring-framework-40)
- [What are new features in Spring Framework 5.0?](docs/spring-questions.md#what-are-new-features-in-spring-framework-50)
- [What are important Spring Modules?](docs/spring-questions.md#what-are-important-spring-modules)
- [What are important Spring Projects?](docs/spring-questions.md#what-are-important-spring-projects)
- [What is the simplest way of ensuring that we are using single version of all Spring related dependencies?](docs/spring-questions.md#what-is-the-simplest-way-of-ensuring-that-we-are-using-single-version-of-all-spring-related-dependencies)
- [Name some of the design patterns used in Spring Framework?](docs/spring-questions.md#name-some-of-the-design-patterns-used-in-spring-framework)
- [What do you think about Spring Framework?](docs/spring-questions.md#what-do-you-think-about-spring-framework)
- [Why is Spring Popular?](docs/spring-questions.md#why-is-spring-popular)
- [Can you give a big picture of the Spring Framework?](docs/spring-questions.md#can-you-give-a-big-picture-of-the-spring-framework)
 
#### Spring Web MVC
Answers: [spring-questions.md](docs/spring-questions.md#spring-web-mvc)

- [How to Get Servletcontext and Servletconfig Objects in a Spring Bean?](docs/spring-questions.md#how-to-get-servletcontext-and-servletconfig-objects-in-a-spring-bean)
- [What Is a Controller in Spring Mvc?](docs/spring-questions.md#what-is-a-controller-in-spring-mvc)
- [How Does the @Requestmapping Annotation Work?](docs/spring-questions.md#how-does-the-requestmapping-annotation-work)
- [What is Model 1 architecture?](docs/spring-questions.md#what-is-model-1-architecture)
- [What is Model 2 architecture?](docs/spring-questions.md#what-is-model-2-architecture)
- [What is Model 2 Front Controller architecture?](docs/spring-questions.md#what-is-model-2-front-controller-architecture)
- [Can you show an example controller method in Spring MVC?](docs/spring-questions.md#can-you-show-an-example-controller-method-in-spring-mvc)
- [Can you explain a simple flow in Spring MVC?](docs/spring-questions.md#can-you-explain-a-simple-flow-in-spring-mvc)
- [What is a ViewResolver?](docs/spring-questions.md#what-is-a-viewresolver)
- [What is Model?](docs/spring-questions.md#what-is-model)
- [What is ModelAndView?](docs/spring-questions.md#what-is-modelandview)
- [What is a RequestMapping?](docs/spring-questions.md#what-is-a-requestmapping)
- [What is Dispatcher Servlet?](docs/spring-questions.md#what-is-dispatcher-servlet)
- [How do you set up Dispatcher Servlet?](docs/spring-questions.md#how-do-you-set-up-dispatcher-servlet)
- [What is a form backing object?](docs/spring-questions.md#what-is-a-form-backing-object)
- [How is validation done using Spring MVC?](docs/spring-questions.md#how-is-validation-done-using-spring-mvc)
- [What is BindingResult?](docs/spring-questions.md#what-is-bindingresult)
- [How do you map validation results to your view?](docs/spring-questions.md#how-do-you-map-validation-results-to-your-view)
- [What are Spring Form Tags?](docs/spring-questions.md#what-are-spring-form-tags)
- [What is a Path Variable?](docs/spring-questions.md#what-is-a-path-variable)
- [What is a Model Attribute?](docs/spring-questions.md#what-is-a-model-attribute)
- [What is a Session Attribute?](docs/spring-questions.md#what-is-a-session-attribute)
- [What is a init binder?](docs/spring-questions.md#what-is-a-init-binder)
- [How do you set default date format with Spring?](docs/spring-questions.md#how-do-you-set-default-date-format-with-spring)
- [Why is Spring MVC so popular?](docs/spring-questions.md#why-is-spring-mvc-so-popular)

#### Spring Boot
Answers: [spring-questions.md](docs/spring-questions.md#spring-boot)

- [What is Spring Boot?](docs/spring-questions.md#what-is-spring-boot-1)
- [What are the important Goals of Spring Boot?](docs/spring-questions.md#what-are-the-important-goals-of-spring-boot)
- [What are the important Features of Spring Boot?](docs/spring-questions.md#what-are-the-important-features-of-spring-boot)
- [Compare Spring Boot vs Spring?](docs/spring-questions.md#compare-spring-boot-vs-spring)
- [Compare Spring Boot vs Spring MVC?](docs/spring-questions.md#compare-spring-boot-vs-spring-mvc)
- [What is the importance of @SpringBootApplication?](docs/spring-questions.md#what-is-the-importance-of-springbootapplication)
- [What is Auto Configuration?](docs/spring-questions.md#what-is-auto-configuration)
- [How can we find more information about Auto Configuration?](docs/spring-questions.md#how-can-we-find-more-information-about-auto-configuration)
- [What is an embedded server? Why is it important?](docs/spring-questions.md#what-is-an-embedded-server-why-is-it-important)
- [What is the default embedded server with Spring Boot?](docs/spring-questions.md#what-is-the-default-embedded-server-with-spring-boot)
- [What are the other embedded servers supported by Spring Boot?](docs/spring-questions.md#what-are-the-other-embedded-servers-supported-by-spring-boot)
- [What are Starter Projects?](docs/spring-questions.md#what-are-starter-projects)
- [Can you give examples of important starter projects?](docs/spring-questions.md#can-you-give-examples-of-important-starter-projects)
- [What is Starter Parent?](docs/spring-questions.md#what-is-starter-parent)
- [What are the different things that are defined in Starter Parent?](docs/spring-questions.md#what-are-the-different-things-that-are-defined-in-starter-parent)
- [How does Spring Boot enforce common dependency management for all its Starter projects?](docs/spring-questions.md#how-does-spring-boot-enforce-common-dependency-management-for-all-its-starter-projects)
- [What is Spring Initializr?](docs/spring-questions.md#what-is-spring-initializr)
- [What is application.properties?](docs/spring-questions.md#what-is-applicationproperties)
- [What are some of the important things that can customized in application.properties?](docs/spring-questions.md#what-are-some-of-the-important-things-that-can-customized-in-applicationproperties)
- [How do you externalize configuration using Spring Boot?](docs/spring-questions.md#how-do-you-externalize-configuration-using-spring-boot)
- [How can you add custom application properties using Spring Boot?](docs/spring-questions.md#how-can-you-add-custom-application-properties-using-spring-boot)
- [What is @ConfigurationProperties?](docs/spring-questions.md#what-is-configurationproperties)
- [What is a profile?](docs/spring-questions.md#what-is-a-profile)
- [How do you define beans for a specific profile?](docs/spring-questions.md#how-do-you-define-beans-for-a-specific-profile)
- [How do you create application configuration for a specific profile?](docs/spring-questions.md#how-do-you-create-application-configuration-for-a-specific-profile)
- [How do you have different configuration for different environments?](docs/spring-questions.md#how-do-you-have-different-configuration-for-different-environments)
- [What is Spring Boot Actuator?](docs/spring-questions.md#what-is-spring-boot-actuator)
- [How do you monitor web services using Spring Boot Actuator?](docs/spring-questions.md#how-do-you-monitor-web-services-using-spring-boot-actuator)
- [How do you find more information about your application envrionment using Spring Boot?](docs/spring-questions.md#how-do-you-find-more-information-about-your-application-envrionment-using-spring-boot)
- [What is a CommandLineRunner?](docs/spring-questions.md#what-is-a-commandlinerunner)
 
**Spring Data Access**
* [What Is Spring Jdbctemplate Class and How to Use It?](docs/spring-questions.md#what-is-spring-jdbctemplate-class-and-how-to-use-it)
* [How Would You Enable Transactions in Spring and What Are Their Benefits?](docs/spring-questions.md#how-would-you-enable-transactions-in-spring-and-what-are-their-benefits)
* [What Is Spring Dao?](docs/spring-questions.md#what-is-spring-dao)
- [What is Spring Data?](docs/spring-questions.md#what-is-spring-data)
- [What is the need for Spring Data?](docs/spring-questions.md#what-is-the-need-for-spring-data)
- [What is Spring Data JPA?](docs/spring-questions.md#what-is-spring-data-jpa)
- [What is a CrudRepository?](docs/spring-questions.md#what-is-a-crudrepository)
- [What is a PagingAndSortingRepository?](docs/spring-questions.md#what-is-a-pagingandsortingrepository)
 
#### Spring Aspect-Oriented Programming (AOP)
Answers: [spring-questions.md](docs/spring-questions.md#spring-aop)

* [What Is Aspect-Oriented Programming?](docs/spring-questions.md#what-is-aspect-oriented-programming)
* [What Are Aspect, Advice, Pointcut, and Joinpoint in Aop?](docs/spring-questions.md#what-are-aspect-advice-pointcut-and-joinpoint-in-aop)
* [What Is Weaving?](docs/spring-questions.md#what-is-weaving)
- [What are cross cutting concerns?](docs/spring-questions.md#what-are-cross-cutting-concerns)
- [How do you implement cross cutting concerns in a web application?](docs/spring-questions.md#how-do-you-implement-cross-cutting-concerns-in-a-web-application)
- [If you would want to log every request to a web application, what are the options you can think of?](docs/spring-questions.md#if-you-would-want-to-log-every-request-to-a-web-application-what-are-the-options-you-can-think-of)
- [If you would want to track performance of every request, what options can you think of?](docs/spring-questions.md#if-you-would-want-to-track-performance-of-every-request-what-options-can-you-think-of)
- [What is an Aspect and Pointcut in AOP?](docs/spring-questions.md#what-is-an-aspect-and-pointcut-in-aop)
- [What are the different types of AOP advices?](docs/spring-questions.md#what-are-the-different-types-of-aop-advices)
- [What is weaving?](docs/spring-questions.md#what-is-weaving)
- [Compare Spring AOP vs AspectJ?](docs/spring-questions.md#compare-spring-aop-vs-aspectj)
 
#### Spring 5
Answers: [spring-questions.md](docs/spring-questions.md#spring-5)

Answered in [Spring Reactive interview questions](docs/spring.md#spring-reactive-interview-questions).
* [What Is Reactive Programming?](docs/spring-questions.md#what-is-reactive-programming)
* [What Is Spring Webflux?](docs/spring-questions.md#what-is-spring-webflux)
* [What Are the Mono and Flux Types?](docs/spring-questions.md#what-are-the-mono-and-flux-types)
* [What Is the Use of Webclient and Webtestclient?](docs/spring-questions.md#what-is-the-use-of-webclient-and-webtestclient)
* [What Are the Disadvantages of Using Reactive Streams?](docs/spring-questions.md#what-are-the-disadvantages-of-using-reactive-streams)
* [Is Spring 5 Compatible with Older Versions of Java?](docs/spring-questions.md#is-spring-5-compatible-with-older-versions-of-java)
* [How Ow Spring 5 Integrates with Jdk 9 Modularity?](docs/spring-questions.md#how-ow-spring-5-integrates-with-jdk-9-modularity)
* [Can We Use Both Web Mvc and Webflux in the Same Application?](docs/spring-questions.md#can-we-use-both-web-mvc-and-webflux-in-the-same-application)
 
### Database Connectivity - JDBC, Spring JDBC & JPA, Hibernate
Answers: [hibernate-jpa.md](docs/hibernate-jpa.md#questions-from-the-readme-list)

- [What is Spring JDBC? How is different from JDBC?](docs/hibernate-jpa.md#what-is-spring-jdbc-how-is-different-from-jdbc)
- [What is a JdbcTemplate?](docs/hibernate-jpa.md#what-is-a-jdbctemplate)
- [What is a RowMapper?](docs/hibernate-jpa.md#what-is-a-rowmapper)
- [What is JPA?](docs/hibernate-jpa.md#what-is-jpa)
- [What is Hibernate?](docs/hibernate-jpa.md#what-is-hibernate)
- [How do you define an entity in JPA?](docs/hibernate-jpa.md#how-do-you-define-an-entity-in-jpa)
- [What is an Entity Manager?](docs/hibernate-jpa.md#what-is-an-entity-manager)
- [What is a Persistence Context?](docs/hibernate-jpa.md#what-is-a-persistence-context)
- [How do you map relationships in JPA?](docs/hibernate-jpa.md#how-do-you-map-relationships-in-jpa)
- [What are the different types of relationships in JPA?](docs/hibernate-jpa.md#what-are-the-different-types-of-relationships-in-jpa)
- [How do you define One to One Mapping in JPA?](docs/hibernate-jpa.md#how-do-you-define-one-to-one-mapping-in-jpa)
- [How do you define One to Many Mapping in JPA?](docs/hibernate-jpa.md#how-do-you-define-one-to-many-mapping-in-jpa)
- [How do you define Many to Many Mapping in JPA?](docs/hibernate-jpa.md#how-do-you-define-many-to-many-mapping-in-jpa)
- [How do you define a datasource in a Spring Context?](docs/hibernate-jpa.md#how-do-you-define-a-datasource-in-a-spring-context)
- [What is the use of persistence.xml](docs/hibernate-jpa.md#what-is-the-use-of-persistencexml)
- [How do you configure Entity Manager Factory and Transaction Manager?](docs/hibernate-jpa.md#how-do-you-configure-entity-manager-factory-and-transaction-manager)
- [How do you define transaction management for Spring – Hibernate integration?](docs/hibernate-jpa.md#how-do-you-define-transaction-management-for-spring--hibernate-integration)
- [What is Hibernate Framework?](docs/hibernate-jpa.md#what-is-hibernate-framework)
- [What is Java Persistence API (JPA)?](docs/hibernate-jpa.md#what-is-java-persistence-api-jpa)
- [What are the important benefits of using Hibernate Framework?](docs/hibernate-jpa.md#what-are-the-important-benefits-of-using-hibernate-framework)
- [What are the advantages of Hibernate over JDBC?](docs/hibernate-jpa.md#what-are-the-advantages-of-hibernate-over-jdbc)
- [Name some important interfaces of Hibernate framework?](docs/hibernate-jpa.md#name-some-important-interfaces-of-hibernate-framework)
- [What is hibernate configuration file?](docs/hibernate-jpa.md#what-is-hibernate-configuration-file)
- [What is hibernate mapping file?](docs/hibernate-jpa.md#what-is-hibernate-mapping-file)
- [Name some important annotations used for Hibernate mapping?](docs/hibernate-jpa.md#name-some-important-annotations-used-for-hibernate-mapping)
- [What is Hibernate SessionFactory and how to configure it?](docs/hibernate-jpa.md#what-is-hibernate-sessionfactory-and-how-to-configure-it)
- [Hibernate SessionFactory is thread safe?](docs/hibernate-jpa.md#hibernate-sessionfactory-is-thread-safe)
- [What is Hibernate Session and how to get it?](docs/hibernate-jpa.md#what-is-hibernate-session-and-how-to-get-it)
- [Hibernate Session is thread safe?](docs/hibernate-jpa.md#hibernate-session-is-thread-safe)
- [What is difference between openSession and getCurrentSession?](docs/hibernate-jpa.md#what-is-difference-between-opensession-and-getcurrentsession)
- [What is difference between Hibernate Session get() and load() method?](docs/hibernate-jpa.md#what-is-difference-between-hibernate-session-get-and-load-method)
- [What is hibernate caching? Explain Hibernate first level cache?](docs/hibernate-jpa.md#what-is-hibernate-caching-explain-hibernate-first-level-cache)
- [How to configure Hibernate Second Level Cache using EHCache?](docs/hibernate-jpa.md#how-to-configure-hibernate-second-level-cache-using-ehcache)
- [What are different states of an entity bean?](docs/hibernate-jpa.md#what-are-different-states-of-an-entity-bean)
- [What is use of Hibernate Session merge() call?](docs/hibernate-jpa.md#what-is-use-of-hibernate-session-merge-call)
- [What is difference between Hibernate save(), saveOrUpdate() and persist() methods?](docs/hibernate-jpa.md#what-is-difference-between-hibernate-save-saveorupdate-and-persist-methods)
- [What will happen if we don’t have no-args constructor in Entity bean?](docs/hibernate-jpa.md#what-will-happen-if-we-dont-have-no-args-constructor-in-entity-bean)
- [What is difference between sorted collection and ordered collection, which one is better?](docs/hibernate-jpa.md#what-is-difference-between-sorted-collection-and-ordered-collection-which-one-is-better)
- [What are the collection types in Hibernate?](docs/hibernate-jpa.md#what-are-the-collection-types-in-hibernate)
- [How to implement Joins in Hibernate?](docs/hibernate-jpa.md#how-to-implement-joins-in-hibernate)
- [Why we should not make Entity Class final?](docs/hibernate-jpa.md#why-we-should-not-make-entity-class-final)
- [What is HQL and what are it’s benefits?](docs/hibernate-jpa.md#what-is-hql-and-what-are-its-benefits)
- [What is Query Cache in Hibernate?](docs/hibernate-jpa.md#what-is-query-cache-in-hibernate)
- [Can we execute native sql query in hibernate?](docs/hibernate-jpa.md#can-we-execute-native-sql-query-in-hibernate)
- [What is the benefit of native sql query support in hibernate?](docs/hibernate-jpa.md#what-is-the-benefit-of-native-sql-query-support-in-hibernate)
- [What is Named SQL Query?](docs/hibernate-jpa.md#what-is-named-sql-query)
- [What are the benefits of Named SQL Query?](docs/hibernate-jpa.md#what-are-the-benefits-of-named-sql-query)
- [What is the benefit of Hibernate Criteria API?](docs/hibernate-jpa.md#what-is-the-benefit-of-hibernate-criteria-api)
- [How to log hibernate generated sql queries in log files?](docs/hibernate-jpa.md#how-to-log-hibernate-generated-sql-queries-in-log-files)
- [What is Hibernate Proxy and how it helps in lazy loading?](docs/hibernate-jpa.md#what-is-hibernate-proxy-and-how-it-helps-in-lazy-loading)
- [How to implement relationships in hibernate?](docs/hibernate-jpa.md#how-to-implement-relationships-in-hibernate)
- [How transaction management works in Hibernate?](docs/hibernate-jpa.md#how-transaction-management-works-in-hibernate)
- [What is cascading and what are different types of cascading?](docs/hibernate-jpa.md#what-is-cascading-and-what-are-different-types-of-cascading)
- [How to integrate log4j logging in hibernate application?](docs/hibernate-jpa.md#how-to-integrate-log4j-logging-in-hibernate-application)
- [How to use application server JNDI DataSource with Hibernate framework?](docs/hibernate-jpa.md#how-to-use-application-server-jndi-datasource-with-hibernate-framework)
- [How to integrate Hibernate and Spring frameworks?](docs/hibernate-jpa.md#how-to-integrate-hibernate-and-spring-frameworks)
- [What is HibernateTemplate class?](docs/hibernate-jpa.md#what-is-hibernatetemplate-class)
- [How to integrate Hibernate with Servlet or Struts2 web applications?](docs/hibernate-jpa.md#how-to-integrate-hibernate-with-servlet-or-struts2-web-applications)
- [Which design patterns are used in Hibernate framework?](docs/hibernate-jpa.md#which-design-patterns-are-used-in-hibernate-framework)
- [What are best practices to follow with Hibernate framework?](docs/hibernate-jpa.md#what-are-best-practices-to-follow-with-hibernate-framework)
- [What is Hibernate Validator Framework?](docs/hibernate-jpa.md#what-is-hibernate-validator-framework)
- [What is Spring JDBC? How is different from JDBC?](docs/hibernate-jpa.md#what-is-spring-jdbc-how-is-different-from-jdbc)
- [What is a JdbcTemplate?](docs/hibernate-jpa.md#what-is-a-jdbctemplate)
- [What is a RowMapper?](docs/hibernate-jpa.md#what-is-a-rowmapper)
- [What is JPA?](docs/hibernate-jpa.md#what-is-jpa)
- [What is Hibernate?](docs/hibernate-jpa.md#what-is-hibernate)
- [How do you define an entity in JPA?](docs/hibernate-jpa.md#how-do-you-define-an-entity-in-jpa)
- [What is an Entity Manager?](docs/hibernate-jpa.md#what-is-an-entity-manager)
- [What is a Persistence Context?](docs/hibernate-jpa.md#what-is-a-persistence-context)
- [How do you map relationships in JPA?](docs/hibernate-jpa.md#how-do-you-map-relationships-in-jpa)
- [What are the different types of relationships in JPA?](docs/hibernate-jpa.md#what-are-the-different-types-of-relationships-in-jpa)
- [How do you define One to One Mapping in JPA?](docs/hibernate-jpa.md#how-do-you-define-one-to-one-mapping-in-jpa)
- [How do you define One to Many Mapping in JPA?](docs/hibernate-jpa.md#how-do-you-define-one-to-many-mapping-in-jpa)
- [How do you define Many to Many Mapping in JPA?](docs/hibernate-jpa.md#how-do-you-define-many-to-many-mapping-in-jpa)
- [How do you define a datasource in a Spring Context?](docs/hibernate-jpa.md#how-do-you-define-a-datasource-in-a-spring-context)
- [What is the use of persistence.xml](docs/hibernate-jpa.md#what-is-the-use-of-persistencexml)
- [How do you configure Entity Manager Factory and Transaction Manager?](docs/hibernate-jpa.md#how-do-you-configure-entity-manager-factory-and-transaction-manager)
- [How do you define transaction management for Spring – Hibernate integration?](docs/hibernate-jpa.md#how-do-you-define-transaction-management-for-spring--hibernate-integration)

https://www.journaldev.com/3633/hibernate-interview-questions-and-answers

### Unit Testing
Answers: [spring-testing.md](docs/spring-testing.md#questions-from-the-readme-list)

- [How does Spring Framework Make Unit Testing Easy?](docs/spring-testing.md#how-does-spring-framework-make-unit-testing-easy)
- [What is Mockito?](docs/spring-testing.md#what-is-mockito)
- [What is your favorite mocking framework?](docs/spring-testing.md#what-is-your-favorite-mocking-framework)
- [How do you do mock data with Mockito?](docs/spring-testing.md#how-do-you-do-mock-data-with-mockito)
- [What are the different mocking annotations that you worked with?](docs/spring-testing.md#what-are-the-different-mocking-annotations-that-you-worked-with)
- [What is MockMvc?](docs/spring-testing.md#what-is-mockmvc)
- [What is @WebMvcTest?](docs/spring-testing.md#what-is-webmvctest)
- [What is @MockBean?](docs/spring-testing.md#what-is-mockbean)
- [How do you write a unit test with MockMVC?](docs/spring-testing.md#how-do-you-write-a-unit-test-with-mockmvc)
- [What is JSONAssert?](docs/spring-testing.md#what-is-jsonassert)
- [How do you write an integration test with Spring Boot?](docs/spring-testing.md#how-do-you-write-an-integration-test-with-spring-boot)
- [What is @SpringBootTest?](docs/spring-testing.md#what-is-springboottest)
- [What is @LocalServerPort?](docs/spring-testing.md#what-is-localserverport)
- [What is TestRestTemplate?](docs/spring-testing.md#what-is-testresttemplate)

### Node.js
Answers: [docs/nodejs.md](docs/nodejs.md)
- Event loop phases, `process.nextTick` vs `setImmediate`, what blocks the loop, worker threads vs cluster, streams and backpressure, Express / Fastify / NestJS, scaling, memory leaks, graceful shutdown, Node 22–26, Node vs Java/Spring

## Web Services

### SOAP Web Services
Answers: [web-services.md](docs/web-services.md#soap-questions-from-the-readme-list)

- [What is a Web Service?](docs/web-services.md#what-is-a-web-service)
- [What is SOAP Web Service?](docs/web-services.md#what-is-soap-web-service)
- [What is SOAP?](docs/web-services.md#what-is-soap)
- [Waht is a SOAP Envelope?](docs/web-services.md#waht-is-a-soap-envelope)
- [What is SOAP Header and SOAP Body?](docs/web-services.md#what-is-soap-header-and-soap-body)
- [Can you give an example of SOAP Request and SOAP Response?](docs/web-services.md#can-you-give-an-example-of-soap-request-and-soap-response)
- [What is a SOAP Header? What kind of information is sent in a SOAP Header?](docs/web-services.md#what-is-a-soap-header-what-kind-of-information-is-sent-in-a-soap-header)
- [Can you give an example of a SOAP Header with Authentication information?](docs/web-services.md#can-you-give-an-example-of-a-soap-header-with-authentication-information)
- [What is WSDL (Web Service Definition Language)?](docs/web-services.md#what-is-wsdl-web-service-definition-language)
- [What are the different parts of a WSDL?](docs/web-services.md#what-are-the-different-parts-of-a-wsdl)
- [What is Contract First Approach?](docs/web-services.md#what-is-contract-first-approach)
- [What is an XSD?](docs/web-services.md#what-is-an-xsd)
- [Can you give an example of an XSD?](docs/web-services.md#can-you-give-an-example-of-an-xsd)
- [What is JAXB?](docs/web-services.md#what-is-jaxb)
- [How do you configure a JAXB Plugin?](docs/web-services.md#how-do-you-configure-a-jaxb-plugin)
- [What is an Endpoint?](docs/web-services.md#what-is-an-endpoint)
- [Can you show an example endpoint written with Spring Web Services?](docs/web-services.md#can-you-show-an-example-endpoint-written-with-spring-web-services)
- [What is a MessageDispatcherServlet?](docs/web-services.md#what-is-a-messagedispatcherservlet)
- [How do you configure a MessageDispatcherServlet?](docs/web-services.md#how-do-you-configure-a-messagedispatcherservlet)
- [How do you generate a WSDL using Spring Web Services?](docs/web-services.md#how-do-you-generate-a-wsdl-using-spring-web-services)
- [How do you implement error handling for SOAP Web Services?](docs/web-services.md#how-do-you-implement-error-handling-for-soap-web-services)
- [What is a SOAP Fault?](docs/web-services.md#what-is-a-soap-fault)

### RESTful Web Services
Answers: [web-services.md](docs/web-services.md#rest-questions-from-the-readme-list)

- [What is REST?](docs/web-services.md#what-is-rest)
- [What are the key concepts in designing RESTful API?](docs/web-services.md#what-are-the-key-concepts-in-designing-restful-api)
- [What are the Best Practices of RESTful Services?](docs/web-services.md#what-are-the-best-practices-of-restful-services)
- [Can you show the code for an example Get Resource method with Spring REST?](docs/web-services.md#can-you-show-the-code-for-an-example-get-resource-method-with-spring-rest)
- [What happens when we return a bean from a Request Mapping Method?](docs/web-services.md#what-happens-when-we-return-a-bean-from-a-request-mapping-method)
- [What is GetMapping and what are the related methods available in Spring MVC?](docs/web-services.md#what-is-getmapping-and-what-are-the-related-methods-available-in-spring-mvc)
- [Can you show the code for an example Post Resource method with Spring REST?](docs/web-services.md#can-you-show-the-code-for-an-example-post-resource-method-with-spring-rest)
- [What is the appropriate HTTP Response Status for successful execution of a Resource Creation?](docs/web-services.md#what-is-the-appropriate-http-response-status-for-successful-execution-of-a-resource-creation)
- [Why do we use ResponseEntity in a RESTful Service?](docs/web-services.md#why-do-we-use-responseentity-in-a-restful-service)
- [What is HATEOAS?](docs/web-services.md#what-is-hateoas)
- [Can you give an Example Response for HATEOAS?](docs/web-services.md#can-you-give-an-example-response-for-hateoas)
- [How do we implement it using Spring?](docs/web-services.md#how-do-we-implement-it-using-spring)
- [How do you document RESTful web services?](docs/web-services.md#how-do-you-document-restful-web-services)
- [Can you give a brief idea about Swagger Documentation?](docs/web-services.md#can-you-give-a-brief-idea-about-swagger-documentation)
- [How do you automate generation of Swagger Documentation from RESTful Web Services?](docs/web-services.md#how-do-you-automate-generation-of-swagger-documentation-from-restful-web-services)
- [How do you add custom information to Swagger Documentation generated from RESTful Web Services?](docs/web-services.md#how-do-you-add-custom-information-to-swagger-documentation-generated-from-restful-web-services)
- [What is Swagger-UI?](docs/web-services.md#what-is-swagger-ui)
- [What is "Representation" of a Resource?](docs/web-services.md#what-is-representation-of-a-resource)
- [What is Content Negotiation?](docs/web-services.md#what-is-content-negotiation)
- [Which HTTP Header is used for Content Negotiation?](docs/web-services.md#which-http-header-is-used-for-content-negotiation)
- [How do we implement it using Spring Boot?](docs/web-services.md#how-do-we-implement-it-using-spring-boot)
- [How do you add XML support to your RESTful Services built with Spring Boot?](docs/web-services.md#how-do-you-add-xml-support-to-your-restful-services-built-with-spring-boot)
- [How do you implement Exception Handling for RESTFul Web Services?](docs/web-services.md#how-do-you-implement-exception-handling-for-restful-web-services)
- [What are the best practices related to Exception Handling with respect to RESTful Web Services?](docs/web-services.md#what-are-the-best-practices-related-to-exception-handling-with-respect-to-restful-web-services)
- [What are the different error status that you would return in RESTful Web Services?](docs/web-services.md#what-are-the-different-error-status-that-you-would-return-in-restful-web-services)
- [How would you implement them using Spring Boot?](docs/web-services.md#how-would-you-implement-them-using-spring-boot)
- [What HTTP Response Status do you return for validation errors?](docs/web-services.md#what-http-response-status-do-you-return-for-validation-errors)
- [How do you handle Validation Errors with RESTful Web Services?](docs/web-services.md#how-do-you-handle-validation-errors-with-restful-web-services)
- [Why do we need Versioning for  RESTful Web Services?](docs/web-services.md#why-do-we-need-versioning-for-restful-web-services)
- [What are the versioning options that are available?](docs/web-services.md#what-are-the-versioning-options-that-are-available)
- [How do you implement Versioning for RESTful Web Services?](docs/web-services.md#how-do-you-implement-versioning-for-restful-web-services)

https://github.com/in28minutes/in28minutes-initiatives/blob/master/The-in28Minutes-CourseGuides/spring-interview-questions.md

## Databases

### SQL, transactions and locking
Answers: [docs/databases.md](docs/databases.md)
- [SQL joins and self join](docs/databases.md#sql-joins-and-self-join) (with sample tables, second highest salary, find duplicates)
- [Transactions and isolation levels](docs/databases.md#transactions-and-isolation-levels) (ACID, dirty / non-repeatable / phantom reads, MVCC)
- [Optimistic vs pessimistic locking](docs/databases.md#optimistic-vs-pessimistic-locking) (the "last seat" story, `@Version`, `SELECT ... FOR UPDATE`, deadlocks)
- Also see: [SQL vs NoSQL](docs/system-design.md#sql-vs-nosql), [Database indexes](docs/system-design.md#database-indexes), [Replication](docs/system-design.md#database-replication-read-replicas), [Sharding](docs/system-design.md#partitioning-and-sharding)

### MongoDB
Answers: [mongodb.md](docs/mongodb.md#questions-from-the-readme-list)

* [Does Mongodb Support Foreign Key Constraints?](docs/mongodb.md#does-mongodb-support-foreign-key-constraints)
* [Which are the most important features of MongoDB?](docs/mongodb.md#which-are-the-most-important-features-of-mongodb)
* [How many indexes does MongoDB create by default for a new collection?](docs/mongodb.md#how-many-indexes-does-mongodb-create-by-default-for-a-new-collection)
* [Explain what is MongoDB?](docs/mongodb.md#explain-what-is-mongodb)
* [What is “Namespace” in MongoDB?](docs/mongodb.md#what-is-namespace-in-mongodb)
* [Why does Profiler use in MongoDB?](docs/mongodb.md#why-does-profiler-use-in-mongodb)
* [If you remove an object attribute, is it deleted from the database?](docs/mongodb.md#if-you-remove-an-object-attribute-is-it-deleted-from-the-database)
* [Does MongoDB need a lot space of Random Access Memory (RAM)?](docs/mongodb.md#does-mongodb-need-a-lot-space-of-random-access-memory-ram)
* [What is a replica set?](docs/mongodb.md#what-is-a-replica-set)
*  [What Is Replication In MongoDB?](docs/mongodb.md#what-is-replication-in-mongodb)
*  [Compare SQL databases and MongoDB at a high level.](docs/mongodb.md#compare-sql-databases-and-mongodb-at-a-high-level)
*  [What is BSON in MongoDB?](docs/mongodb.md#what-is-bson-in-mongodb)
*  [How is data stored in MongoDB?](docs/mongodb.md#how-is-data-stored-in-mongodb)
*  [Mention the command to insert a document in a database called school and collection called persons.](docs/mongodb.md#mention-the-command-to-insert-a-document-in-a-database-called-school-and-collection-called-persons)
*  [What are Indexes in MongoDB?](docs/mongodb.md#what-are-indexes-in-mongodb)
*  [Can you create an index on an array field in MongoDB? If yes, what happens in this case?](docs/mongodb.md#can-you-create-an-index-on-an-array-field-in-mongodb-if-yes-what-happens-in-this-case)
*  [When should we embed one document within another in MongoDB?](docs/mongodb.md#when-should-we-embed-one-document-within-another-in-mongodb)
*  [What do you understand by NoSQL databases? Explain.](docs/mongodb.md#what-do-you-understand-by-nosql-databases-explain)
*  [What is the difference between MongoDB and MySQL?](docs/mongodb.md#what-is-the-difference-between-mongodb-and-mysql)
*  [What is the difference b/w MongoDB and CouchDB?](docs/mongodb.md#what-is-the-difference-bw-mongodb-and-couchdb)
*  [Explain the structure of ObjectID in MongoDB](docs/mongodb.md#explain-the-structure-of-objectid-in-mongodb)
*  [What is sharding?](docs/mongodb.md#what-is-sharding)
*  [What are NoSQL databases? What are the different types of NoSQL databases?](docs/mongodb.md#what-are-nosql-databases-what-are-the-different-types-of-nosql-databases)
*  [How is MongoDB better than other SQL databases?](docs/mongodb.md#how-is-mongodb-better-than-other-sql-databases)
*  [What does MongoDB not being ACID compliant really mean?](docs/mongodb.md#what-does-mongodb-not-being-acid-compliant-really-mean)
*  [How can you achieve primary key - foreign key relationships in MongoDB?](docs/mongodb.md#how-can-you-achieve-primary-key---foreign-key-relationships-in-mongodb)
*  [Does MongoDB pushes the writes to disk immediately or lazily?](docs/mongodb.md#does-mongodb-pushes-the-writes-to-disk-immediately-or-lazily)
*  [If you remove a document from database, does MongoDB remove it from disk?](docs/mongodb.md#if-you-remove-a-document-from-database-does-mongodb-remove-it-from-disk)
*  [What is a covered query in MongoDB?](docs/mongodb.md#what-is-a-covered-query-in-mongodb)
*  [How can you achieve transaction and locking in MongoDB?](docs/mongodb.md#how-can-you-achieve-transaction-and-locking-in-mongodb)
*  [What is Aggregation in MongoDB?](docs/mongodb.md#what-is-aggregation-in-mongodb)
*  [What is Sharding in MongoDB? Explain.](docs/mongodb.md#what-is-sharding-in-mongodb-explain)
*  [Why are MongoDB data files large in size?](docs/mongodb.md#why-are-mongodb-data-files-large-in-size)
*  [Why MongoDB is not preferred over a 32-bit system?](docs/mongodb.md#why-mongodb-is-not-preferred-over-a-32-bit-system)
*  [Mention the command to check whether you are on the master server or not.](docs/mongodb.md#mention-the-command-to-check-whether-you-are-on-the-master-server-or-not)
*  [Can one MongoDB operation lock more than one databases? If yes, how?](docs/mongodb.md#can-one-mongodb-operation-lock-more-than-one-databases-if-yes-how)
*  [What is oplog?](docs/mongodb.md#what-is-oplog)
*  [Is there an “upsert” option in the mongodb insert command?](docs/mongodb.md#is-there-an-upsert-option-in-the-mongodb-insert-command)
*  [How to query MongoDB with “like”?](docs/mongodb.md#how-to-query-mongodb-with-like)
*  [Find objects between two dates MongoDB](docs/mongodb.md#find-objects-between-two-dates-mongodb)
*  [How can I combine data from multiple collections into one collection?](docs/mongodb.md#how-can-i-combine-data-from-multiple-collections-into-one-collection)
*  [When to use MongoDB or other document oriented database systems?](docs/mongodb.md#when-to-use-mongodb-or-other-document-oriented-database-systems)
*  [How do I perform the SQL JOIN equivalent in MongoDB?](docs/mongodb.md#how-do-i-perform-the-sql-join-equivalent-in-mongodb)
*  [How to query MongoDB with %like%?](docs/mongodb.md#how-to-query-mongodb-with-like)
*  [What is use of capped collection in MongoDB?](docs/mongodb.md#what-is-use-of-capped-collection-in-mongodb)
*  [Does MongoDB support ACID transaction management and locking functionalities?](docs/mongodb.md#does-mongodb-support-acid-transaction-management-and-locking-functionalities)
*  [Should I normalize my data before storing it in MongoDB?](docs/mongodb.md#should-i-normalize-my-data-before-storing-it-in-mongodb)
**Senior**
*  [How replication works in MongoDB?](docs/mongodb.md#how-replication-works-in-mongodb)
*  [What are alternatives to MongoDB?](docs/mongodb.md#what-are-alternatives-to-mongodb)
*  [Where can I run MongoDB?](docs/mongodb.md#where-can-i-run-mongodb)
*  [How does MongoDB ensure high availability?](docs/mongodb.md#how-does-mongodb-ensure-high-availability)
*  [Is MongoDB schema-less?](docs/mongodb.md#is-mongodb-schema-less)
*  [Why is a covered query important?](docs/mongodb.md#why-is-a-covered-query-important)
*  [Does MongoDB provide a facility to do text searches? How?](docs/mongodb.md#does-mongodb-provide-a-facility-to-do-text-searches-how)
*  [What happens if an index does not fit into RAM?](docs/mongodb.md#what-happens-if-an-index-does-not-fit-into-ram)
*  [Mention the command to list all the indexes on a particular collection.](docs/mongodb.md#mention-the-command-to-list-all-the-indexes-on-a-particular-collection)
*  [At what interval does MongoDB write updates to the disk?](docs/mongodb.md#at-what-interval-does-mongodb-write-updates-to-the-disk)
*  [What are Primary and Secondary Replica sets?](docs/mongodb.md#what-are-primary-and-secondary-replica-sets)
*  [By default, MongoDB writes and reads data from both primary and secondary replica sets. True or False.](docs/mongodb.md#by-default-mongodb-writes-and-reads-data-from-both-primary-and-secondary-replica-sets-true-or-false)
*  [How does Journaling work in MongoDB?](docs/mongodb.md#how-does-journaling-work-in-mongodb)
*  [How does MongoDB provide concurrency?](docs/mongodb.md#how-does-mongodb-provide-concurrency)
*  [How can you isolate your cursors from intervening with the write operations?](docs/mongodb.md#how-can-you-isolate-your-cursors-from-intervening-with-the-write-operations)
*  [Update MongoDB field using value of another field](docs/mongodb.md#update-mongodb-field-using-value-of-another-field)
*  [How to remove a field completely from a MongoDB document?](docs/mongodb.md#how-to-remove-a-field-completely-from-a-mongodb-document)
*  [When to Redis or MongoDB?](docs/mongodb.md#when-to-redis-or-mongodb)
*  [MongoDB relationships. What to use - embed or reference?](docs/mongodb.md#mongodb-relationships-what-to-use---embed-or-reference)
*  [How to get the last N records from find?](docs/mongodb.md#how-to-get-the-last-n-records-from-find)
*  [How to find MongoDB records where array field is not empty?](docs/mongodb.md#how-to-find-mongodb-records-where-array-field-is-not-empty)
*  [How to check if a field contains a substring?](docs/mongodb.md#how-to-check-if-a-field-contains-a-substring)
  **Expert**
*  [What's the advantage of the backup features in Ops Manager versus traditional backup strategies?](docs/mongodb.md#whats-the-advantage-of-the-backup-features-in-ops-manager-versus-traditional-backup-strategies)
*  [What is a Storage Engine in MongoDB](docs/mongodb.md#what-is-a-storage-engine-in-mongodb)
*  [Which are the two storage engines used by MongoDB?](docs/mongodb.md#which-are-the-two-storage-engines-used-by-mongodb)
*  [What is splitting in mongodb?](docs/mongodb.md#what-is-splitting-in-mongodb)
*  [How to condense large volumes of data in Mongo?](docs/mongodb.md#how-to-condense-large-volumes-of-data-in-mongo)
*  [What are three primary concerns when choosing a data management system?](docs/mongodb.md#what-are-three-primary-concerns-when-choosing-a-data-management-system)
*  [How to find document with array that contains a specific value?](docs/mongodb.md#how-to-find-document-with-array-that-contains-a-specific-value)
*  [Is it possible to update MongoDB field using value of another field?](docs/mongodb.md#is-it-possible-to-update-mongodb-field-using-value-of-another-field)
*  [Explain what is horizontal scalability?](docs/mongodb.md#explain-what-is-horizontal-scalability)
*  [What are the differences between MongoDB and MySQL?](docs/mongodb.md#what-are-the-differences-between-mongodb-and-mysql)
  
https://www.fullstack.cafe/   
http://www.globalguideline.com/interview_questions/Questions.php?sc=MongoDB

### MySQL
Answers: [sql.md](docs/sql.md#questions-from-the-readme-list)

* [Define a temp table](docs/sql.md#define-a-temp-table)
* [What is a view?](docs/sql.md#what-is-a-view)
* [What is PRIMARY KEY?](docs/sql.md#what-is-primary-key)
* [What is the difference between WHERE clause and HAVING clause?](docs/sql.md#what-is-the-difference-between-where-clause-and-having-clause)
* [What’s the difference between a local temp table and a global temp table?](docs/sql.md#whats-the-difference-between-a-local-temp-table-and-a-global-temp-table)
* [What is FOREIGN KEY?](docs/sql.md#what-is-foreign-key)
* [What is Normalization?](docs/sql.md#what-is-normalization)
* [What is DEFAULT?](docs/sql.md#what-is-default)
* [What is blocking?](docs/sql.md#what-is-blocking)
*  [How can a column with a default value be added to an existing table?](docs/sql.md#how-can-a-column-with-a-default-value-be-added-to-an-existing-table)
*  [What is the difference between inner and outer join?](docs/sql.md#what-is-the-difference-between-inner-and-outer-join)
*  [What is the difference between JOIN and UNION?](docs/sql.md#what-is-the-difference-between-join-and-union)
*  [What is the difference between UNION and UNION ALL?](docs/sql.md#what-is-the-difference-between-union-and-union-all)
*  [How to select first 5 records from a table?](docs/sql.md#how-to-select-first-5-records-from-a-table)
*  [Describe the difference between truncate and delete](docs/sql.md#describe-the-difference-between-truncate-and-delete)
*  [What are the difference between clustered and a non-clustered index?](docs/sql.md#what-are-the-difference-between-clustered-and-a-non-clustered-index)
*  [What are the advantages of using Stored Procedures?](docs/sql.md#what-are-the-advantages-of-using-stored-procedures)
*  [What is Denormalization?](docs/sql.md#what-is-denormalization)
*  [Define ACID Properties](docs/sql.md#define-acid-properties)
*  [What is a cursor how does it work?](docs/sql.md#what-is-a-cursor-how-does-it-work)
*  [What is collation?](docs/sql.md#what-is-collation)
*  [What are row constructors?](docs/sql.md#what-are-row-constructors)
*  [Is table size reduced, when you delete data from the table?](docs/sql.md#is-table-size-reduced-when-you-delete-data-from-the-table)
*  [What is the difference between “INNER JOIN” and “OUTER JOIN”?](docs/sql.md#what-is-the-difference-between-inner-join-and-outer-join)
*  [How do I UPDATE from a SELECT in SQL Server?](docs/sql.md#how-do-i-update-from-a-select-in-sql-server)
*  [How a database index can help performance?](docs/sql.md#how-a-database-index-can-help-performance)
*  [How does a hash table index work?](docs/sql.md#how-does-a-hash-table-index-work)
*  [Finding duplicate values in a SQL table](docs/sql.md#finding-duplicate-values-in-a-sql-table)
*  [How do I perform an IF…THEN in an SQL SELECT?](docs/sql.md#how-do-i-perform-an-ifthen-in-an-sql-select)
*  [Discuss INNER JOIN ON vs WHERE clause](docs/sql.md#discuss-inner-join-on-vs-where-clause)
*  [Explain Function vs. Stored Procedure in SQL Server](docs/sql.md#explain-function-vs-stored-procedure-in-sql-server)
*  [What is the difference among UNION, MINUS and INTERSECT?](docs/sql.md#what-is-the-difference-among-union-minus-and-intersect)
*  [How can we transpose a table using SQL (changing rows to column or vice-versa) ?](docs/sql.md#how-can-we-transpose-a-table-using-sql-changing-rows-to-column-or-vice-versa-)
*  [How to generate row number in SQL Without ROWNUM](docs/sql.md#how-to-generate-row-number-in-sql-without-rownum)
*  [What's the difference between a primary key and a unique key?](docs/sql.md#whats-the-difference-between-a-primary-key-and-a-unique-key)
*  [Name types of Triggers](docs/sql.md#name-types-of-triggers)
*  [What is a linked server?](docs/sql.md#what-is-a-linked-server)
*  [Explain a usage difference between user defined functions and stored procedures](docs/sql.md#explain-a-usage-difference-between-user-defined-functions-and-stored-procedures)
*  [How does truncate and delete operation effect Identity?](docs/sql.md#how-does-truncate-and-delete-operation-effect-identity)
*  [Explain the difference between exclusive lock and update lock](docs/sql.md#explain-the-difference-between-exclusive-lock-and-update-lock)
*  [What are DMV's and DMF's?](docs/sql.md#what-are-dmvs-and-dmfs)
*  [What are statistics?](docs/sql.md#what-are-statistics)
*  [How deadlock is resolved?](docs/sql.md#how-deadlock-is-resolved)
*  [What is a filegroup?](docs/sql.md#what-is-a-filegroup)
*  [What would happen without an index?](docs/sql.md#what-would-happen-without-an-index)
*  [How does B-trees index work?](docs/sql.md#how-does-b-trees-index-work)
*  [What is the cost of having a database index?](docs/sql.md#what-is-the-cost-of-having-a-database-index)
*  [Delete duplicate values in a SQL table](docs/sql.md#delete-duplicate-values-in-a-sql-table)
*  [How can I do an UPDATE statement with JOIN in SQL?](docs/sql.md#how-can-i-do-an-update-statement-with-join-in-sql)
*  [How does primary key constraint and unique key constraint effect null?](docs/sql.md#how-does-primary-key-constraint-and-unique-key-constraint-effect-null)
*  [What is Optimistic Locking and Pessimistic locking?](docs/sql.md#what-is-optimistic-locking-and-pessimistic-locking)
*  [How does database indexing work?](docs/sql.md#how-does-database-indexing-work)
*  [Name some disadvantages of a hash index](docs/sql.md#name-some-disadvantages-of-a-hash-index)
*  [What are some other types of indexes?](docs/sql.md#what-are-some-other-types-of-indexes)
*  [Insert results of a stored procedure into a temporary table](docs/sql.md#insert-results-of-a-stored-procedure-into-a-temporary-table)
*  [Select first row in each GROUP BY group (greatest-n-per-group problem)?](docs/sql.md#select-first-row-in-each-group-by-group-greatest-n-per-group-problem)

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
Answers: [microservices.md](docs/microservices.md#questions-from-the-readme-list)

* [Why Would You Opt For Microservices Architecture?](docs/microservices.md#why-would-you-opt-for-microservices-architecture)
* [List down the advantages of Microservices Architecture](docs/microservices.md#list-down-the-advantages-of-microservices-architecture)
* [Define Microservice Architecture](docs/microservices.md#define-microservice-architecture)
* [What Are The Fundamentals Of Microservices Design?](docs/microservices.md#what-are-the-fundamentals-of-microservices-design)
* [What are the features of Microservices?](docs/microservices.md#what-are-the-features-of-microservices)
* [How does Microservice Architecture work?](docs/microservices.md#how-does-microservice-architecture-work)
* [What is the difference between Monolithic, SOA and Microservices Architecture?](docs/microservices.md#what-is-the-difference-between-monolithic-soa-and-microservices-architecture)
* [What are the challenges you face while working Microservice Architectures?](docs/microservices.md#what-are-the-challenges-you-face-while-working-microservice-architectures)
* [How can we perform Cross-Functional testing?](docs/microservices.md#how-can-we-perform-cross-functional-testing)
*  [What are main differences between Microservices and Monolithic Architecture?](docs/microservices.md#what-are-main-differences-between-microservices-and-monolithic-architecture)
*  [What are the standard patterns of orchestrating microservices?](docs/microservices.md#what-are-the-standard-patterns-of-orchestrating-microservices)
*  [What are smart endpoints and dumb pipes?](docs/microservices.md#what-are-smart-endpoints-and-dumb-pipes)
*  [What is the difference between a proxy server and a reverse proxy server?](docs/microservices.md#what-is-the-difference-between-a-proxy-server-and-a-reverse-proxy-server)
*  [Whether do you find GraphQL the right fit for designing microservice architecture?](docs/microservices.md#whether-do-you-find-graphql-the-right-fit-for-designing-microservice-architecture)
*  [What is Idempotence?](docs/microservices.md#what-is-idempotence)
*  [What are the pros and cons of Microservice Architecture?](docs/microservices.md#what-are-the-pros-and-cons-of-microservice-architecture)
*  [What do you understand by Distributed Transaction?](docs/microservices.md#what-do-you-understand-by-distributed-transaction)
*  [What do you understand by Contract Testing?](docs/microservices.md#what-do-you-understand-by-contract-testing)
*  [What is the role of an architect in Microservices architecture?](docs/microservices.md#what-is-the-role-of-an-architect-in-microservices-architecture)
*  [Can we create State Machines out of Microservices?](docs/microservices.md#can-we-create-state-machines-out-of-microservices)
*  [Explain what is the API Gateway pattern](docs/microservices.md#explain-what-is-the-api-gateway-pattern)
*  [Mention some benefits and drawbacks of an API Gateway](docs/microservices.md#mention-some-benefits-and-drawbacks-of-an-api-gateway)
*  [What is Materialized View pattern and when will you use it?](docs/microservices.md#what-is-materialized-view-pattern-and-when-will-you-use-it)
*  [How should the various services share a common DB Schema and code?](docs/microservices.md#how-should-the-various-services-share-a-common-db-schema-and-code)
*  [What Did The Law Stated By Melvin Conway Implied?](docs/microservices.md#what-did-the-law-stated-by-melvin-conway-implied)
*  [Name the main differences between SOA and Microservices?](docs/microservices.md#name-the-main-differences-between-soa-and-microservices)
*  [What is the difference between cohesion and coupling?](docs/microservices.md#what-is-the-difference-between-cohesion-and-coupling)
*  [What is a Consumer-Driven Contract (CDC)?](docs/microservices.md#what-is-a-consumer-driven-contract-cdc)
*  [What are Reactive Extensions in Microservices?](docs/microservices.md#what-are-reactive-extensions-in-microservices)
*  [What is the most accepted transaction strategy for microservices](docs/microservices.md#what-is-the-most-accepted-transaction-strategy-for-microservices)
*  [What does it mean that shifting to microservices creates a run-time problem?](docs/microservices.md#what-does-it-mean-that-shifting-to-microservices-creates-a-run-time-problem)
*  [Why would one use sagas over 2PC and vice versa?](docs/microservices.md#why-would-one-use-sagas-over-2pc-and-vice-versa)
*  [Provide an example of "smart pipes" and "dumb endpoint"](docs/microservices.md#provide-an-example-of-smart-pipes-and-dumb-endpoint)
*  [How would you implement SSO for Microservice Architecture?](docs/microservices.md#how-would-you-implement-sso-for-microservice-architecture)
*  [Microservices Design Pattern (Saga Pattern)](docs/microservices.md#microservices-design-pattern-saga-pattern)
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
* [Architecture](docs/kafka.md#architecture)
* [Workflow](docs/kafka.md#workflow)
* [Cluster](docs/kafka.md#cluster)
* [Producer](docs/kafka.md#producer)
* [Consumer](docs/kafka.md#consumer)
* [Broker](docs/kafka.md#broker)
* [Queuing](docs/kafka.md#queuing)
* [Client](docs/kafka.md#client)
* [Connect](docs/kafka.md#connect)
* [Docker](docs/kafka.md#docker)
* [Monitoring Tools](docs/kafka.md#monitoring-tools)
* [Role of Zookeeper](docs/kafka.md#role-of-zookeeper)
* [Streams](docs/kafka.md#streams)
* [Spark Streaming](docs/kafka.md#spark-streaming)
* [Performance Tuning](docs/kafka.md#performance-tuning)
* [Load Testing](docs/kafka.md#load-testing)
* [Storm Kafka Integration](docs/kafka.md#storm-kafka-integration)
* [Security](docs/kafka.md#security)
[Tutorials](https://data-flair.training/blogs/apache-kafka-tutorial/)   

**Interview Questions**  

- [Q.1 What is Apache Kafka?](docs/kafka.md#q1-what-is-apache-kafka)
- [Q.2 Enlist the several components in Kafka.](docs/kafka.md#q2-enlist-the-several-components-in-kafka)
- [Q.3 Explain the role of the offset.](docs/kafka.md#q3-explain-the-role-of-the-offset)
- [Q.4 What is a Consumer Group?](docs/kafka.md#q4-what-is-a-consumer-group)
- [Q.5 What is the role of the ZooKeeper in Kafka?](docs/kafka.md#q5-what-is-the-role-of-the-zookeeper-in-kafka)
- [Q.6 Is it possible to use Kafka without ZooKeeper?](docs/kafka.md#q6-is-it-possible-to-use-kafka-without-zookeeper)
- [Q.7 What do you know about Partition in Kafka?](docs/kafka.md#q7-what-do-you-know-about-partition-in-kafka)
- [Q.8 Why is Kafka technology significant to use?](docs/kafka.md#q8-why-is-kafka-technology-significant-to-use)
- [Q.9 What are main APIs of Kafka?](docs/kafka.md#q9-what-are-main-apis-of-kafka)
- [Q.10 What are consumers or users?](docs/kafka.md#q10-what-are-consumers-or-users)
- [Q.11 Explain the concept of Leader and Follower.](docs/kafka.md#q11-explain-the-concept-of-leader-and-follower)
- [Q.12 What ensures load balancing of the server in Kafka?](docs/kafka.md#q12-what-ensures-load-balancing-of-the-server-in-kafka)
- [Q.13 What roles do Replicas and the ISR play?](docs/kafka.md#q13-what-roles-do-replicas-and-the-isr-play)
- [Q.14 Why are Replications critical in Kafka?](docs/kafka.md#q14-why-are-replications-critical-in-kafka)
- [Q.15 If a Replica stays out of the ISR for a long time, what does it signify?](docs/kafka.md#q15-if-a-replica-stays-out-of-the-isr-for-a-long-time-what-does-it-signify)
- [Q.16 What is the process for starting a Kafka server?](docs/kafka.md#q16-what-is-the-process-for-starting-a-kafka-server)
- [Q.17 In the Producer, when does QueueFullException occur?](docs/kafka.md#q17-in-the-producer-when-does-queuefullexception-occur)
- [Q.18 Explain the role of the Kafka Producer API.](docs/kafka.md#q18-explain-the-role-of-the-kafka-producer-api)
- [Q.19 What is the main difference between Kafka and Flume?](docs/kafka.md#q19-what-is-the-main-difference-between-kafka-and-flume)
- [Q.20 Is Apache Kafka is a distributed streaming platform? if yes, what you can do with it?](docs/kafka.md#q20-is-apache-kafka-is-a-distributed-streaming-platform-if-yes-what-you-can-do-with-it)
- [Q. 21 What can you do with Kafka?](docs/kafka.md#q-21-what-can-you-do-with-kafka)
- [Q.22 What is the purpose of retention period in Kafka cluster?](docs/kafka.md#q22-what-is-the-purpose-of-retention-period-in-kafka-cluster)
- [Q.23 Explain the maximum size of a message that can be received by the Kafka?](docs/kafka.md#q23-explain-the-maximum-size-of-a-message-that-can-be-received-by-the-kafka)
- [Q.24 What are the types of traditional method of message transfer?](docs/kafka.md#q24-what-are-the-types-of-traditional-method-of-message-transfer)
- [Q.25 What does ISR stand in Kafka environment?](docs/kafka.md#q25-what-does-isr-stand-in-kafka-environment)
- [Q.26 What is Geo-Replication in Kafka?](docs/kafka.md#q26-what-is-geo-replication-in-kafka)
- [Q.27 Explain Multi-tenancy?](docs/kafka.md#q27-explain-multi-tenancy)
- [Q.28 What is the role of Consumer API?](docs/kafka.md#q28-what-is-the-role-of-consumer-api)
- [Q.29 Explain the role of Streams API?](docs/kafka.md#q29-explain-the-role-of-streams-api)
- [Q.30 What is the role of Connector API?](docs/kafka.md#q30-what-is-the-role-of-connector-api)
- [Q.31 Explain Producer?](docs/kafka.md#q31-explain-producer)
- [Q.32 Compare: RabbitMQ vs Apache Kafka](docs/kafka.md#q32-compare-rabbitmq-vs-apache-kafka)
- [Q.33 Compare: Traditional queuing systems vs Apache Kafka](docs/kafka.md#q33-compare-traditional-queuing-systems-vs-apache-kafka)
- [Q.34 Why Should we use Apache Kafka Cluster?](docs/kafka.md#q34-why-should-we-use-apache-kafka-cluster)
- [Q.35 Explain the term “Log Anatomy”.](docs/kafka.md#q35-explain-the-term-log-anatomy)
- [Q.36 What is Data Log in Kafka?](docs/kafka.md#q36-what-is-data-log-in-kafka)
- [Q.37 Explain how to Tune Kafka for Optimal Performance.](docs/kafka.md#q37-explain-how-to-tune-kafka-for-optimal-performance)
- [Q.38 State Disadvantages of Apache Kafka.](docs/kafka.md#q38-state-disadvantages-of-apache-kafka)
- [Q.39 Enlist all Apache Kafka Operations.](docs/kafka.md#q39-enlist-all-apache-kafka-operations)
- [Q.40 Explain Apache Kafka Use Cases?](docs/kafka.md#q40-explain-apache-kafka-use-cases)
- [Q.41 Some of the most notable applications of Kafka.](docs/kafka.md#q41-some-of-the-most-notable-applications-of-kafka)
- [Q.42 Features of Kafka Stream.](docs/kafka.md#q42-features-of-kafka-stream)
- [Q.43 What do you mean by Stream Processing in Kafka?](docs/kafka.md#q43-what-do-you-mean-by-stream-processing-in-kafka)
- [Q.44 What are the types of System tools?](docs/kafka.md#q44-what-are-the-types-of-system-tools)
- [Q.45 What are Replication Tool and its types?](docs/kafka.md#q45-what-are-replication-tool-and-its-types)
- [Q.46 What is Importance of Java in Apache Kafka?](docs/kafka.md#q46-what-is-importance-of-java-in-apache-kafka)
- [Q.47 State one best feature of Kafka.](docs/kafka.md#q47-state-one-best-feature-of-kafka)
- [Q.48 Explain the term “Topic Replication Factor”.](docs/kafka.md#q48-explain-the-term-topic-replication-factor)
- [Q.49 Explain some Kafka Streams real-time Use Cases.](docs/kafka.md#q49-explain-some-kafka-streams-real-time-use-cases)
- [Q.50 What are Guarantees provided by Kafka?](docs/kafka.md#q50-what-are-guarantees-provided-by-kafka)
  
https://gist.github.com/bansalankit92/9414ef3614229cdca6053464fedf5038
  
<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Questions generated with markdown-toc</a></i></small>

[Reference Interview Questions](https://data-flair.training/blogs/kafka-interview-questions/)

### Docker
Answers: [docker-kubernetes.md](docs/docker-kubernetes.md#questions-from-the-readme-list)

**Tutorials**
* [Getting Started](https://docs.docker.com/get-started/)
* [Orientation](https://docs.docker.com/get-started/part1/)
* [Containers](https://docs.docker.com/get-started/part2/)
* [Services](https://docs.docker.com/get-started/part3/)
* [Swarms](https://docs.docker.com/get-started/part4/)
* [Stack](https://docs.docker.com/get-started/part5/)

[Interview Questions and Answers](https://gist.github.com/bansalankit92/1b2a310a3e4686e5e31159dfbdcc1593)

- [What is Hypervisor?](docs/docker-kubernetes.md#what-is-hypervisor)
- [What is virtualization?](docs/docker-kubernetes.md#what-is-virtualization)
- [What is containerization?](docs/docker-kubernetes.md#what-is-containerization)
- [Difference between virtualization and containerization](docs/docker-kubernetes.md#difference-between-virtualization-and-containerization)
- [What is Docker?](docs/docker-kubernetes.md#what-is-docker)
- [What is a Docker Container?](docs/docker-kubernetes.md#what-is-a-docker-container)
- [What are Docker Images?](docs/docker-kubernetes.md#what-are-docker-images)
- [What is Docker Hub?](docs/docker-kubernetes.md#what-is-docker-hub)
- [Explain Docker Architecture?](docs/docker-kubernetes.md#explain-docker-architecture)
- [What is a Dockerfile?](docs/docker-kubernetes.md#what-is-a-dockerfile)
- [Tell us something about Docker Compose.](docs/docker-kubernetes.md#tell-us-something-about-docker-compose)
- [What is Docker Swarm?](docs/docker-kubernetes.md#what-is-docker-swarm)
- [What is a Docker Namespace?](docs/docker-kubernetes.md#what-is-a-docker-namespace)
- [What is the lifecycle of a Docker Container?](docs/docker-kubernetes.md#what-is-the-lifecycle-of-a-docker-container)
- [What is Docker Machine?](docs/docker-kubernetes.md#what-is-docker-machine)
- [Tell some important Docker commands?](docs/docker-kubernetes.md#tell-some-important-docker-commands)
- [Suppose you have 3 containers running and out of these, you wish to access one of them. How do you access a running container?](docs/docker-kubernetes.md#suppose-you-have-3-containers-running-and-out-of-these-you-wish-to-access-one-of-them-how-do-you-access-a-running-container)
- [Will you lose your data, when a docker container exits?](docs/docker-kubernetes.md#will-you-lose-your-data-when-a-docker-container-exits)
- [Where all do you think Docker is being used?](docs/docker-kubernetes.md#where-all-do-you-think-docker-is-being-used)
- [How is Docker different from other containerization methods?](docs/docker-kubernetes.md#how-is-docker-different-from-other-containerization-methods)
- [Can I use JSON instead of YAML for my compose file in Docker?](docs/docker-kubernetes.md#can-i-use-json-instead-of-yaml-for-my-compose-file-in-docker)
- [How have you used Docker in your previous position?](docs/docker-kubernetes.md#how-have-you-used-docker-in-your-previous-position)
- [How far do Docker containers scale? Are there any requirements for the same?](docs/docker-kubernetes.md#how-far-do-docker-containers-scale-are-there-any-requirements-for-the-same)
- [What platforms does docker run on?](docs/docker-kubernetes.md#what-platforms-does-docker-run-on)
- [Is there a way to identify the status of a Docker container?](docs/docker-kubernetes.md#is-there-a-way-to-identify-the-status-of-a-docker-container)
- [Can you remove a paused container from Docker?](docs/docker-kubernetes.md#can-you-remove-a-paused-container-from-docker)
- [Can a container restart by itself?](docs/docker-kubernetes.md#can-a-container-restart-by-itself)
- [Is it better to directly remove the container using the rm command or stop the container followed by remove container?](docs/docker-kubernetes.md#is-it-better-to-directly-remove-the-container-using-the-rm-command-or-stop-the-container-followed-by-remove-container)
- [Will cloud overtake the use of Containerization?](docs/docker-kubernetes.md#will-cloud-overtake-the-use-of-containerization)
- [How many containers can run per host?](docs/docker-kubernetes.md#how-many-containers-can-run-per-host)
- [Is it a good practice to run stateful applications on Docker? or What type of applications - Stateless or Stateful are more suitable for Docker Container?](docs/docker-kubernetes.md#is-it-a-good-practice-to-run-stateful-applications-on-docker-or-what-type-of-applications---stateless-or-stateful-are-more-suitable-for-docker-container)
- [Suppose you have an application that has many dependant services. Will docker compose wait for the current container to be ready to move to the running of the next service?](docs/docker-kubernetes.md#suppose-you-have-an-application-that-has-many-dependant-services-will-docker-compose-wait-for-the-current-container-to-be-ready-to-move-to-the-running-of-the-next-service)
- [How will you monitor Docker in production?](docs/docker-kubernetes.md#how-will-you-monitor-docker-in-production)
- [Is it a good practice to run Docker compose in production?](docs/docker-kubernetes.md#is-it-a-good-practice-to-run-docker-compose-in-production)
- [What changes are expected in your docker compose file while moving it to production?](docs/docker-kubernetes.md#what-changes-are-expected-in-your-docker-compose-file-while-moving-it-to-production)
- [Have you used Kubernetes? If you have, which one would you prefer amongst Docker and Kubernetes?](docs/docker-kubernetes.md#have-you-used-kubernetes-if-you-have-which-one-would-you-prefer-amongst-docker-and-kubernetes)
- [Are you aware of load balancing across containers and hosts? How does it work?](docs/docker-kubernetes.md#are-you-aware-of-load-balancing-across-containers-and-hosts-how-does-it-work)
- [What is a Docker Registry?](docs/docker-kubernetes.md#what-is-a-docker-registry)
- [How to build envrionment-agnostic systems with Docker?](docs/docker-kubernetes.md#how-to-build-envrionment-agnostic-systems-with-docker)
- [When would you use ‘docker kill’ or ‘docker rm -f’?](docs/docker-kubernetes.md#when-would-you-use-docker-kill-or-docker-rm--f)
- [How to link containers?](docs/docker-kubernetes.md#how-to-link-containers)
- [What is the difference between the `COPY` and `ADD` commands in a Dockerfile?](docs/docker-kubernetes.md#what-is-the-difference-between-the-copy-and-add-commands-in-a-dockerfile)
- [What is the difference between CMD and ENTRYPOINT in a Dockerfile?](docs/docker-kubernetes.md#what-is-the-difference-between-cmd-and-entrypoint-in-a-dockerfile)
- [How do I transfer a Docker image from one machine to another one without using a repository, no matter private or public?](docs/docker-kubernetes.md#how-do-i-transfer-a-docker-image-from-one-machine-to-another-one-without-using-a-repository-no-matter-private-or-public)
- [Do I lose my data when the Docker container exits?](docs/docker-kubernetes.md#do-i-lose-my-data-when-the-docker-container-exits)
- [What is Build Cache in Docker?](docs/docker-kubernetes.md#what-is-build-cache-in-docker)
- [What is the difference between ‘docker run’ and ‘docker create’?](docs/docker-kubernetes.md#what-is-the-difference-between-docker-run-and-docker-create)
- [What’s the difference between a repository and a registry?](docs/docker-kubernetes.md#whats-the-difference-between-a-repository-and-a-registry)
- [What is the default CPU limit set for a container?](docs/docker-kubernetes.md#what-is-the-default-cpu-limit-set-for-a-container)
- [Can you create containers without their own PID namespace](docs/docker-kubernetes.md#can-you-create-containers-without-their-own-pid-namespace)
- [Explain basic Docker usage workflow?](docs/docker-kubernetes.md#explain-basic-docker-usage-workflow)
- [What is the difference between Docker Image and Layer?](docs/docker-kubernetes.md#what-is-the-difference-between-docker-image-and-layer)
- [Could you explain what is Emulation?](docs/docker-kubernetes.md#could-you-explain-what-is-emulation)
- [Should I use Vagrant or Docker for creating an isolated environment?](docs/docker-kubernetes.md#should-i-use-vagrant-or-docker-for-creating-an-isolated-environment)
- [What is the difference between “expose” and “publish” in Docker?](docs/docker-kubernetes.md#what-is-the-difference-between-expose-and-publish-in-docker)
- [Docker Compose vs. Dockerfile - which is better?](docs/docker-kubernetes.md#docker-compose-vs-dockerfile---which-is-better)
- [What exactly do you mean by “Dockerized node”? Can this node be on-premises or in the cloud?](docs/docker-kubernetes.md#what-exactly-do-you-mean-by-dockerized-node-can-this-node-be-on-premises-or-in-the-cloud)
- [How can we control the startup order of services in Docker compose?](docs/docker-kubernetes.md#how-can-we-control-the-startup-order-of-services-in-docker-compose)
- [How will you monitor Docker in production?](docs/docker-kubernetes.md#how-will-you-monitor-docker-in-production)
- [What happens if you add more than one CMD instruction to a Dockerfile?](docs/docker-kubernetes.md#what-happens-if-you-add-more-than-one-cmd-instruction-to-a-dockerfile)
- [When you limit the memory for a container, does it reserve (guarantee) the memory?](docs/docker-kubernetes.md#when-you-limit-the-memory-for-a-container-does-it-reserve-guarantee-the-memory)
- [What is an orphant volume and how to remove it?](docs/docker-kubernetes.md#what-is-an-orphant-volume-and-how-to-remove-it)
- [How virtualization works at low level?](docs/docker-kubernetes.md#how-virtualization-works-at-low-level)
- [What is Paravirtualization?](docs/docker-kubernetes.md#what-is-paravirtualization)
- [How is Docker different from a virtual machine?](docs/docker-kubernetes.md#how-is-docker-different-from-a-virtual-machine)
- [Is it possible to generate a Dockerfile from an image?](docs/docker-kubernetes.md#is-it-possible-to-generate-a-dockerfile-from-an-image)
- [Can you explain dockerfile ONBUILD instruction?](docs/docker-kubernetes.md#can-you-explain-dockerfile-onbuild-instruction)
- [Why did Docker jump from version 1.13 to 17.03?](docs/docker-kubernetes.md#why-did-docker-jump-from-version-113-to-1703)
- [How does Docker run containers in non-Linux systems?](docs/docker-kubernetes.md#how-does-docker-run-containers-in-non-linux-systems)
- [How containers works at low level?](docs/docker-kubernetes.md#how-containers-works-at-low-level)
- [Name some limitations of containers vs VM](docs/docker-kubernetes.md#name-some-limitations-of-containers-vs-vm)
- [How to use Docker with multiple environments?](docs/docker-kubernetes.md#how-to-use-docker-with-multiple-environments)
- [Why Docker compose does not wait for a container to be ready before moving on to start next service in dependency order?](docs/docker-kubernetes.md#why-docker-compose-does-not-wait-for-a-container-to-be-ready-before-moving-on-to-start-next-service-in-dependency-order)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Docker questions link generated with markdown-toc</a></i></small>

References:   
[https://www.edureka.co/blog/interview-questions/docker-interview-questions/](https://www.edureka.co/blog/interview-questions/docker-interview-questions/)    
[https://www.educba.com/docker-interview-questions/](https://www.educba.com/docker-interview-questions/)    
[https://www.fullstack.cafe/](https://www.fullstack.cafe/)


### Kubernetes
Answers: [docker-kubernetes.md](docs/docker-kubernetes.md#questions-from-the-readme-list)

**[Tutorial/Concept](https://kubernetes.io/docs/concepts/)**
- [Architecture](docs/docker-kubernetes.md#architecture)
- [Containers - Images](docs/docker-kubernetes.md#containers---images)
- [Jobs](docs/docker-kubernetes.md#jobs)
- [Labels & Selectors](docs/docker-kubernetes.md#labels--selectors)
- [Namespace](docs/docker-kubernetes.md#namespace)
- [Nodes](https://kubernetes.io/docs/concepts/architecture/nodes/)
- [Service](docs/docker-kubernetes.md#service)
- [Workloads - Pods](docs/docker-kubernetes.md#workloads---pods)
- [Replication Controller](docs/docker-kubernetes.md#replication-controller)
- [Ingress](docs/docker-kubernetes.md#ingress)
- [Replica Sets](docs/docker-kubernetes.md#replica-sets)
- [Deployments](docs/docker-kubernetes.md#deployments)
- [Volumes Snapshots](docs/docker-kubernetes.md#volumes-snapshots)
- [Configurations](docs/docker-kubernetes.md#configurations)
- [Secrets](docs/docker-kubernetes.md#secrets)
- [Network Policy](docs/docker-kubernetes.md#network-policy)
- [Secret](docs/docker-kubernetes.md#secret)
- [Scheduling](docs/docker-kubernetes.md#scheduling)
- [Cluster Administration](docs/docker-kubernetes.md#cluster-administration)
- [Extension](docs/docker-kubernetes.md#extension)

**Interview Questions**   
https://www.edureka.co/blog/interview-questions/kubernetes-interview-questions/  
https://www.algrim.co/posts/145-kubernetes-interview-questions#q-1

### Redis
Answers: [redis.md](docs/redis.md#questions-from-the-readme-list)

**Topics**

* [Configuration](docs/redis.md#configuration)
* [Data types](docs/redis.md#data-types)
* [Key-Value Pair Commands](docs/redis.md#key-value-pair-commands)
* [SCAN & MATCH](docs/redis.md#scan--match)
* [Client & Config Commands](docs/redis.md#client--config-commands)
* [Keys](docs/redis.md#keys)
* [Strings](docs/redis.md#strings)
* [Hashes](docs/redis.md#hashes)
* [Lists](docs/redis.md#lists)
* [Sets](docs/redis.md#sets)
* [Sorted Sets](docs/redis.md#sorted-sets)
* [HyperLogLog](docs/redis.md#hyperloglog)
* [Publish Subscribe](docs/redis.md#publish-subscribe)
* [Transactions](docs/redis.md#transactions)
* [Scripting](docs/redis.md#scripting)
* [Connections](docs/redis.md#connections)
* [Server](docs/redis.md#server)
* [Backup](docs/redis.md#backup)
* [Security](docs/redis.md#security)
* [Pipelining](docs/redis.md#pipelining)
* [Partitioning](docs/redis.md#partitioning)
* [Data Persistence](docs/redis.md#data-persistence)
	* [RDB & Snapshotting](docs/redis.md#rdb--snapshotting)
	* [AOF - Append Only File](docs/redis.md#aof---append-only-file)
	* [RDB & AOF in Action](docs/redis.md#rdb--aof-in-action)
* [Redis Cluster](docs/redis.md#redis-cluster-1)
   
**Interview Questions**
* [What Is Redis?](docs/redis.md#what-is-redis)
* [What Is Main Feature Of Redis?](docs/redis.md#what-is-main-feature-of-redis)
* [What Is Limitations Of Redis?](docs/redis.md#what-is-limitations-of-redis)
* [What Is Advantages Of Using Redis?](docs/redis.md#what-is-advantages-of-using-redis)
* [List The Data Structures Supported By Redis?](docs/redis.md#list-the-data-structures-supported-by-redis)
* [List Out The Operation Keys Of Redis?](docs/redis.md#list-out-the-operation-keys-of-redis)
* [What Is Redis-cli?](docs/redis.md#what-is-redis-cli)
* [Explain Repl?](docs/redis.md#explain-repl)
* [What The Basic Features Are Of Redis Which Makes It Awesome Compared To Memcache?](docs/redis.md#what-the-basic-features-are-of-redis-which-makes-it-awesome-compared-to-memcache)
* [We All Know That Reds Is Fast, But Is It Also Durable?](docs/redis.md#we-all-know-that-reds-is-fast-but-is-it-also-durable)
* [What Are The Main Features Of Redis?](docs/redis.md#what-are-the-main-features-of-redis)
* [What Are The Things You Must Have To Take Care While Using Redis?](docs/redis.md#what-are-the-things-you-must-have-to-take-care-while-using-redis)
* [What Is The Difference Between Overriding A Value By Using Set Vs Append?](docs/redis.md#what-is-the-difference-between-overriding-a-value-by-using-set-vs-append)
* [What Do You Mean By Data Modeling In Redis?](docs/redis.md#what-do-you-mean-by-data-modeling-in-redis)
* [Why Redis Is Different As Compared To Other Key-value Stores?](docs/redis.md#why-redis-is-different-as-compared-to-other-key-value-stores)
* [How Do I Move A Redis Database From One Server To Another?](docs/redis.md#how-do-i-move-a-redis-database-from-one-server-to-another)
* [How to start stop restart Redis?](docs/redis.md#how-to-start-stop-restart-redis)
* [How To Get All Keys From Redis?](docs/redis.md#how-to-get-all-keys-from-redis)
* [How To Get Array Data From Redis?](docs/redis.md#how-to-get-array-data-from-redis)
* [How To Set Multiple Values (array) In Redis?](docs/redis.md#how-to-set-multiple-values-array-in-redis)
* [How To Get Set Value From Redis?](docs/redis.md#how-to-get-set-value-from-redis)
* [How To Check Redis Is Running?](docs/redis.md#how-to-check-redis-is-running)
* [How To Remove All Database?](docs/redis.md#how-to-remove-all-database)
* [How To Delete Current Database?](docs/redis.md#how-to-delete-current-database)
* [What Do You Mean By "redis Is Binary Safe"?](docs/redis.md#what-do-you-mean-by-redis-is-binary-safe)
* [How Does Redis Differ From Mongodb? Is There A Use Case When For Redis If Using Mongodb?](docs/redis.md#how-does-redis-differ-from-mongodb-is-there-a-use-case-when-for-redis-if-using-mongodb)
* [How to persist or take snapshot of Redis data?](docs/redis.md#how-to-persist-or-take-snapshot-of-redis-data)
* [Explain Redis use cases](docs/redis.md#explain-redis-use-cases)
* [How we will use redis to oauth token and authentication](docs/redis.md#how-we-will-use-redis-to-oauth-token-and-authentication)
* [Explain some important redis commands](docs/redis.md#explain-some-important-redis-commands)
* [Explain sharding and partitioning in redis](docs/redis.md#explain-sharding-and-partitioning-in-redis)
* [Can we use Redis for pub sub messaging](docs/redis.md#can-we-use-redis-for-pub-sub-messaging)
* [How to secure redis](docs/redis.md#how-to-secure-redis)
* [Explain Pipelining in Redis](docs/redis.md#explain-pipelining-in-redis)
* [Can we add or write scripts in redis](docs/redis.md#can-we-add-or-write-scripts-in-redis)
* [How we maintain transactions in Redis](docs/redis.md#how-we-maintain-transactions-in-redis)
* [Can we use redis as primary database](docs/redis.md#can-we-use-redis-as-primary-database)
* [Can we save blob data in redis](docs/redis.md#can-we-save-blob-data-in-redis)
* [What is maximun allowed key size.](docs/redis.md#what-is-maximun-allowed-key-size)
**Expert**    
* [How can we create auto expire keys and explain it?](docs/redis.md#how-can-we-create-auto-expire-keys-and-explain-it)
* [Explain some blocking operations on list](docs/redis.md#explain-some-blocking-operations-on-list)
* [How Automatic creation and removal of keys happens?](docs/redis.md#how-automatic-creation-and-removal-of-keys-happens)
* [Can we create Lexicographical scores?](docs/redis.md#can-we-create-lexicographical-scores)
* [Explain HyperLogLogs](docs/redis.md#explain-hyperloglogs)
* [Can we iterate the key space of a large collection incrementally?](docs/redis.md#can-we-iterate-the-key-space-of-a-large-collection-incrementally)
* [How can we insert huge data at once (pre-existing data)](docs/redis.md#how-can-we-insert-huge-data-at-once-pre-existing-data)
* [Explain Some Tricks for ram/memory optimization](docs/redis.md#explain-some-tricks-for-rammemory-optimization)
* [How can we use Redis as LRU cache](docs/redis.md#how-can-we-use-redis-as-lru-cache)
* [How can we use Redis in distributed systems](docs/redis.md#how-can-we-use-redis-in-distributed-systems)
* [How can we create secondary indexes with redis](docs/redis.md#how-can-we-create-secondary-indexes-with-redis)

https://redis.io/documentation   
https://redis.io/topics/data-types-intro  


##### Difference between Apache Kafka and Redis
Answers: [redis.md](docs/redis.md#questions-from-the-readme-list)

* [Redis pub-sub is mostly like a fire and forget system where all the messages you produced will be delivered to all the consumers at once and the data is kept no where. You have limitation in memory with respect to redis. Also number of producers and consumers can affect the performance in Redis.](docs/redis.md#redis-pub-sub-is-mostly-like-a-fire-and-forget-system-where-all-the-messages-you-produced-will-be-delivered-to-all-the-consumers-at-once-and-the-data-is-kept-no-where-you-have-limitation-in-memory-with-respect-to-redis-also-number-of-producers-and-consumers-can-affect-the-performance-in-redis)
* [Kafka on other hand is a high throughput, distributed log that can be used like a queue. Here any number of users can produce and consumers can consume at any time they want. It also provides persistence for the messages sent through the queue.](docs/redis.md#kafka-on-other-hand-is-a-high-throughput-distributed-log-that-can-be-used-like-a-queue-here-any-number-of-users-can-produce-and-consumers-can-consume-at-any-time-they-want-it-also-provides-persistence-for-the-messages-sent-through-the-queue)
* [One main difference is that Redis Pub/Sub is push based while Kafka Pub/Sub is pull based. That means messages published to Redis will be automatically delivered to subscribers instantly, while in Kafka Data/messages are never pushed out to consumers, the consumer will ask for messages when the consumer is ready to handle the message.](docs/redis.md#one-main-difference-is-that-redis-pubsub-is-push-based-while-kafka-pubsub-is-pull-based-that-means-messages-published-to-redis-will-be-automatically-delivered-to-subscribers-instantly-while-in-kafka-datamessages-are-never-pushed-out-to-consumers-the-consumer-will-ask-for-messages-when-the-consumer-is-ready-to-handle-the-message)
**Use Redis**
* [If you want fire and forget kind of system, where all the messages that you produce are delivered instantly to consumers.](docs/redis.md#if-you-want-fire-and-forget-kind-of-system-where-all-the-messages-that-you-produce-are-delivered-instantly-to-consumers)
* [If speed is most concerned.](docs/redis.md#if-speed-is-most-concerned)
* [If you can live up with data loss.](docs/redis.md#if-you-can-live-up-with-data-loss)
* [If you don't want your system to hold the message that has been sent.](docs/redis.md#if-you-dont-want-your-system-to-hold-the-message-that-has-been-sent)
* [Amount of data that is gonna be dealt is not huge.](docs/redis.md#amount-of-data-that-is-gonna-be-dealt-is-not-huge)
**Use kafka**
* [If you want reliability.](docs/redis.md#if-you-want-reliability)
* [If you want your system to have a copy of messages that has been sent even after consumption.](docs/redis.md#if-you-want-your-system-to-have-a-copy-of-messages-that-has-been-sent-even-after-consumption)
* [If you can't live up with data loss.](docs/redis.md#if-you-cant-live-up-with-data-loss)
* [If Speed is not a big concern.](docs/redis.md#if-speed-is-not-a-big-concern)
* [If data size is huge](docs/redis.md#if-data-size-is-huge)

https://stackoverflow.com/a/37993809/4428927  

### Akka
Answers: [microservices.md](docs/microservices.md#akka-questions-from-the-readme-list)

Akka is a open-source library or a toolkit written in Scala to create concurrent, distributed and fault-tolerant application.   
     
**Tutorials**    
* [Akka Actor](docs/microservices.md#akka-actor)
* [Akka ActorSystem](docs/microservices.md#akka-actorsystem)
* [Akka Props](docs/microservices.md#akka-props)
* [Akka Child Actor](docs/microservices.md#akka-child-actor)
* [Akka Actor Lifecycle](docs/microservices.md#akka-actor-lifecycle)
* [Actor Send, Reply, Forward Messages](docs/microservices.md#actor-send-reply-forward-messages)
* [Actors](docs/microservices.md#actors)
	* [Location transparency](docs/microservices.md#location-transparency)
	* [Supervision and monitoring](docs/microservices.md#supervision-and-monitoring)
	* [Actor paths and addresses](docs/microservices.md#actor-paths-and-addresses)
	* [Message delivery reliability](docs/microservices.md#message-delivery-reliability)
* [Akka Dispatchers](docs/microservices.md#akka-dispatchers)
* [Akka Routers](docs/microservices.md#akka-routers)
* [Akka HTTP](docs/microservices.md#akka-http)
* [Akka FSM](docs/microservices.md#akka-fsm)
* [Akka TestKit](docs/microservices.md#akka-testkit)
**Experts**
* [Fault tolerance](docs/microservices.md#fault-tolerance)
* [Routing](docs/microservices.md#routing)
* [Dispatching](docs/microservices.md#dispatching)
* [Persistence](docs/microservices.md#persistence)
* [Streams](docs/microservices.md#streams)
* [Clusters](docs/microservices.md#clusters)
	* [Pub Sub](docs/microservices.md#pub-sub)
	* [Sharding](docs/microservices.md#sharding)
	* [Distributed Data](docs/microservices.md#distributed-data)
	* [Cluster aware routers](docs/microservices.md#cluster-aware-routers)
* [Network](docs/microservices.md#network)
* [Discovery](docs/microservices.md#discovery)
* [Co-ordination](docs/microservices.md#co-ordination)

https://doc.akka.io/docs/akka/current/general/index.html

## AI and LLMs

Senior backend interviews now often ask how you would build with LLMs. Start with the basics, then RAG.

| Topic | What's inside |
|---|---|
| [AI and LLM basics](docs/ai-llm-basics.md) | How LLMs work, prompting, structured output, tool calling, agents, MCP, guardrails, evals, cost and latency, an LLM gateway design, Spring AI |
| [RAG](docs/ai-rag.md) | Chunking, embeddings, vector databases, hybrid search, reranking, citations, evaluation, "design a chatbot over company docs" |
| [Inference, fine-tuning and local models](docs/ai-inference-training.md) | Prompt vs RAG vs fine-tune, GPU memory math, quantization, Ollama / llama.cpp / vLLM, LoRA on your own docs, running it locally |
| [AI projects end to end](docs/ai-projects.md) | OCR (English + Hindi), an astrology chart explainer, a granth assistant that answers only from one scripture |
| [Coding with AI assistants](docs/ai-coding-assistants.md) | The workflow that works, giving context, reviewing AI code, security, how to talk about AI in interviews |

## Production-ready apps

| Topic | What's inside |
|---|---|
| [Production-ready apps (backend + frontend)](docs/production-ready.md) | Logs, metrics, traces, OpenTelemetry, ELK / Loki / Grafana, APM (New Relic, Datadog…), frontend monitoring, analytics, SLOs and alerts, 7 incident debugging walkthroughs, safe deploys, a go-live checklist |
| [Docker and Kubernetes](docs/docker-kubernetes.md) | Images, Dockerfiles for Spring and Node, JVM in containers, pods, services, probes, autoscaling, GitOps, a troubleshooting runbook |
| [Cloud: AWS, GCP, Azure](docs/cloud.md) | One table of service names on all 3 clouds, compute choices, VPC, IAM, databases, messaging, DR, cost |
| [Debugging Spring Boot from the inside](docs/spring-debugging.md) | Reading startup errors, conditions report, Actuator, breakpoints inside Spring, debugging security, transactions and slow apps |

## Questions to ask the interviewer

At the end they ask: **"Do you have any questions for us?"** Always ask 2 or 3. Saying "No, I am good" sounds like you are not interested.

**Story:** Buying a house, you don't only answer the seller's questions. You also ask: "Does the roof leak? How are the neighbours?" Good questions show you are serious, and the answers tell you if you want to live there.

### The best 10 questions (pick 2 or 3)

| # | Question | Ask whom | Why it works |
|---|---|---|---|
| 1 | "What would a great first 90 days look like for this role?" | Hiring manager | Shows you think about results. You learn what they really expect. |
| 2 | "What is the team's biggest challenge right now, and how would this role help?" | Anyone | You learn the real problem. You can link it to your own experience in one line. |
| 3 | "How does code go from a laptop to production here? How often do you deploy?" | Engineer | Shows a senior, production mindset. Tells you about CI/CD, tests and on-call. |
| 4 | "Tell me about a recent incident or outage. What changed after it?" | Engineer / manager | Shows you care about reliability. Blameless answers mean a healthy team. |
| 5 | "How are technical decisions made? For example, picking a new database or library." | Senior engineer | Shows you want to own design. You learn if there are design docs, RFCs or one boss. |
| 6 | "How do you balance new features with tech debt and maintenance?" | Manager | Tells you if the code is a mess and if anyone gives time to fix it. |
| 7 | "What does success look like in this role after one year? How is performance measured?" | Hiring manager | Clear goals = fair reviews. Vague answer = warning sign. |
| 8 | "What is the team size and mix? Who would I work with most closely?" | Manager | You learn about seniors, juniors, product and QA around you. |
| 9 | "How is the team using AI coding tools today?" | Engineer | Modern and practical. Shows you keep up, without saying "AI" ten times. |
| 10 | "Is there anything in my background that makes you unsure I fit? I'd like to answer it now." | Last round / manager | Brave and senior. You get a chance to fix a doubt before they decide. |

**Say this in the interview:**

> "Yes, I have a couple. What would a great first 90 days look like for this role? And what is the team's biggest challenge right now?"

**Tips:**
- Ask about **work, team and impact** in technical rounds. Keep **salary, leave and notice period** for HR.
- Listen, then connect: "Interesting. At my last job we had the same problem with slow deploys. I fixed it by..." (one line only).
- Don't ask what you can find on their website ("What does your company do?").
- Write your 3 questions before the call. Change one based on what you heard in the interview.

<details>
<summary><b>More questions (older list)</b></summary>

* What is the most important/valuable thing you have learnt from working here?
* How do your clients and customers define success?
* What would you change around here if you could?
* How do you evaluate new technologies? Who makes the final decisions?
* How do you know what to work on each day?
* Do you tend to roll your own solutions more often or rely on third party tools? What's the rationale in a specific case?
* How do you measure individual performance?
* What does a typical day look like for you?
* What do you think the company can improve at?
* What is your policy on working from home/remotely?
* What are the engineering challenges that the company/team is facing?
* What is the most fulfilling/exciting/technically complex project that you've worked on here so far?
* What is your stack? What is the rationale for/story behind this specific stack?
* What do you measure? What are your most important product metrics?
* What does the company do to nurture and train its employees?
* If you hire person, what do you have for him to study product you're working on and processes in general? Do you have specifications, requirements, documentation?
* Tell me about the main products of your company.
* How do you train/ramp up engineers who are new to the team?
* What are some weaknesses of the organization?
* Why did you choose to come to this company?
* What is the most frustrating part about working here?
* How does the engineering team balance resources between feature requests and engineering maintenance?
* What makes your product competitive?
* Is the team growing, and what sort of opportunities will there be in the next year/3 years?
* What is your team's biggest challenge right now?
* What is the current team composition like?
* Why have the last few people left?
* How are you funded?
* What is unique about working at this company that you have not experienced elsewhere?
* When was the last time you interacted with a founder? What was it regarding? Generally how involved are the founders in the day-to-day?
* What has been the worst technical blunder that has happened in the recent past? How did you guys deal with it? What changes were implemented afterwards to make sure it didn't happen again?
* What is the most costly technical decision made early on that the company is living with now?
* How much time do you spend on new project development versus maintenance?
* What are your highest priorities right now? For example, new features, new products, solidifying existing code, reducing operations overhead?
* Does the company culture encourage entrepreneurship? Could you give me any specific examples?
* What would I work on if I joined this team and who would I work most closely with?
* Are you profitable? If no, what's your plan for becoming profitable?
* How long does the average engineer stay at the company?

</details>

## Open source contributions
[Awesome Repo for beginners](https://github.com/MunGell/awesome-for-beginners)

For contributing go through this article on [First Time Contributions](https://github.com/firstcontributions/first-contributions)
