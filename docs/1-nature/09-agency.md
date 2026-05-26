# Agency & Teleology

An `Agent` is a `Participant` whose `Behavior` is organized by a projected `Goal` — not merely a reactor to current `Influence`. This chapter defines the anatomy of intentional action: who the `Agent` is, what makes the Future relevant, what drives motion toward it, what means are deployed, and how outcomes are evaluated — including failure modes that decision-modeling requires.

**Notation note.** **`Potency`** is polymorphic across this chapter and downstream: `Potency :: (Plan | Paradigm | Goal, Circumstances) → [0, 1]`. It is a graded evaluation of *future-projecting structure* under *circumstances*. Ch. 9 uses it `Plan`-relatively; [10-growth](10-growth.md) uses it `Paradigm`-relatively in `Evolution`/`Adaptation`.

## The Agent

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Agent` | A `Participant` whose `Behavior` is organized by a projected `Goal` — committing to a Future, selecting `Solution` to reach it, and sustaining commitment via `Will` | `Agent := Participant + Goal-projection + Will` | Extends `Participant` with **telos**: the `Behavior` of an `Agent` is not solely a function of present `Influence` but is shaped by an internal model of an intended Future. |
| `Self-Efficacy` | `Opinion` about the possibility of an `Agent`'s personal influence on the Future | `Self-Efficacy :: Opinion(Agent → Future)` | The `Agent`'s belief about its own causal capacity. Distinct from `Potency`: `Self-Efficacy` is opinion about *self* as cause; `Potency` is opinion about *`Plan`* (or `Paradigm`, `Goal`) feasibility. `Self-Efficacy` is itself causal — believed efficacy shapes actual efficacy through `Will`. |
| `Will` | The sustained commitment of an `Agent` to a `Goal` across shifting `Circumstances` | `Will :: Goal → const across Circumstances → Circumstances'` | The `Agent`'s resistance to `Influence` from the `Environment` that would re-evaluate `Drive` toward competing `Core-Need`. Without `Will`, `Goal` dissolves under environmental pressure; with rigid `Will`, the `Agent` cannot adapt to legitimate new `Knowledge`. Productive agency lives in the band between commitment and revision. |

## Possibility & Future

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Future` | One of the `Plan` reachable from a `Step` | `Future ∈ {Plan reachable from Step}` | Defined as a `Set` of accessible possibilities, not predetermined fate. The `Future` is plural; the present is singular. |
| `Potency` | A graded evaluation of a future-projecting structure (`Plan`, `Paradigm`, or `Goal`) under given `Circumstances` | `Potency :: (Plan \| Paradigm \| Goal, Circumstances) → [0, 1]` | *Opinion*, not objective measure — hence revisable as new `Knowledge` is acquired. `Plan`-relative in ch. 9; `Paradigm`-relative in [10-growth](10-growth.md). |
| `Circumstances` | The conjunction of `Core-Need`, `Drive`, `Self-Efficacy`, `Potency`, and `Resources` | `Circumstances := (Core-Need, Drive, Self-Efficacy, Potency, Resources)` | The complete decision context. A `Solution` taken without surveying all five components is partial. |

## Drivers

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Core-Value` | A criterion for ranking `Future` such that, if a `Future` violates it, continued participation in the `System` is rated worse than ceasing | `Core-Value :: Future × Future → order` | The non-negotiable ranker over `Future` — not a `Future` state itself, but the rule by which `Future`s are compared. Identity is constituted by `Core-Value`: what an `Agent` ranks above survival defines who that `Agent` is. |
| `Core-Need` | What is deemed necessary for satisfying `Core-Value` | `Core-Need := necessary conditions for Core-Value-aligned Future` | The derived non-negotiables — concrete conditions that make a `Core-Value`-aligned `Future` attainable. |
| `Drive` | A tension between evaluations of Being (actual) and Needed (required) | `Drive := evaluation(Being) − evaluation(Needed)` | The gap between current `State` and required `State` — the fundamental deficit that drives action. Without `Drive` there is no motion; with excessive `Drive` there is panic rather than direction. |
| `Goal` | An image of a `Future` selected for achievement, given `Drive` and `Potency` across alternative `Plan` | `Goal := argmax_{Future} (Potency · alignment with Drive)` | A top-level declaration of conditions to satisfy in a given Context. `Will` (above) is what keeps a `Goal` stable across `Step` as `Circumstances` shift. |

## Means

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Purpose` | A method of using a given Entity to achieve a `Goal` | `Purpose :: Entity → role within Plan → Goal` | The role assigned to an Entity within a `Plan`. The same Entity may have many `Purpose`s across different `Plan`s. |
| `Quality-Attribute` | An evaluation of an Entity's suitability for a given `Purpose` | `Quality-Attribute :: (Entity, Purpose) → Grade` | Always relative to a `Purpose` — there is no "quality" in the abstract, only fit-for-use. |
| `Resources` | A series of Entities available for use according to their `Purpose` | `Resources := Row(Entity) consumed along Plan` | Matter of any sort in possession, *consumed* along a `Plan`. `Resources` are a flow concept (drained across `Step`), not a static possession. |
| `Solution` | A commitment to a specific `Plan`, chosen by trading expected `Core-Value`-satisfaction across `Potency`-weighted `Future`s against anticipated `Resources` `Cost` and accepted `Risk` under `Circumstances` | `Solution := argmax_{Plan} (Core-Value-utility × Potency − Cost − Risk \| Circumstances)` | The concrete commitment — `Solution` converts `Potency` (possibility) into action. |

## Uncertainty

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Rationale` | A set of universal principles for making `Solution` under conditions of insufficient `Knowledge` | `Rationale :: insufficient Knowledge → Solution heuristic` | The default heuristics applied when `Validation` cannot be completed in time. Pragmatic shortcuts grounded in accumulated `Experience` — the "good enough" function when full `Cognition` is too costly. |
| `Strategy` | A method of making `Solution` within `Communication` considering external `Circumstances` | `Strategy :: Communication × external-Circumstances → Solution-shape` | A set of abstract approaches to interacting within a `System` with respect to the broader Context. `Strategy` operates one level above tactical `Solution` — it shapes *which* problems get solved, not only *how*. |
| `Wisdom` | The integration of `Knowledge`, `Experience`, and `Rationale` into reliable `Solution` across diverse `Circumstances` | `Wisdom :: (Knowledge, Experience, Rationale) → reliable Solution across Circumstances` | The capacity to apply the right principle in the right situation. Bound to the `Agent`'s lived path — not transferable as `Information`. Verified by performance across unfamiliar Contexts, not within familiar ones. |

## Outcomes

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Success` | Achievement of a `Goal` without worsening overall `Potency` | `Success :: Goal achieved ∧ ΔPotency ≥ 0` | `Goal` achievement at no net cost to future capability — the baseline criterion for a sound `Solution`. A "success" that depletes `Potency` is not `Success`. |
| `Victory` | A `Solution` whose `Success` is at the expense of other `Agent`s | `Victory :: Success(self) ∧ ∃A_other: Failure(A_other)` | Zero-sum: one `Agent`'s `Success` is others' `Failure`. `Victory` is structurally fragile — those it costs become future `Influence` against the victor. See also: `Synergy`. |
| `Synergy` | A `Solution` whose `Success` is shared by all participating `Agent`s | `Synergy :: ∀A ∈ Participants: Success(A)` | Positive-sum: mutual benefit. The highest-quality `Solution` within a multi-`Agent` `System` — and the only kind compatible with sustained `Evolution`. |
| `Cost` | The `Resources` consumed in executing a `Solution` | `Cost(Solution) := ΔResources` | Deducted when evaluating whether an `Outcome` is `Success`. `Cost` is the bridge between `Resources` (a stock) and `Outcome` (a flow). |
| `Failure` | A `Solution` whose execution does not achieve the `Goal`, or achieves it at the expense of overall `Potency` | `Failure :: ¬Goal-achieved ∨ ΔPotency < 0` | The negation of `Success`. `Failure` is *informative*: a `Solution` that fails refines `Knowledge` about `Circumstances` and feeds `Learning` ([07-intellect](07-intellect.md)). |
| `Risk` | The variance of `Outcome` across the `Potency`-weighted distribution of `Future`s reachable from a `Solution` | `Risk(Solution) := variance over (Outcome × Potency) given Circumstances` | An `Agent`'s risk tolerance is part of its decision profile. |
| `Trade-off` | A `Solution` in which one `Core-Need` is satisfied at measurable `Cost` to another | `Trade-off :: Δsatisfy(Core-Need_i) > 0 ∧ Δsatisfy(Core-Need_j) < 0` | Inherent whenever `Resources` are bounded and `Core-Need`s are multiple. `Trade-off` recognition is what distinguishes a thoughtful `Agent` from a single-axis optimizer. |

## Solution Process

### Steps

1. **Purpose**: Clear understanding of the reason behind pursuing goals
2. **Analysis**: Thorough analysis of internal and external factors (SWOT)
3. **Objectives**: Specific outcomes to accomplish, aligned with purpose
4. **Plan of Action**: Steps to achieve objectives with resources, roles, timelines
5. **Monitoring and Control**: Tracking progress, evaluating effectiveness, adaptation to changing circumstances

### Tasks and Risk

| Concept | Definition |
| --------- | ------------ |
| **Problem** | A defined factor preventing or making successful processing difficult: conflict of interests, lack of resources, runtime failures, miscommunication, or delusions |
| **Task** | A unit of work equipped with purpose, value outcome, definition of done, required resources, assigned responsibility, timeline, dependencies, and status |
| **Risk** | Measure of possibility and impact of some anticipated problem |
| **Contingency** | Measure of possibility and impact of problems that cannot be anticipated |

### Methodology

| Concept | Definition |
| --------- | ------------ |
| **Methodology** | A study of methods, practices, and patterns to be applied consistently in a target domain |
| **Method** | An organic set of pre-defined practical decisions, conditional triggers, and choices to organize and control a process |
| **Framework** | A specialized system interface allowing users to make choices from predefined options while ensuring valid and consistent state |
| **Best Practice** | A method generally accepted as superior because it produces results superior in given context |

### Solving Approaches

| Approach | Description |
| ---------- | ------------- |
| **Absolution** | Ignoring a problem with hope it will solve itself or go away |
| **Resolution** | Finding a "good enough" solution based on past experience, trial and error, common sense |
| **Solution** | Scientific approach: deep study of subject, building predictable model, seeking optimal outcome |
| **Dissolution** | Transition to different level of organization; eliminating the problem by redesigning the system |
| **Divide & Conquer** | Approach to solve a problem by breaking it down into sub-problems until trivial, then composing results back |

### SMART Goals

Goals should be:

| Criterion | Description |
| ----------- | ------------- |
| **Specific** | Distinguished, clear, and well-defined; answer who, what, when, where, why, how |
| **Measurable** | Quantifiable, allowing progress to be tracked |
| **Achievable** | Realistic and attainable within constraints |
| **Relevant** | Contribute to overall success; aligned with broader objectives |
| **Time-bound** | Have a defined timeframe or deadline |

### SWOT Analysis

| Component | Description |
| ----------- | ------------- |
| **Strengths** | Internal factors giving advantage: brand reputation, unique expertise, efficient processes, loyal customers |
| **Weaknesses** | Internal factors hindering ability: lack of resources, skills, or capabilities; inefficient processes |
| **Opportunities** | External factors to exploit: market trends, emerging technologies, new customer segments |
| **Threats** | External factors causing harm: competition, economic downturns, changing preferences, disruptions |

## Practice

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Practice` | A recurring `Plan` whose `Behavior` updates the `Agent`'s `Skill` and `Knowledge` toward `Excellence` | `Practice :: repeated Behavior under varied Circumstances, feeding Validation and Learning` (see [07-intellect](07-intellect.md)) | The active **mechanism** of `Evolution` at the `Agent` scale. `Evolution` exploits Positive `Feedback` through `Practice`; `Adaptation` relies on Negative `Feedback` to stabilize. |
| `Mastery` | A `Paradigm` in which the `Agent`'s constituent `Skill`s reliably reproduce `Excellence`-grade `Behavior` across `Circumstances` | `Mastery :: Paradigm \| ∀Circumstances: Behavior reproduces Excellence` | The realized form of `Excellence` — not merely the ceiling being possible, but consistently exhibited. `Mastery` is at the **`Paradigm` scope**; `Skill` (in [07-intellect](07-intellect.md)) is at the **`Behavior` scope**. Verified by reproducibility, not by single peak performance. |
| `Calling` | A `Goal` whose `Success` is a `Core-Need` for the preservation of the `Agent`'s `Core-Value` | `Calling := Goal \| Success(Goal) ∈ Core-Need(Core-Value)` | Derivable: the `Goal` an `Agent` recognizes as inseparable from continued participation under its own value-criterion. Distinguishes purposeful direction from generic ambition. |
