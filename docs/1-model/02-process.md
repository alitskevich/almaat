# Dynamic Processes

![Dynamic Processes](/images/1-nature/06-process.svg)

**`Engine<Schema>`** := `Ingress<Schema> → { PD(Volume<Schema>) } | Σ PD = 1`
:= A `Azon` that responds to an `Ingress` with a `Probability Distribution` over `Volume` under the same `Schema`.

*DEF*: `Engine` is `Memoryless` := `P(Step[i+1] | Step[i], ..., Step[0]) = P(Step[i+1] | Step[i])`
:= the distribution depends only on the present `Ingress`, not on prior history

*NOTE*: This is the warrant for treating `Step` as a node; any finite-history process is recovered by enlarging the `Step` to encode it.

*NOTE*: A deterministic `Engine` is the special case where every `P(Outcome)` is a point mass.

---

**`Flow` / `Plan` / `Step`** := A `Queue` / `Bounded-Interval` / `Pair` of States where the next is sampled from the `Engine`'s distribution over the previous.

> `[Step[0], Step[1], ... :: Step[i+1] ~ Engine(Step[i])]`

*NOTE*: A Markov kernel — the transition rule of the `Flow`.

*NOTE*: `Flow` is infinite; `Plan` is bounded; `Step` is a single node at index `i`. Since every `Engine` is a Markov kernel, every `Flow` is a Markov chain — the `Engine` is the kernel, the `Flow` is the process it unrolls.

---
**`Transition Matrix`** := The `Engine` written as a matrix of transition probabilities between `Step`.

> `T[i][j] := P(Step → j | Step = i) :: rows sum to 1`

*NOTE*: A right-stochastic matrix. Multi-`Step` evolution is matrix power: the `k`-step distribution is `T^k`.

**`Circuit`** := A `Flow` composed of infinite repetitions of a `Plan`.

> `∃m, k: ∀n > k, Step[m+n] = Step[n]`

*NOTE*: Eventually periodic — the `Flow` repeats from index `k` onward.

**`Halt` / `Absorbing State`** := A `Step` whose `Engine` distribution is the point mass on itself — once entered, never left.

> `Engine(Step) = δ_Step`, `P(Step | Step) = 1`, `T[i][i] = 1`

*NOTE*: A fixed point at the `Flow` level — the only `Outcome` with non-zero probability is the `Step` itself. A `Flow` may contain several; which one absorbs is itself random. Compatible with `AXIOM-2` because the distribution `δ_Step` is distinct from `Step`.

**`Bifurcation`** := A `Step` whose `Engine` distribution has more than one `Outcome` of non-zero probability.

> `|support(Engine(Step))| > 1`

*NOTE*: A weighted branch — the `Engine` assigns each next `Step` its transition probability. The realized choice samples from that distribution; `Communication` from outside the `Step` biases the weights. `Crisis` in [10-growth](10-growth.md) is a `State` at a `Bifurcation`.

**`Recurrent` / `Transient`** := A `Step` returned to with probability 1 (recurrent) versus eventually abandoned (transient).

> `recurrent ⟺ P(return to Step) = 1`

*NOTE*: Recurrent `Step` are the long-run support of the `Flow`; the stochastic generalization of a `Circuit`. Transient `Step` carry only the approach.

**`Stationary Distribution`** := A `Probability Distribution` over `Step` left unchanged by the `Engine`.

> `π T = π`, `Σ π = 1`

*NOTE*: The stochastic `Equilibrium`: applying the `Engine` reproduces the same distribution. Not a single resting `Step` but a stable *mixture* of `Step`.

**`Ergodic`** := The `Flow` converges to a unique `Stationary Distribution` regardless of the starting `Step`.

> `lim T^k → π` for every initial `Step`

*NOTE*: Requires irreducibility (every `Step` reachable) and aperiodicity (no fixed cycle length). The long-run fraction of time in each `Step` equals `π`, independent of where the `Flow` began.

---

**`Thing(Entity)`** := `[Presentation(Entity, Step[i])]`
:= A `Queue` of `Presentation`s of a single `Entity` according to a `Flow`.

**`Event(Thing)`** := `(Step[i], State(Thing, Step[i]), State(Thing, Step[i+1]))`
:= A change of `State` of a `Thing` between consecutive `Step` — a triple of moment, before-state, after-state.

**`Trajectory(Thing)`** := `[State(Thing, Step[i]) for Step[i] in indices(Thing)]`
:= The `Translation` of a `Thing` into the State-track of its `State`s.

*NOTE*: A `Translation` from `Presentation`-space to State-space. The realized `Trajectory` is one sample path of the `Flow`; the space of possible `Trajectory`s is the `Engine`'s support unrolled. A `Trajectory` is a function of `Thing` only where every `Step` is a point mass.
