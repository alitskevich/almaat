# Foundations

#### Azon

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Azon` | A *method* of associating each given `Azon`-`Sign` with some certain `Azon`-`Value` | `A := x → y` |  |  

**Notes:**

- The `Azon` is the framework's sole fundamental concept:
  - It is defined recurrsively, thus self-sufficient.
  - Every later construction is built from `Azon` and the three Axioms below.

#### 0 and 1

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Absorber` `0` | The `Azon` that always responds emptily (with `0`) | `∀x: 0(x) = 0` |  |
| `Identity` `1` | The `Azon` that always responds with the same Sign, but emptily - for itself | `∀x ≠ 1: 1(x) = x`; `1(1) = 0` |  |

**Notes:**

- response with `0` called **empty**, otherwise - **valent**.
- response with `Sign` called **fixed**.

#### Axioms

| Axiom | Statement | Formula | Notes |
|---|---|---|---|
| `AXIOM-1` (Halt) | The response to `Absorber` is always empty | `∀A: A(0) = 0` | |
| `AXIOM-2` (Self-Emptiness) | The response to oneself is always empty | `∀A: A(A) = 0` | |
| `AXIOM-3` (Non-Self-Production) | A non-empty `Azon` cannot output itself as a valent value | `∀A ≠ 0, x: A(x) ≠ A` |  |

**Notes:**

- `AXIOM-1` makes `Absorber` an absorbing fixed point — composition-annihilating..
- `AXIOM-2` establishes the fundamental asymmetry that prevents Russell-type paradoxes: no `Azon` may apply to itself with a valent response. In particular, no `Set` contains itself; no `Graph` references itself as a node within its own arrow-set.
- `AXIOM-3` prevents circular self-generation. `Identity` satisfies it vacuously: `1(x) = 1` has *no solution* — for `x ≠ 1` we have `1(x) = x ≠ 1`, and for `x = 1` we have `1(1) = 0 ≠ 1`. There is no input that makes `Identity` output itself, so the antecedent of `AXIOM-3` is never triggered.
