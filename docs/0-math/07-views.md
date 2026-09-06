---
title: "Presentational View"
description: "Matter as a Basis equipped with Attributes, and the Entity, Type, Point, Place, Relation, and Schema built on it."
keywords: [math, views]
---

# Presentational View

## Definitions

---

**`Matter`** := `Tuple` of (`Azons` := **`Attribute`**) with the same (`Domain` := **`Basis`**) and those `Codomains` *belongs* to the same (`Cluster` := **`Palette`**).

> `Matter<Basis, Palette> := M[ Attribute, ... ] :: ∀A ∈ M: ( DOM(A) == Basis ) ∧ ( COD(A) ⊆ Palette )`

---

**`Attribution`** := `Azon` *from* `Basis` *into* `Volume` of the `Matter`.

> `Attribution<Matter> := (E ∈ Basis) → [Matter[i](E),... : ∀i < n ]`

---

**`Entity`** := `Element` of the `Basis`.

> `Entity<Matter> ∈ Basis`

---

**`Content`** := `Set` of every `Entity` whose `Attribution` `Spons` falls within the `Form`.

> `Content(Form) := { Entity :: Attribution(Entity) ∈ Form }`

*NOTE*: Let say: `Form` *covers* its `Content`.

## Keys, Relations, Schema

**`Key`** (primary key) := `Injective` `Attribute`.

> `∀a, b ∈ DOM(Key): Key(a) = Key(b) ⟹ a = b`

---

**`Reference`** (foreign key) := `Attribute` whose `Spons` are `Keys` of other `Matters`.

---

**`Schema`** := `Graph` of `Relations` between given `Type`s.

> `Schema<{Type}> := ({Type}, {Relation})`

## Quality

**`Quality<Type>`** := `Azon` *from* `Codomain` of `Attribution`.

---

**`Taxon`** := A `Cluster` of the `Volume` split by shared values of a `Quality`.

> `Taxon(q) := K :: Cluster(K, Volume) ∧ ∀F ∈ K: ∀a, b ∈ F: q(a) = q(b)`

---

**`Sigma<n>`** := smallest `Form` containing an `(n−1)/n` proportion of the `Matter`.

> `Sigma<n> := argmin(|Place|) : |Content(Place)| ≥ ((n−1)/n) · |Basis|`

*NOTE*: `|X|` is the count of `Elements` in `X`; `argmin` selects the argument that minimizes the quantity.
