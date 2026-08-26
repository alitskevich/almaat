---
title: "Presentational View"
description: "Matter as a Basis equipped with Attributes, and the Entity, Type, Point, Place, Relation, and Schema built on it."
keywords: [math, views]
---

# Presentational View

![Presentational View](/images/0-math/06-views.svg)

## Matter

**`Matter`** := `Set:Basis` equipped with a finite set of `Azon:Attribute`s.

---

**`Basis`** := the `Set` a `Matter` is built on.

> `Matter := (Basis, {Attribute}) :: DOM(Attribute) ⊆ Basis`

---

**`Attribute`** := `Azon` whose `Domain` is part of the `Basis` of `Matter`.

> `Attribute :: Azon :: DOM ⊆ Basis`

---

**`Entity`** := `Element` of the `Basis` of the `Matter`.

> `Entity ∈ Basis`

## Type and Volume

**`Type`** := `Tuple` of `Attribute`s of `Matter`.

> `Type<Matter> := [a₁, a₂, ..., aₙ] | DOM(aᵢ) ⊆ Matter::Basis`

---

**`Point`** := `Tuple` of `Element`s, one drawn from `Codomain` of corresponding `Attribute` of given `Type`.

> `Point<Type> := [v₁, v₂, ..., vₙ] | vᵢ ∈ COD(aᵢ IS Type[i])`

---

**`Volume`** := `Set` of all possible `Point`s of the `Type` — the Cartesian product of the `Attribute` codomains.

> `Volume<Type> := COD(a₁) × COD(a₂) × ... × COD(aₙ)`

---

**`Place`** := `Set` of `Point`s of `Type` — a subset of its `Volume`.

> `Place<Type> := {Point} ⊆ Volume<Type>`

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

**`Reference`** (foreign key) := `Attribute` whose `Value`s are `Key`s of other `Type`s.

---

**`Space`** := `Type` of `Reference`s.

---

**`Relation`** := `Place` in `Space`.

> `Relation := {[Ref₁, Ref₂, ...]}`

---

**`Schema`** := `Graph` of `Relation`s between given `Type`s.

> `Schema<{Type}> := ({Type}, {Relation})`

## Derived Places

**`Region`** := A hyperrectangular `Place` constrained by subsets of the `Codomain` of the corresponding `Attribute`s.

> `Region := Set₁ ⊆ COD(a₁) × Set₂ ⊆ COD(a₂) × ... × Setₙ ⊆ COD(aₙ)`

---

**`Projection`** := A `Place` derived from `Place`-`Origin` by `Selection` over the `Attribute`s of a `Type`.

> `Projection<Selection over [a₁, ..., aₙ]> := Origin → Selection(Place)`

---

**`Origin`** := the `Place` a `Projection` derives from.

## Quality

**`Quality<Type>`** := `Azon` over `Point`s of given `Volume`.

*DEF*: a `Quality` with a single value is *called* `Principle`; with two values, `Predicate` (Boolean).

---

**`Taxon`** := A `Cluster` of the `Volume` split by shared values of a `Quality`.

> `Taxon(q) := Cluster(Volume) :: q of all points in any fragment is the same`

---

**`Sigma<n>`** := smallest `Place` containing an `(n−1)/n` proportion of the `Matter`.

> `Sigma<n> := argmin(|Place|) : |Content(Place)| ≥ ((n−1)/n) · |Matter|`

*NOTE*: `|X|` is the count of `Element`s in `X`; `argmin` selects the argument that minimizes the quantity.
