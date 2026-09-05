---
title: "Probability"
description: "How likelihood is measured over a Random Variable, updated by evidence, and what a Flow settles into over many Steps."
keywords: [reality, probability, bayes, ergodic]
---

# Probability

## Measure

**`Expected Value`** := the mean `State` over many trials.

> `E(X) = Σ[x × P(x)]`

---

**`Variance`** := the mean squared deviation from the `Expected Value`.

> `Var(X) = E[(X − E(X))²]`

---

**`Standard Deviation`** := the square root of the `Variance`.

> `SD(X) = √Var(X)`

## Update

**`Conditional Probability`** := probability of A given B occurred.

> `P(A|B) = P(A ∩ B) / P(B)`

---

**`Bayes' Theorem`** := updates a probability with new evidence.

> `P(A|B) = [P(B|A) × P(A)] / P(B)`

## Limit Laws

**`Law of Large Numbers`** := the average of independent trials drawn from the same distribution approaches the `Expected Value` as the number of trials grows.

> `(1/n) Σ Xᵢ → E(X)` as `n → ∞`

---

**`Central Limit Theorem`** := for independent trials drawn from the same distribution with finite `Variance`, the distribution of their average approaches a normal one as the number of trials grows.

> `√n · ((1/n) Σ Xᵢ − E(X)) / SD(X) → Normal(0, 1)` as `n → ∞`

*NOTE*: the conditions carry the theorem. Without independence, or without finite `Variance`, the limit need not be normal.

## Long-Run Behavior

**`Recurrent`** := a `State` returned to with probability 1.

> `recurrent(State) ⟺ P(return to State) = 1`

---

**`Transient`** := a `State` eventually abandoned — returned to with probability less than 1.

> `transient(State) ⟺ P(return to State) < 1`

*NOTE*: recurrent `State` are the long-run support of the `Flow`; the stochastic generalization of a `Circuit`. Transient `State` carry only the approach.

---

**`Stationary Distribution`** := a [`Probability Distribution`](02-process.md#parts-of-a-process) over `State` left unchanged by the `Circuit`'s [`TransitionMatrix`](02-process.md#kinds-of-circuit) `T`.

> `π T = π`, `Σ π = 1`

*NOTE*: the stochastic [`Equilibrium`](07-system.md#the-whole): applying the `Circuit` reproduces the same distribution. Not a single resting `State` but a stable *mixture* of `State`.

---

**`Ergodic`** := the `Flow` converges to a unique `Stationary Distribution` regardless of the starting `State`.

> `lim T^k → π` for every initial `State`

*NOTE*: requires irreducibility (every `State` reachable) and aperiodicity (no fixed cycle length). The long-run fraction of time in each `State` equals `π`, independent of where the `Flow` began.
