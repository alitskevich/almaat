---
title: "Probability"
description: "How likelihood is measured over a Random Variable, updated by evidence, and what a Flow settles into over many Steps."
keywords: [reality, probability, bayes, ergodic]
license: UNLICENSED
created: 2026-07-14
modified: 2026-08-16
source: docs/1-reality/10-probability.md
---

# Probability

![Probability](/images/1-reality/10-probability.svg)

How likelihood is measured over a `Random Variable`, updated by evidence, and what a `Flow` settles into over many `Step`s.

## Measure

**`Expected Value (Mean)`** := average `State` over many trials.

> `E(X) = Σ[x × P(x)]`

---

**`Variance and Standard Deviation`** := measures of spread.

> `Var(X) = E[(X − E(X))²]`, `SD = √Var(X)`

## Update

**`Conditional Probability`** := probability of A given B occurred.

> `P(A|B) = P(A ∩ B) / P(B)`

---

**`Bayes' Theorem`** := updates a probability with new evidence.

> `P(A|B) = [P(B|A) × P(A)] / P(B)`

## Limit Laws

**`Law of Large Numbers`** := average `State` approaches the expected value over many trials.

---

**`Central Limit Theorem`** := averages of many trials form a normal distribution.

## Long-Run Behavior

**`Recurrent` / `Transient`** := a `State` returned to with probability 1 (recurrent) versus eventually abandoned (transient).

> `recurrent ⟺ P(return to State) = 1`

*NOTE*: recurrent `State` are the long-run support of the `Flow`; the stochastic generalization of a `Circuit`. Transient `State` carry only the approach.

---

**`Stationary Distribution`** := a `Probability Distribution` over `State` left unchanged by the `Circuit`.

> `π T = π`, `Σ π = 1`

*NOTE*: the stochastic [`Equilibrium`](07-system.md#the-whole): applying the `Circuit` reproduces the same distribution. Not a single resting `State` but a stable *mixture* of `State`.

---

**`Ergodic`** := the `Flow` converges to a unique `Stationary Distribution` regardless of the starting `State`.

> `lim T^k → π` for every initial `State`

*NOTE*: requires irreducibility (every `State` reachable) and aperiodicity (no fixed cycle length). The long-run fraction of time in each `State` equals `π`, independent of where the `Flow` began.
