# Dynamic Processes

![Dynamic Processes](/images/1-nature/06-process.svg)

**`Flow` / `Plan` / `Moment`** := A `Queue` / `Row` / `Pair` of `State`s of the same `Schema`.

> `[State[0], State[1], ... ]`

**`Circuit<Schema>`**
:= `Ingress<Schema> → PD(Volume<Schema>)`
:= A `Azon` that responds to an State-`Ingress` with a `Probability Distribution` over `Volume` .

`Circuit` produces a set of `Flows`, where the next `State` is sampled from the `Circuit`'s distribution over the previous

> `[State[0], State[1], ... :: State[i+1] ~ Circuit(State[i])]`

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

*NOTE*: A fixed point at the `Flow` level — the only `Outcome` with non-zero probability is the `State` itself. A `Flow` may contain several; which one absorbs is itself random. Compatible with `AXIOM-2` because the distribution `δ_Step` is distinct from `State`.

---

**`Potency`** := An evaluation of a `Plan` under given `Circumstances`.
*NOTE*: Multi-`State` evolution is matrix power: the `k`-step distribution is `T^k`.

**`Future<State>`** := `{ M :: Plan reachable from State}`
:= `Set` of `State` accessible from given `State`

**`Bifurcation`** := A `State` whose `Circuit` distribution has more than one `Outcome` of non-zero probability.

> `|support(Circuit(State))| > 1`

*NOTE*: A weighted branch — the `Circuit` assigns each next `State` its transition probability. The realized choice samples from that distribution; `Communication` from outside the `State` biases the weights. `Crisis` in [10-growth](10-growth.md) is a `State` at a `Bifurcation`.

**`Recurrent` / `Transient`** := A `State` returned to with probability 1 (recurrent) versus eventually abandoned (transient).

> `recurrent ⟺ P(return to State) = 1`

*NOTE*: Recurrent `State` are the long-run support of the `Flow`; the stochastic generalization of a `Circuit`. Transient `State` carry only the approach.

**`Stationary Distribution`** := A `Probability Distribution` over `State` left unchanged by the `Circuit`.

> `π T = π`, `Σ π = 1`

*NOTE*: The stochastic `Equilibrium`: applying the `Circuit` reproduces the same distribution. Not a single resting `State` but a stable *mixture* of `State`.

**`Ergodic`** := The `Flow` converges to a unique `Stationary Distribution` regardless of the starting `State`.

> `lim T^k → π` for every initial `State`

*NOTE*: Requires irreducibility (every `State` reachable) and aperiodicity (no fixed cycle length). The long-run fraction of time in each `State` equals `π`, independent of where the `Flow` began.
