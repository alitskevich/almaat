# Presentational View

![Type](/images/0-math/01-space.svg)

## Definitions

**`Matter`** := `Set:Basis` equipped with finite set of `Azon:Attribute`s.

**`Attribute`** := `Azon`, which `Domain` is part of the `Basis` of `Matter`.

**`Entity`** := `Element` of the `Matter`.

> `Matter := (Basis, {Attribute}) :: DOM(Attribute) ⊆ Basis`
> `Entity ∈ Basis`

---

**`Type`** := A `Tuple` of `Attribute`s of `Matter`.

> `Type<Matter> := [a₁, a₂, ..., aₙ] | DOM(pᵢ) ⊆ Matter::Basis`

**`Point`** := A `Tuple` of `Element`s, one drawn from `Codomain` of corresponding `Attribute` of given `Type`.

> `Point<Type> := [v₁, v₂, ..., vₙ] | vᵢ ∈ COD(pᵢ IS Type[i])`

**`Volume`** := The `Set` of all possible `Point`s of the `Type` -- Cartesian product of attribute codomains.

> `Volume<Type> := COD(p₁) × COD(p₂) × ... × COD(pₙ)`

**`Place`** := A `Set` of `Point`s of `Type` -- subset of its `Volume`.

> `Place<Type> := {Point} ⊆ Volume<Type>`

---

**`View`** := the `Point` corresponding to the `Entity` in given `Type`.

> `View<Type, Entity> := [a₁(E), a₂(E), ..., aₙ(E)] :: pᵢ IS Type[i]`

**`Content`** := The `Set` of all `Entity`ies, whose `View`s fall within a `Place`.

> `Content(Place) := { Entity(s) :: View(Entity) ∈ Place }`

---

**`Key`** (primary key) := a bijective Attribute — distinct entities have distinct values.

> `∀a, b ∈ SDom: Key(a) = Key(b) ⟹ a = b`

**`Reference`** (foreign key) := Attribute, which `Values` are `Key`s of other `Type`s.

**`Relation`** := A `Place` in `Type` consisting of `References`.

> `Relation := {[Ref₁, Ref₂, ...]}`

---

**`Schema`** := A `Structure` whose `Vertex`es are `Type`s and `Arrow`s are `Relation`s between those `Type`s.

> `Schema := [{Type}, {Relation}]`

---

**`Region`** := A hyperrectangular `Place` constrained by subsets of the `Codomain` of corresponding Attributes.

> `Region := Set₁ ⊆ COD(p₁) × Set₂ ⊆ COD(p₂) × ... × Set₂ ⊆ COD(pₙ)`

---

**`Projection`** := A `Place` devived from `Place`-`Origin` by `Selection` over the Attributes of an `Type`.

> `Projection<Selection over [p₁, ..., pₙ]> := Origin -> Selection(Place)`

---

**`Taxon`** := A `Cluster` of the `Volume` by equal values of a Quality.

> `Taxon(q) := Cluster(Volume) by q-value`

*NOTE*: A partition of the space by shared quality value. A Quality with one value: `Principle`; with two values: `Predicate` (Boolean).

---

**`Sigma<n>`** := The smallest `Place` containing a `(n−1)/n` proportion of the `Matter`.

> `Norm := argmin_{Place} |Place| : |Content(Place)| ≥ ((n−1)/n) · |Matter|`

*NOTE*: The minimal region capturing a specified fraction of the population — defines what is "normal" within a domain.
