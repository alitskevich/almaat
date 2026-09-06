---
title: "Dynamic Processes"
description: "The Process as a controlled Queue of Words: its Circuit, the kinds of Circuit, and the landmarks of a Flow."
keywords: [reality, process, circuit, flow]
---

# Dynamic Processes

## Parts of a Process

---

**`Process`** := controlled `Queue` of `Words` from the same `SampleSpace`.

> `Process := Queue<Word ∈ SampleSpace> :: controlled`

---

**`Step`** := one indivisible advance of a `Process` — the unit its `Queue` is indexed by.

---

**`SampleSpace`** := the `Dictionary` a `Process` draws its `Words` from — everything that can hold at a `Step`.

> `SampleSpace := Dictionary`

---

**`State`** := a `Subset` of the `SampleSpace` — what holds at one `Step`.

> `State := Subset ⊆ SampleSpace`

*NOTE*: the folder's most-used Term. [`State of a Participant`](07-system.md#system-and-participant) specializes it to one `Participant`.

---

**`Context`** := the `Text<SampleSpace>` preceding a `State`, or `Zero` where there is none.

> `Context := Text<SampleSpace> | Zero`

---

**`Flow`** := the `Queue` of `States` a `Process` unrolls across successive `Step`s.

> `Flow := [State(Step[i])]`

*NOTE*: the `Circuit` is the rule; the `Flow` is what running it produces.

---

**`Ingress<Schema>`** := the `State` presented to a `Controller<Schema>` at a given `Step`, typed by that `Schema`.

---

**`Controller<Schema>`** := an `Azon` that responds to a State-`Ingress` with a `Probability Distribution` over `Volume`.

> `Ingress<Schema> ⇒ PD(Volume<Schema>)`

---

**`Text<Dictionary>` / `Plan`** := `Tuple` of `Words` from the same `Dictionary`.

> `Text<Dictionary> : [ Word ∈ Dictionary, ...]`

---

**`Probability`** := a rational number from 0 to 1.

---

**`Event<Dictionary>`** := triplet of `Context`, `State`, and `Probability`.

> `Event<Dictionary> := (Context, { Word }, Probability)`

---

**`Circuit`** := `Set` of `MutuallyExclusiveEvents` with same-sized `Contexts` under the `Law of Total Probability`.

> `Circuit := {Event} :: LTP`

---

**`Law of Total Probability`** := the `Probability` values of `MutuallyExclusiveEvents` sum to 1.

---

**`MutuallyExclusiveEvents`** := set of `Event` with the same `Context`, whose `States` comprise a `Cluster` of `SampleSpace`.

---

**`Independent Events`** := presence or absence of one `Event`'s `State` in the `Context` of another does not affect the other's `Probability`.

---

**`Random Variable`** := context-free `Circuit` — for all `Events` with the same `State`, the `Probability` is also the same.

---

**`Probability Distribution`** := `Azon` that responds with a `Probability` to the `States` of a `Random Variable`.

## Kinds of Circuit

*DEF*: a `Circuit` is **memoryless** if its distribution depends only on the present `State`, not on prior history: `P(State[i+1] | State[i], ..., State[0]) = P(State[i+1] | State[i])`.

*NOTE*: any finite-history process is recovered by enlarging the `State` to encode it.

---

**`TransitionMatrix`** := a matrix of transition probabilities between `State`s.

> `T[i][j] := P(State → j | State = i) :: rows sum to 1`

*NOTE*: a Markov kernel — the transition rule of a `memoryless` `Flow`. Where the `Circuit` is `memoryless`, the `Flow` is a Markov chain: the `Circuit` is the kernel, the `Flow` is the process it unrolls. Multi-`State` evolution is matrix power — the `k`-step distribution is `T^k`.

---

*DEF*: a `Circuit` is **deterministic** if its distribution is a point mass — one `State` carries all the probability: `∃Point<i> :: i → PD(x) = x IS Point ? 1 : 0`.

---

*DEF*: a `Circuit` is **periodic** if it is a `Flow` composed of infinite repetitions of a `Plan`: `∃m, k: ∀n > k, State[m+n] = State[n]`.

## Landmarks of a Flow

**`Circumstances`** := the `State` bearing on a `Plan`'s evaluation that the `Plan` does not determine.

*NOTE*: what an actor does not set — outcome, timing, and other participants' responses. `Circumstances` is what a `Paradigm` must track: see [Evolution](15-evolution.md).

---

**`Paradigm`** := a method that generates `Plans` for a `System`.

> `Paradigm :: System ⇒ {Plan}`

---

**`Potency`** := an evaluation of a `Plan`, or of the `Paradigm` that generates `Plan`s, under given `Circumstances`.

*NOTE*: written `Potency(Plan, Circumstances)` for one `Plan`, `Potency(Paradigm, Circumstances)` for the `Paradigm` as a whole, and `Potency(Plan, Paradigm, Circumstances)` where a `Plan` is evaluated within a specific `Paradigm`.

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
