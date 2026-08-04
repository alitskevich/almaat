# Presentations

![Type](/images/0-math/01-space.svg)

## Definitions

**`Matter`** := A `Set`, which contains `Domain`s for each element in `Set` of other `Azon`s.

> `Matter :=(M, {A}) :: DOM(a ∈ A) ⊆ M`

**`Entity`** := an `Element` of the `Matter`.

> `Entity := E ∈ Matter`

**`Attribute`** := Azon, which `Domain` included in `Matter`.

**`Type`** := A `Tuple` of `Attribute`s.

> `Type<Matter> := [p₁, p₂, ..., pₙ] | DOM(pᵢ) ⊆ Matter`

---

**`Point`** := A `Tuple` of `Element`s, one drawn from `Codomain` of corresponding `Attribute` of given `Type`.

> `Point<Type> := [v₁, v₂, ..., vₙ] | vᵢ ∈ COD(pᵢ IS Type[i])`

**`Volume`** := The `Set` of all possible `Point`s of the `Type`.

> `Volume<Type> := COD(p₁) × COD(p₂) × ... × COD(pₙ)`

*NOTE*: `Volume` is the Cartesian product of attribute codomains.

**`Place`** := A `Set` of `Point`s of `Type` (subset of its `Volume`).

> `Place<Type> := {Point} (Place ⊆ Volume<Type>)`

## Content

**`Presentation<Entity>`** (Appearance) := the `Point` relevant to the `Entity` in given `State`.

> `Presentation<Type, Entity> := [p₁(E), p₂(E), ..., pₙ(E)] :: pᵢ IS Type[i]`

**`Content`** := The `Set` of `Entity`ies, whose `Presentation`s fall within a `Place`.

> `Content(Place) := {Entity(s) : Presentation(Entity) ∈ Place}`

## References and Relations

**`Key`** (primary key) := a bijective Attribute — distinct entities have distinct values.

> `∀a, b ∈ SDom: Key(a) = Key(b) ⟹ a = b`

---

**`Reference`** (foreign key) := Attribute, which `Values` are `Key`s of other `Type`s.

---

**`Relation`** := A `Place` in `Type` consisting of `References`.

> `Relation := {[Ref₁, Ref₂, ...]}`

---

**`Schema`** := A `Structure` whose `Vertex`es are `Type`s and `Arrow`s are `Relation`s between those `Type`s.

> `Schema := [{Type}, {Relation}]`

## Projections and Categories

**`Region`** := A hyperrectangular `Place` constrained by subsets of the `Codomain` of corresponding Attributes.

> `Region := Set₁ ⊆ COD(p₁) × Set₂ ⊆ COD(p₂) × ... × Set₂ ⊆ COD(pₙ)`

---

**`View`** := A `Place` devived from `Place`-`Origin` by `Selection` over the Attributes of an `Type`.

> `View<Selection over [p₁, ..., pₙ]> := Origin -> Selection(Place)`

---

**`Taxon`** := A `Cluster` of the `Volume` by equal values of a Quality.

> `Taxon(q) := Cluster(Volume) by q-value`

*NOTE*: A partition of the space by shared quality value. A Quality with one value: `Principle`; with two values: `Predicate` (Boolean).

---

**`Norm`** := The smallest `Place` containing a `(n−1)/n` proportion of the `Matter`.

> `Norm := argmin_{Place} |Place| : |Content(Place)| ≥ ((n−1)/n) · |Matter|`

*NOTE*: The minimal region capturing a specified fraction of the population — defines what is "normal" within a domain.

## Correspondence to Data Normalization

The primitives above align with the classical relational normal forms. `Schema` is the database schema; an `Type` is a normalized table; a `Presentation` is a row; a `Relation` carries foreign-key links.

---

**`1NF`** := Atomic values; no repeating groups.

*NOTE*: `Point := [v₁, ..., vₙ]` with `vᵢ ∈ COD(pᵢ)` — each coordinate is a single element of its Attribute's `Codomain`, atomic by construction.

---

**`2NF`** := 1NF and every non-key attribute depends on the whole `Key`.

*NOTE*: An `Type` whose non-`Key` Attributes are functions of the full `Key` only; partial dependencies force decomposition into separate `Type` linked by `Relation`.

---

**`3NF`** := 2NF and no transitive dependency between non-key attributes.

*NOTE*: Non-`Key` Attributes depend on the `Key` directly, not via another non-`Key` Attribute; transitive chains are factored into their own `Type`.

---

**`BCNF`** := Every functional determinant is a `Key`.

*NOTE*: For every functional dependency `X → Y` within an `Type`, `X` is a `Key` (injective Attribute or Attribute composite).

A fully normalized `Schema` is therefore a `Structure` of `Type` in BCNF, with every inter-table link expressed as a `Relation` over `Key` Attributes and every `Tuple` denoting one inter-entity connection.

```mermaid
flowchart LR
    Raw["Unnormalized"] --> NF1["1NF<br/>atomic values"]
    NF1 --> NF2["2NF<br/>full Key dependency"]
    NF2 --> NF3["3NF<br/>no transitive dependency"]
    NF3 --> BCNF["BCNF<br/>determinant is Key"]
    BCNF --> Schema["Schema of Type<br/>linked by Relation"]
```
