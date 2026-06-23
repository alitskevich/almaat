# Agency & Teleology

![Agency & Teleology](/images/1-nature/09-agency.svg)

This chapter defines the anatomy of intentional action: who the `Agent` is, what makes the Future relevant, what drives motion toward it, what means are deployed, and how outcomes are evaluated — including failure modes that decision-modeling requires.

---

**`Future`** := One of the `Plan` reachable from a `Step`.

> `Future ∈ {Plan reachable from Step}`

*NOTE*: Defined as a `Set` of accessible possibilities, not predetermined fate. The `Future` is plural; the present is singular.

---

**`Potency`** := A graded evaluation of a future-projecting structure (`Plan`, `Paradigm`, or `Goal`) under given `Circumstances`.

> `Potency :: (Plan | Paradigm | Goal, Circumstances) → [0, 1]`

*NOTE*: *Opinion*, not objective measure — hence revisable as new `Knowledge` is acquired. `Plan`-relative in ch. 9; `Paradigm`-relative in [10-growth](10-growth.md).

---

**`Agent`** := A `Participant` whose `Behavior` is organized by a projected `Goal` — committing to a Future, selecting `Solution` to reach it, and sustaining commitment via `Will`.

> `Agent := Participant + Goal-projection + Will`

*NOTE*: Extends `Participant` with **telos**: the `Behavior` of an `Agent` is not solely a function of present `Influence` but is shaped by an internal model of an intended Future.

---

**`Self-Efficacy`** := `Opinion` about the possibility of an `Agent`'s personal influence on the Future.

> `Self-Efficacy :: Opinion(Agent → Future)`

*NOTE*: The `Agent`'s belief about its own causal capacity. Distinct from `Potency`: `Self-Efficacy` is opinion about *self* as cause; `Potency` is opinion about *`Plan`* (or `Paradigm`, `Goal`) feasibility. `Self-Efficacy` is itself causal — believed efficacy shapes actual efficacy through `Will`.

---

**`Will`** := The sustained commitment of an `Agent` to a `Goal` across shifting `Circumstances`.

> `Will :: Goal → const across Circumstances → Circumstances'`

*NOTE*: The `Agent`'s resistance to `Influence` from the `Environment` that would re-evaluate `Drive` toward competing `Core-Need`. Without `Will`, `Goal` dissolves under environmental pressure; with rigid `Will`, the `Agent` cannot adapt to legitimate new `Knowledge`. Productive agency lives in the band between commitment and revision.

---

**`Core-Value`** := A criterion for ranking `Future` such that, if a `Future` violates it, continued participation in the `System` is rated worse than ceasing.

> `Core-Value :: Future × Future → order`

*NOTE*: The non-negotiable ranker over `Future` — not a `Future` state itself, but the rule by which `Future`s are compared. Identity is constituted by `Core-Value`: what an `Agent` ranks above survival defines who that `Agent` is.

---

**`Core-Need`** := What is deemed necessary for satisfying `Core-Value`.

> `Core-Need := necessary conditions for Core-Value-aligned Future`

*NOTE*: The derived non-negotiables — concrete conditions that make a `Core-Value`-aligned `Future` attainable.

---

**`Drive`** := A tension between evaluations of Being (actual) and Needed (required).

> `Drive := evaluation(Being) − evaluation(Needed)`

*NOTE*: The gap between current `State` and required `State` — the fundamental deficit that drives action. Without `Drive` there is no motion; with excessive `Drive` there is panic rather than direction.

---

**`Circumstances`** := The conjunction of `Core-Need`, `Drive`, `Self-Efficacy`, `Potency`, and `Resources`.

> `Circumstances := (Core-Need, Drive, Self-Efficacy, Potency, Resources)`

*NOTE*: The complete decision context. A `Solution` taken without surveying all five components is partial.

---

**`Goal`** := An image of a `Future` selected for achievement, given `Drive` and `Potency` across alternative `Plan`.

> `Goal := argmax_{Future} (Potency · alignment with Drive)`

*NOTE*: A top-level declaration of conditions to satisfy in a given Context. `Will` (above) is what keeps a `Goal` stable across `Step` as `Circumstances` shift.

---

**`Purpose`** := A method of using a given Entity to achieve a `Goal`.

> `Purpose :: Entity → role within Plan → Goal`

*NOTE*: The role assigned to an Entity within a `Plan`. The same Entity may have many `Purpose`s across different `Plan`s.

---

**`Quality-Attribute`** := An evaluation of an Entity's suitability for a given `Purpose`.

> `Quality-Attribute :: (Entity, Purpose) → Grade`

*NOTE*: Always relative to a `Purpose` — there is no "quality" in the abstract, only fit-for-use.

---

**`Resources`** := A series of Entities available for use according to their `Purpose`.

> `Resources := Row(Entity) consumed along Plan`

*NOTE*: Matter of any sort in possession, *consumed* along a `Plan`. `Resources` are a flow concept (drained across `Step`), not a static possession.

---

**`Solution`** := A commitment to a specific `Plan`, chosen by trading expected `Core-Value`-satisfaction across `Potency`-weighted `Future`s against anticipated `Resources` `Cost` and accepted `Risk` under `Circumstances`.

> `Solution := argmax_{Plan} (Core-Value-utility × Potency − Cost − Risk | Circumstances)`

*NOTE*: The concrete commitment — `Solution` converts `Potency` (possibility) into action.

---

**`Success`** := Achievement of a `Goal` without worsening overall `Potency`.

> `Success :: Goal achieved ∧ ΔPotency ≥ 0`

*NOTE*: `Goal` achievement at no net cost to future capability — the baseline criterion for a sound `Solution`. A "success" that depletes `Potency` is not `Success`.

---

**`Victory`** := A `Solution` whose `Success` is at the expense of other `Agent`s.

> `Victory :: Success(self) ∧ ∃A_other: Failure(A_other)`

*NOTE*: Zero-sum: one `Agent`'s `Success` is others' `Failure`. `Victory` is structurally fragile — those it costs become future `Influence` against the victor. See also: `Synergy`.

---

**`Synergy`** := A `Solution` whose `Success` is shared by all participating `Agent`s.

> `Synergy :: ∀A ∈ Participants: Success(A)`

*NOTE*: Positive-sum: mutual benefit. The highest-quality `Solution` within a multi-`Agent` `System` — and the only kind compatible with sustained `Evolution`.

---

**`Cost`** := The `Resources` consumed in executing a `Solution`.

> `Cost(Solution) := ΔResources`

*NOTE*: Deducted when evaluating whether an `Outcome` is `Success`. `Cost` is the bridge between `Resources` (a stock) and `Outcome` (a flow).
