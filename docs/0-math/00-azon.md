---
title: "Azon"
description: "Azon is the framework's sole primitive: an ability to respond to each given Stim with a specific Spon, constrained by three axioms."
keywords: [math, azon]
---

# Azon

## Definitions

**`Azon`** := an *ability* to respond to each given `Azon` (:= **`Stim`**) with a specific `Azon` (:= **`Spon`**), subject to the axioms below.

> `Azon := x → y`

---

**`Stim`** := what an `Azon` responds to — the `x` of `Azon := x → y`.

---

**`Spon`** := what an `Azon` responds with — the `y`.

---

**`Zero`** := `Azon` that *always* responds with itself

> `Zero := x → Zero`

*DEF*: a response with `Zero` is *called* `empty`; any other is `valent`.

---

**`Unit`** := `Azon` that *always* responds with the `Stim` itself, *except* `emptily` — to itself.

> `Unit := x → (x IS Unit ? Zero : x)`

*DEF*: a response with the `Stim` itself is *called* `fixed`.

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
