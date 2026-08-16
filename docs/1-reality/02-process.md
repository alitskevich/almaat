---
title: "Dynamic Processes"
description: "**Process** := controlled Queue of Words from the same Dictionary=SampleSpace."
keywords: [reality, process, circuit, flow]
license: UNLICENSED
created: 2026-07-14
modified: 2026-08-16
source: docs/1-reality/02-process.md
---

# Dynamic Processes

![Dynamic Processes](/images/1-reality/02-process.svg)

**`Process`** := controlled `Queue` of `Word`s from the same `Dictionary=SampleSpace`.

## The Reality Spine

> Process → System → Probability → Entropy → Evolution → Being.

The section reads outward from the single step, and ends with what is taking it.

| Layer | Reading |
| --- | --- |
| **Process** — how one step is taken | this file — `Circuit`, its kinds, and the landmarks of a `Flow` |
| **System** — what many things make | [Systems](07-system.md) — `Participant`, `Communication`, `Emergence`, `Equilibrium` |
| **Probability** — how likelihood is measured | [Probability](10-probability.md) — expectation, updating, limit laws, long-run behavior |
| **Entropy** — what `Order` costs | [Entropy](14-entropy.md) — dissipation and self-organization |
| **Evolution** — how a `Paradigm` moves | [Evolution](15-evolution.md) — adaptation, stagnation, crisis · [Limits](16-limits.md) — freedom, the ceiling, breakthrough |
| **Being** — what is doing all this | [Being](22-being.md) — `Reality` as representation · [Transcendence](24-transcendence.md) — one `Consciousness` · [The Given](27-given.md) — perceived versus constructed |

## Parts of a Process

**`Controller<Schema>`** := an `Azon` that responds to a State-`Ingress` with a `Probability Distribution` over `Volume`.

> `Ingress<Schema> → PD(Volume<Schema>)`

---

**`Text<Dictionary>`** := `Tuple=Plan` of `Word`s from the same `Dictionary=SampleSpace`.

> `Text<Dictionary> : [ Word ∈ Dictionary, ...]`

---

**`Event<Dictionary>`** := triplet of `Context`, `State`, and `Probability`.

> `Event<Dictionary> := (Context, { Word }, Probability)`

- `Context` := some `Text<SampleSpace>` or `Zero`.
- `State` := some `Subset` from `SampleSpace`.
- `Probability` := some rational number from 0 to 1.

---

**`Circuit`** := `Set` of `MutuallyExclusiveEvents` with same-sized `Context`s under the `Law of Total Probability`.

> `Circuit := {Event} :: LTP`

---

**`Law of Total Probability`** := the `Probabilities` of `MutuallyExclusiveEvents` sum to 1.

---

**`MutuallyExclusiveEvents`** := set of `Event` with the same `Context`, whose `State`s comprise a `Cluster` of `SampleSpace`.

---

**`Independent Events`** := presence or absence of one `Event`'s `State` in the `Context` of another does not affect the other's `Probability`.

---

**`Random Variable`** := context-free `Circuit` — for all `Event`s with the same `State`, the `Probability` is also the same.

---

**`Probability Distribution`** := `Azon` that responds with a `Probability` to the `State`s of a `Random Variable`.

## Kinds of Circuit

*DEF*: `Circuit` is `memoryless`
:= `P(State[i+1] | State[i], ..., State[0]) = P(State[i+1] | State[i])`
:= the distribution depends only on the present `Ingress`, not on prior history

*NOTE*: any finite-history process is recovered by enlarging the `State` to encode it.

---

**`TransitionMatrix`** := a matrix of transition probabilities between `State`s.

> `T[i][j] := P(State → j | State = i) :: rows sum to 1`

*NOTE*: a Markov kernel — the transition rule of the `Flow`. Since every `Circuit` is one, every `Flow` is a Markov chain: the `Circuit` is the kernel, the `Flow` is the process it unrolls. Multi-`State` evolution is matrix power — the `k`-step distribution is `T^k`.

---

*DEF*: `Circuit` is `deterministic`
:= `∃Point<i> :: i -> PD(x) = x IS Point ? 1 : 0`
:= exist `MassPoint`.

---

*DEF*: `Circuit` is `periodic`
:= `∃m, k: ∀n > k, State[m+n] = State[n]`
:= a `Flow` composed of infinite repetitions of a `Plan`.

## Landmarks of a Flow

**`Potency`** := an evaluation of a `Plan` under given `Circumstances`.

---

**`Future<State>`** := `Set` of `State` accessible from a given `State`.

> `Future<State> := { M :: Plan reachable from State }`

---

**`Halt` / `Absorbing State`** := a `State` whose `Circuit` distribution is the point mass on itself — once entered, never left.

> `Circuit(State) = δ_Step`, `P(State | State) = 1`, `T[i][i] = 1`

*NOTE*: a fixed point at the `Flow` level. A `Flow` may contain several; which one absorbs is itself random. Compatible with `AXIOM-2` because the distribution `δ_Step` is distinct from `State`.

---

**`Bifurcation`** := a `State` whose `Circuit` distribution has more than one `State` of non-zero probability.

> `|support(Circuit(State))| > 1`

*NOTE*: a weighted branch — the `Circuit` assigns each next `State` its transition probability. The realized choice samples from that distribution; `Communication` from outside the `State` biases the weights. [`Crisis`](15-evolution.md) is a `State` at a `Bifurcation`.
