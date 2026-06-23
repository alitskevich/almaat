# Computation Fundamentals

## Data

### Knowledge Organization

---

**`Taxonomy`** := A hierarchical structure defining "is-a" general/specific relations between concepts, organizing into groups based on shared characteristics. Answers: "What are the types of things?"

---

**`Ontology`** := A formal explicit declarative description of a domain comprising concepts, properties, and restrictions. Answers: "What are there and how do they relate?"

---

**`Knowledge Base`** := An ontology with a set of individual instances of classes.

---

**`Data Model`** := Mathematical representations of physical systems containing equations that describe behavioral relationships.

---

**`Domain-Specific Language (DSL)`** := A specialized language tailored to express operations, configurations, or processes within a specific domain.

## Computation

---

**`Algorithm`** := A prescription for how to apply certain transformations on data pursuing a specific goal; may halt with terminal output or never halt.

---

**`Specification`** := Formal properties used to outline expected output of an algorithm in correspondence to its input.

---

**`Correctness`** := Satisfaction of an algorithm's actual computation with respect to a priori defined specification.

---

**`Data Transformer`** := A specific circuit that deterministically consumes input, transforms it, and provides output under some `Algorithm`.

---

**`Dataflow`** := Interdependent exchange of computed data between Transformers over time.

---

**`Runtime`** := A system of transformers able to execute dataflow - recognize, store, access, interpret, and transform data.

---

**`Computation`** := The process of `Reasoning` by executiong `Dataflow` on given input by some real runtime until outcome is evaluated.

## Lambda Calculus

Lambda Calculus (λ-Calculus) is a *formal system* expressing computation through:

1. Constructions of λ-expressions
2. Reductions on them

The set of lambda expressions (Λ) can be defined inductively over a set of variables (alphabet):

---

**`Expression`** := The three forms of λ-expressions.

> `<variable> | <function> | <application>`

---

**`Function`** := Where x is bound to expression M.

> `λ<x-variable>.<M-expression>`

---

**`Application`** := Where N substitutes into M instead of bound variable.

> `<M-expression> <N-expression>`

---

**`α-conversion`** := Renaming to avoid collisions.

> `λx.M[x] → λy.M[y/x]`

---

**`β-reduction`** := Replacing the bound x with the argument expression in the body of the abstraction.

> `(λx.M)N → M[N/x]`

---

**`η-conversion`** := Extensional equality.

> `λx.(f x) → f`

### Code and Composability

---

**`Contract`** := Conditions and limitations that guarantee predictable runtime behavior; errors reported when violated.

---

**`Code`** := Text in some formal language interpreted by runtime as instructions for data transformations.

---

**`Referential Transparency`** := Ensuring an expression can be replaced with its value without changing program behavior.

---

**`Equivalence (≡)`** := Ensuring two expressions can be safely swapped in program text.

---

**`Component`** := A named piece of code that can be combined with others to build complex components.

---

**`Composability`** := Ability of code to be combined into new, more complicated code.

### Principles of Composability

Composability is state-of-art, and system design should follow correct
Contracts around Separation, Ownership, and Responsibility:

1. **Encapsulation**: Encapsulate tightly cohesed own state necessary and sufficient for its duty
2. **Delegation**: Be responsible for one single duty; delegate all other functions outside
3. **Single Language**: Operate on well-defined glossary concepts providing a single layer of abstraction
4. **Server, not Service**: Communicate with outer context via pre-defined Contract in loosely coupled way
