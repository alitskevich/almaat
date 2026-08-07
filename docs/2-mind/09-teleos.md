# Agency & Teleology

![Agency & Teleology](/images/1-nature/09-agency.svg)

This chapter defines the anatomy of intentional action: who the `Agent` is, what makes the Future relevant, what drives motion toward it, what means are deployed, and how outcomes are evaluated — including failure modes that decision-modeling requires.

**`Agent`** := `Solution :: able<Goal + Solution + Will>`
:= A `Participant` who able to

- committing projected `Goal`
- selecting `Solution` to reach it
- and sustaining commitment via `Will`.

*NOTE*: Extends `Participant` with **telos**: the `Behavior` of an `Agent` is not solely a function of present `Communication` but is shaped by an internal model of an intended Future.

---

**`Self-Efficacy`** := `Opinion` about the possibility of an `Agent`'s personal influence on the Future.

> `Self-Efficacy :: Opinion(Agent → Future)`

*NOTE*: The `Agent`'s belief about its own causal capacity. Distinct from `Potency`: `Self-Efficacy` is opinion about *self* as cause; `Potency` is opinion about *`Plan`* (or `Paradigm`, `Goal`) feasibility. `Self-Efficacy` is itself causal — believed efficacy shapes actual efficacy through `Will`.

---

**`Will`** := The sustained commitment of an `Agent` to a `Goal` across shifting `Circumstances`.

> `Will :: Goal → const across Circumstances → Circumstances'`

*NOTE*: The `Agent`'s resistance to `Communication` from the `Environment` that would re-evaluate `Drive` toward competing `Core-Need`. Without `Will`, `Goal` dissolves under environmental pressure; with rigid `Will`, the `Agent` cannot adapt to legitimate new `Knowledge`. Productive agency lives in the band between commitment and revision.

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

*NOTE*: Zero-sum: one `Agent`'s `Success` is others' `Failure`. `Victory` is structurally fragile — those it costs become future `Communication` against the victor. See also: `Synergy`.

---

**`Cost`** := The `Resources` consumed in executing a `Solution`.

> `Cost(Solution) := ΔResources`

*NOTE*: Deducted when evaluating whether an `Outcome` is `Success`. `Cost` is the bridge between `Resources` (a stock) and `Outcome` (a flow).

---

## Free Will

The `Agent` feels itself to be the source of its own decisions. This section examines that feeling: whether the `Solution` an `Agent` reaches is freely authored, or is a determined output of a physical `State` that the `Agent` only reports after the fact. (Source: *The Illusion of Free Will*, ChD — https://www.youtube.com/watch?v=LGjRODjpDGg)

**`Free-Will`** := The claimed capacity of an `Agent` to select a `Solution` independent of its prior `State`.

> `Free-Will :: Solution chosen with ¬caused-by(prior State)`

*NOTE*: A free `Solution` in this strong sense requires a chooser exempt from physical law — a cause that is itself uncaused. That is the same structural move as invoking a god to explain the weather: it shifts the burden of proof onto whoever asserts it. No such uncaused cause has been demonstrated, so `Free-Will` taken literally is unsupported. What survives is a weaker, useful sense given below.

---

**`Determinism`** := Every `Event`, including a `Solution`, follows necessarily from the prior `State` under fixed law.

> `Determinism :: State(t) ⟹ State(t+1)`

*NOTE*: The brain is a physical `System` and runs by the same law as the rest of the world. Given the exact same brain `State`, the same `Solution` results — a million reruns yield the same choice. The sense that one *could have done otherwise* compares the past `State` against present `Knowledge` the past `State` did not contain; with the actual prior `State`, no other branch was available. `Determinism` does not entail fatalism: see `Computational-Irreducibility` below.

---

**`Authorship-Illusion`** := The conscious sense of being the source of a `Solution` that was in fact produced unconsciously.

> `Authorship-Illusion :: report(Solution) mistaken for cause(Solution)`

*NOTE*: Most `Cognition` runs below awareness. The conscious `Agent` is shown a finished result and reads it as its own command — like a watcher who sees dolphins only when they surface and believes he summons them. Evidence that the decision precedes its conscious report:

- A study of over a thousand parole rulings found the strongest predictor of release was not the crime or the sentence but how recently the judge had eaten — favorable rulings peaked after meals and fell toward zero before breaks. The judges gave rational reasons, unaware of the real cause.
- Choosing between options (tea or coffee) is a contest between competing `Neuron` ensembles with **no internal judge** that surveys and decides — which is exactly the `Solution := argmax_{Plan}(…)` form, an optimization with no homunculus. Subjectively this contest is felt as "agonizing over the choice"; mechanically nothing was chosen, the stronger pull simply won.
- Brain imaging predicted a left/right button press up to ten seconds before the subject reported deciding (2008), and predicted an add-versus-subtract choice four seconds ahead (2013). Neurostimulation could set which hand a subject moved, yet subjects still insisted the choice was their own free act.

---

**`Veto`** := The proposed capacity to cancel an impulse after it surfaces — "free won't" rather than free will.

> `Veto :: surfaced impulse → cancel`

*NOTE*: Offered as a fallback once initiation was shown to be unconscious. But the cancellation, too, is initiated unconsciously before the `Agent` is aware of vetoing. The conscious `Agent` is again informed after the fact. Across initiation and veto alike, awareness reads as a live report of work already done, not the order that started it.

---

**`Forward-Responsibility`** := Responsibility treated as a lever to change future `Behavior`, not as retributive blame for a freely chosen past act.

> `Forward-Responsibility :: hold-to-account → modify future Behavior`

*NOTE*: Dropping `Free-Will` does not abolish responsibility; it changes its purpose. If the aim is to assign ultimate blame, the only true culprit recedes to the first cause. If the aim is practical — to prevent recurrence — the `Agent` is still responsible in the way failed brakes are responsible for a crash: we isolate and repair what is dangerous without hating it. Reward and punishment remain valid as programming, shaping the `System` toward useful `Behavior`. This reframes punishment from suffering inflicted for its own sake toward rehabilitation; high reoffending rates indicate that purely retributive systems fail at their stated `Goal`.

---

**`Computational-Irreducibility`** := The only way to learn what a `System` will do is to let it run; no shortcut predicts it.

> `Computational-Irreducibility :: predict(State) ≈ run(State)`

*NOTE*: Why `Determinism` need not feel like a sealed fate. A perfect predictor of every particle (a "Laplace's demon") is not buildable: the brain alone holds ~86 billion `Neuron`, each with thousands of links, yielding a state space on the scale of the atoms in the universe, coupled to an environment that feeds back each instant. Even a determined future stays practically unknowable — no spoiler is available. Moreover the universe may not be deterministic at all: at the smallest scale events appear genuinely random, and randomness can propagate upward (e.g. mutation). But randomness does not restore `Free-Will` — a `Solution` driven partly by chance is still not authored by the `Agent`; it is merely unpredetermined.

### The useful illusion

Why carry an `Authorship-Illusion` at all? A `System` whose parts each act on momentary impulse, with no part answerable for outcomes, degrades — like a ship crewed by sailors who each leave at once and care nothing for where she ends up. To bind a constantly-renewing process to its own future, one part must hold a unified, time-extended view and feel itself to be the whole that persists. The felt single `Agent` is that locus: the thing for which consequences land, so that long-range `Core-Value` can outrank short-range impulse.

This makes the illusion functionally real. Believing one is the author strengthens the control and motivation that produce better `Solution` — the same point as `Self-Efficacy` being itself causal: believed agency shapes actual agency through `Will`. Told flatly that no `Free-Will` exists, people tend to act with less effort and more dishonesty. So even if `Free-Will` is not metaphysically given, it earns its keep: an illusion that reliably shapes `Behavior` is, on the plane where the `Agent` lives, real. Compare the idealist framing in [22-being](../1-reality/22-being.md), where the choice is yours because it follows from what you are.

### Compassion as corollary

If no `Agent` selected the prior `State` that produced its acts, two practical attitudes follow. Toward the past self: there is nothing to forgive, because given that exact `State` no other `Solution` was possible — judging it with present `Knowledge` it did not have is incoherent. Toward others: the cruel, lazy, or careless did not choose their `State` any more than one chooses one's own; were choosing truly free, all would choose to be their best. The stance is the empty-boat parable — anger at a drifting boat dissolves when you find it carried no one. Understanding the limits of agency thus returns a workable freedom: freedom from grinding over a past that could not have gone otherwise.
