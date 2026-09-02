---
title: "Composition"
description: "The Arrow and the Composition that feeds one Azon's output into another — associativity, Identity, Null."
keywords: [math, composition]
---

# Composition

![Composition](/images/0-math/02-composition.svg)

## Arrows

**`Arrow`** := an `Azon` that responds `emptily` *always except once*.

> `[a,b] := x → (x IS a ? b : Zero)`

---

**`Composition`** := The `Azon` built on `Arrow` by *assuming* the output of `Subject` as the input of the `Object`.

> `.(a,b) := x → a(b(x))`

*NOTE*: `Composition` is **associative** by construction.

> `(A.B).C = A.(B.C)`

---

**`Identity<A>`** := Composition-preserving `Azon` for A.

> `Id.A = A.Id = A`

*NOTE*: `Unit` is the *universal* `Identity` (restricted to `DOM(A)` on the right, `COD(A)` on the left).

---

**`Null`** := Composition-absorbing `Azon`.

> `Null.A = A.Null = Null`

*NOTE*: `Zero` is *universal* `Null`.

---

**`Bijective`** := `Azon` for which there exists an `Azon:Inverse` whose left and right `Composition` give the `Domain` and `Codomain` of the `Azon`.

> `A⁻¹.A = DOM(A) ∧ A.A⁻¹ = COD(A)`

*DEF*: a `Composition` is **well-consumed** when its `Object` is valent on the entire output of its `Subject`: `COD(A) ⊆ DOM(B)`.
