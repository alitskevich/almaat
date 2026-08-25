---
title: "Systems"
description: "Things as queues of presentations over a flow: the participants, the communication that couples them, and what the whole exhibits that no part does."
keywords: [reality, system, participant, communication]
license: UNLICENSED
created: 2026-07-14
modified: 2026-08-25
source: docs/1-reality/07-system.md
---

# Systems

![Systems](/images/1-reality/07-system.svg)

Things as queues of presentations over a flow: the participants, the communication that couples them, and what the whole exhibits that no part does.

## Thing and Trajectory

**`Thing(Entity)`** := a `Queue` of `Presentation`s of a single `Entity` according to a `Flow`.

> `Thing(Entity) := [Presentation(Entity, Step[i])]`

---

**`Event(Thing)`** := a change of `State` of a `Thing` between consecutive `Step` — a triple of moment, before-state, after-state.

> `Event(Thing) := (Step[i], State(Thing, Step[i]), State(Thing, Step[i+1]))`

---

**`Trajectory(Thing)`** := the `Translation` of a `Thing` into the track of its `State`s.

> `Trajectory(Thing) := [State(Thing, Step[i]) for Step[i] in indices(Thing)]`

*NOTE*: the realized `Trajectory` is one sample path of the `Flow`; the space of possible `Trajectory`s is the `Engine`'s support unrolled. A `Trajectory` is a function of `Thing` only where every `Step` is a point mass.

## System and Participant

**`System`** := an `Engine` considered as a `Framework` that allows mutual `Communication` of `Participant`s.

> `System :: Framework over {Participant} with Communication`

---

**`Participant`** := a `Thing` that communicates with other `Participant`s of the `System`.

> `Participant(P) :: P IS Thing ∧ ∃Q ∈ System: Communication(P ↔ Q) ≠ 0`

*NOTE*: the atomic unit of a `System` — defined by its role in the network of `Communication`, not by its internal structure. Every `Participant` is a [`Source`](../2-mind/12-mind.md): it must produce output in order to communicate.

---

**`State of a Participant`** := the `State` of a `Participant` at a given `Step`.

> `State(U, Step) :: State over the Presentations of U at Step`

*NOTE*: what `Behavior` projects outward and what `Attention` of others receives.

## Communication

**`Communication`** := projection of the `Outcome` of each `Participant` into the `Input` of another.

> `Communication(A → B) := Behavior(A) . Attention(B)`

*NOTE*: asymmetric: `A → B ≠ B → A`. Operates across a single `Step` — A's output at `Step[i]` becomes B's input at `Step[i+1]`.

---

**`Behavior`** := a `Participant`'s projection of its own `State` into other `Participant`s' `Input`.

> `Behavior(A) :: State(A) → Input(other)`

*NOTE*: the sending half. `Behavior` is the externally-visible aspect of a `Participant` — what it contributes to the `System`.

---

**`Attention`** := a `Participant`'s projection of *other* `Participant`s' `State` into its own `Input`.

> `Attention(B) :: State(other) → Input(B)`

*NOTE*: the receiving half. `Attention` is selective: not every available `Behavior` enters a `Participant`'s input.

## Coupling

**`Environment`** := the part of the `System` that has mutual `Communication` with a `Participant`.

> `Environment(P) := {Q ∈ System : Communication(P↔Q) ≠ 0}`

*NOTE*: the `Participant`'s local neighborhood — the subset of the `System` it actually exchanges `Behavior`/`Attention` with.

---

**`Interface`** := a constraint on the `Behavior` of `Participant`s relative to each other.

> `Interface :: admissible(Behavior, Attention) → {0, 1}`

*NOTE*: a behavioral contract — a formal specification of admissible `Communication` patterns.

---

**`Coupling`** := the persistence of mutual `Communication` between two `Participant`s across multiple `Step`s.

> `Coupling(A, B) := | {Step[i] : Communication(A↔B) ≠ 0 at Step[i]}|`

---

**`Feedback`** := a `Composition` in which a `Participant`'s `Behavior` flows, through other `Participant`s, back into its own `Attention`.

> `Feedback(A) :: ∃ path A → ... → A in the Coupling graph`

*NOTE*: positive `Feedback` amplifies divergence from a `State`; negative `Feedback` restores it.

## The Whole

**`Emergence`** := a `Behavior` of a `System` not present in any individual `Participant`.

> `Emergence :: Behavior(System) ⊄ ⋃ Behavior(Participant)`

*NOTE*: the signature of `System`s: the whole exhibits properties no part can. Not predictable from the `State` of individual `Participant`s alone — it must be observed under `Communication`.

---

**`Equilibrium`** := a `State` of the `System` at which all `Communication` among `Participant`s balance, yielding a [`Halt`](02-process.md#landmarks-of-a-flow) for the whole.

> `Equilibrium :: Framework(State_sys) = {State_sys}`

*NOTE*: the system-level `Halt`. Disturbance by external `Communication` yields either return to the same `Equilibrium` (stable), drift to a different one (metastable), or unbounded divergence (unstable).
