# Dynamic Processes

![Dynamic Processes](/images/1-nature/06-process.svg)

**`Circuit<Schema>`**
:= `Ingress<Schema> → PD(Volume<Schema>)`
:= A `Azon` that responds to an Moment-`Ingress` with a `Probability Distribution` over `Volume` of the same `Schema`.

*DEF*: `Circuit` is `memoryless`
:= `P(Moment[i+1] | Moment[i], ..., Moment[0]) = P(Moment[i+1] | Moment[i])`
:= the distribution depends only on the present `Ingress`, not on prior history

*NOTE*: any finite-history process is recovered by enlarging the `Moment` to encode it.

**`TransitionMatrix`** := a matrix of transition probabilities between `Moment`s.

> `T[i][j] := P(Moment → j | Moment = i) :: rows sum to 1`

---

**`Flow` / `Plan` / `Moment`** := A `Queue` / `Bounded-Interval` / `Pair` of States where the next is sampled from the `Circuit`'s distribution over the previous.

> `[Moment[0], Moment[1], ... :: Moment[i+1] ~ Circuit(Moment[i])]`

*NOTE*: A Markov kernel — the transition rule of the `Flow`.

*NOTE*: `Flow` is infinite; `Plan` is bounded; `Moment` is a single node at index `i`. Since every `Circuit` is a Markov kernel, every `Flow` is a Markov chain
— the `Circuit` is the kernel, the `Flow` is the process it unrolls.

**`Potency`** := An evaluation of a `Plan` under given `Circumstances`.
*NOTE*: Multi-`Moment` evolution is matrix power: the `k`-step distribution is `T^k`.

**`Future<Moment>`** := `{ M :: Plan reachable from Moment}`
:= `Set` of `Moment` accessible from given `Moment`

---

*DEF*: `Circuit` is `deterministic`
:= `∃Point<i> :: i -> PD(x) = x IS Point ? 1 : 0`
:= exist `MassPoint`.

*DEF*: `Circuit` is `periodic`
:= `∃m, k: ∀n > k, Moment[m+n] = Moment[n]`
:= A `Flow` composed of infinite repetitions of a `Plan`.

**`Halt` / `Absorbing State`** := A `Moment` whose `Circuit` distribution is the point mass on itself — once entered, never left.

> `Circuit(Moment) = δ_Step`, `P(Moment | Moment) = 1`, `T[i][i] = 1`

*NOTE*: A fixed point at the `Flow` level — the only `Outcome` with non-zero probability is the `Moment` itself. A `Flow` may contain several; which one absorbs is itself random. Compatible with `AXIOM-2` because the distribution `δ_Step` is distinct from `Moment`.

**`Bifurcation`** := A `Moment` whose `Circuit` distribution has more than one `Outcome` of non-zero probability.

> `|support(Circuit(Moment))| > 1`

*NOTE*: A weighted branch — the `Circuit` assigns each next `Moment` its transition probability. The realized choice samples from that distribution; `Communication` from outside the `Moment` biases the weights. `Crisis` in [10-growth](10-growth.md) is a `State` at a `Bifurcation`.

**`Recurrent` / `Transient`** := A `Moment` returned to with probability 1 (recurrent) versus eventually abandoned (transient).

> `recurrent ⟺ P(return to Moment) = 1`

*NOTE*: Recurrent `Moment` are the long-run support of the `Flow`; the stochastic generalization of a `Circuit`. Transient `Moment` carry only the approach.

**`Stationary Distribution`** := A `Probability Distribution` over `Moment` left unchanged by the `Circuit`.

> `π T = π`, `Σ π = 1`

*NOTE*: The stochastic `Equilibrium`: applying the `Circuit` reproduces the same distribution. Not a single resting `Moment` but a stable *mixture* of `Moment`.

**`Ergodic`** := The `Flow` converges to a unique `Stationary Distribution` regardless of the starting `Moment`.

> `lim T^k → π` for every initial `Moment`

*NOTE*: Requires irreducibility (every `Moment` reachable) and aperiodicity (no fixed cycle length). The long-run fraction of time in each `Moment` equals `π`, independent of where the `Flow` began.
