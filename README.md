# Computer science foundation/ Interview preparation/ Junior to Senior Developer
Contains almost all topics for Interview Preparation for a full stack developer or frontend engineer or backend developer or to become a junior to senior developer
Consolidated place to prepare for tech interviews(Currently adding all topic's name and then will add the contents).

**Table of contents**
- [General Topics](#general-topics)
  * [DS Algo](#ds-algo)
  * [OOPS](#oops)
  * [Principles](#principles)
  * [Clean Code](#clean-code)
  * [Design Patterns](#design-patterns)
  * [Object Oriented Design](#object-oriented-design)
  * [System Design](#system-design)
- [Frontend](#frontend)
  * [General ui questions](#general)
  * [Js](#js)
  * [HTML](#html)
  * [CSS](#css)
- [Backend](#backend)
  * [Java](#java)
  * [Spring](#spring)
    + [Spring Core](#spring-core)
    + [Spring Web MVC](#spring-web-mvc)
    + [Spring Boot](#spring-boot)
    + [Spring Aspect-Oriented Programming (AOP)](#spring-aspect-oriented-programming--aop-)
    + [Spring 5](#spring-5)
  * [Database Connectivity - JDBC, Spring JDBC & JPA, Hibernate](#database-connectivity---jdbc--spring-jdbc---jpa--hibernate)
  * [Unit Testing](#unit-testing)
- [Web Services](#web-services)
  * [SOAP Web Services](#soap-web-services)
  * [RESTful Web Services](#restful-web-services)
- [Databases](#databases)
  * [MongodDB](#mongoddb)
  * [MySQL](#mysql)
- [Microservices](#microservices)
  * [Apache Kafka](#apache-kafka)
  * [Docker](#docker)
  * [Kubernetes](#kubernetes)
  * [Redis](#redis)
  * [Akka](#akka)
  * Netflix Stack
    * Discovery Server - Eureka
    * Client Side Load Balancer - Ribbon
    * API Gateway - Zuul
    * Circuit Breakers/Resilience/Fault tolerance - Hystrix
- Others
  * OAuth2
  * SSL
  * JWT
- [Questions to Ask after interview](#questions-to-ask-after-interview)
- [Open source contributions](#open-source-contributions)

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
### MongodDB
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
