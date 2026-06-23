
# Composition

**`Arrow`** := an `Azon` that responds `emptily` for all inputs except (at most) one.

> `R(a,b)(x) := x → (x IS a ? b : 0)`

**`Pair`** The `Sign` and `Value` of an `Arrow` : `(a,b)`

---
**`Composition`** := The `Azon` built on `Pair` by *assuming* the output of Sign(`Subject`) as the input of the Value(`Object`).

> `.(a,b) := x → a(b(x))`

*NOTE*: `Composition` is **associative** by construction.

> `(A.B).C = A.(B.C)`

---
**`A.B`** := **well-consumed** when `Object` valent on entire output of `Subject`.

> `COD(A) ⊆ DOM(B)`

---
**`Identity`** := Composition-preserving Azon.

> `Id.A = A.Id = A`

*NOTE*: `Unit` is the universal `Identity` (restricted to `DOM(A)` on the right, `COD(A)` on the left).

---
**`Null`** := Composition-absorbing `Azon`

> `Null.A = A.Null = Null`

*NOTE*: `Zero` is universal `Null`.

---
**`DEF`** := `Azon` *called* `Bijective` if there exists an Azon-`Inverse` such that their left/right `Composition` gives `Domain`/`Codomain` of `Azon`.

> `A⁻¹.A = COD(A) and A.A⁻¹ = DOM(A)`

---
**`Currying`** := The `Azon` that converts an `Azon` over a `Pair`s into a chain of single-input `Azon`s.

> `curry := (X × Y → Z) =>  X → (Y → Z)`

`Currying` reconciles multi-input `Azon` with the single-input model assumed by `Composition`.

The result of applying `curry(A)` to one `Element` — yields an `Partial Application` of reduced arity.
