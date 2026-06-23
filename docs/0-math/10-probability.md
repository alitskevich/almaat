# Probability

---

**`Sample Space (S)`** := Set of all possible outcomes of an experiment.

**`Event`** := A subset of the sample space.

**`Probability P(A)`** := Likelihood of an event, from 0 to 1.

**`Mutually Exclusive`** := Events that cannot occur together.

**`Independent Events`** := One event doesn't affect another.

**`Law of Total Probability`** := Sums probabilities of mutually exclusive ways an event occurs

---

**`Conditional Probability`** := Probability of A given B occurred: P(A|B) = P(A ∩ B) / P(B).

**`Bayes' Theorem`** := Updates probability with new evidence: P(A|B) = [P(B|A) × P(A)] / P(B).

---

**`Random Variable`** := Numerical values from random outcomes (discrete or continuous).

**`Probability Distribution`** := Likelihood of each value of a random variable.

**`Expected Value (Mean)`** := Average outcome over many trials: E(X) = Σ[x × P(x)].

**`Variance and Standard Deviation`** := Measures spread: Var(X) = E[(X - E(X))²], SD = √Var(X).

---

**`Law of Large Numbers`** := Average outcome approaches expected value over many trials.

**`Central Limit Theorem`** := Averages of many trials form a normal distribution.

---

**`Markov Chain`** := A `Flow` whose `Engine` returns a `Probability Distribution` over `Outcome` rather than a bare `Set`.

> `Engine :: Step[i] → P(Outcome)` with `Σ P = 1`

*NOTE*: The stochastic refinement of the `Engine`. A `Bifurcation` becomes a weighted branch; the weights are the transition probabilities.

**`Memorylessness`** := The next `Step` distribution depends only on the current `Step`, not on prior history.

> P(Step[i+1] | Step[i], ..., Step[0]) = P(Step[i+1] | Step[i])

*NOTE*: the formal warrant for treating `Step` as a node. Any process with finite history is recovered by enlarging the `Step` to encode that history.

**`Transition Matrix`** := The `Engine` written as a matrix of transition probabilities between `Step`.

> `T[i][j] := P(Step → j | Step = i)`, rows sum to 1

*NOTE*: A right-stochastic matrix. Multi-`Step` evolution is matrix power: the `k`-step distribution is `T^k`.

**`Absorbing State`** := A `Step` whose only `Outcome` is itself with probability 1.

> `T[i][i] = 1`

*NOTE*: The stochastic `Halt` — once entered, never left. A `Flow` may contain several; which one absorbs is itself random.

**`Recurrent` / `Transient`** := A `Step` returned to with probability 1 (recurrent) versus eventually abandoned (transient).

> `recurrent ⟺ P(return to Step) = 1`

*NOTE*: Recurrent `Step` are the long-run support of the `Flow`; the stochastic generalization of a `Circuit`. Transient `Step` carry only the approach.

**`Stationary Distribution`** := A `Probability Distribution` over `Step` left unchanged by the `Engine`.

> `π T = π`, `Σ π = 1`

*NOTE*: The stochastic `Equilibrium`: applying the `Engine` reproduces the same distribution. Not a single resting `Step` but a stable *mixture* of `Step`.

**`Ergodic`** := The chain converges to a unique `Stationary Distribution` regardless of the starting `Step`.

> `lim T^k → π` for every initial `Step`

*NOTE*: Requires irreducibility (every `Step` reachable) and aperiodicity (no fixed cycle length). The long-run fraction of time in each `Step` equals `π`, independent of where the `Flow` began.
