---
title: "Structures"
description: "The Structure: a Set equipped with Operations constrained by Laws, and the standard algebras built from them — magmas, ringoids, and lattices."
keywords: [math, structures]
---

# Structures

![Structures](/images/0-math/05-structures.svg)

## Definitions

**`Structure`** := `Set` equipped with `Operation`s on it, which are constrained by `Law`s.

> `Structure := (S, {Operation}, {Law})`

---

**`Operation`** of arity `n` on a `Set` `S` := `Azon` whose `Domain` is `Sⁿ` and `Codomain` is `S` — that is, *closed* on `S`.

> `Operation<n> :: Azon :: DOM = Sⁿ, COD = S`

| Term | Arity | Signature | Examples |
| --- | --- | --- | --- |
| **Constant** | `0-ary` | `() → S` | `unit: () => 1`, `zero: () => 0` |
| **Unary** | `1-ary` | `S → S` | `inc: a => a+1`, `neg: a => -a`, `inv: a => a⁻¹`, `⊥: a => ¬a` |
| **Binary** | `2-ary` | `S × S → S` | `add: (a,b) => a+b`, `mul: (a,b) => a·b`, `∧, ∨` |
| **`Relation`** | `2-ary` predicate | `S × S → {T, F, U}` | `eq: (a,b) => a==b`, `≤: (a,b) => a≤b` |
| **n-ary** | `n-ary` | `Sⁿ → S` | `combine: (a₁, …, aₙ) => …` |
| **Action** | external | `Ω × S → S` | scalar multiplication `(λ, v) => λ·v` in a vector space |

*NOTE*: a `Relation` is not closed on `S` — it lands in the three truth values `{T, F, U}`: true, false, and undefined where the `Relation` does not apply.

---

**`Law`** := a constraint on the `Operation`s of a given `Structure`.

> `Law :: {Operation} → {T, F}`

| Law | Formula | Notes |
| --- | --- | --- |
| **`Zero`** | `∃0 ∈ S: ∀a ∈ S: 0 * a = a * 0 = 0` | An annihilating element |
| **`Identity`** | `∃e ∈ S: ∀a ∈ S: e * a = a * e = a` | A neutral element |
| **Inverse** | `∀a ∈ S: ∃a⁻¹ ∈ S: a * a⁻¹ = a⁻¹ * a = e` | Every element is undoable; requires identity |
| **Idempotent** | `a * a = a` | Repeating an operand has no effect |
| **Reflexive** | `∀a ∈ S: a * a` holds | For relations: every element relates to itself |
| **Symmetric** | `∀a, b ∈ S: a * b ⟹ b * a` | For relations; with reflexivity and transitivity, defines an equivalence |
| **Antisymmetric** | `∀a, b ∈ S: (a * b ∧ b * a) ⟹ a = b` | Distinguishes orders from equivalences |
| **Transitive** | `∀a, b, c ∈ S: (a * b ∧ b * c) ⟹ a * c` | Chains relate |
| **Associative** | `(a * b) * c = a * (b * c)` | Order of grouping is irrelevant |
| **Commutative** | `a * b = b * a` | Order of operands is irrelevant |
| **Distributive** | `a * (b ⊕ c) = (a * b) ⊕ (a * c)` | One operation distributes over another |
| **Absorption** | `a ∨ (a ∧ b) = a` and `a ∧ (a ∨ b) = a` | Couples two operations in a lattice |
| **Latin square** | `∀a, b ∈ S: ∃! x, y ∈ S: a * x = b ∧ y * a = b` | Unique left- and right-solutions; defines a quasigroup |
| **Jacobi** | `a * (b * c) + b * (c * a) + c * (a * b) = 0` | A weakened associativity used in Lie algebras |

## Basic Structures

- A `Relation` is a predicate-valued operation — not closed on `S` but on `{T, F, U}`. Setoids and posets are built on relations, not operations proper.
- An action acts *from* a second `Set` `Ω`. This is the shape behind modules, vector spaces and groups with operators, which extend a single-set algebra into a two-set structure.
- An n-ary operation of arity ≥ 3 can always be `curried` into a chain of unary operations via `Composition` (see [Composition](02-composition.md)) — operations and `Azon` are the same kind of thing.

| Structure | Definition | Example |
| --- | --- | --- |
| **Pointed Set** | `Set` with defined units (0-ary operations) | `unit: () => 1` |
| **Unary System** | `Set` with a single unary operation | `inc: (x) => x+1` |
| **Pointed Unary System** | Unary system with a pointed set | `zero: ()=>0, unit: ()=>1, inv: (x)=> x==1 ? 0 : 1` |
| **Poset** | Partially ordered set with `compare` defined partially | `≤: a,b => a,b in S ? (a < b ? T : F) : U` |
| **Setoid** | `Set` with `eq` equivalence | `eq: (a, b) => a == b ? T : F` (Reflexive + Symmetric + Transitive) |

**Equivalence vs. order.** A setoid requires Reflexive + Symmetric + Transitive (equivalence). A poset requires Reflexive + Antisymmetric + Transitive (partial order).

## Magma and Descendants

| Structure | Definition | Properties |
| --- | --- | --- |
| **Magma (Groupoid)** | Having a single binary operation | `op: (a,b) => c` |
| **Quasi-group** | A magma obeying the Latin square property | `∃! x, y: a * x = b ∧ y * a = b` |
| **Loop** | A quasi-group with identity | |
| **Semi-group** | An associative magma | `combine: a,b => (...) => a(b(...))` |
| **Semi-lattice** | An idempotent and commutative semigroup | Idempotent and commutative |
| **Monoid** | A semigroup with a `unit` | `unit: () => 1` (LR-identity) |
| **Group** | A monoid with an `inverse` | `inverse: a => -a` (LR-inverse) |
| **Abelian Group** | A group with commutative `sum` | `sum: (a,b) => c` (associative + commutative) |

## Ringoid Structures

| Structure | Definition |
| --- | --- |
| **Ringoid** | `Set` with `add` and `multiply`, multiplication distributing over addition |
| **Semiring** | A ringoid that is also a monoid under each operation |
| **Near-ring** | A `Set` whose `add` is a group and whose `multiply` is a semigroup, distributing on one side only |
| **Ring** | A semiring whose `add` is an abelian group |
| **Boolean Ring** | A commutative ring with idempotent multiplication |
| **Field** | A commutative ring containing a multiplicative inverse for every nonzero element |

## Lattice Structures

| Structure | Definition | Laws |
| --- | --- | --- |
| **Lattice** | A poset with `∧ - meet (infimum)` and `∨ - join (supremum)` | Commutative, Associative, Absorption |
| **Complete Lattice** | A lattice with arbitrary `meet`s and `join`s | |
| **Bounded Lattice** | A lattice with `1 - greatest (top)` and `0 - least (bottom)` | `0 ≤ x ≤ 1` for every `x ∈ S` |
| **Complemented Lattice** | A bounded lattice with unary `⊥ - complementation` | `a ∨ a⊥ = 1` and `a ∧ a⊥ = 0` |
| **Distributive Lattice** | A lattice where meet and join distribute over each other | |
| **Boolean Algebra** | A complemented distributive lattice | |
