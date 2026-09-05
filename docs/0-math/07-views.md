---
title: "Presentational View"
description: "Matter as a Basis equipped with Attributes, and the Entity, Type, Point, Place, Relation, and Schema built on it."
keywords: [math, views]
---

# Presentational View

## Definitions

**`Matter`** := `Set` of (`Azons` := **`Attribute`**) with the same (`Domain` := **`Basis`**)

> `Matter<Basis> := { Attribute :: DOM(Attribute) = Basis }`

---

**`Entity`** := `Element` of the `Basis` of the `Matter`.

> `Entity ∈ Basis`

---

**`Type`** := `Tuple` of `Attributes` of `Matter`.

> `Type<Matter> := [a₁, a₂, ..., aₙ] | aᵢ ⊆ Matter`

## View and Content

**`View`** := `Point` corresponding to the `Entity` in given `Type`.

> `View<Type, Entity> := [a₁(E), a₂(E), ..., aₙ(E)] :: aᵢ IS Type[i]`

---

**`Content`** := `Set` of every `Entity` whose `View` falls within a `Place`.

> `Content(Place) := { Entity :: View(Entity) ∈ Place }`

## Keys and Relations

**`Key`** (primary key) := injective `Attribute` — distinct `Entity` have distinct values.

> `∀a, b ∈ DOM(Key): Key(a) = Key(b) ⟹ a = b`

---

**`Reference`** (foreign key) := `Attribute` whose `Spons` are `Keys` of other `Type`s.

---

---

**`Relation`** := `Place` in `Space`.

> `Relation := {[Ref₁, Ref₂, ...]}`

---

**`Schema`** := `Graph` of `Relations` between given `Type`s.

> `Schema<{Type}> := ({Type}, {Relation})`

## Derived Places

**`Region`** := A hyperrectangular `Place` constrained by subsets of the `Codomain` of the corresponding `Attribute`s.

> `Region := Set₁ ⊆ COD(a₁) × Set₂ ⊆ COD(a₂) × ... × Setₙ ⊆ COD(aₙ)`

---

**`Projection`** := A `Place` derived from `Place`-`Origin` by `Selection` over the `Attributes` of a `Type`.

> `Projection<Selection over [a₁, ..., aₙ]> := Origin → Selection(Place)`

---

**`Origin`** := the `Place` a `Projection` derives from.

## Quality

**`Quality<Type>`** := `Azon` over `Points` of given `Volume`.

*DEF*: a `Quality` with a single value is *called* `Principle`; with two values, `Predicate` (Boolean).

---

**`Taxon`** := A `Cluster` of the `Volume` split by shared values of a `Quality`.

> `Taxon(q) := Cluster(Volume) :: q of all points in any fragment is the same`

---

**`Sigma<n>`** := smallest `Place` containing an `(n−1)/n` proportion of the `Matter`.

> `Sigma<n> := argmin(|Place|) : |Content(Place)| ≥ ((n−1)/n) · |Basis|`

*NOTE*: `|X|` is the count of `Elements` in `X`; `argmin` selects the argument that minimizes the quantity.
