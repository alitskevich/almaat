---
title: "Numerals"
description: "Natural numbers (Number), intervals, sequences, and selections."
keywords: [math, numerals]
---

# Numerals

![Numerals](/images/0-math/04-numerals.svg)

## Natural Numbers

---

**`Singleton`** := `fixed` `Arrow`.

> `Singleton(c) := [c,c]`

*NOTE*: `Singleton` is also a `Set` with exactly one `Element`.

---

**`Iterate`** := `Composition` of an `Azon` with itself or with its preceding Iterate.

> `A^0 := Unit`, `A^1 := A`, `A^n := A.A^(n-1)`

---

**`Induction<A>`** := `Set` of all `Iterate`s of `Azon`.

> `Induction := { Unit, A, A², A³, ... }`

---

**`Plus`** := The `Azon` that responds to a `Sign` with its `Singleton`.

> `Plus := x → {x}`

---

**`Numerals`** := `Induction` of `Plus`.

> `Numerals := Induction<Plus>`

---

**`Number`** := `Element` of `Numerals`.

> `n ∈ Numerals`

---

**`Total Order`** := property of `Number`s that for any `a, b` exactly one of `a < b`, `a = b`, `a > b` holds.

> `∀a, b: (a < b) ∨ (a = b) ∨ (b < a)`

## Ranges

**`Interval`** := `Set` of all `Number`s less than `N`.

> `Interval(N) := {n : n < N}`

---

**`Ray`** := `Set` of all `Number`s strictly not less than `N`.

> `Ray(N) := {n : n >= N}`

---

**`Range`** := `Set` of all `Number`s strictly greater than `N` and at most `M`, with `N < M`.

> `Range(N, M) := {n : N < n ≤ M}`

## Sequences

**`Tuple`** := `Azon` over `Interval`.

> `Tuple<N> :: Azon :: DOM = Interval(N)`

---

**`Queue`** := `Azon` over `Ray`.

> `Queue :: Azon :: DOM = Ray(N)`

---

**`Scoring`** := `Azon` into `Numerals`.

> `Scoring :: Azon :: COD ⊆ Numerals`

---

**`Vector`** := `Scoring` `Tuple`.

> `Vector :: Scoring :: DOM = Interval(N), COD ⊆ Numerals`

## Selection

**`Mask`** := injective `Tuple` of length `n` into an `Interval` of length `m > n`.

> `Mask := Interval(n) → Interval(m)`

---

**`Selection`** := `Composition` of a `Mask` with a `Tuple`.

> `Selection := Tuple.Mask`

## Matrices

**`Matrix`** (2D-array) := A `Tuple` of `Tuple`s.

> `Matrix :: Interval(n) → Tuple`

---

**`Flat`** := A `Tuple` built from a `Matrix` by joining each constituent `Tuple` end-to-end.

> `⊕ :: Matrix → Tuple`
