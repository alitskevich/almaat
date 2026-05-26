# Space

`Attribute-Space`, `Point`, `State`, and `Schema` — the framework for representing structured entities. `State` defined here is the primitive used heavily across [06-process](06-process.md), [07-intellect](07-intellect.md), [09-agency](09-agency.md), and [10-growth](10-growth.md).

## Coordinate Structure

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Attribute-Space` | A `Row` of `Azon` with the same `Domain` (Attributes), each mapping entities to non-empty values | `Attribute-Space := [p₁, p₂, ..., pₙ]` | Each `pᵢ` is an `Azon` with a shared `Domain`. |
| `Point` | A `Row` of values, one drawn from each Attribute's `Codomain` | `Point := [v₁, v₂, ..., vₙ]` with `vᵢ ∈ COD(pᵢ)` |  |
| `Volume` | The `Set` of all possible `Point` of the `Attribute-Space` | `Volume := COD(p₁) × COD(p₂) × ... × COD(pₙ)` | The Cartesian product of attribute codomains. |
| `Place` | A subset of the `Volume` | `Place ⊆ Volume` |  |

## Subjects and Identification

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Presentation` | The `Point` of a Subject within the `Attribute-Space` | `Presentation(s) := (s, [p₁(s), p₂(s), ..., pₙ(s)])` | A Subject's manifestation in the `Attribute-Space` — the indexed pair of entity-and-its-coordinates. |
| `Matter` | The `Set` of all `Presentation` | `Matter := {Presentation(s) : s in indexed entities}` |  |
| `Content` | The `Set` of `Presentation` whose coordinates fall within a `Place` | `Content(Place) := {Presentation(s) : Presentation(s).coords ∈ Place}` | The *extension* of a region — every Subject currently within it. |
| `Key` | An injective Attribute — distinct entities have distinct values | `∀a, b ∈ DOM(p): p(a) = p(b) ⟹ a = b` | A primary identifier. |
| `Relation` | A `Place` whose Attributes are `Key` of other `Attribute-Space` | `Relation := {[K₁, K₂, ...]}` | Relational/database-like links between `Attribute-Space`. |
| `Tuple` | A `Point` of a `Relation` | `[k₁, k₂, ...]` | A specific inter-entity connection. |

## State and Schema

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `State` | A `Structure` whose `Vertex` are `Presentation` and whose `Arrow` are `Relation` | `State := Structure over {Presentation}, edges from Relation` | A snapshot of an entity-or-system at a moment — what a `Participant`'s `Behavior` projects outward (see [06-process](06-process.md)). |
| `Schema` | A meta-`Structure` whose `Vertex` are `Attribute-Space` and whose `Arrow` are `Relation` between them | `Schema := Structure over {Attribute-Space}, edges from Relation` | The architecture of a knowledge domain — a database schema in the conventional sense. |

## Correspondence to Data Normalization

The primitives above align with the classical relational normal forms. `Schema` is the database schema; an `Attribute-Space` is a normalized table; a `Presentation` is a row; a `Relation` carries foreign-key links.

| Normal Form | Condition | Correspondence |
|---|---|---|
| **1NF** | Atomic values; no repeating groups | `Point := [v₁, ..., vₙ]` with `vᵢ ∈ COD(pᵢ)` — each coordinate is a single element of its Attribute's `Codomain`, atomic by construction. |
| **2NF** | 1NF and every non-key attribute depends on the whole `Key` | An `Attribute-Space` whose non-`Key` Attributes are functions of the full `Key` only; partial dependencies force decomposition into separate `Attribute-Space` linked by `Relation`. |
| **3NF** | 2NF and no transitive dependency between non-key attributes | Non-`Key` Attributes depend on the `Key` directly, not via another non-`Key` Attribute; transitive chains are factored into their own `Attribute-Space`. |
| **BCNF** | Every functional determinant is a `Key` | For every functional dependency `X → Y` within an `Attribute-Space`, `X` is a `Key` (injective Attribute or Attribute composite). |

A fully normalized `Schema` is therefore a `Structure` of `Attribute-Space` in BCNF, with every inter-table link expressed as a `Relation` over `Key` Attributes and every `Tuple` denoting one inter-entity connection.

## Projections and Categories

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Region` | A `Row` of subsets of the `Codomain` of corresponding Attributes | `Region := [Set₁ ⊆ COD(p₁), Set₂ ⊆ COD(p₂), ...]` | A hyperrectangular constraint region in attribute space. |
| `View` | A `Selection` over the Attributes of an `Attribute-Space` — a projection slice | `View := Selection over [p₁, ..., pₙ]` | A subset of attributes used to observe an entity; the rest are hidden. |
| `Taxon` | A `Cluster` of the `Volume` by equal values of a Quality | `Taxon(q) := Cluster(Volume) by q-value` | A partition of the space by shared quality value. A Quality with one value: `Principle`; with two values: `Predicate` (Boolean). |
| `Norm` | The smallest `Place` containing a `(n−1)/n` proportion of the `Matter` | `Norm := argmin_{Place} \|Place\| : \|Content(Place)\| ≥ ((n−1)/n) · \|Matter\|` | The minimal region capturing a specified fraction of the population — defines what is "normal" within a domain. |
