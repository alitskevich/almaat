# Space

![Space](/images/0-math/05-space.svg)

`Space`, `Point`, `State`, and `Schema` — the framework for representing *coordinated* entities.

## Coordinate Structure

---

**`Space`** := A `Row` of `Azon`s(`Attribute`) with the same `Domain`.

> `Space<SDom> := [p₁, p₂, ..., pₙ] | DOM(pᵢ) = SDom`

---

**`Point`** := A `Row` of `Element`s, one drawn from `Codomain` of corresponding Attribute.

> `Point<Space> := [v₁, v₂, ..., vₙ] | vᵢ ∈ COD(pᵢ)`

---

**`Volume`** := The `Set` of all possible `Point` of the `Space`.

> `Volume<Space> := COD(p₁) × COD(p₂) × ... × COD(pₙ)`

*NOTE*: The Cartesian product of attribute codomains.

---

**`Place`** := A `Set` of `Point`s of `Space` (or subset of its `Volume`).

> `Place<Space> := {Point} (Place ⊆ Volume<Space>)`

## Entities and Content

**`Entity`** := an `Element` of the `Domain` of the `Space`.

> `Entity<Space> ∈ DOM(Space)`

---

**`Presentation<Entity>`** := the `Point` relevant to the `Entity`.

> `Presentation<Entity> :=  [p₁(Entity), p₂(Entity), ..., pₙ(Entity)]`

---

**`Matter`** := The `Set` of all `Entity`ies of the `Space`.

> `Matter<Space> := {Presentation(Entity)}`

---

**`Content`** := The `Set` of `Entity`, whose `Presentation`s fall within a `Place`.

> `Content(Place) := {Entity(s) : Presentation(Entity) ∈ Place}`

## References and Relations

**`Key`** (primary key) := a bijective Attribute — distinct entities have distinct values.

> `∀a, b ∈ SDom: Key(a) = Key(b) ⟹ a = b`
---

**`Reference`** (foreign key) := Attribute, which `Values` are `Key`s of other `Space`s.

---

**`Relation`** := A `Place` in `Space` consisting of two or more `References`.

> `Relation := {[Ref₁, Ref₂, ...]}`

---

**`Schema`** := A `Structure` whose `Vertex`es are `Space`s and `Arrow`s are `Relation`s between those `Space`s.

> `Schema := [{Space}, {Relation}]`

## Projections and Categories

---

**`Region`** := A hyperrectangular `Place` constrained by subsets of the `Codomain` of corresponding Attributes.

> `Region := Set₁ ⊆ COD(p₁) × Set₂ ⊆ COD(p₂) × ... × Set₂ ⊆ COD(pₙ)`

---

**`View`** := A `Place` devived from `Place`-`Origin` by `Selection` over the Attributes of an `Space`.

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

The primitives above align with the classical relational normal forms. `Schema` is the database schema; an `Space` is a normalized table; a `Presentation` is a row; a `Relation` carries foreign-key links.

---

**`1NF`** := Atomic values; no repeating groups.

*NOTE*: `Point := [v₁, ..., vₙ]` with `vᵢ ∈ COD(pᵢ)` — each coordinate is a single element of its Attribute's `Codomain`, atomic by construction.

---

**`2NF`** := 1NF and every non-key attribute depends on the whole `Key`.

*NOTE*: An `Space` whose non-`Key` Attributes are functions of the full `Key` only; partial dependencies force decomposition into separate `Space` linked by `Relation`.

---

**`3NF`** := 2NF and no transitive dependency between non-key attributes.

*NOTE*: Non-`Key` Attributes depend on the `Key` directly, not via another non-`Key` Attribute; transitive chains are factored into their own `Space`.

---

**`BCNF`** := Every functional determinant is a `Key`.

*NOTE*: For every functional dependency `X → Y` within an `Space`, `X` is a `Key` (injective Attribute or Attribute composite).

A fully normalized `Schema` is therefore a `Structure` of `Space` in BCNF, with every inter-table link expressed as a `Relation` over `Key` Attributes and every `Tuple` denoting one inter-entity connection.

```mermaid
flowchart LR
    Raw["Unnormalized"] --> NF1["1NF<br/>atomic values"]
    NF1 --> NF2["2NF<br/>full Key dependency"]
    NF2 --> NF3["3NF<br/>no transitive dependency"]
    NF3 --> BCNF["BCNF<br/>determinant is Key"]
    BCNF --> Schema["Schema of Space<br/>linked by Relation"]
```
