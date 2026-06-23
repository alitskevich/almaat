# Formal Language

The formal apparatus for words, grammars, and derivations.

---

**`Alphabet`** := A finite `Set` of endemic `Azon`s (`Symbols`).

> `Alphabet := {Symbol :: endemic}`

---

**`Word`** := A `Row` of `Symbols`.

> `Word<Alphabet> := [Symbol,... :: Symbol ∈ Alphabet]`

---

**`Dictionary`** := A `Set` of `Word`s over an `Alphabet`.

> `Dictionary<Alphabet> := { Word<Alphabet> }`

---

**`Rule`** := An `Arrow` over `Word`s of the `Dictionary`.

> `Rule<Dictionary> := (S → S')`, `S, S' ∈ Dictionary`

---

**`Conclusion`** := A `Composition` of endemic `Rule`s.

> `Conclusion := R₁.R₂...Rₙ`

A chain of rule applications leading from one `Word` to another.

---

**`Grammar`** := A `Graph` on `Rule`s over the `Dictionary`.

> `Grammar<Dictionary> := { Rule x Rule :: Rule<Dictionary>}`

*DEF* Conclusion is `restricted` by Grammar := it is a Path in this Grammar.

---

**`Expression`** := the `Value` of a some `Conclusion` within the `Grammar` for some input `Word`.

> `E := Conclusion(W)`

---

**`Theory`** := the `Dictionary` of all `Expression`s may be derived from a input `Word`.

> `Theory<Input,Grammar> := { Conclusion(Input) :: Conclusion restricted by Grammar }`

---

**`Termin`** := A terminal `Expression` from which nothing more can be derived.

> `Theory(Termin) = 0`

---

**`Axiom`** := `Word` that cannot be expressed in the `Grammar`.

> `Axiom := Word : ¬∃ Conclusion → Word`

The irreducible starting axioms — every `Conclusion` begins at a `Ground`-word.

---

**`Formal Language`** := A `Dictionary` of all `Termin`s, expressed from given `Axiom` and `Grammar`.

> `Language<Axiom,Grammar> := { Termin: derivable from Axiom via Grammar})`
