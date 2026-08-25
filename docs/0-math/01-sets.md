---
title: "Sets, Equivalence, Topology"
description: "This part introduces Set and the topological structures over Set."
keywords: [math, sets]
license: UNLICENSED
created: 2026-08-08
modified: 2026-08-08
source: docs/0-math/01-sets.md
---

# Sets, Equivalence, Topology

![Sets, Equivalence, Topology](/images/0-math/01-sets.svg)

This part introduces `Set` and the topological structures over `Set`.

## Intro

---

**`Set`** := an `Azon` which `Value`s are either `fixed` or `empty`.

> `Set := x → (x | Zero)`

---

**`Element`** := a `valent` `Value` of a `Set`.

> `a ∈ S ⟺ S(a) = a`

*DEF*: An `Element` **belongs to** a `Set`; the `Set` **contains** the `Element`.

*NOTE*:  By `AXIOM-2`: `S ∉ S`. By `AXIOM-1`: `0 ∉ S` and `S ∉ 0`.

*NOTE*: `Unit` as a Set contains all `Azon`s except itself and `Zero`: `∀x ∉ {0, 1}: x ∈ 1`.

---

**`Subset`** := A `Set` all of whose `Element` belong to a reference `Set`.

> `A ⊆ B :: ∀x: x ∈ A ⟹ x ∈ B`

*NOTE*: Reflexive: `S ⊆ S`. Transitive: `A ⊆ B ∧ B ⊆ C ⟹ A ⊆ C`. Min/Max: `0 ⊆ S ⊆ 1`.

---

**`Domain`** := `Set` of valent Signs of an `Azon`.

> `DOM(A) := {x : A(x) ≠ 0}`

**`Codomain`** := `Set` of valent Values of an `Azon`.

> `COD(A) := {y : ∃x, A(x) = y ∧ y ≠ 0}`

---

**`Appearance`** := `Set` of all `Azon` whose `Domain` or `Codomain` contains the reference `Azon`.

> `APPEAR(a) := {X : a ∈ DOM(X) ∨ a ∈ COD(X)}`

*NOTE*: The existential scope of an entity — every context in which it participates.

---

**`Plenum`** := An `Azon` that relates every `Azon` with every other `Azon` through its `Domain` and `Codomain`.

> `T :: ∀x, y (x ≠ y ⟹ x ∈ DOM(T) ∧ y ∈ COD(T))`

*NOTE*: Every `Azon` has its image among parts of `Plenum`. By `AXIOM-2`, `T(T) = 0`.

---

**`World`** := A `Set` closed under `Appearance`.

> `P :: ∀k ∈ P, APPEAR(k) ⊆ P`

*NOTE*: The universe of discourse for logical reasoning — every entity's full set of contexts is also inside.

---

**`Complement`** := `Set` of `Element` *of the `World`* that do NOT belong to the reference `Set`.

> `!S := {x ∈ P : x ∉ S}`

*NOTE*: Always relative to a `World` `P`.

---

**`Absence`** := `Set` of all `Azon` that lie *outside* the `World`.

> `Absence := {x : x ∉ P}`

*NOTE*: `Complement` is complement *within* `P`; `Absence` is complement *of* `P` — the impossible relative to a given universe of discourse.

*DEF*: An `Azon` is **endogenous** if `DOM(A) = COD(A)`.

*NOTE*: Any `Set` is endogenous.

*DEF*: `Azon`s are **endemic** if `DOM(A₁) = DOM(A₂) ; COD(A₁) = COD(A₂)`.

## Equivalence Relations

---

**`Intensional Distinguishability`** := There exists an `Azon`-probe that responds to `a` and `b` with different values.

> `DIFF(a, b) := ∃x: x(a) ≠ x(b)`

---

**`Extensional Equivalence`** := No `Azon` in the `World` receives different responses from `a` and `b`.

> `EEQ(a, b) := ¬∃x: a(x) ≠ b(x)`

---

**`Total Equality`** := Both Intensionally non-Distinguishable by probes AND Extensionally equivalent in response.

> `a = b := ¬DIFF(a, b) ∧ EEQ(a, b)`

*NOTE*: Bilateral.

---

**`Partial Equality`** := The `Set` of inputs on which two `Azon` respond total-equally.

> `RAD(a, b) := {x : a(x) = b(x)}`

*NOTE*: Two `Azon` are **partially-equal** up to `RAD` precision.

*SEE ALSO*:

- [Identity of Indiscernibles (Wikipedia)](https://en.wikipedia.org/wiki/Identity_of_indiscernibles) — Leibniz's principle, here adapted to dual `Azon`.
- [Extensionality (Wikipedia)](https://en.wikipedia.org/wiki/Extensionality) — basis for `EEQ`.
- [Intension (Wikipedia)](https://en.wikipedia.org/wiki/Intension) — counterpart concept driving `DIFF`.
- [Equivalence relation (Wikipedia)](https://en.wikipedia.org/wiki/Equivalence_relation) — reflexivity, symmetry, transitivity of `=`.
- [Equality (mathematics) (Wikipedia)](https://en.wikipedia.org/wiki/Equality_(mathematics)) — broader survey of equality notions.

## Topology

---

**`Collection`** := A `Set` of `Set`s.

> `K := {S₁, S₂, ..., Sₙ}`

---

**`Intersection`** := `Set` of `Element`s which belongs to every `Set` of the `Collection`.

> `⋂ := K -> Intersection{x : ∀S ∈ K, x ∈ S}`

*DEF*: A `Collection` is **non-intersecting** if `⋂K = 0`.

---

**`Union`** := `Set` of `Element`s which belongs to at least one `Set` of the `Collection`.

> `⋃ := K -> Union{x : ∃S ∈ K, x ∈ S}`

*DEF*: A `Collection` is **saturated to `S`** if `⋃K = S`. For any `Q ⊆ S`: `Q ∩ S = Q`, `Q ∪ S = S`.

---

**`Set-Difference`** := `Element` in the `Union` of the `Collection` but NOT in the reference `Set`.

> `SetDiff(K, S) := {x : x ∈ ⋃K ∧ x ∉ S}`

*NOTE*: For the `Complement`: `!S ∩ S = 0`, `!S ∪ S = 1` (when working in `P = 1`).

---

**`Power-Set`** := The `Collection` of all `Subset` of the reference `Set`.

> `2^S := {Q : Q ⊆ S}`

---

**`Cluster`** := A `Collection` that is non-intersecting AND saturated to a reference `Set`.

> `Cluster :: ⋂(K) = 0 ∧ ⋃(K) = S`

*NOTE*: A partition — mutually disjoint `Set` whose `Union` covers the reference `Set`.
