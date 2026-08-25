---
title: "Azon"
description: "Azon is the framework's sole primitive: a contract responding to each given Sign with a specific Value, constrained by three axioms."
keywords: [math, azon]
license: UNLICENSED
created: 2026-05-26
modified: 2026-08-25
source: docs/0-math/00-azon.md
---

# Azon

![Azon](/images/0-math/00-azon.svg)

`Azon` is the framework's sole primitive: a contract responding to each given `Sign` with a specific `Value`, constrained by three axioms.

## The Formal Spine

| Layer | Reading |
| --- | --- |
| **Collection** — many `Azon` at once | [Sets, Equivalence, Topology](01-sets.md) — `Set`, `Element`, `Subset`, and the topological structures over them |
| **Chaining** — one `Azon` feeding another | [Composition](02-composition.md) — `Arrow`, `Vertex`, associativity, identity, and powers |
| **Connection** — how chains join | [Graph](03-graphs.md) — `Graph` as a `Set` of `Arrow`s, with vertices classified by in/out connectivity |
| **Quantity** — counting and ordering | [Numerals](04-numerals.md) — `Number`, `Interval`, `Tuple`, and `Selection` |
| **Constraint** — operations bound by laws | [Structures](05-structures.md) — `Set` equipped with `Operation`s constrained by `Law`s |
| **Presentation** — how a thing is shown | [Presentational View](06-views.md) — `Matter`, `Attribute`, `Entity`, `Type`, and `Relation` |
| **Notation** — how it is written | [Formal Language](07-language.md) — `Code`, `Alphabet`, `Word`, `Grammar`, `Expression`, and `Theory` |

## Definitions

**`Azon`** := a *contract* made under the axioms below, that responds for each given Azon(`Sign`) with a specific Azon(`Value`).

> `Azon := x → y`

---

**`Zero`** := `Azon` that *always* responds with itself

> `Zero := x → Zero`

*DEF*: a response with `Zero` is *called* `empty`; any other is `valent`.

---

**`Unit`** := `Azon` that *always* responds with the `Sign` itself, *except* `emptily` — to itself.

> `Unit := x → (x IS Unit ? Zero : x)`

*DEF*: a response with the `Sign` itself is *called* `fixed`.

## Axioms

**`AXIOM-1`** (Halt) := The response to `Zero` is *always* `Zero`.

> `∀A: A(0) = 0`

---

**`AXIOM-2`** (Non-Self-Valent) := The response to oneself is *always* `Zero`.

> `∀A: A(A) = 0`

`AXIOM-2` establishes the fundamental asymmetry that prevents Russell-type paradoxes: no `Azon` may apply to itself with a valent response.

---

**`AXIOM-3`** (Non-Self-Generation) := non-zero `Azon` cannot respond with itself

> `∀A ≠ 0, x: A(x) ISNT A`
