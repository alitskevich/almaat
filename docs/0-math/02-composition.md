---
title: "Composition"
description: "The Arrow and its Vertex, and the Composition that feeds one Azon's output into another — associativity, Identity, Null, and Currying."
keywords: [math, composition]
license: UNLICENSED
created: 2026-08-07
modified: 2026-08-25
source: docs/0-math/02-composition.md
---

# Composition

![Composition](/images/0-math/02-composition.svg)

The `Arrow` and its `Vertex`, and the `Composition` that feeds one `Azon`'s output into another — associativity, `Identity`, `Null`, and `Currying`.

## Arrows

**`Arrow`** := an `Azon` that responds *always* `emptily` *except once*.

> `R(a,b) := x → (x IS a ? b : 0)`

---

**`Vertex`** := `Sign:Subject` or `Value:Object` of `Arrow`.

> `Vertex(R(a,b)) := a | b`

## Composition

**`Composition`** := The `Azon` built on `Arrow` by *assuming* the output of `Subject` as the input of the `Object`.

> `.(a,b) := x → a(b(x))`

*NOTE*: `Composition` is **associative** by construction.

> `(A.B).C = A.(B.C)`

*NOTE*: `Composition` over the same `Azon` is *called* `Power`: `A^0 = Unit`, `A^1` is the `Azon` itself, `A^n` is `A` composed with itself `n` times.

---

**`Identity`** := Composition-preserving `Azon`.

> `Id.A = A.Id = A`

*NOTE*: `Unit` is the universal `Identity` (restricted to `DOM(A)` on the right, `COD(A)` on the left).

---

**`Null`** := Composition-absorbing `Azon`.

> `Null.A = A.Null = Null`

*NOTE*: `Zero` is universal `Null`.

---

**`Bijective`** := `Azon` for which there exists an `Azon:Inverse` whose left and right `Composition` give the `Domain` and `Codomain` of the `Azon`.

> `A⁻¹.A = DOM(A) ∧ A.A⁻¹ = COD(A)`

*DEF*: a `Composition` is **well-consumed** when its `Object` is valent on the entire output of its `Subject`: `COD(A) ⊆ DOM(B)`.

## Derived

**`Singleton`** := `fixed` `Arrow`.

> `Singleton(C) := x → (x IS C ? C : 0)`

*NOTE*: `Singleton` is a `Set` with exactly one `Element`.

---

**`Currying`** := The `Azon` that corresponds an `Azon` over `Arrow`s to an `Azon` into `Arrow`s.

> `curry := (({X → Y}) → Z) → (X → {(Y → Z)})`

*NOTE*: Applying `curry(A)` to one `Element` yields a `Partial Application` of reduced arity.
