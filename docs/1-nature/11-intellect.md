# Intellect

Intellect is the capacity to form, validate, and apply `Knowledge`. This chapter is organized in three layers. **Epistemology** specifies the formal structure of beliefs and proofs — how `Name`, `Concept`, and `Opinion` combine into `Thesis`. **Mind** describes the apparatus by which a `Mind` produces `Thought` from `Signal`. **Knowledge** defines what a `Mind` retains across `Step` — the validated representations that compress experience into reusable form and culminate in a `Paradigm` for action.

## Branches of Philosophy

Intellect sits inside a broader philosophical landscape. Epistemology — the focus of this chapter — is one branch among several.

| Branch | Definition |
|---|---|
| **Metaphysics** | The study of existence and reality, exploring its most general features such as idealism/materialism, objects and their properties, matter and mind, order/entropy, systems, and information. |
| **Mathematics** | The study of properties of pure abstract entities, given under certain axioms (see MSC2010 classification). |
| **Axiology** | The study of value and valuation. |
| **Epistemology** | The study of what knowledge is and how we acquire it. Related: Upper ontology. |
| **Aesthetics** | The study of art and beauty, seeking to understand what makes art what it is and whether beauty is truly in the eye of the beholder. |
| **Ethics** | The study of moral principles, rules, and codes of conduct that categorize behaviors, intentions, decisions, and actions as proper (right) or improper (wrong). *See: Trolley Dilemma.* |
| **Politics** | The study that takes ethics to a larger scale, applying it to groups of people, their relationships, influence, and power, including governments, laws, justice, authority, rights, liberty, sustainability, and ecology. |

## Epistemology

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Theory` | A set of Terms — `Name` and `Concept` — for `Opinion` over a `Language` (Logic) and an `Attribute-Space` (`Reality`) | `Theory := ({Name}, {Concept}, Language, Attribute-Space)` | A *coordinated vocabulary plus the inferential machinery* that lets `Opinion` combine into `Thesis`. |
| `Name` | An `Expression` of `Language` associated with `Presentation` (Entities) of the `Attribute-Space` | `Name :: Expression → Presentation` | Picks out particular instances. Complement: `Concept`. |
| `Concept` | An `Expression` of `Language` associated with `Place` (regions) of the `Attribute-Space` | `Concept :: Expression → Place` | Denotes categories rather than instances. Aligns with Frege's distinction between Sense and Reference. |
| `Opinion` | An `Expression` of `Language` associated with an evaluation of whether `Presentation` belongs to `Place` | `Opinion :: Expression → (Presentation × Place → {0, 1})` | The atomic unit of belief — a proposition asserting membership of entities in categories. |
| `Thesis` | A `Set` of `Opinion` in Logic | `Thesis := {Opinion}` in Logic | `Knowledge` derived from pure reason alone — a heuristic conjecture awaiting `Validation`. |
| `Proof` | A `Derivation` of `Thesis` according to a `Theory` | `Proof := Derivation(Thesis) under Theory` | Subjects themselves remain inaccessible; we form `Opinion` about their `Presentation` within specific Logics. |
| `Doubt` | A suspended `Opinion` — the recognition that current `Knowledge` is insufficient to evaluate membership of a `Presentation` in a `Place` | `Doubt :: Opinion → suspended` | The disposition that drives `Validation`. Without `Doubt`, `Thesis` ossifies into dogma; with excessive `Doubt`, no `Paradigm` stabilizes. Productive cognition lives in the band between certainty and skepticism. |

### Reasoning

`Reasoning` is the engine that turns existing `Opinion` into new `Thesis` — the productive activity of `Epistemology`.

| Term | Definition | Notes |
|---|---|---|
| `Reasoning` | The process of generating new *a priori* `Knowledge` (conclusions) from existing `Knowledge` (premises) | Yields `Thesis` awaiting `Validation`. |
| `Inference` | A path of `Reasoning` that either validates a given `Opinion` or constructs a new valid `Opinion` | The mechanism by which `Proof` is assembled. |
| `Logic` | A constructive way of inferencing based on an *a priori* foundation | The discursive machinery of a `Theory`'s `Language`. |
| `Intuition` | A non-constructive "direct" way of reasoning without need of external foundations or proof | The non-discursive complement to `Logic`. |

### Types of Reasoning

| Type | Description |
|---|---|
| **Deduction** | Reasoning by assertion of a general rule, proceeding to a guaranteed specific conclusion. |
| **Induction** | Reasoning from the specific to the general — beginning with limited observations and proceeding to generalized conclusions (predictions) likely in light of accumulated evidence. |
| **Backward Induction** | Introducing a hypothesis first, then trying to find the inference to it. |
| **Abduction** | Reasoning by proceeding to the likeliest possible explanation from an incomplete set of information (taking your best shot). |
| **Abstraction** | Reasoning by cutting off details, slicing dimensions, and reducing qualities to consider. |
| **Analysis** | Reasoning by narrowing context or splitting into particular contexts. |
| **Synthesis** | Reasoning by extending context or gathering correlated contexts. |
| **Analogy** | Reasoning by "rough" (abstracted, partial, inadequate) mapping of phenomena between different contexts. |
| **Modelling** | Reasoning by constructing an artificial/abstract model (simulation) of considered phenomena, mapped to some extent. |

### Formal Systems

A `Theory`'s `Language` — the substrate on which `Reasoning` operates — is itself a *formal system* built from a small set of primitives.

The formal apparatus for words, grammars, and derivations. This part underlies `Code`, `Information`, and `Knowledge` in later chapters — anything involving symbolic encoding ultimately bottoms out in `Language`.

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Alphabet` | A finite `Set` of endemic `Azon`s (`Symbols`) | `Alphabet := {Symbol}`, finite |  |
| `Expression` | A finite `Row` of `Symbols` | `Expression :: Row(Symbol)` |  |
| `Dictionary` | The `Set` of all `Expression` over an `Alphabet` | `Dictionary := {Expression : letters ∈ Alphabet}` |  |
| `Rule` | A directed `Pair` `(S → S')` over `Expression`s of the `Dictionary` | `Rule := (S → S')`, `S, S' ∈ Dictionary` | A production / rewrite rule — see `Arrow` in [02-graph](02-graph.md). |
| `Grammar` | A `Set` of `Rule` over the `Dictionary` | `Grammar := {Rule}` |  |
| `Conclusion` | A `Composition` of `Rule`s from the `Grammar` | `Conclusion := R₁.R₂...Rₙ`, `Rᵢ ∈ Grammar` | A chain of rule applications leading from one `Expression` to another. |
| `Theorem` | A `Expression` derivable in the `Grammar` — the value of a `Conclusion` | `E := Conclusion(W)` for some seed `W` |  |
| `Theory` | The `Dictionary` of all `Theorem` derivable from a given `Expression` | `Theory(E) := {Conclusion(E)}` | The derivational closure of `E`. |
| `Termin` | A terminal `Theorem` from which nothing more can be derived | `Theory(N) = 0` | A derivational fixed point. |
| `Axiom` | An `Theorem` of the `Dictionary` that cannot be derived in the `Grammar` | `Axiom := W ∈ Dictionary : ¬∃ Conclusion → W` | The irreducible starting axioms — every `Conclusion` begins at a `Ground`-word. |
| `Formal Language` | A pair ({`Axiom`}, `Theory`) closed under a `Grammar` | `Language := ({Axiom}, {N : derivable from Axiom via Grammar})` |  |

| Term | Definition |
|---|---|
| **Formalism** | A defined way to construct some theory (formal/axiomatic system). |
| **** | An expression that may be inferred from axioms in a given grammar (well-formed formula). |
| **Interpretation** | A predefined mapping from each formula (signifier, name) of a given theory to either: a distinct corresponding entity (*denotation*: extension, referent, example) of a given external structure, or a set of predicates (*logic*: intension, meaning, sense) over such entities. |

**Formula qualities.** A formula is **satisfied** in a given logic IF its corresponding predicate is true. IF all formulae are satisfied in a given logic, THEN its knowledge is called a **model**. An expression is:

- **Logically consistent** if it has at least one satisfied interpretation.
- **Logically valid (logical truth)** if it is satisfied by every interpretation.
- **Logical consequence** of ψ if it is satisfied in every interpretation that satisfies ψ.

**Limitations of Logic.** All logics are bounded along three axes:

1. **Completeness** — ability to prove all truths.
2. **Consistency** — not proving both true and false.
3. **Decidability** — proving belonging to a theory.

> See: Gödel's incompleteness theorems, Turing machines, intuitionism, logicism.

## Mind

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Source` | An `Azon` with a non-empty `Codomain` — an `Azon` considered from the perspective of its outputs | `Source :: Azon, COD ≠ 0` | In a `System`, a `Source` is any `Azon` characterized primarily by the values it produces for other `Participant`s. |
| `Mind` | A `System` of `Neuron` and `Sensor` | `Mind := System over {Neuron, Sensor}` | A `Mind` is a `System` whose **`State`** is `Thought` (the distribution of weights across `Neuron`s), whose internal **`Influence`** is the weighted signals between `Neuron`s, and whose **`Behavior`** is the projection of `Thought` into actions or expressed `Word`s (speech, motor output, written words). |
| `Sensor` | A `Source` that outputs a numerical Weight in response to external `Influence` | `Sensor :: external-Influence → Weight ∈ Number` | Within the `Mind`'s internal topology, `Sensor` is a `Source` (origin). Its effective input is `Influence` from outside the `Mind` — it converts external `Influence` into an internal `Signal`. |
| `Neuron` | A `Source` that outputs a numerical Weight equal to the weighted sum of evaluations of `Neuron`s/`Sensor`s in its Context | `Neuron(N) := ∑ wᵢ · Nᵢ` over Context | Each `Neuron` is a tiny weighted `Composition` over its Context. |
| `Thought` | A distribution of Weight across `Neuron`s | `Thought :: Neuron → Weight` | The internal representation — the pattern of activation across the network. `Thought` is the `Mind`'s `State`, not its `Behavior`. |
| `Signal` | A distribution of Weight across `Sensor`s | `Signal :: Sensor → Weight` | The external stimulus pattern — the input projection from the `Environment` into the `Mind`. |
| `Message` | A `Signal` intended by a `Source` to be decoded by a receiver's `Code` | `Message := Signal under (sender intent, receiver Code)` | The unit `Communication` exchanges. A `Message` is a `Signal` viewed *under* a sender's intent and a receiver's decoding apparatus — not raw sensory pattern but pattern shaped for transmission. |
| `Memory` | A persistent modification of `Neuron` weights such that prior `Thought` can be re-evoked by partial `Signal` | `Memory :: Signal_partial → Thought_re-evoked` | Compression of past `Signal`s into the structure of the `Mind` itself. `Memory` is not storage of past `Thought` — it is the *disposition to reproduce them*. Re-evocation is reconstruction, not retrieval. |

## Knowledge

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Code` | An `Azon` that responds with specific `Thought`s (Meanings) to specific `Signal`s (Messages) for a `Mind` | `Code :: Signal → Thought` | Maps `Signal`-patterns to `Thought`-patterns — the `Message` → `Meaning` relation for a cognitive system. |
| `Meaning` | The `Thought` evoked in a receiver by a `Message` under a shared `Code` | `Meaning := Code(Message)` | The output side of a `Code`'s response. |
| `Information` | A `Message` that has precise influence on a receiver's `Thought` | `Information := Message under shared Code` | Distinguished from `Signal`: `Information` presupposes a shared `Code`. A `Signal` without `Code` is noise, not `Information`. |
| `Knowledge` | A set of validated representations (`Theory`, `Concept`, `Opinion`) that a `Mind` uses to predict and act upon `Reality` | `Knowledge := {Theory, Concept, Opinion}_validated` | The four properties of well-formed `Knowledge`: **adequate** (matches observed `Presentation`), **accessible** (retrievable from `Memory`), **coherent** (internally non-contradictory), **predictive** (allows anticipation of future `State`). `Knowledge` is not Being itself — only its representation. |
| `Reality` | The totality of conceptions about Being — the space of which `Knowledge` is the validated subset | `Reality := space of conceptions about Being; Knowledge ⊆ Reality` | **Objective Reality** is the intersection of `Knowledge` across a community of knowers — the shared subset on which `Communication` is reliable. |
| `Experience` | `Knowledge` obtained through observation — whether everyday lived experience or deliberate experimentation | `Experience := Knowledge derived from Trajectory` | The empirical counterweight to `Thesis`: `Experience` grounds `Knowledge` in actually-traversed `Trajectory`. |
| `Cognition` | The process of creating new or accessing existing `Knowledge` | `Cognition :: (Signal, Knowledge) → Knowledge'` | Being is vastly more complex than our capacity for `Cognition`; no `Knowledge` can be simultaneously universal, final, complete, and non-contradictory (cf. Gödel). `Cognition` is open-ended — it requires constant verification and refinement. |
| `Validation` | The rational transformation of existing `Knowledge` toward improvement | `Validation :: Knowledge → Knowledge' refined` | Relies on openness, flexibility, unconventional perspectives, and tolerance of paradox. The active answer to `Doubt`. |
| `Learning` | The update of `Memory` — and thereby of `Knowledge` and `Skill` — driven by `Validation` against `Experience` | `Learning :: (Knowledge, Experience) → Knowledge'` where `Knowledge'` better predicts further `Experience` | The dynamic that makes `Evolution` possible at the cognitive level; complements `Validation`. |
| `Prediction` | A `Thought` projected forward in `Step` according to current `Knowledge` | `Prediction(State, Knowledge) := expected State' under Knowledge's model of the System` | `Prediction` quality is what `Validation` measures and what `Learning` improves. |
| `Skill` | `Knowledge` operationalized through `Experience` into reliable `Behavior` under varying `Circumstances` | `Skill :: Knowledge + Experience → Behavior reliable under Circumstances` | `Skill` lives in the *structure* of the `Mind` — modified `Neuron` weights, i.e., `Memory` shaped by `Learning`. Verified by execution under novel conditions, not by description. `Skill` is at the `Behavior` scope; **`Mastery`** (in [10-growth](10-growth.md)) is the corresponding `Paradigm`-scope concept. |
| `Bias` | A systematic distortion in a `Mind`'s `Code` that produces consistent mis-mapping of `Signal` to `Thought` | `Bias :: systematic offset in Code(Signal) ≠ ground-truth Thought` | The shadow of `Memory` — biases are stabilized weight patterns that no longer match the current `Environment`. **Invisible from within** the affected `Mind` — but detectable via `Validation` across diverse `Circumstances`, or via cross-`Mind` `Communication` where alternative `Code`-mappings make the discrepancy visible. `Bias` at the `Code` level corresponds to **`Stagnation`** at the `Paradigm` level (in [10-growth](10-growth.md)). |
| `Paradigm` | A method of using `Knowledge` that enables evaluating and directing the Future for practical success in a given `System` | `Paradigm :: Knowledge → Solution under System` | Based on empirical `Knowledge`, scientific method, and proven `Experience`. The integrated apparatus that converts `Knowledge` into `Solution` — and the central object of `Evolution`. |

### Critical Thinking

**Critical Thinking** is an iterative process to adapt EXISTING `Knowledge` to meet scientific criteria. It operates by questioning deeply with a *"why, what-if-not, what-else"* approach — challenging and revising assumptions, refreshing perspectives, and shifting viewpoints. It is the disciplined exercise of `Doubt` in service of `Validation`.

### The Scientific Method

The scientific method is a generalized empirical ***a posteriori*** approach to earning `Knowledge` from experimental data, with awareness of cognitive abilities and `Bias`.

> *"Bayes' theorem: the geometry of changing beliefs."*

**Key definitions.**

- **Scientific Knowledge** — `Knowledge` that definitely meets scientific criteria.
- **Scientific Criteria** — guidelines for improvement in terms of consistency, adequacy, reliability, predictability, completeness, and non-redundancy.

**Scientific criteria.**

| Criterion | Description |
|---|---|
| **Inner Correctness** | Should not break the axioms of logic. |
| **Occam's Razor** | Be minimalistic in concepts used. |
| **Critical Resistance** | Withstand comprehensive questioning from other points of view: be able to answer *why*, *what if not*, *what is the alternative*, *what about edge cases*. |
| **Fair Principle** | Highlight weaknesses of theory; look for incorrectness. |
| **Popper Principle** | Find ways to dismiss theory (falsifiability); keep the door open for future development, rejection, or mind-changing. |
| **Objectiveness** | Stand apart from subjective prejudice and preferences. Subjective claims cannot be proved true or false by any generally accepted criteria. |
| **External Consistency** | Be correlated with (not contradict) all existing `Knowledge` in the context. |
| **Predictability** | Be able to predict the behavior of the object in question. |
| **Reproducibility** | Should be stable when reproduced under described conditions and steps. |

**The scientific process.** An iterative process to acquire NEW *a posteriori* `Knowledge` in four phases:

1. **Characterizations** — observations, definitions, and measurements of the subject of inquiry.
2. **Hypotheses** — theoretical, hypothetical explanations of observations and measurements.
3. **Predictions** — inductive and deductive `Reasoning` from the hypothesis or theory.
4. **Experiments** — peer review and tests of all of the above.

## Computation Fundamentals

### Core Concepts

| Concept | Definition |
| --------- | ------------ |
| **Runtime Alphabet** | A finite set of symbols (elements uniquely distinguished by runtime) |
| **Word** | A fixed-length sequence of symbols considered by runtime as a whole atomary unit |
| **Data** | A sequence of words of defined length that a runtime can operate on |
| **Reference** | A word interpreted by runtime as a pointer to other data |
| **Data Structure** | Data comprising references to other data |

#### Knowledge Organization

| Concept | Definition |
| --------- | ------------ |
| **Taxonomy** | A hierarchical structure defining "is-a" general/specific relations between concepts, organizing into groups based on shared characteristics. Answers: "What are the types of things?" |
| **Ontology** | A formal explicit declarative description of a domain comprising concepts, properties, and restrictions. Answers: "What are there and how do they relate?" |
| **Knowledge Base** | An ontology with a set of individual instances of classes |
| **Data Model** | Mathematical representations of physical systems containing equations that describe behavioral relationships |
| **Domain-Specific Language (DSL)** | A specialized language tailored to express operations, configurations, or processes within a specific domain |

### Computation

| Concept | Definition |
| --------- | ------------ |
| **Transformation** | Replacing input data with output data in some deterministic way |
| **Algorithm** | A prescription for how to apply certain transformations on data pursuing a specific goal; may halt with terminal output or never halt |
| **Specification** | Formal properties used to outline expected output of an algorithm in correspondence to its input |
| **Correctness** | Satisfaction of an algorithm's actual computation with respect to a priori defined specification |
| **Equational Reasoning** | Ability to infer truths about a system from its parts; possible when composed of expressions devoid of side effects |
| **Data Transformer** | A specific circuit that deterministically consumes input, transforms it, and provides output |
| **Dataflow** | Interdependent exchange of computed data between Transformers over time |
| **Runtime** | A system of transformers able to execute dataflow - recognize, store, access, interpret, and transform data |
| **Computation** | The process of applying transformations to given input by some real runtime until outcome is evaluated |

### Lambda Calculus

Lambda Calculus (λ-Calculus) is a *formal system* expressing computation through:

1. Constructions of λ-expressions
2. Reductions on them

The set of lambda expressions (Λ) can be defined inductively over a set of variables (alphabet):

| Component | Syntax | Description |
| ----------- | -------- | ------------- |
| **Expression** | `<variable> \| <function> \| <application>` | The three forms of λ-expressions |
| **Function** | `λ<x-variable>.<M-expression>` | Where x is bound to expression M |
| **Application** | `<M-expression> <N-expression>` | Where N substitutes into M instead of bound variable |

| Reduction | Syntax | Description |
| ----------- | -------- | ------------- |
| **α-conversion** | `λx.M[x] → λy.M[y/x]` | Renaming to avoid collisions |
| **β-reduction** | `(λx.M)N → M[N/x]` | Replacing the bound x with the argument expression in the body of the abstraction |
| **η-conversion** | `λx.(f x) → f` | Extensional equality |

#### Code and Composability

| Concept | Definition |
| --------- | ------------ |
| **Contract** | Conditions and limitations that guarantee predictable runtime behavior; errors reported when violated |
| **Code** | Text in some formal language interpreted by runtime as instructions for data transformations |
| **Referential Transparency** | Ensuring an expression can be replaced with its value without changing program behavior |
| **Equivalence (≡)** | Ensuring two expressions can be safely swapped in program text |
| **Component** | A named piece of code that can be combined with others to build complex components |
| **Composability** | Ability of code to be combined into new, more complicated code |

#### Principles of Composability

Composability is state-of-art, and system design should follow correct
Contracts around Separation, Ownership, and Responsibility:

1. **Encapsulation**: Encapsulate tightly cohesed own state necessary and sufficient for its duty
2. **Delegation**: Be responsible for one single duty; delegate all other functions outside
3. **Single Language**: Operate on well-defined glossary concepts providing a single layer of abstraction
4. **Server, not Service**: Communicate with outer context via pre-defined Contract in loosely coupled way

#### Computing and Information Sciences Fields

- Information Theory
- Theory of Computation
- Systems Theory
- Operations Research
- Algorithms
- Information Systems
- Software and Systems Engineering
- Computer Networking
- Telecommunications
- Cryptography
- Internet
- Media Content and Visualization
- Graphic and Web Design
- Gaming and Metaverses
