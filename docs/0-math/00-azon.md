---
title: "Azon"
description: "Azon is the framework's sole primitive: a contract responding to each given Sign with a specific Value, constrained by three axioms."
keywords: [math, azon]
---

# Azon

![Azon](/images/0-math/00-azon.svg)

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
