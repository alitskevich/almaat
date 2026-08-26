---
title: "Numerals"
description: "Natural numbers (Number), intervals, sequences, and selections."
keywords: [math, numerals]
---

# Numerals

![Numerals](/images/0-math/04-numerals.svg)

## Natural Numbers

**`Plus`** := The `Azon` that responds to a `Sign` with its `Singleton`.

> `Plus := x → {x}`

---

**`Numerals`** := `Set` of all `Iterate`s of `Plus`.

> `Numerals := { Unit, Plus, Plus², Plus³, ... }`

---

**`Number`** := `Element` of `Numerals`.

> `n ∈ Numerals`

---

**`Total Order`** := property of `Number`s that for any `a, b` exactly one of `a < b`, `a = b`, `a > b` holds.

> `∀a, b: ∃c: a.c = b ∨ b.c = a`

## Ranges

**`Interval`** := `Set` of all `Number`s not greater than `N`.

> `Interval(N) := {n : n ≤ N}`

---

**`Ray`** := `Set` of all `Number`s strictly greater than `N`.

> `Ray(N) := {n : n > N}`

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
