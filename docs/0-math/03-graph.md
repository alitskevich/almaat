# Graph

![Graphs](/images/0-math/02-graph.svg)

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

`∀V' ⊊ V: ∃r ∈ L: (DOM(r) ∩ V' ≠ 0 ∧ COD(r) ⊄ V') ∨ (COD(r) ∩ V' ≠ 0 ∧ DOM(r) ⊄ V')`

**DEF**: An `Graph` is `univalent(functional)` if it has no `Fork` : every `Vertex` has at most one outgoing edge.
