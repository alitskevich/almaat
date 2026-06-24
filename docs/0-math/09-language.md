# Formal Language

**`Alphabet`**  := `{ Symbolᵢ :: endemic }`
:= A finite `Set` of endemic `Azon`s (`Symbol`s).

**`Word<Alphabet>`** := `[Symbolᵢ,...] :: Symbolᵢ ∈ Alphabet`
:= A `Row` of `Symbol`s of the same `Alphabet`.

**`Dictionary<Alphabet>`** := `{ Word<Alphabet> }`
:= A `Set` of `Word`s of the same `Alphabet`.

---

**`Rule<Dictionary>`** := `(S → S') :: S, S' ∈ Dictionary`
:= An `Arrow` from/to `Word`s of the same `Dictionary`.

**`Grammar<Dictionary>`** := `{ Rule × Rule :: Rule<Dictionary>}`
:= A `Graph` on `Rule`s over the `Dictionary`.

**`Conclusion<Grammar>`** := (*Rule₁ . … . Ruleₙ) :: [Rule₁,…,Ruleₙ] ∈ Path<Grammar>`
:= A `Composition` over `Rule`s from some`Path` in the `Grammar`.

**`Expression<Word, Grammar>`** := `Conclusion<Grammar>(Word)`
:= the `Value` of some `Conclusion` within the `Grammar` for some input `Word`.

**`Theory<Word, Grammar>`** := `{ Expression<Word, Grammar> }`
:= the `Dictionary` of all `Expression`s that may be derived from the input `Word` within the `Grammar`.

---

**`Axiom<Grammar>`** := `¬∃ Word :: Expression<Word, Grammar> = Axiom`
:= `Word` that cannot be expressed in the `Grammar`.

**`Termin<Grammar>`** := `Word :: Theory<Termin, Grammar> = Zero`
:= A terminal `Expression` from which nothing more can be derived.

**`Formal-Language<Axiom,Grammar>`** := `{ Termin :: Termin ∈ Theory<Axiom, Grammar> }`
:= A `Dictionary` of all `Termin`s, expressed from given `Axiom` and `Grammar`.
