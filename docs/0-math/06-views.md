---
title: "Presentational View"
description: "The presentational view: Matter as a basis equipped with attributes, and the Entity, Type, and Relation built on it."
keywords: [math, views]
license: UNLICENSED
created: 2026-08-08
modified: 2026-08-08
source: docs/0-math/06-views.md
---

# Presentational View

![Presentational View](/images/0-math/06-views.svg)

## Definitions

**`Matter`** := `Set:Basis` equipped with finite set of `Azon:Attribute`s.

**`Attribute`** := `Azon`, which `Domain` is part of the `Basis` of `Matter`.

**`Entity`** := `Element` of the `Matter`.

> `Matter := (Basis, {Attribute}) :: DOM(Attribute) ⊆ Basis`
> `Entity ∈ Basis`

---

**`Type`** := `Tuple` of `Attribute`s of `Matter`.

> `Type<Matter> := [a₁, a₂, ..., aₙ] | DOM(pᵢ) ⊆ Matter::Basis`

**`Point`** := `Tuple` of `Element`s, one drawn from `Codomain` of corresponding `Attribute` of given `Type`.

> `Point<Type> := [v₁, v₂, ..., vₙ] | vᵢ ∈ COD(pᵢ IS Type[i])`

**`Volume`** := `Set` of all possible `Point`s of the `Type` -- Cartesian product of attribute codomains.

> `Volume<Type> := COD(p₁) × COD(p₂) × ... × COD(pₙ)`

**`Place`** := `Set` of `Point`s of `Type` -- subset of its `Volume`.

> `Place<Type> := {Point} ⊆ Volume<Type>`

---

**`View`** := `Point` corresponding to the `Entity` in given `Type`.

> `View<Type, Entity> := [a₁(E), a₂(E), ..., aₙ(E)] :: pᵢ IS Type[i]`

**`Content`** := `Set` of all `Entity`ies, whose `View`s fall within a `Place`.

> `Content(Place) := { Entity(s) :: View(Entity) ∈ Place }`

---

**`Key`** (primary key) := bijective Attribute — distinct entities have distinct values.

> `∀a, b ∈ SDom: Key(a) = Key(b) ⟹ a = b`

**`Reference`** (foreign key) := Attribute, which `Values` are `Key`s of other `Type`s.

**`Space`** := `Type` of `References`.

**`Relation := {[Ref₁, Ref₂, ...]}`** := `Place` in `Space`.

---

**`Schema`** := `Graph` of `Relation`s between given `Type`s.

> `Schema<{Type}> := ({Type}, {Relation})`

---

**`Region`** := A hyperrectangular `Place` constrained by subsets of the `Codomain` of corresponding Attributes.

> `Region := Set₁ ⊆ COD(p₁) × Set₂ ⊆ COD(p₂) × ... × Set₂ ⊆ COD(pₙ)`

---

**`Projection`** := A `Place` devived from `Place`-`Origin` by `Selection` over the Attributes of an `Type`.

> `Projection<Selection over [p₁, ..., pₙ]> := Origin -> Selection(Place)`

---

**`Quality<Type>`** := `Azon` over `Point`s of given `Volume`.

*DEF*: A `Quality` with a single value called `Principle`; with two values - `Predicate` (Boolean).

**`Taxon`** := A `Cluster` of the `Volume` splitted by shared values of a `Quality`.

> `Taxon(q) := Cluster(Volume) :: q of all points in any fragment is the same`

---

**`Sigma<n>`** := smallest `Place` containing a `(n−1)/n` proportion of the `Matter`.

> `Sigma<n> := argmin(|Place|) : |Content(Place)| ≥ ((n−1)/n) · |Matter|`
