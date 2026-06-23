# Sets, Equivalence, Topology

![Sets, Equivalence, Topology](/images/0-math/01-set.svg)

This part introduces `Set` and the topological structures over `Set`.

## Intro

---

**`Set`** := an `Azon` which `Value`s are either `fixed` or `empty`

> `Set := x → x OR Zero`

*NOTE*: `Set` is a *filter*: it passes its input unchanged if a member, returns `Zero` otherwise. `Set` is distinguished from the 0/1-indicator function.

---

**`Element`** := a `valent` `Value` of a `Set`.

> `a ∈ S ⟺ S(a) = a`

*DEF*: An `Element` **belongs to** a `Set`; the `Set` **contains** the `Element`.

*NOTE*:  By `AXIOM-2`: `S ∉ S`. By `AXIOM-1`: `0 ∉ S` and `S ∉ 0`.

*NOTE*: `Unit` as a Set contains all `Azon`s except itself and `Zero`: `∀x ∉ {0, 1}: x ∈ 1`.

## Derived Sets

---

**`Subset`** := A `Set` all of whose `Element` belong to a reference `Set`.

> `A ⊆ B :: ∀x: x ∈ A ⟹ x ∈ B`

*NOTE*: Reflexive: `S ⊆ S`. Transitive: `A ⊆ B ∧ B ⊆ C ⟹ A ⊆ C`. Min/Max: `0 ⊆ S ⊆ 1`.

---

**`Domain`** := `Set` of valent Signs of an `Azon`.

> `DOM(A) := {x : A(x) ≠ 0}`

---

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

---

**`Union`** := `Set` of `Element`s which belongs to at least one `Set` of the `Collection`.

> `⋃ := K -> Union{x : ∃S ∈ K, x ∈ S}`

---

**`Set-Difference`** := `Element` in the `Union` of the `Collection` but NOT in the reference `Set`.

> `SetDiff(K, S) := {x : x ∈ ⋃K ∧ x ∉ S}`

---

**`Power-Set`** := The `Collection` of all `Subset` of the reference `Set`.

> `2^S := {Q : Q ⊆ S}`

---

**`Cluster`** := A `Collection` that is non-intersecting AND saturated to a reference `Set`.

> `Cluster :: ⋂(K) = 0 ∧ ⋃(K) = S`

*NOTE*: A partition — mutually disjoint `Set` whose `Union` covers the reference `Set`.

**Properties.**

A `Collection` is **non-intersecting** if `⋂K = 0`.

A `Collection` is **saturated to `S`** if `⋃K = S`. For any `Q ⊆ S`: `Q ∩ S = Q`, `Q ∪ S = S`.

For the `Complement`: `!S ∩ S = 0`, `!S ∪ S = 1` (when working in `P = 1`).

## Correspondence to Logic of Predicates

A `Predicate` is a `Set` viewed as a truth-test: `P(x) = x` reads *"x satisfies P"*, `P(x) = 0` reads *"x does not satisfy P"*.

Truth and falsity are not a separate Boolean type — they are the *survival* or *erasure* of the input by the filter.

---

**`Predicate`** := A `Set` regarded as a truth-test over the `World`.

> `P(x) ∈ {x, 0}`

*NOTE*: Every `Predicate` *is* a `Set`; every `Set` *is* a `Predicate`.

---

**`Tautology`** := Predicate satisfied by every `Element` of the `World`.

> `⊤ := P`

*NOTE*: The `World` itself, as a `Set`.

---

**`Contradiction`** := Predicate satisfied by no `Azon`.

> `⊥ := 0`

*NOTE*: Coincides with `Zero`.

---

**`Conjunction`** := Both predicates hold.

> `A ∧ B := A ∩ B`

*NOTE*: Set `Intersection`.

---

**`Disjunction`** := At least one predicate holds.

> `A ∨ B := A ∪ B`

*NOTE*: Set `Union`.

---

**`Negation`** := Predicate fails.

> `¬A := !A`

*NOTE*: `Complement` in the `World` `P`.

---

**`Implication`** := A entails B.

> `A → B :: A ⊆ B`

*NOTE*: Equivalent to `∀x: A(x) = x ⟹ B(x) = x`.

---

**`Biconditional`** := A and B have the same extension.

> `A ↔ B :: A = B`

*NOTE*: Set equality.

---

**`Universal`** := Predicate holds throughout a `Set`.

> `∀x ∈ A: P(x) :: A ⊆ P`

*NOTE*: Reduces to `Subset`.

---

**`Existential`** := Predicate holds somewhere in a `Set`.

> `∃x ∈ A: P(x) :: A ∩ P ≠ 0`

*NOTE*: Non-empty `Intersection`.

```mermaid
mindmap
  root((Predicate))
    Constants
      Tautology ⊤ = P
      Contradiction ⊥ = 0
    Connectives
      Conjunction A ∩ B
      Disjunction A ∪ B
      Negation !A
    Relations
      Implication A ⊆ B
      Biconditional A = B
    Quantifiers
      Universal A ⊆ P
      Existential A ∩ P ≠ 0
```

*NOTES*:

- Predicates on `P` form a **Boolean algebra** under `∧`, `∨`, `¬`, with `⊤ = P` and `⊥ = 0`.
- **De Morgan:** `!(A ∧ B) = !A ∨ !B`, `!(A ∨ B) = !A ∧ !B`.
- **Excluded middle (within `P`):** `A ∨ !A = P`, `A ∧ !A = 0`.
- **Double negation:** `!!A = A`.
- **Quantifier duality:** `∀x ∈ A: P(x) ⟺ ¬∃x ∈ A: ¬P(x)`.
- **Filter composition equals conjunction:** for any `Set` `A`, `B`: `(A ∘ B)(x) = A(B(x)) = x` iff `x ∈ A ∩ B`. Equivalent to `A ∘ B = A ∩ B`. *This is unique to the filter semantics — it does not hold for the standard 0/1-indicator function.*
- **Commutativity from intersection:** since `∩` is commutative, so is filter composition: `A ∘ B = B ∘ A`.

*SEE ALSO*:

- [First-order logic (Wikipedia)](https://en.wikipedia.org/wiki/First-order_logic) — predicate logic in the classical sense.
- [Algebra of sets (Wikipedia)](https://en.wikipedia.org/wiki/Algebra_of_sets) — operations mirrored above.
- [Boolean algebra (Wikipedia)](https://en.wikipedia.org/wiki/Boolean_algebra) — structure formed by predicates on a fixed `World`.
- [De Morgan's laws (Wikipedia)](https://en.wikipedia.org/wiki/De_Morgan%27s_laws) — duality of `∧`/`∨` under negation.
- [Universal quantification (Wikipedia)](https://en.wikipedia.org/wiki/Universal_quantification) and [Existential quantification (Wikipedia)](https://en.wikipedia.org/wiki/Existential_quantification) — quantifier semantics.
