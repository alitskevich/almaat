# Formal Language

**`Code := [ 0 | 1 ]`**  := finite tuple from `0` and `1`.

**`Alphabet<N> := { Code :: |Code| = N }`** := finite set of same-length `Code`s.

**`Word<Alphabet> := [Codeᵢ, ...] :: Codeᵢ ∈ Alphabet`** := `Tuple` of `Code`s of given `Alphabet`.

**`Dictionary<Alphabet> := { Word<Alphabet> }`** := `Set` of `Word`s of the same `Alphabet`.

**`Rule<Dictionary> "= (T → T') :: T, T' ∈ Dictionary`** := `Arrow` over `Word`s from given `Dictionary`.

**`Grammar<Dictionary> := {Rule<Dictionary>}`** := `Graph` of `Rule`s on given `Dictionary`.

**`Conclusion<Grammar> := Composition([Rule₁,…,Ruleₙ] ∈ Grammar)`** := `Composition` of some `Path` in given `Grammar`.

**`Expression<Word,Grammar> := Conclusion<Grammar>(Word)`** := `Value` of some `Conclusion` for given input.

**`Theory<Word, Grammar> := { Expression<Word, Grammar> }`** := the `Dictionary` of all `Expression`s that may be derived from the input `Word` within the `Grammar`.

**`Axiom<Grammar> := ¬∃ Theory :: Axiom ∈ Theory`** := `Word` that cannot be expressed in given `Grammar`.

**`Termin<Grammar> := Word :: Theory<Word, Grammar> = Zero`** := `Word` that nothing can be derived from in given `Grammar`.

**`Language<Axiom,Grammar> := { Termin ∈ Theory<Axiom, Grammar> }`** := A `Dictionary` of all `Termin`s, expressed from given `Axiom`s within given `Grammar`.
