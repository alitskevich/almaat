# Dynamic Processes

Dynamic Processes turn the static primitives of the earlier chapters into living systems. A **`Framework`** maps `Input` to a *set* of `Outcome` within a `Schema`; iterating that map produces **`Flow`** through configurations; `Flow` of mutually-influencing **`Participant`** form **`System`**. This chapter defines the vocabulary of change, coupling, emergence, and equilibrium.

**Time convention.** Throughout this chapter and downstream, **`Step` is a node** — a Frame indexed by a `Number`. The transition between consecutive `Step` is encoded by the arrow `P→` of the `Framework`, *not* by the `Step` itself. "`Step` as moment" and "`Step` as step" are two facets of the same node: a `Step` *is* a moment, and the move *into* it is a transition.

## Dynamics

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Framework` | An endogenous `Azon` that outputs a `Set` of `Outcome` (Frames) in response to an `Input` within a `Schema` | `Framework :: Input → { Outcome }` with `Input, Outcome ∈ Schema` | The set-valued return is fundamental — multi-valued outcomes are the source of `Bifurcation`. |
| `Flow` / `Plan` / `Step` | A `Queue` / `Bounded-Interval` / `Pair` of Frames where the next is an `Outcome` of the previous according to the `Framework` | `[Step[0], Step[1], ... \| Step[i+1] ∈ Framework(Step[i])]` | `Flow` is infinite; `Plan` is bounded; `Step` is a single node at index `i`. |
| `Circuit` | A `Flow` composed of infinite repetitions of a `Plan` | `∃m, k: ∀n > k, Step[m+n] = Step[n]` | Eventually periodic — the `Flow` repeats from index `k` onward. |
| `Halt` | A `Step` whose `Framework` image is its own singleton | `Framework(Step) = {Step}` | A fixed point at the `Flow` level — the only `Outcome` is the `Step` itself. Compatible with `AXIOM-2` because the singleton-`Set` `{Step}` is distinct from `Step`. |
| `Bifurcation` | A `Step` whose `Framework` image has more than one `Outcome` | `\|Framework(Step)\| > 1` | `Bifurcation` marks the loss of determinism. At a `Bifurcation`, the choice of next `Step` depends on `Influence` from outside `Step` itself; `Crisis` in [10-growth](10-growth.md) is a `State` at a `Bifurcation`. |
| `Thing` | A `Queue` of `Presentation` of a single Subject according to a `Flow` | `Thing(s) := [Presentation(s, Step[i])]` | The persistent identity-track of a Subject through time. |
| `Event` | A change of `State` of a `Thing` between consecutive `Step` | `Event :: (Step[i], State(Thing, Step[i]), State(Thing, Step[i+1]))` | The atomic unit of change — a triple of moment, before-state, after-state. |
| `Trajectory` | The `Translation` of a `Thing` into the State-track of its `State`s | `Trajectory(Thing) := [State(Thing, Step[i]) for Step[i] in indices(Thing)]` | A `Translation` from `Presentation`-space to State-space. Under a deterministic `Framework` the `Trajectory` is a function of `Thing`; at a `Bifurcation` it becomes set-valued. |

## Probability Fundamentals

| Concept | Definition | Example |
| --------- | ------------ | --------- |
| **Sample Space (S)** | Set of all possible outcomes of an experiment | Observing animals: S = {deer, fox, owl, bear} |
| **Event** | A subset of the sample space | Event A = "seeing a predator" = {fox, bear} |
| **Probability P(A)** | Likelihood of an event, from 0 to 1 | P(seeing a deer) = 40/100 = 0.4 |
| **Mutually Exclusive** | Events that cannot occur together | Seeing a deer and bear at the same spot |
| **Independent Events** | One event doesn't affect another | Rain falling and a bird singing |
| **Conditional Probability** | Probability of A given B occurred: P(A|B) = P(A ∩ B) / P(B) \| P(finding fish \| river is clean) = 0.9 |
| **Law of Total Probability** | Sums probabilities of mutually exclusive ways an event occurs | |
| **Bayes' Theorem** | Updates probability with new evidence: P(A\|B) = [P(B\|A) × P(A)] / P(B) | |
| **Random Variable** | Numerical values from random outcomes (discrete or continuous) | |
| **Probability Distribution** | Likelihood of each value of a random variable | |
| **Expected Value (Mean)** | Average outcome over many trials: E(X) = Σ[x × P(x)] | |
| **Variance and Standard Deviation** | Measures spread: Var(X) = E[(X - E(X))²], SD = √Var(X) | |
| **Law of Large Numbers** | Average outcome approaches expected value over many trials | |
| **Central Limit Theorem** | Averages of many trials form a normal distribution | |
