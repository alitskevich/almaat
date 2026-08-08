# Azon

![Foundations](/images/0-math/00-azon.svg)

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
