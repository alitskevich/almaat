---
title: "Proof"
description: "The formal apparatus that carries a Thesis to a Proof — formalism, interpretation, satisfaction, and the three bounds every logic runs into."
keywords: [mind, proof, logic]
license: UNLICENSED
created: 2026-08-16
modified: 2026-08-16
source: docs/2-mind/06-proof.md
---

# Proof

![Proof](/images/2-mind/06-proof.svg)

The formal apparatus that carries a `Thesis` to a `Proof` — formalism, interpretation, satisfaction, and the three bounds every logic runs into.

**`Proof`** := A `Derivation` of `Thesis` according to a `Theory`.

> `Proof := Derivation(Thesis) under Theory`

*NOTE*: Subjects themselves remain inaccessible; we form `Opinion` about their `Presentation` within specific Logics. `Thesis` and `Theory` are defined in [Knowledge](05-knowledge.md).

---

**`Formalism`** := A defined way to construct some theory (formal/axiomatic system).

## Interpretation

**`Interpretation`** := A predefined mapping from each formula (signifier, name) of a given theory to either: a distinct corresponding entity (*denotation*: extension, referent, example) of a given external structure, or a set of predicates (*logic*: intension, meaning, sense) over such entities.

**Formula qualities.** A formula is **satisfied** in a given logic IF its corresponding predicate is true. IF all formulae are satisfied in a given logic, THEN its knowledge is called a **model**. An expression is:

- **Logically consistent** if it has at least one satisfied interpretation.
- **Logically valid (logical truth)** if it is satisfied by every interpretation.
- **Logical consequence** of ψ if it is satisfied in every interpretation that satisfies ψ.

## The Bounds of Logic

All logics are bounded along three axes:

1. **Completeness** — ability to prove all truths.
2. **Consistency** — not proving both true and false.
3. **Decidability** — proving belonging to a theory.

> See: Gödel's incompleteness theorems, Turing machines, intuitionism, logicism.
