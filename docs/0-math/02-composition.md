
# Composition

**`Arrow`** := an `Azon` that responds *always* `emptily` *except once*.

> `R(a,b) := x → (x IS a ? b : 0)`

**`Vertex`** := `Sign:Subject` or `Value:Object` of `Arrow`.

---
**`Composition`** := The `Azon` built on `Arrow` by *assuming* the output of `Subject` as the input of the `Object`.

> `.(a,b) := x → a(b(x))`

*NOTE*: `Composition` is **associative** by construction.

> `(A.B).C = A.(B.C)`

*NOTE*: `Composition` over the same Azon called `Power`: A^0 = Unit, A^1 = Azon itself, A^n = is A...A n-times.

---
**`Identity`** := Composition-preserving Azon.

> `Id.A = A.Id = A`

*NOTE*: `Unit` is the universal `Identity` (restricted to `DOM(A)` on the right, `COD(A)` on the left).

---
**`Null`** := Composition-absorbing `Azon`

> `Null.A = A.Null = Null`

*NOTE*: `Zero` is universal `Null`.

---

**`DEF`** := `Azon` *called* `Bijective` if there exists an `Azon:Inverse` such that their left/right `Composition` gives `Domain`/`Codomain` of `Azon`.

> `A⁻¹.A = COD(A) and A.A⁻¹ = DOM(A)`

**`DEF`** `Composition` called **well-consumed** when `Object` valent on entire output of `Subject`.

> `COD(A) ⊆ DOM(B)`

---

**`Singleton`** := `fixed` `Arrow`.

> `Singleton(C) := x → (x IS C ? C : 0)`

*NOTE*: `Singleton` is a `Set` with exactly one `Element`.

---

**`Currying`** := The `Azon` that corresponds an (`Azon` over a `Arrow`s) to a (`Azon` into a `Arrow`s).

> `curry := (({X → Y}) → Z) => (X → {(Y → Z)})`

The result of applying `curry(A)` to one `Element` — yields an `Partial Application` of reduced arity.
