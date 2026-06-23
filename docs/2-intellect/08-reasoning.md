# Reasoning

---

**`Data`** := A sequence of words of defined length that a runtime can operate on.

---

**`Reasoning`** := The process of generating new *a priori* `Knowledge` (conclusions) from existing `Knowledge` (premises).

*NOTE*: Yields `Thesis` awaiting `Validation`.

---

**`Inference`** := A path of `Reasoning` that either validates a given `Opinion` or constructs a new valid `Opinion`.

*NOTE*: The mechanism by which `Proof` is assembled.

---

**`Logic`** := A constructive way of inferencing based on an *a priori* foundation.

*NOTE*: The discursive machinery of a `Theory`'s `Language`.

---

**`Intuition`** := A non-constructive "direct" way of reasoning without need of external foundations or proof.

*NOTE*: The non-discursive complement to `Logic`.

---

**`Code`** := An `Azon` that responds with specific `Thought`s (Meanings) to specific `Signal`s (Messages) for a `Mind`.

> `Code :: Signal → Thought`

*NOTE*: Maps `Signal`-patterns to `Thought`-patterns — the `Message` → `Meaning` relation for a cognitive system.

---

**`Meaning`** := The `Thought` evoked in a receiver by a `Message` under a shared `Code`.

> `Meaning := Code(Message)`

*NOTE*: The output side of a `Code`'s response.

---

**`Information`** := A `Message` that has precise influence on a receiver's `Thought`.

> `Information := Message under shared Code`

*NOTE*: Distinguished from `Signal`: `Information` presupposes a shared `Code`. A `Signal` without `Code` is noise, not `Information`.

---

**`Transformation`** := Replacing input data with output data in some deterministic way.

---

**`Equational Reasoning`** := Ability to infer truths about a system from its parts; possible when composed of expressions devoid of side effects.

---
**`Knowledge`** := A set of validated representations (`Theory`, `Concept`, `Opinion`) that a `Mind` uses to predict and act upon `Reality`.

> `Knowledge := {Theory, Concept, Opinion}_validated`

*NOTE*: The four properties of well-formed `Knowledge`: **adequate** (matches observed `Presentation`), **accessible** (retrievable from `Memory`), **coherent** (internally non-contradictory), **predictive** (allows anticipation of future `State`). `Knowledge` is not Being itself — only its representation.

---

**`Theory`** := A set of Terms — `Name` and `Concept` — for `Opinion` over a `Language` (Logic) and an `Attribute-Space` (`Reality`).

> `Theory := ({Name}, {Concept}, Language, Attribute-Space)`

*NOTE*: A *coordinated vocabulary plus the inferential machinery* that lets `Opinion` combine into `Thesis`.

---

**`Name`** := An `Expression` of `Language` associated with `Presentation` (Entities) of the `Attribute-Space`.

> `Name :: Expression → Presentation`

*NOTE*: Picks out particular instances. Complement: `Concept`.

---

**`Concept`** := An `Expression` of `Language` associated with `Place` (regions) of the `Attribute-Space`.

> `Concept :: Expression → Place`

*NOTE*: Denotes categories rather than instances. Aligns with Frege's distinction between Sense and Reference.

---

**`Opinion`** := An `Expression` of `Language` associated with an evaluation of whether `Presentation` belongs to `Place`.

> `Opinion :: Expression → (Presentation × Place → {0, 1})`

*NOTE*: The atomic unit of belief — a proposition asserting membership of entities in categories.

---

**`Thesis`** := A `Set` of `Opinion` in Logic.

> `Thesis := {Opinion}` in Logic

*NOTE*: `Knowledge` derived from pure reason alone — a heuristic conjecture awaiting `Validation`.

---

**`Proof`** := A `Derivation` of `Thesis` according to a `Theory`.

> `Proof := Derivation(Thesis) under Theory`

*NOTE*: Subjects themselves remain inaccessible; we form `Opinion` about their `Presentation` within specific Logics.

---

**`Doubt`** := A suspended `Opinion` — the recognition that current `Knowledge` is insufficient to evaluate membership of a `Presentation` in a `Place`.

> `Doubt :: Opinion → suspended`

*NOTE*: The disposition that drives `Validation`. Without `Doubt`, `Thesis` ossifies into dogma; with excessive `Doubt`, no `Paradigm` stabilizes. Productive cognition lives in the band between certainty and skepticism.

---

**`Formalism`** := A defined way to construct some theory (formal/axiomatic system).

---

**`Expression`** := An expression that may be inferred from axioms in a given grammar (well-formed formula).

---

**`Interpretation`** := A predefined mapping from each formula (signifier, name) of a given theory to either: a distinct corresponding entity (*denotation*: extension, referent, example) of a given external structure, or a set of predicates (*logic*: intension, meaning, sense) over such entities.

**Formula qualities.** A formula is **satisfied** in a given logic IF its corresponding predicate is true. IF all formulae are satisfied in a given logic, THEN its knowledge is called a **model**. An expression is:

- **Logically consistent** if it has at least one satisfied interpretation.
- **Logically valid (logical truth)** if it is satisfied by every interpretation.
- **Logical consequence** of ψ if it is satisfied in every interpretation that satisfies ψ.

**Limitations of Logic.** All logics are bounded along three axes:

1. **Completeness** — ability to prove all truths.
2. **Consistency** — not proving both true and false.
3. **Decidability** — proving belonging to a theory.

> See: Gödel's incompleteness theorems, Turing machines, intuitionism, logicism.

## Types of Reasoning

---

**`Deduction`** := Reasoning by assertion of a general rule, proceeding to a guaranteed specific conclusion.

---

**`Induction`** := Reasoning from the specific to the general — beginning with limited observations and proceeding to generalized conclusions (predictions) likely in light of accumulated evidence.

---

**`Backward Induction`** := Introducing a hypothesis first, then trying to find the inference to it.

---

**`Abduction`** := Reasoning by proceeding to the likeliest possible explanation from an incomplete set of information (taking your best shot).

---

**`Abstraction`** := Reasoning by cutting off details, slicing dimensions, and reducing qualities to consider.

---

**`Analysis`** := Reasoning by narrowing context or splitting into particular contexts.

---

**`Synthesis`** := Reasoning by extending context or gathering correlated contexts.

---

**`Analogy`** := Reasoning by "rough" (abstracted, partial, inadequate) mapping of phenomena between different contexts.

---

**`Modelling`** := Reasoning by constructing an artificial/abstract model (simulation) of considered phenomena, mapped to some extent.
