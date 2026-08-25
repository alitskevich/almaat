---
title: "Azon"
description: "Azon := a contract made under Axioms below, that responds for each given Azon(Sign) with a specific Azon(Value)."
keywords: [math, azon]
license: UNLICENSED
created: 2026-05-26
modified: 2026-08-08
source: docs/0-math/00-azon.md
---

# Azon

![Azon](/images/0-math/00-azon.svg)

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

**`Azon`** := a *contract* made under Axioms below, that responds for each given Azon(`Sign`) with a specific Azon(`Value`).

> `Azon := x → y`

`Azon` is the sole fundamental concept of entire framework:

- It is self-sufficient (defined recurrsively)
- and every later concept is built on top of `Azon`.

---

**`Zero`** := `Azon` that *always* responds with itself  

> `Zero := x → Zero`

*DEF*: response with `Zero` *called* `empty`, otherwise - `valent`.

---

*DEF*: response with `Sign` itself *called* **`fixed`**.

**`Unit`** := `Azon` that *always* responds `fixed`, *except* `emptily` - to itself.

> `Unit := x → x IS Unit : Zero : x`

## Axioms

**`AXIOM-1`** (Halt) := The response to `Zero` is *always* `Zero`.

> `∀A: A(0) = 0`

`AXIOM-1` makes `Zero` an composition-annihilating `absorbing` point.

---

**`AXIOM-2`** (Non-Self-Valent) := The response to oneself is *always* `Zero`.

> `∀A: A(A) = 0`

`AXIOM-2` establishes the fundamental asymmetry that prevents Russell-type paradoxes: no `Azon` may apply to itself with a valent response.

---

**`AXIOM-3`** (Non-Self-Generation) := non-zero `Azon` cannot respond with itself

> `∀A ≠ 0, x: A(x) ISNT A`
