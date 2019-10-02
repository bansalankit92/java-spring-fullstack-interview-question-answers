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

## Microservices
### Apache Kafka

### Kubernetes

### Docker

### Redis

### Akka

## Open source contributions
[Awesome Repo for beginners](https://github.com/MunGell/awesome-for-beginners)

For contributing go through this article on [First Time Contributions](https://github.com/firstcontributions/first-contributions)
