---
title: "Dynamic Processes"
description: "Process := Queue of Words from the same Dictionary=SampleSpace."
keywords: [reality, process]
license: UNLICENSED
created: 2026-07-14
modified: 2026-08-13
source: docs/1-reality/02-process.md
---

# Dynamic Processes

![Dynamic Processes](/images/1-nature/06-process.svg)

**`Process`** := controlled `Queue` of `Word`s from the same `Dictionary=SampleSpace`.

**`Controller<Schema>`** := A `Azon` that responds to an State-`Ingress` with a `Probability Distribution` over `Volume` .
:= `Ingress<Schema> → PD(Volume<Schema>)`

**`Text<Dictionary> : [ Word ∈ Dictionary, ...]`** :=  `Tuple=Plan` of `Word`s the same `Dictionary=SampleSpace`.

**`Event<Dictionary> := (Context, { Word }, Probability)`** := triplet of

- `Context` := some `Text<SampleSpace>` or `Zero`.
- `State` := some `Subset` from `SampleSpace`.
- `Probability` := some rational number from 0 to 1.

**`Circuit := {Event} :: LTP`** := `Set` of `MutuallyExclusiveEvents`s with same-sized `Context`s under `Law of Total Probability`.

**`Law of Total Probability`** := Sum of `Probabilities` of `MutuallyExclusiveEvents` is 1.

**`MutuallyExclusiveEvents`** :=  set of `Event` with the same `Context`, and whose `State`s comprise `Cluster` of `SampleSpace`.

**`Independent Events`** := Presence/absence of `State` of one `Event` in `Context` of other one doesn't affect `Probability` of other one.

**`Random Variable`** := context-free `Circuit`, i.e. for all `Event`s with the same `State` - `Probability` is also the same.

**`Probability Distribution`** := `Azon` that responds with `Probability` to `State`s of a `random variable`.

**`Expected Value (Mean)`** := Average State over many trials: E(X) = Σ[x × P(x)].

*DEF*: `Circuit` is `memoryless`
:= `P(State[i+1] | State[i], ..., State[0]) = P(State[i+1] | State[i])`
:= the distribution depends only on the present `Ingress`, not on prior history

*NOTE*: any finite-history process is recovered by enlarging the `State` to encode it.

**`TransitionMatrix`** := a matrix of transition probabilities between `State`s.

> `T[i][j] := P(State → j | State = i) :: rows sum to 1`

---

*NOTE*: A Markov kernel — the transition rule of the `Flow`.

*NOTE*: Since every `Circuit` is a Markov kernel, every `Flow` is a Markov chain
— the `Circuit` is the kernel, the `Flow` is the process it unrolls.

*DEF*: `Circuit` is `deterministic`
:= `∃Point<i> :: i -> PD(x) = x IS Point ? 1 : 0`
:= exist `MassPoint`.

*DEF*: `Circuit` is `periodic`
:= `∃m, k: ∀n > k, State[m+n] = State[n]`
:= A `Flow` composed of infinite repetitions of a `Plan`.

**`Halt` / `Absorbing State`** := A `State` whose `Circuit` distribution is the point mass on itself — once entered, never left.

> `Circuit(State) = δ_Step`, `P(State | State) = 1`, `T[i][i] = 1`

*NOTE*: A fixed point at the `Flow` level — the only `State` with non-zero probability is the `State` itself. A `Flow` may contain several; which one absorbs is itself random. Compatible with `AXIOM-2` because the distribution `δ_Step` is distinct from `State`.

---

**`Potency`** := An evaluation of a `Plan` under given `Circumstances`.
*NOTE*: Multi-`State` evolution is matrix power: the `k`-step distribution is `T^k`.

**`Future<State>`** := `{ M :: Plan reachable from State}`
:= `Set` of `State` accessible from given `State`

**`Bifurcation`** := A `State` whose `Circuit` distribution has more than one `State` of non-zero probability.

> `|support(Circuit(State))| > 1`

*NOTE*: A weighted branch — the `Circuit` assigns each next `State` its transition probability. The realized choice samples from that distribution; `Communication` from outside the `State` biases the weights. `Crisis` in [10-growth](07-system.md) is a `State` at a `Bifurcation`.

**`Recurrent` / `Transient`** := A `State` returned to with probability 1 (recurrent) versus eventually abandoned (transient).

> `recurrent ⟺ P(return to State) = 1`

*NOTE*: Recurrent `State` are the long-run support of the `Flow`; the stochastic generalization of a `Circuit`. Transient `State` carry only the approach.

**`Stationary Distribution`** := A `Probability Distribution` over `State` left unchanged by the `Circuit`.

> `π T = π`, `Σ π = 1`

*NOTE*: The stochastic `Equilibrium`: applying the `Circuit` reproduces the same distribution. Not a single resting `State` but a stable *mixture* of `State`.

**`Ergodic`** := The `Flow` converges to a unique `Stationary Distribution` regardless of the starting `State`.

> `lim T^k → π` for every initial `State`

*NOTE*: Requires irreducibility (every `State` reachable) and aperiodicity (no fixed cycle length). The long-run fraction of time in each `State` equals `π`, independent of where the `Flow` began.

---

**`Conditional Probability`** := Probability of A given B occurred: P(A|B) = P(A ∩ B) / P(B).

**`Bayes' Theorem`** := Updates probability with new evidence: P(A|B) = [P(B|A) × P(A)] / P(B).

**`Law of Large Numbers`** := Average State approaches expected value over many trials.

**`Central Limit Theorem`** := Averages of many trials form a normal distribution.

**`Variance and Standard Deviation`** := Measures spread: Var(X) = E[(X - E(X))²], SD = √Var(X).
