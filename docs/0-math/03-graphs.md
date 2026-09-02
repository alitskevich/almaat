---
title: "Graph"
description: "Graph as a Set of Arrows, the Vertex types classified by in/out connectivity, the Path and Tree built on them, and what makes a Graph connected."
keywords: [math, graphs]
---

# Graph

![Graph](/images/0-math/03-graphs.svg)

## Definitions

**`Graph`** := `Set` of `Arrows`.

> `Graph := {[x,y]}`
---

**`Vertex`** := one of `Sign:Subject` or `Value:Object` of `Arrows` of `Graph`.

> `Vertex<G> := {x : ∃A ∈ G, x ∈ DOM(A) ∨ x ∈ COD(A)}`

A `Vertex` is classified by how many `Arrows` enter and leave it, written `(in:out)`.

| Term | Type | Description |
|---|---|---|
| **Root** | `(0:n)` | no ingoing `Arrow` |
| **Leaf** | `(n:0)` | no outgoing `Arrow` |
| **Relay** | `(1:1)` | one in, one out |
| **Fan-Out** | `(1:n)` | one in, many out |
| **Fan-In** | `(n:1)` | many in, one out |

---

**`Path`** := `Composition` of `Arrows` of a `Graph`.

> `Path<G> := [A₁...Aₙ] :: ∀A ∈ G`

---

**`Cycle`** := a `Path` that ends at its own starting `Vertex`.

> `Cycle<G> := Path<G> :: DOM(Path) = COD(Path)`

*NOTE*: the composite `Azon` of a `Cycle` is **endogenous**; a self-loop `[a,a]` is the minimal `Cycle`.

---

**`Tree`** := `Graph` with exactly one `Root`, and exactly one ingoing `Arrow` into every other `Vertex`.

> `Tree<G> :: ∃! Root ∧ ∀V ≠ Root: ∃! A ∈ G, V ∈ COD(A)`

**`Connected Graph`** :=  `Graph`, that for every proper subset `V'` of its `Vertex` set `V`, some `Arrow` crosses the boundary between `V'` and the rest.

> `∀V' ⊊ V: ∃Arrow ∈ Graph: (DOM(Arrow) ∩ V' ≠ 0 ∧ COD(Arrow) ⊄ V') ∨ (COD(Arrow) ∩ V' ≠ 0 ∧ DOM(Arrow) ⊄ V')`

**`Functional Graph(Mapping)`** := `Graph` without `Fan-Outs`; it *is* the `Azon` responding to each `x` with single `y`.

> `{[x,y]} ≃ (x → y)`

---

**`Currying`** := recasting an `Azon` over pair-`Signs` `[x,y]` into an `Azon` that responds to `x` with another `Azon` awaiting `y`.

> `curry :: ([x,y] → z) ≃ (x → (y → z))`

*NOTE*: both sides respond with the same `z`; iterating the recast unfolds any arity into a chain of single-`Sign` `Azons`.

---

**`Partial Application`** := The `Azon` obtained by supplying some, but not all, of the `Signs` a curried `Azon` expects.

> `PartialApp(A, x) := curry(A)(x)`

*NOTE*: the result is an `Azon` of reduced arity, still awaiting the remaining `Signs`.
