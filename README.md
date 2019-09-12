# Computer science foundation/ Interview preparation/ Junior to Senior Developer
Contains almost all topics for Interview Preparation for a full stack developer or frontend engineer or backend developer or to become a junior to senior developer
Consolidated place to prepare for tech interviews(Currently adding all topic's name and then will add the contents).

**Table of contents**
- [Computer science foundation/ Interview preparation/ Junior to Senior Developer](#computer-science-foundation--interview-preparation--junior-to-senior-developer)
  * [General Topics](#general-topics)
    + [DS Algo](#ds-algo)
    + [OOPS](#oops)
    + [Principles](#principles)
    + [Clean Code](#clean-code)
    + [Design Patterns](#design-patterns)
    + [System Design](#system-design)
  * [Frontend](#frontend)
    + [Js](#js)
    + [HTML](#html)
    + [CSS](#css)
  * [Backend](#backend)
    + [Java](#java)
    + [Spring](#spring)
    + [JPA](#jpa)
  * [Databases](#databases)
    + [MongodDB](#mongoddb)
    + [MySQL](#mysql)
  * [Microservices](#microservices)
    + [Apache Kafka](#apache-kafka)
    + [Kubernetes](#kubernetes)
    + [Docker](#docker)
    + [Redis](#redis)
    + [Akka](#akka)
  * [Open source contributions](#open-source-contributions)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

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

### System Design

**Design Baics**
* Concurrency
* CAP Theorem
* Load Balancing
* Consistent Hashing
* Caching
* Indexes
* Proxies
* SQL vs. NoSQL
* Data Partitioning
* Data Replication
* Horizontal vs Vertical Scaling
* Map Reduce
* Long-Polling vs WebSockets vs Server-Sent Events

**Design Problems**
* Design Full Text Search
* Design Lift/Elevator
* Design Coffee Vending machine
* Design Parking System
* Design a URL Shortening service like TinyURL
* Design Quartz Scheduler
* Design a Web Crawler
* Design Pastebin
* Design Push notification.
* Design Instagram
* Design Dropbox/Google drive
* Design Facebook Messenger
* Design Twitter
* Design Youtube or Netflix
* Design Movie ticket system(BookMyShow)
* Design Typeahead Suggestion
* Design an API Rate Limiter
* Design Event Management System
* Design Twitter Search
* Design Facebook’s Newsfeed
* Design Yelp or Nearby Friends
* Design Uber backend
* Other famous platforms like Quora, UberEats, Reddit, Hackerrank

Read:  
https://gist.github.com/vasanthk/485d1c25737e8e72759f  
http://highscalability.com/  
Video:  
https://www.youtube.com/watch?v=ZgdS0EUmn70  

## Frontend  
### Js

### HTML

### CSS

## Backend
### Java

[OOPs in Java](https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/)  
[Solid Principles in Java](https://www.baeldung.com/solid-principles)

### Spring

### JPA

## Databases
### MongodDB
### MySQL

## Microservices
### Apache Kafka

### Kubernetes

### Docker

### Redis

### Akka

## Open source contributions
[Awesome Repo for beginners](https://github.com/MunGell/awesome-for-beginners)

For contributing go through this article on [First Time Contributions](https://github.com/firstcontributions/first-contributions)
