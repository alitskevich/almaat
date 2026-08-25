---
title: "Graph"
description: "Graph as a Set of Arrows, the Vertex types classified by in/out connectivity, and what makes a Graph connected."
keywords: [math, graphs]
license: UNLICENSED
created: 2026-08-08
modified: 2026-08-25
source: docs/0-math/03-graphs.md
---

# Graph

![Graph](/images/0-math/03-graphs.svg)

`Graph` as a `Set` of `Arrow`s, the `Vertex` types classified by in/out connectivity, and what makes a `Graph` connected.

## Definitions

**`Graph`** := `Set` of `Arrow`s.

> `Graph := {Arrow}`

## Vertex Types

A `Vertex` is classified by how many `Arrow`s enter and leave it, written `(in:out)`.

| Term | Type | Description |
|---|---|---|
| **`Root`** | `(0:n)` | no ingoing `Arrow` |
| **`Leaf`** | `(n:0)` | no outgoing `Arrow` |
| **`Relay`** | `(1:1)` | one in, one out |
| **`Fan-Out`** | `(1:n)` | one in, many out |
| **`Fan-In`** | `(n:1)` | many in, one out |

## Connectivity

*DEF*: a `Graph` is **connected** if, for every proper subset `V'` of its `Vertex` set `V`, some `Arrow` crosses the boundary between `V'` and the rest.

> `∀V' ⊊ V: ∃Arrow ∈ Graph: (DOM(Arrow) ∩ V' ≠ 0 ∧ COD(Arrow) ⊄ V') ∨ (COD(Arrow) ∩ V' ≠ 0 ∧ DOM(Arrow) ⊄ V')`
