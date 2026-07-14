# Systems

![Systems](/images/1-nature/07-system.svg)

**`Thing(Entity)`** := `[Presentation(Entity, Step[i])]`
:= A `Queue` of `Presentation`s of a single `Entity` according to a `Flow`.

**`Event(Thing)`** := `(Step[i], State(Thing, Step[i]), State(Thing, Step[i+1]))`
:= A change of `State` of a `Thing` between consecutive `Step` — a triple of moment, before-state, after-state.

**`Trajectory(Thing)`** := `[State(Thing, Step[i]) for Step[i] in indices(Thing)]`
:= The `Translation` of a `Thing` into the State-track of its `State`s.

*NOTE*: A `Translation` from `Presentation`-space to State-space. The realized `Trajectory` is one sample path of the `Flow`; the space of possible `Trajectory`s is the `Engine`'s support unrolled. A `Trajectory` is a function of `Thing` only where every `Step` is a point mass.

---

**`System`** := `System :: Framework over {Participant} with Communication`
:= An `Engine` considered as `Framework` that allows a mutual `Communication` of `Participant`s.

**`Participant`** := A `Thing` that communicates with other `Participant` of the `System`.

> `Participant ∈ Source : ∃Communication(P → Q)`

*NOTE*: The atomic unit of a`System` — defined by its role in the network of `Communication`, not by its internal structure.

---

**`State of a Participant`** := The`State` of a `Participant` at a given `Step`.

> `State(U, Step) :: State over the Presentations of U at Step`

*NOTE*: What`Behavior` projects outward and what `Attention` of others receives.

---

**`Communication`** := Projections of`Outcome` of each `Participant` into the `Input` of other `Participant`.

> `Communication(A → B) := Behavior(A) . Attention(B)`

*NOTE*: `Communication` is the *`Composition`* of A's outward projection with B's inward selection. Asymmetric: `A → B ≠ B → A`. Operates across a single `Step` — A's output at `Step[i]` becomes B's input at `Step[i+1]`.

---

**`Attention`** := A`Participant`'s projection of *other* `Participant`s' `State` into its own `Input`.

> `Attention(B) :: State(other) → Input(B)`

*NOTE*: The receiving half of`Communication`. `Attention` is selective: not every available `Behavior` enters a `Participant`'s input.

---

**`Behavior`** := A`Participant`'s projection of its own `State` into other `Participant`s' `Input`.

> `Behavior(A) :: State(A) → Input(other)`

*NOTE*: The sending half of`Communication`. `Behavior` is the externally-visible aspect of a `Participant` — what it contributes to the `System`.

---

**`Environment`** := The part of the`System` that has mutual `Communication` with a `Participant`.

> `Environment(P) := {Q ∈ System : Communication(P↔Q) ≠ 0}`

*NOTE*: The`Participant`'s local neighborhood of coupled `Participant` — the subset of the `System` it actually exchanges `Behavior`/`Attention` with.

**`Interface`** := A Form that constrains the`Behavior` of `Participant` relative to each other.

> `Interface :: admissible(Behavior, Attention) → {0, 1}`

*NOTE*: A behavioral contract — a formal specification of admissible`Communication` patterns.

---

**`Coupling`** := The persistence of mutual`Communication` between two `Participant` across multiple `Step`.

> `Coupling(A, B) := | {Step[i] : Communication(A↔B) ≠ 0 at Step[i]}|`

**`Feedback`** := A`Composition` in which a `Participant`'s `Behavior` flows, through other `Participant`s, back into its own `Attention`.

> `Feedback(A) :: ∃ path A → ... → A in the Coupling graph`

*NOTE*: Positive`Feedback` amplifies divergence from a `State`; Negative `Feedback` restores it. Every stable `Halt` requires Negative `Feedback`.

---

**`Emergence`** := A`Behavior` of a `System` not present in any individual `Participant`.

> `Emergence :: Behavior(System) ⊄ ⋃ Behavior(Participant)`

*NOTE*: The signature of`System`s: the whole exhibits properties no part can. Not predictable from the `State` of individual `Participant`s alone — must be observed under `Communication`.

---

**`Equilibrium`** := A`State` of the `System` at which all `Communication` among `Participant`s balance, yielding a `Halt` for the whole.

> `Equilibrium :: Framework(State_sys) = {State_sys}`

*NOTE*: The system-level`Halt`. Disturbance by external `Communication` yields either return to the same `Equilibrium` (stable), drift to a different one (metastable), or unbounded divergence (unstable).

## Entropy

Entropy is the bridge between the `State` of a `System` and the passage of `Step`s. It measures how much a `System`'s observable macro-`State` leaves undetermined about the underlying `State`s of its `Participant`s — and its tendency to grow over `Step`s is what gives a `System` an arrow of time. `Order` is never free: a `System` holds back `Entropy` only by drawing `Communication` from its `Environment`.

---

**`Entropy`** := A measure of the uncertainty in a`System`'s `State` — the count of micro-configurations of `Participant`s consistent with one observed macro-`State`.

> `Entropy(System) := −Σ P(State_i) · log P(State_i)`

*NOTE*: High`Entropy` means many indistinguishable `State`s, so the macro-`State` carries little information about the micro-`State`. The Boltzmann (counting) and Shannon (information) forms coincide. Maximal at `Equilibrium`.

---

**`Order`** := The complement of`Entropy` — the degree to which a `System`'s macro-`State` constrains the `State` of its `Participant`s.

> `Order := Entropy_max − Entropy`

*NOTE*: Structure, pattern, distinguishability — what makes a`System` more than noise. Sometimes called *negentropy*. Sustained only against `Dissipation`.

---

**`Dissipation`** := The tendency of an isolated`System` to lose `Order` across `Step`s.

> `Dissipation :: Entropy(System, Step[i+1]) ≥ Entropy(System, Step[i])` for an isolated `System`

*NOTE*: The Second Law as a`Flow` property: with no external `Communication`, `Order` decays monotonically toward `Equilibrium`. This is the `System`-level arrow of time.

---

**`Self-Organization`** := A local decrease of`Entropy` in an open `System`, paid for by a greater increase of `Entropy` in its `Environment`.

> `Self-Organization :: ΔEntropy(System) < 0 ∧ ΔEntropy(System ∪ Environment) > 0`

*NOTE*: The mechanism behind`Emergence` of `Order` — life, learning, every durable structure. Not a violation of `Dissipation`: `Order` is imported from the `Environment` and `Entropy` is exported back to it. Requires `Feedback` to stay bounded.

## Evolution

Evolution is the dynamics of a `Paradigm` over time — how an `Agent` or `System` changes its `Potency` as `Circumstances` shift. This chapter formalizes the trajectories, drivers, mechanisms, and limits of development: how `Paradigm`s improve, preserve, decay, or break through their containing `System`.

---

**`Evolution`** := A change of`Paradigm` toward strictly greater `Potency` across some `Plan`s, with no `Plan` worsened, under given `Circumstances`.

> `Evolution :: Paradigm → Paradigm'| ∀Plan: Potency(Plan, Paradigm', Circumstances) ≥ Potency(Plan, Paradigm, Circumstances) ∧ ∃Plan: strict >`

---

**`Adaptation`** := A change of`Paradigm` tracking a change in `Circumstances` so that `Potency` is approximately preserved.

> `Adaptation :: (Paradigm, Circumstances → Circumstances') → Paradigm'| Potency(Paradigm', Circumstances') ≥ Potency(Paradigm, Circumstances) − ε`

---

**`Stagnation`** := Persistence of`Paradigm` despite shifting `Circumstances`, with strictly declining `Potency`.

> `Stagnation :: Paradigm = const, Circumstances → Circumstances' | Potency(Paradigm, Circumstances') < Potency(Paradigm, Circumstances)`

---

**`Regression`** := A change of`Paradigm` itself toward lower `Potency` under unchanged `Circumstances`.

> `Regression :: Paradigm → Paradigm' | Potency(Paradigm', Circumstances) < Potency(Paradigm, Circumstances)`

---

**`Crisis`** := A`State` at a `Bifurcation`: existing `Paradigm` inadequate to current `Circumstances`, AND no replacement `Paradigm` yet attainable.

> `Crisis :: Potency(Paradigm, Circumstances) ≈ 0 ∧ ∄Paradigm'_attainable: Potency(Paradigm', Circumstances) > Potency(Paradigm, Circumstances)`

*NOTE*: The branching point: either`Breakthrough` yields a new `Paradigm`, or the `Agent`'s capacity to participate in the `System` collapses.

---

**`Freedom`** := Independence of a`Paradigm` from `Communication` that would coerce its change.

> `Freedom(Paradigm, I) :: Paradigm invariant under Communication ∈ I`

*NOTE*: The`Agent`'s ability to act on its own `Goal` without coercion from the `Environment`. Always conditional and relative to specified `Communication` — never absolute.

---

**`Constraint`** := The set of`Communication` that limit the range of accessible `Plan` for an `Agent`.

> `Constraint := {Communication : restricts accessible Plan}`

*NOTE*: Dual to`Freedom`. Growth occurs through navigating constraints, not by eliminating them — an `Agent` with no constraints has nothing to grow against. Useful `Constraint` becomes the scaffold of `Mastery`.

---

**`Synergy`** := A `Solution` whose `Success` is shared by all participating `Agent`s.

> `Synergy :: ∀A ∈ Participants: Success(A)`

*NOTE*: Positive-sum: mutual benefit. The highest-quality `Solution` within a multi-`Agent` `System` — and the only kind compatible with sustained `Evolution`.

---

**`Excellence`** := The ceiling of`Potency` achievable within a given `Paradigm`.

> `Excellence(Paradigm, Circumstances) := max over Plan ∈ Paradigm of Potency(Plan, Paradigm, Circumstances)`

*NOTE*: A *relative* ceiling, not absolute: a new `Paradigm` can extend it, after which the prior `Excellence` becomes a plateau.

---

**`Improvement`** := Intention toward`Excellence` *within* the bounds of the current `Paradigm`.

> `Improvement :: Paradigm = const, Potency → Excellence(Paradigm)`

*NOTE*: The gradient of effort within an unchanged paradigm — incremental refinement. Stays inside the current`Paradigm`; produces depth, not novelty.

---

**`Breakthrough`** := Intention to escape the current`Paradigm` into a new one.

> `Breakthrough :: Paradigm → Paradigm' ≠ Paradigm`

*NOTE*: The drive to exceed current limits and reach possibilities beyond existing constraints. Often follows`Crisis` — when `Improvement` is no longer sufficient, `Breakthrough` becomes the only remaining vector.
