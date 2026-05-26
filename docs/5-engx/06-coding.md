# Culture of Coding

### Clean Code Principles

Clean code refers to writing code that is easy to understand and maintain by humans, not just computers.

| Principle | Description |
| ----------- | ------------- |
| **Simplicity** | Code should be as simple as possible; avoid unnecessary complexity |
| **Consistency** | Follow consistent coding style, design principles, patterns and best practices across the codebase |
| **Readability** | Code should be easily understandable using meaningful names and logical organization |
| **Comments/Documentation** | Explain WHY certain decisions were made, not HOW code works |
| **Error Handling** | Handle errors gracefully; anticipate potential failures (**Fail-fast**) |
| **Refactoring** | Regular refactoring improves structure without changing functionality |
| **Testing** | Clean code is testable; structure allows easy verification |
| **Performance/Stability** | Optimize for performance without compromising integrity |

## Design Pattern

A **design pattern** is a generalized approach addressing frequently occurring problems.
It is a template for how to solve a problem that can be used in many different situations.

A design pattern isn't a finished design that can be transformed directly into code.

### Structural Patterns - Prominent

| Pattern | Short Description | Goal/Issue/Problem |
| --------- | ------------------- | ------------------- |
| **Adapter** | Wrapping own interface around an existing class | Allows existing classes with incompatible interfaces to work together. Convert the interface of a class into another interface clients expect. |
| **Bridge** | Decouples an abstraction from its implementation | "Hardening of the software arteries" has occurred by using subclassing. Use interfaces instead of subclassing abstract classes. |
| **Facade** | A single class representing simplified view of an entire complex subsystem | Client needs simplified interface to overall functionality of complex subsystem. Provide unified interface to a set of interfaces. |
| **Proxy** | Provides a placeholder for another object with the same interface | To control access, reduce cost, and reduce complexity. |
| **Decorator** | Adds/changes behavior in an existing method at runtime | Attach additional responsibilities dynamically keeping the same interface. Flexible alternative to subclassing. |

### Structural Patterns - Others

| Pattern | Description |
| --------- | ------------- |
| **Module/Namespace** | Group several related elements into a single conceptual entity |
| **Composite/Node** | Compose objects into tree structures for part-whole hierarchies |
| **Flyweight** | Use sharing to support large numbers of similar objects efficiently |
| **Front Controller** | Provides centralized entry point for handling requests in web applications |
| **Twin** | Multiple inheritance in languages that don't support it |
| **Marker/Tag** | Empty interface to associate metadata with a class |

### Creational Patterns

*Creational patterns create objects for you, rather than having you instantiate objects directly, giving more flexibility in deciding which objects need to be created.*

| Pattern | Description |
| --------- | ------------- |
| **Abstract Factory** | Create families of related or dependent objects without specifying concrete classes |
| **Factory Method** | Define interface for creating objects, but let subclasses decide which classes to instantiate |
| **Object Pool** | Recycle objects no longer in use to avoid expensive acquisition and release of resources |
| **Builder** | Separate the construction of a complex object from its representation |
| **Prototype** | Specify kinds of objects using a prototypical instance, create new objects by copying |
| **Singleton** | Ensure a class has only one instance, provide global point of access |
| **Multiton** | Ensure a class has only named instances |
| **Lazy Initialization** | Delay creation of an object until first needed |
| **RAII** | Ensure resources are properly released by tying them to lifespan of suitable objects |

### Behavioral Patterns - Prominent

*Most are specifically concerned with communication between objects, to decouple senders and receivers.*

| Pattern | Description |
| --------- | ------------- |
| **Iterator** | Access elements of an object sequentially without exposing underlying representation |
| **Observer** | One-to-many dispatching of changes of 'subject' across arbitrary observers |
| **Pub/Sub** | Indirect Observers via EventBus |
| **State** | Allow an object to alter its behavior when its internal state changes |
| **Visitor** | Represent an external operation to be performed on elements of an object structure |
| **Chain of Responsibility** | Chain receiving objects and pass request along until an object handles it |
| **Command** | Encapsulate a request as an object to parameterize clients with different requests |
| **Mediator** | Define interface for communication between objects; objects delegate interaction to mediator |

### Behavioral Patterns - Exotic

| Pattern | Description |
| --------- | ------------- |
| **Servant** | Define common functionality for a group of classes |
| **Strategy** | Family of interchangeable algorithms selected on-the-fly at runtime |
| **Memento** | Capture and externalize an object's internal state for later restoration (undo) |
| **Interpreter** | Implement a specialized language; define representation for grammar |
| **Template Method** | Define skeleton of algorithm as abstract class; subclasses provide concrete behavior |
| **Null Object** | Avoid null references by providing a default object |
| **Specification** | Recombinable business logic in Boolean fashion |

### Concurrency Patterns

| Pattern | Description |
| --------- | ------------- |
| **Lock** | Thread puts "lock" on a resource, preventing other access |
| **Active Object** | Decouple method execution from invocation in their own thread of control |
| **Balking** | Only execute an action when object is in a particular state |
| **Thread Pool** | Number of threads performing tasks usually organized in a queue |
| **Binding Properties** | Combine observers to force properties to be synchronized |
| **Blockchain** | Decentralized way to store data and agree on processing in a Merkle tree |
| **Double-checked Locking** | Reduce overhead of acquiring a lock by first testing in an unsafe manner |
| **Guarded Suspension** | Manage operations requiring both lock and precondition |
| **Join** | Write concurrent, parallel, distributed programs by message passing |
| **Reactor** | Provide asynchronous interface to resources handled synchronously |

### Anti-Patterns

#### Software Design Anti-Patterns

| Anti-Pattern | Description |
| -------------- | ------------- |
| **Big Ball of Mud** | A system with no recognizable structure |
| **Abstraction Inversion** | Not exposing implemented functionality required by callers |
| **Gold Plating** | Continuing work well past the point where extra effort adds value |
| **Inner-Platform Effect** | A system so customizable it becomes a poor replica of the development platform |
| **Interface Bloat** | Making an interface so powerful it is extremely difficult to implement |

#### OOP Anti-Patterns

| Anti-Pattern | Description |
| -------------- | ------------- |
| **Anemic Domain Model** | Domain model without business logic; validation/mutation logic placed elsewhere |
| **God Object** | Concentrating too many functions in a single class |
| **Object Orgy** | Failing to properly encapsulate objects, permitting unrestricted access |
| **Poltergeists** | Objects whose sole purpose is to pass information to another object |
| **Yo-yo Problem** | Structure (e.g., inheritance) hard to understand due to excessive fragmentation |

#### Programming Anti-Patterns

| Anti-Pattern | Description |
| -------------- | ------------- |
| **Cargo Cult Programming** | Using patterns and methods without understanding why |
| **Spaghetti Code** | Programs whose structure is barely comprehensible |
| **Lasagna Code** | Programs with too many layers of inheritance |
| **Magic Numbers** | Including unexplained numbers in algorithms |
| **Repeating Yourself** | Writing code with repetitive patterns; avoid with DRY principle |
| **Shotgun Surgery** | Adding features spanning multiple implementations in a single change |

## Design principles

#### Abstraction and Composition

| Principle | Description |
| ----------- | ------------- |
| **Abstraction Principle** | Each significant piece of functionality should be implemented in just one place |
| **Separation of Concerns (SoC)** | Separate program into distinct features with minimal overlap |
| **GRASP** | General Responsibility Assignment Software Patterns |
| **S.O.L.I.D.** | Five principles of object-oriented design |
| **Inversion of Control** | Custom code receives flow of control from a generic framework |
| **Uniform Access Principle** | All services should be available through uniform notation |
| **Principle of Least Astonishment** | Component should behave as most users expect it to |
| **Law of Demeter** | A method should only call methods of its immediate collaborators |

#### SOLID Principles

*SOLID principles aim to reduce module changes to addition and removal, supporting deferring technical decisions and dividing labor.*

| Letter | Principle | Description |
| -------- | ----------- | ------------- |
| **S** | Single Responsibility | An entity should be concerned with only one function; should have only one reason to change from a single business role |
| **O** | Open/Closed | An entity should be open for extension, but closed for modification |
| **L** | Liskov Substitution | A typed object should be replaceable with instances of their subtypes without altering correctness |
| **I** | Interface Segregation | Make fine-grained interfaces that are client specific |
| **D** | Dependency Injection | One should depend upon abstractions, not concretions |

#### Minimalism

| Principle | Description |
| ----------- | ------------- |
| **Hollywood Principle** | "Don't call us, we'll call you" |
| **80:20 Rule** | Focus on the 20% that produces 80% of results |
| **Don't Repeat Yourself (DRY)** | Every piece of knowledge should have a single, unambiguous representation |
| **KISS Principle** | Keep It Simple, Stupid |
| **Worse is Better** | Simple implementation is more important than complete functionality |
| **YAGNI** | You Aren't Gonna Need It - don't implement until necessary |
| **Rule of Least Power** | Use the least powerful language suitable for the purpose |

### Code Smells

#### Naming Conventions

| Smell | Description |
| ------- | ------------- |
| **Excessively Long Identifiers** | Using naming conventions for disambiguation that should be implicit |
| **Excessively Short Identifiers** | Names should reflect function unless obvious |
| **Excessive Use of Literals** | Should be coded as named constants; externalize to resource files |

#### Application-Level Smells

| Smell | Description |
| ------- | ------------- |
| **Spaghetti Code** | Structure barely comprehensible due to misuse of code structures |
| **Duplicated Code** | Identical or similar code in more than one location |
| **Contrived Complexity** | Forced usage of overcomplicated design patterns |

#### Class-Level Smells

| Smell | Description |
| ------- | ------------- |
| **Large Class (God Object)** | A class that has grown too large |
| **Feature Envy** | A class using methods of another class excessively |
| **Inappropriate Intimacy** | A class depending on implementation details of another |
| **Refused Bequest** | A class overriding methods that break the base class contract |
| **Lazy Class** | A class that does too little |
| **Cyclomatic Complexity** | Too many branches or loops |

#### Method-Level Smells

| Smell | Description |
| ------- | ------------- |
| **Too Many Parameters** | Hard to read, calling and testing complicated |
| **Long Method** | A method that has grown too large |
| **Excessive Return of Data** | Returning more than each caller needs |

#### Design Smells

| Smell | Description |
| ------- | ------------- |
| **Missing Abstraction (Primitive Obsession)** | Using clumps of data or encoded strings instead of creating abstraction |
| **Multifaceted Abstraction** | Abstraction with multiple responsibilities |
| **Duplicate Abstraction** | Two or more abstractions with identical names or implementation |
| **Deficient Encapsulation** | Declared accessibility more permissive than required |
| **Unexploited Encapsulation** | Using explicit type checks instead of exploiting polymorphism |
| **Broken Modularization** | Data/methods that should be localized are separated |
| **Insufficient Modularization** | Abstraction not completely decomposed |
| **Cyclically-dependent Modularization** | Two or more abstractions depend on each other |

### See also

- **Zen of Python**: Principles guiding Python design
- **Unix Philosophy**: Simple, modular, composable programs
- **List of Software Development Philosophies**: Various guiding principles
