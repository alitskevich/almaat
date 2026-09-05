---
title: "Composition"
description: "The Arrow and the Composition that feeds one Azon's output into another — associativity, bijection, wel-consumption, Identity, Null."
keywords: [math, composition]
---

# Composition

## Arrows

**`Arrow`** := an `Azon` that responds `emptily` *always except once*.

> `[a,b] := x → (x IS a ? b : Zero)`

---

**`Composition`** := The `Azon` built on `Arrow` by *assuming* the output of `Subject` as the input of the `Object`.

> `.(a,b) := x → a(b(x))`

*NOTE*: `Composition` is **`associative`** by construction.

> `(A.B).C = A.(B.C)`

---

**`Identity<A>`** := Composition-preserving `Azon` for A.

> `Id.A = A.Id = A`

*NOTE*: `Unit` is the *universal* `Identity` (may be even restricted to `DOM(A)` on the right, `COD(A)` on the left).

---

**`Null`** := Composition-absorbing `Azon`.

> `Null.A = A.Null = Null`

*NOTE*: `Zero` is *universal* `Null`.

---

*DEF*: `Azon` is **`Bijective`** if there exists an (`Azon`:= **`Inverse`**) whose left and right `Composition` give the `Domain` and `Codomain` of the `Azon`.

> `A⁻¹.A = DOM(A) ∧ A.A⁻¹ = COD(A)`

*DEF*: a `Composition` is **`Well-consumed`** when its `Object` is valent on the entire output of its `Subject`:

> `A.B :: COD(A) = DOM(B)`.

---

**`Currying`** := Azon that recasting from an `Azon` over `[x,y]` into an `Azon` that responds to `x` with another `Azon` awaiting `y`.

> `curry :: ([x,y] → z) ≃ (x → (y → z))`

*NOTE*: both sides respond with the same `z`; iterating the recast unfolds any arity into a chain of single-`Stim` `Azons`.

---

**`Partial Application`** := The `Azon` obtained by supplying some, but not all, of the `Stims` a curried `Azon` expects.

> `PartialApp(A, x) := curry(A)(x)`

*NOTE*: the result is an `Azon` of reduced arity, still awaiting the remaining `Stims`.
