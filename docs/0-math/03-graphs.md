---
title: "Graph"
description: "Graph as a Set of Arrows, the Vertex types classified by in/out connectivity, the Path and Tree built on them, and what makes a Graph connected."
keywords: [math, graphs]
---

# Graph

![Graph](/images/0-math/03-graphs.svg)

## Definitions

**`Graph`** := `Set` of `Arrow`s.

> `Graph := {Arrow}`

---

**`Path`** := `Tuple` of `Arrow`s of a `Graph` in which each `Arrow`'s `Codomain` is the next one's `Domain`.

> `Path := [Arrow₁, ..., Arrowₙ] :: COD(Arrowᵢ) = DOM(Arrowᵢ₊₁)`

*NOTE*: a `Path` is what `Composition` consumes — composing its `Arrow`s in order yields a single `Arrow` from the first `Domain` to the last `Codomain`.

---

**`Tree`** := `Graph` with one `Root` in which every other `Vertex` is reached by exactly one `Path`.

> `Tree :: ∃! Root ∧ ∀V ≠ Root: ∃! Path(Root → V)`

## Vertex Types

A `Vertex` is classified by how many `Arrow`s enter and leave it, written `(in:out)`.

| Term | Type | Description |
|---|---|---|
| **Root** | `(0:n)` | no ingoing `Arrow` |
| **Leaf** | `(n:0)` | no outgoing `Arrow` |
| **Relay** | `(1:1)` | one in, one out |
| **Fan-Out** | `(1:n)` | one in, many out |
| **Fan-In** | `(n:1)` | many in, one out |

## Connectivity

*DEF*: a `Graph` is **connected** if, for every proper subset `V'` of its `Vertex` set `V`, some `Arrow` crosses the boundary between `V'` and the rest.

> `∀V' ⊊ V: ∃Arrow ∈ Graph: (DOM(Arrow) ∩ V' ≠ 0 ∧ COD(Arrow) ⊄ V') ∨ (COD(Arrow) ∩ V' ≠ 0 ∧ DOM(Arrow) ⊄ V')`
