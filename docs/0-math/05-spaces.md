---
title: "Spaces"
description: "The Space as a Tuple of Axis, and the Palette, Point, Volume, and Place built on it."
keywords: [math, spaces]
---

# Spaces

## Space

---

**`Palette`** := `Set` of non-intersecting (`Sets`:= **`Axis`**).

> `Palette := { Axis }  :: ( ∀S₁ ≠ S₂ ∈ B: ⋂{S₁, S₂} = 0 )  ∧ ( DOM(S₁) == DOM(S₂) )`

---

**`Space`** := `Tuple` into `Palette`.

> `Space<Palette> := [a₁, a₂, ..., aₙ] :: DOM(S₁) ∈ Palette`

---

**`Point`** := `Tuple` of `Elements`, one drawn from corresponding `Axis` of given `Space`.

> `Point<Space> := [v₁, v₂, ..., vₙ] :: ∀i, v[i] ∈ Space[i]`

---

**`Volume`** := `Set` of all `Points` of the `Space`.

> `Volume<Space> := a₁ × a₂ × ... × aₙ`

*NOTE*: `Volume` is *also known* as the **Cartesian product** of the `Axiss` of the `Space`.

---

**`Place`** := `Subset` in `Volume` -- `Set` of `Points` of same `Space`.

> `Place<Space> := { Point } ⊆ Volume<Space>`

---

**`Action`** := `Azon` over the `Space`.

> `Action<Space, Result> := (x ∈ Volume<Space>) → (y ∈ Result)`

## Endo-space

**`EndoSpace`** := `Space` whose `Palette` is `Singleton`.

> `S^ⁿ :=  [S, S, ... S)`
---

**`EndoVolume`** := `Volume` in `EndoSpace``.

> `S×ⁿ :=  (S × S × ... × S)`

---

**`Relation`** := `Place` in `EndoVolume`.

> `Relation<Set> := Place ⊆ S×ⁿ`

---

**`Operation<Sⁿ>`** := `Azon` from `S×ⁿ` into `S`.

> `Operation<S> := ( x ∈ S^ⁿ ) → (y ∈ S)`

| Term | Arity | Signature | Examples |
| --- | --- | --- | --- |
| **Constant** | `0-ary` | `() → S` | `unit: () => 1`, `zero: () => 0` |
| **Unary** | `1-ary` | `S → S` | `inc: a => a+1`, `neg: a => -a`, `inv: a => a⁻¹`, `⊥: a => ¬a` |
| **Binary** | `2-ary` | `S × S → S` | `add: (a,b) => a+b`, `mul: (a,b) => a·b`, `∧, ∨` |
| **n-ary** | `n-ary` | `Sⁿ → S` | `combine: (a₁, …, aₙ) => …` |
