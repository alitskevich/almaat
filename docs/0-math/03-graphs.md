---
title: "Graph"
description: "Graph as a Set of Arrows, the Vertex types classified by in/out connectivity, the Path and Tree built on them, and what makes a Graph connected."
keywords: [math, graphs]
---

# Graph

![Graph](/images/0-math/03-graphs.svg)

## Definitions

**`Graph`** := `Set` of `Arrow`s.

> `Graph := {[x,y]}`
---

**`Vertex`** := one of `Sign:Subject` or `Value:Object` of `Arrow`s of `Graph`.

> `Vertex<G> := {x : ∃A ∈ G, x ∈ DOM(A) ∨ x ∈ COD(A)}`

A `Vertex` is classified by how many `Arrow`s enter and leave it, written `(in:out)`.

| Term | Type | Description |
|---|---|---|
| **Root** | `(0:n)` | no ingoing `Arrow` |
| **Leaf** | `(n:0)` | no outgoing `Arrow` |
| **Relay** | `(1:1)` | one in, one out |
| **Fan-Out** | `(1:n)` | one in, many out |
| **Fan-In** | `(n:1)` | many in, one out |

---

**`Path`** := `Composition` of `Arrow`s of a `Graph`.

> `Path<G> := [A₁...Aₙ] :: ∀A ∈ G`

---

**`Cycle`** := a `Path` that ends at its own starting `Vertex`.

> `Cycle<G> := Path<G> :: DOM(Path) = COD(Path)`

*NOTE*: the composite `Azon` of a `Cycle` is **endogenous**; a self-loop `[a,a]` is the minimal `Cycle`.

---

**`Tree`** := `Graph` with exactly one `Root`, and exactly one ingoing `Arrow` into every other `Vertex`.

> `Tree<G> :: ∃! Root ∧ ∀V ≠ Root: ∃! A ∈ G, V ∈ COD(A)`

## Connectivity

*DEF*: a `Graph` is **connected** if, for every proper subset `V'` of its `Vertex` set `V`, some `Arrow` crosses the boundary between `V'` and the rest.

> `∀V' ⊊ V: ∃Arrow ∈ Graph: (DOM(Arrow) ∩ V' ≠ 0 ∧ COD(Arrow) ⊄ V') ∨ (COD(Arrow) ∩ V' ≠ 0 ∧ DOM(Arrow) ⊄ V')`

## Currying

A `Graph` and an `Azon` are two views of the same — the `Set` of `Arrow`s `{[x,y]}` *is* the `Azon` responding to each `x` with its `y`.

> `{[x,y]} ≃ (x → y)`

*NOTE*: per single response, `[x,y] ≃ x → y`; a `Graph` reads back as an `Azon` when it holds at most one `Arrow` per `Sign`.

---

**`Currying`** := The `Azon` that rewrites an `Azon` *over* `Arrow`s into an `Azon` *into* `Graph`s: fixing `x` leaves the residual responses `y → A([x,y])`, which are the `Arrow`s of a `Graph`.

> `curry(A) := x → {[y, A([x,y])]}`

*NOTE*: type-level: `curry : ({[x,y]} → Z) → (X → {[y,z]})`; reading the `Graph` back as an `Azon`: `curry(A)(x)(y) = A([x,y])`.

---

**`Partial Application`** := The `Azon` obtained by supplying some, but not all, of the `Sign`s a curried `Azon` expects.

> `PartialApp(A, x) := curry(A)(x)`

*NOTE*: the result is an `Azon` of reduced arity, still awaiting the remaining `Sign`s.
