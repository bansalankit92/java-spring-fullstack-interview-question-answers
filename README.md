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


## Backend
### Java
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
**Spring Core**
* What Is Spring Framework?
* What Are the Benefits of Using Spring?
* What Spring Sub-Projects Do You Know? Describe Them Briefly.
* What Is Dependency Injection?
* How Can We Inject Beans in Spring?
* Which Is the Best Way of Injecting Beans and Why
* What Is the Difference Between Beanfactory and Applicationcontext?
* What Is a Spring Bean?
* What Is the Default Bean Scope in Spring Framework?
* How to Define the Scope of a Bean?
* Are Singleton Beans Thread-Safe?
* What Does the Spring Bean Lifecycle Look Like?
* What Is the Spring Java-Based Configuration?
* Can We Have Multiple Spring Configuration Files in One Project?
* What Is Spring Security?
* What Is Spring Boot?
* Name Some of the Design Patterns Used in the Spring Framework?
* How Does the Scope Prototype Work?
 
**Spring Web MVC**
* How to Get Servletcontext and Servletconfig Objects in a Spring Bean?
* What Is a Controller in Spring Mvc?
* How Does the @Requestmapping Annotation Work?
 
**Spring Data Access**
* What Is Spring Jdbctemplate Class and How to Use It?
* How Would You Enable Transactions in Spring and What Are Their Benefits?
* What Is Spring Dao?
 
**Spring Aspect-Oriented Programming (AOP)**
* What Is Aspect-Oriented Programming?
* What Are Aspect, Advice, Pointcut, and Joinpoint in Aop?
* What Is Weaving?
 
**Spring 5**
* What Is Reactive Programming?
* What Is Spring Webflux?
* What Are the Mono and Flux Types?
* What Is the Use of Webclient and Webtestclient?
* What Are the Disadvantages of Using Reactive Streams?
* Is Spring 5 Compatible with Older Versions of Java?
* How Ow Spring 5 Integrates with Jdk 9 Modularity?
* Can We Use Both Web Mvc and Webflux in the Same Application?
 
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
