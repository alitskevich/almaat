---
title: "Numerals"
description: "Natural numbers (Number), intervals, sequences, and selections."
keywords: [math, numerals]
license: UNLICENSED
created: 2026-05-26
modified: 2026-08-08
source: docs/0-math/04-numerals.md
---

# Numerals

![Sequence](/images/0-math/04-numerals.svg)

Natural numbers (`Number`), intervals, sequences, and selections.

`Number` provides the substrate for any totally-ordered structure.

## Natural Numbers

**`Plus`** := The `Azon` that responds to a `Sign` with its `Singleton`.

> `Plus := x -> {x}`

**`Namerals`** := `Set` of all `Power`s of `Plus`.

> `NAT := { 1 , Plus, Plus^... }`

**`Number`** := `Element` of `Namerals`.

> `N := Plus^N`

**`Total Order`** := property of `Number`s that for any `a, b`, exactly one of `a < b`, `a = b`, `a > b` holds, `∀a, b: ∃c: a.c = b ∨ b.c = a`.

## Ranges

**`Interval`** := Set of all `Number`s not greater than `N`.

> `Interval(N) := {n : n ≤ N}`

---

**`Ray`** := Set of all `Number`s strictly greater than `N`.

> `Ray(N) := {n : n > N}`

---

**`Range`** := Set of all `Number`s strictly greater than `N` and at most `M`, with `N < M`.

> `Range(N, M) := {n : N < n ≤ M}`

## Sequences

**`Tuple`** := `Azon` over `Interval`.

> `Tuple<N> :: Azon :: DOM = Interval(N)`

---

**`Queue`** := `Azon` over `Ray`.

> `Queue = Azon :: DOM = Ray(N)`

---

**`Scoring`** := `Azon` into `Numerals`.

> `Scoring := Azon :: COD ⊆ Number`

---

**`Vector`**  := `Scoring` `Tuple`.

> `Vector := Scoring :: DOM = BI(N), COD ⊆ Number`

## Selection

**`Mask`** := bijective `Tuple` of length `n` into a `Interval` of length `m > n`.

> `Mask := BI(n) → BI(m)`

---

**`Selection`** := `Composition` of a `Selection-Mask` with a `Tuple`.

> `Selection := Tuple . Mask`

## 2D

**`Matrix`** (2D-array) := A `Tuple` of `Tuple`.

> `Matrix :: BI(n) → Tuple`

---

**`Flat`** := A `Tuple` built from a `Matrix` by joining each constituent `Tuple` end-to-end.

> `⊕ :: Matrix → Tuple`
