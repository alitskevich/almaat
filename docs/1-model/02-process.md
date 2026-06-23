# Dynamic Processes

![Dynamic Processes](/images/1-nature/06-process.svg)

Dynamic Processes turn the static primitives of the earlier chapters into living systems.

---

**`Engine`** := An `Azon` that reproduces `State`: responds with `Outgress` to an `Ingress` under the same `Schema`.

> `Engine<Schema> := Input → { Outcome } | Input, Outcome ∈ Schema`

---

**`Flow` / `Plan` / `Step`** := A `Queue` / `Bounded-Interval` / `Pair` of States where the next is an `Outcome` of the previous according to the `Engine`.

> `[Step[0], Step[1], ... | Step[i+1] ∈ Engine(Step[i])]`

*NOTE*: `Flow` is infinite; `Plan` is bounded; `Step` is a single node at index `i`.

---

**`Circuit`** := A `Flow` composed of infinite repetitions of a `Plan`.

> `∃m, k: ∀n > k, Step[m+n] = Step[n]`

*NOTE*: Eventually periodic — the `Flow` repeats from index `k` onward.

---

**`Halt`** := A `Step` whose `Engine` image is its own singleton.

> `Engine(Step) = {Step}`

*NOTE*: A fixed point at the `Flow` level — the only `Outcome` is the `Step` itself. Compatible with `AXIOM-2` because the singleton-`Set` `{Step}` is distinct from `Step`.

---

**`Bifurcation`** := A `Step` whose `Engine` image has more than one `Outcome`.

> `|Engine(Step)| > 1`

*NOTE*: `Bifurcation` marks the loss of determinism. At a `Bifurcation`, the choice of next `Step` depends on `Influence` from outside `Step` itself; `Crisis` in [10-growth](10-growth.md) is a `State` at a `Bifurcation`.

---

**`Thing`** := A `Queue` of `Presentation`s of a single `Entity` according to a `Flow`.

> `Thing(s) := [Presentation(s, Step[i])]`

*NOTE*: The persistent identity-track of a `Entity` through time.

---

**`Event`** := A change of `State` of a `Thing` between consecutive `Step`.

> `Event :: (Step[i], State(Thing, Step[i]), State(Thing, Step[i+1]))`

*NOTE*: The atomic unit of change — a triple of moment, before-state, after-state.

---

**`Trajectory`** := The `Translation` of a `Thing` into the State-track of its `State`s.

> `Trajectory(Thing) := [State(Thing, Step[i]) for Step[i] in indices(Thing)]`

*NOTE*: A `Translation` from `Presentation`-space to State-space. Under a deterministic `Engine` the `Trajectory` is a function of `Thing`; at a `Bifurcation` it becomes set-valued.
