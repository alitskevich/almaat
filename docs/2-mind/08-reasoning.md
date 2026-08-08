# Reasoning

**`Reasoning`** := The process of generating new *a priori* `Knowledge` (conclusions) from existing `Knowledge` (premises).

**`Reasoning`** := The process of generating new *a priori* `Knowledge` (conclusions) from existing `Knowledge` (premises).

**`Inference`** := A path of `Reasoning` that either validates a given `Opinion` or constructs a new valid `Opinion`.

*NOTE*: The mechanism by which `Proof` is assembled.

**`Logic`** := A constructive way of inferencing based on an *a priori* foundation.

**`Intuition`** := A non-constructive "direct" way of reasoning without need of external foundations or proof.

---

**`Data`** := A `Text` that contains some `Information`

**`Information`** := A `Message` encoded in `Data` that has precise influence on a receiver.

---

**`Transformation`** := Replacing input data with output data in some deterministic way.

**`Transformer`** := A specific circuit that deterministically consumes input data, transforms it, and provides output data under some `Algorithm`.

**`Dataflow`** := Interdependent exchange of computed data between Transformers over time.

**`Runtime`** := A system of transformers able to execute dataflow - recognize, store, access, interpret, and transform `Data`.

**`Computation`** := The process of `Reasoning` by executiong `Dataflow` on given input by some real runtime until outcome is evaluated.

**`Contract`** := Conditions and limitations that guarantee predictable runtime behavior; errors reported when violated.

---

**`Code`** := Text in some formal language interpreted by runtime as instructions for data transformations.

**`Referential Transparency`** := Ensuring an expression can be replaced with its value without changing program behavior.

**`Equivalence (≡)`** := Ensuring two expressions can be safely swapped in program text.

---

**`Algorithm`** := A prescription for how to apply certain transformations on data pursuing a specific goal; may halt with terminal output or never halt.

---

**`Specification`** := Formal properties used to outline expected output of an algorithm in correspondence to its input.

---

**`Correctness`** := Satisfaction of an algorithm's actual computation with respect to a priori defined specification.

**`Equational Reasoning`** := Ability to infer truths about a system from its parts; possible when composed of expressions devoid of side effects.

**`Proof`** := A `Derivation` of `Thesis` according to a `Theory`.

> `Proof := Derivation(Thesis) under Theory`

*NOTE*: Subjects themselves remain inaccessible; we form `Opinion` about their `Presentation` within specific Logics.

---

**`Formalism`** := A defined way to construct some theory (formal/axiomatic system).

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
