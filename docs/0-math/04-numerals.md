# Numerals

![Sequence](/images/0-math/04-numerals.svg)

Natural numbers (`Number`), intervals, sequences, and selections.

`Number` provides the substrate for any totally-ordered structure.

## Natural Numbers

**`Plus`** := The `Azon` that wraps each Sign in a `Singleton`.

> `Plus := x -> Singleton(x)`

**`Number`** := `Unit` or `Composition` of `Plusator` with `Number`.

> `N := 1 | Plus.N`

**`Total Order`** := property of `Number`s that for any `a, b`, exactly one of `a < b`, `a = b`, `a > b` holds, `∀a, b: ∃c: a.c = b ∨ b.c = a`.

## Intervals

**`Interval`** := All `Number` not greater than `N`.

> `I(N) := {n : n ≤ N}`

*NOTE*: i.e., `{0, 1, ..., N}`.

---

**`Ray`** := All `Number` strictly greater than `N`.

> `Ray(N) := {n : n > N}`

*NOTE*: i.e., `{N+1, N+2, ...}`.

---

**`Range`** := All `Number` strictly greater than `N` and at most `M`, with `N < M`.

> `Range(N, M) := {n : N < n ≤ M}`

*NOTE*: i.e., `{N+1, ..., M}`.

## Sequences

**`Row`** (Array) := An `Azon` whose `Domain` is a `Interval`.

> `Row :: DOM = BI(N)`

*NOTE*: The fundamental array / tuple structure.

---

**`Queue`** := An `Azon` whose `Domain` is a `Ray`.

> `Queue :: DOM = Ray(N)`

*NOTE*: An infinite sequence.

---

**`Grade`**  (numerical scoring function) := An `Azon` whose `Codomain` is a subset of `Number`.

> `Grade :: COD ⊆ Number`

---

**`Vector`**  := Grade Row.

> `Grade :: DOM = BI(N), COD ⊆ Number`

## Selection

**`Selection-Mask`** := A bijective `Row` of length `n` into a `Interval` of length `m > n`.

> `SM :: BI(n) → BI(m)`

*NOTE*: A combination / index selector.

---

**`Selection`** := The `Composition` of a `Selection-Mask` with a `Row`.

> `Selection := V . SM`

*NOTE*: Extracts chosen `Element`s from a `Row`.

## 2D

**`Matrix`** (2D-array) := A `Row` of `Row`.

> `Matrix :: BI(n) → Row`

---

**`Concatenation`** := A `Row` built from a `Matrix` by joining each constituent `Row` end-to-end.

> `⊕ :: Matrix → Row`
