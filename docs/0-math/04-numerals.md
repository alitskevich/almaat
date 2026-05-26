# Sequence

Natural numbers (`Number`), intervals, sequences, and selections.

`Number` provides the framework's index — the substrate for time (`Step` in [06-process](06-process.md)) and for any totally-ordered structure.

## Natural Numbers

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Number` | An `Azon` constructed by recursion from `Absorber` via successor | `0 := Absorber`; `succ(n) := n ∪ Singleton(n)` | Von Neumann construction: `0 = ∅`, `1 = {0}`, `2 = {0, 1}`, `n = {0, 1, ..., n-1}`. |

**Order.** `Number` is **totally ordered**: for any `a, b`, exactly one of `a < b`, `a = b`, `a > b` holds. Equivalently, `∀a, b: ∃c: a + c = b ∨ b + c = a` where `+` is arithmetic addition (not the `Plus-Constructor` of [02-graph](02-graph.md)).

**Note on `+`.** `Plus-Constructor` in [02-graph](02-graph.md) is the singleton-wrapping `+(x) := Singleton(x)`. Arithmetic successor `succ(n) := n ∪ Singleton(n)` builds on this but is not the same operator. The framework uses one symbol `+` overloaded across these contexts; modellers should disambiguate by type.

## Intervals

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Bounded-Interval` | All `Number` not greater than `N` | `BI(N) := {n : n ≤ N}` | i.e., `{0, 1, ..., N}`. |
| `Ray` | All `Number` strictly greater than `N` | `Ray(N) := {n : n > N}` | i.e., `{N+1, N+2, ...}`. |
| `Range` | All `Number` strictly greater than `N` and at most `M`, with `N < M` | `Range(N, M) := {n : N < n ≤ M}` | i.e., `{N+1, ..., M}`. |

## Sequences

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Row` | An `Azon` whose `Domain` is a `Bounded-Interval` | `Row :: DOM = BI(N)` | The fundamental array / tuple structure. |
| `Queue` | An `Azon` whose `Domain` is a `Ray` | `Queue :: DOM = Ray(N)` | An infinite sequence. |
| `Grade` | An `Azon` whose `Codomain` is a subset of `Number` | `Grade :: COD ⊆ Number` | A numerical scoring function — used by `Potency` in [09-agency](09-agency.md). |
| `Selection-Mask` | A bijective `Row` of length `n` into a `Bounded-Interval` of length `m > n` | `SM :: BI(n) → BI(m)` | A combination / index selector. |
| `Selection` | The `Composition` of a `Selection-Mask` with a `Row` | `Selection := V . SM` | Extracts chosen `Element` from a `Row`. |
| `Matrix` | A `Row` of `Row` | `Matrix :: BI(n) → Row` | A 2D array. |
| `Concatenation` | A `Row` built from a `Matrix` by joining each constituent `Row` end-to-end | `⊕ :: Matrix → Row` | If two `Matrix` `Concatenate` to the same `Row`, then their composed `Azon` are equal — this fact yields `Composition`'s **associativity**: `(A.B).C = A.(B.C)`. |

## Correspondence to Arithmetic

Arithmetic is not introduced as a new primitive — it is *recovered* from `Number`, `Bounded-Interval`, `Row`, and `Concatenation`. Every operation reduces to a count of `Element` in a constructed `Row`, and every algebraic law inherits from the associativity of `Composition` (see [02-graph](02-graph.md)).

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Zero` | `Absorber` as the base of `Number` | `0 := Absorber` |  |
| `One` | The successor of `Zero` — a `Singleton` containing `Zero` | `1 := succ(0) = {0}` |  |
| `Successor` | The `Azon` that produces the next `Number` | `succ(n) := n ∪ Singleton(n)` |  |
| `Predecessor` | The inverse of `Successor` on non-zero `Number` | `pred(n) :=` the unique `m` such that `succ(m) = n` | Undefined at `0`. |
| `Addition` | The length of the `Concatenation` of two `Row` of lengths `a` and `b` | `a + b := \|R_a ⊕ R_b\|` | Equivalent to iterated `Successor`: `a + 0 := a`, `a + succ(b) := succ(a + b)`. |
| `Subtraction` | Recovered from `Range`: for `a ≤ b`, the count of `Range(a, b)` | `b - a := \|Range(a, b)\|` | Partial — defined only when `a ≤ b`. |
| `Multiplication` | The length of the `Concatenation` of a `Matrix` of `a` rows, each of length `b` | `a × b := \|⊕ (Row_b)^a\|` | Equivalent to iterated addition. |
| `Exponentiation` | The count of `Row` of length `a` over `BI(b)` — i.e., functions `BI(a) → BI(b)` | `b^a := \|{f : BI(a) → BI(b)}\|` |  |
| `Less-than` | `Subset` on the Von Neumann encoding | `a < b ⟺ a ∈ b ⟺ a ⊊ b`; `a ≤ b ⟺ a ⊆ b` |  |
| `Divisibility` | `a` divides `b` iff some `c` makes `b = a × c` | `a ∣ b ⟺ ∃c: b = a × c` |  |

**Properties:**

- **Associativity of `+` and `×`** is inherited from `Concatenation`: `(a + b) + c` and `a + (b + c)` both correspond to the same flattened `Row`, and `Concatenation` flattening is associative by [02-graph](02-graph.md) line 47.
- **Commutativity of `+` and `×`** follows from the bijective re-indexing of `Matrix` rows (a `Selection-Mask` of length `n` onto itself).
- **Distributivity** `a × (b + c) = a × b + a × c` corresponds to splitting a `Matrix` of `a` rows of length `b + c` into two `Matrix` along the column boundary.
- **Order** `≤` coincides with `Subset` on the Von Neumann encoding — so arithmetic order is a *special case* of set inclusion, not an extra relation.

**See also:**

- [Peano axioms (Wikipedia)](https://en.wikipedia.org/wiki/Peano_axioms) — recursive definition of `Number` via `Successor`.
- [Von Neumann ordinal (Wikipedia)](https://en.wikipedia.org/wiki/Ordinal_number#Von_Neumann_definition_of_ordinals) — the `n = {0, 1, ..., n-1}` construction.
- [Natural-number arithmetic (Wikipedia)](https://en.wikipedia.org/wiki/Natural_number#Algebraic_properties_satisfied_by_the_natural_numbers) — the algebraic laws recovered above.

## Correspondence to Combinatorics

Combinatorics is the *counting* discipline over finite `Set` and `Row`. Every classical count reduces to a `Cardinality` of a constructed `Set` of `Row` or `Selection-Mask`. No new primitive is introduced — all variations (ordered/unordered, with/without repetition) are expressed by adjusting injectivity, surjectivity, and quotient-by-permutation of `Selection-Mask`.

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Cardinality` | The unique `Number` `n` for which a bijective `Row` exists from `BI(n)` onto a finite `Set` `S` | `\|S\| := n` |  |
| `Tuple` | A `Row` viewed as an ordered selection from a `Set` | `T :: BI(n) → S` |  |
| `Permutation` | A bijective `Row` from `BI(n)` onto itself | `π :: BI(n) → BI(n)` bijective |  |
| `Factorial` | The count of `Permutation` of `BI(n)` | `n! := \|{π : BI(n) → BI(n) bijective}\|` | Recurrence: `0! := 1`, `succ(n)! := succ(n) × n!`. |
| `Arrangement` | A `Selection-Mask` of length `k` into `BI(n)` (order matters) | `A(n, k) := n! / (n − k)!` |  |
| `Combination` | A `Selection-Mask` of length `k` into `BI(n)` taken modulo permutation of the source | `C(n, k) := A(n, k) / k! = n! / (k! × (n − k)!)` |  |
| `Binomial Coefficient` | The count of `Subset` of size `k` of `BI(n)` | `C(n, k) = \|{S ⊆ BI(n) : \|S\| = k}\|` |  |
| `Power-Count` | The `Cardinality` of the `Power-Set` of a finite `Set` (see [01-set](01-set.md)) | `\|2^S\| = 2^\|S\| = ∑_{k=0}^n C(n, k)` |  |
| `Multiset` | A `Grade` whose `Codomain` is `Number` — counts occurrences | `M :: S → Number` | Generalizes `Set` by allowing multiplicity. |
| `Composition-of-Number` | A `Row` of positive `Number` summing to `n` | `[n₁, ..., nₖ] : ∑nᵢ = n, nᵢ > 0` | An ordered partition of `n`. Distinct from `Composition` of [02-graph](02-graph.md). |
| `Partition-of-Number` | A `Multiset` of positive `Number` summing to `n` | `M : ∑(k · M(k)) = n, k > 0` | An unordered partition of `n`. |

**Properties:**

- **Every combinatorial count is an arithmetic `Cardinality`** — so combinatorics is layered *on top of* the arithmetic correspondence above, not parallel to it.
- **`Selection-Mask` is the central primitive.** The twelvefold way of classical combinatorics corresponds exactly to four binary toggles on `Selection-Mask`:
  - is the mask *injective*? (no repetition)
  - is it *surjective*? (every target hit)
  - is the source *quotiented by permutation*? (order ignored)
  - is the target *quotiented by permutation*? (labels ignored)
- **Pascal's identity** `C(n, k) = C(n−1, k−1) + C(n−1, k)` corresponds to partitioning the `Subset` of size `k` by whether they contain a chosen `Element` — i.e., a `Cluster` (see [01-set](01-set.md)) of the `Power-Set` indexed by membership.
- **Bijective proof.** Equalities between counts (`C(n, k) = C(n, n−k)`, the binomial theorem) are most naturally expressed as bijective `Row` between the two `Set` being counted — staying inside the framework rather than appealing to algebraic manipulation.

**See also:**

- [Combinatorics (Wikipedia)](https://en.wikipedia.org/wiki/Combinatorics) — overview of the discipline.
- [Twelvefold way (Wikipedia)](https://en.wikipedia.org/wiki/Twelvefold_way) — the four-toggle classification mentioned above.
- [Binomial coefficient (Wikipedia)](https://en.wikipedia.org/wiki/Binomial_coefficient) — Pascal's identity and the binomial theorem.
- [Multiset (Wikipedia)](https://en.wikipedia.org/wiki/Multiset) — formal basis for `Grade` over `Number`.
- [Integer partition (Wikipedia)](https://en.wikipedia.org/wiki/Partition_(number_theory)) — partitions of `n` as `Multiset`.
