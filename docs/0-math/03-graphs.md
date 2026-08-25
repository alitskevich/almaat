---
title: "Graph"
description: "Vertexes of Graph are classified by its (in/out)-connectivity"
keywords: [math, graphs]
license: UNLICENSED
created: 2026-08-08
modified: 2026-08-08
source: docs/0-math/03-graphs.md
---

# Graph

![Graph](/images/0-math/03-graphs.svg)

**`Graph`** := `Set` of `Arrow`s.

`Graph := {Arrow}`

`Vertex`es of `Graph` are classified by its (in/out)-connectivity:

| Type | Term | Description |
|---|---|---|
| `(0:n)` | `Root` | no ingoing  |
| `(n:0)` | `Leaf` | no outcoming |
| `(1:1)` | `Relay` | one in, one out |
| `(1:n)` | `Fan-out` | one in, many out  |
| `(n:1)` | `Fan-In` | many in, one out  |

**DEF**: `Graph` is `connected` if for any subset of its `Vertex`s exists an entering/exiting `Arrow`.

`∀V' ⊊ V: ∃Arrow ∈ Graph: (DOM(Arrow) ∩ V' ≠ 0 ∧ COD(Arrow) ⊄ V') ∨ (COD(Arrow) ∩ V' ≠ 0 ∧ DOM(Arrow) ⊄ V')`
