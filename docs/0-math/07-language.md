---
title: "Formal Language"
description: "How a Language is built from binary Code up through Alphabet, Word and Dictionary, the Rules and Grammar that transform them, and the Theory derivable from an Axiom."
keywords: [math, language]
---

# Formal Language

![Formal Language](/images/0-math/07-language.svg)

## Codes and Words

**`Code`** := finite `Tuple` of `0` and `1`.

> `Code := [ 0 | 1 ]`

---

**`Alphabet`** := finite `Set` of same-length `Code`s.

> `Alphabet<N> := { Code :: |Code| = N }`

---

**`Word`** := `Tuple` of `Codes` of given `Alphabet`.

> `Word<Alphabet> := [Codeᵢ, ...] :: Codeᵢ ∈ Alphabet`

---

**`Dictionary`** := `Set` of `Words` of the same `Alphabet`.

> `Dictionary<Alphabet> := { Word<Alphabet> }`

## Rules and Grammar

**`Rule`** := `Arrow` over `Words` from given `Dictionary`.

> `Rule<Dictionary> := (T → T') :: T, T' ∈ Dictionary`

---

**`Grammar`** := `Graph` of `Rules` on given `Dictionary`.

> `Grammar<Dictionary> := { Rule<Dictionary> }`

---

**`Conclusion`** := `Composition` of some `Path` in given `Grammar`.

> `Conclusion<Grammar> := Composition([Rule₁, …, Ruleₙ] ∈ Grammar)`

## Theories

**`Expression`** := `Word` produced by a `Conclusion` from a given input `Word`.

> `Expression<Word, Grammar> := Conclusion<Grammar>(Word)`

---

**`Theory`** := `Dictionary` of all `Expressions` that may be derived from the input `Word` within the `Grammar`.

> `Theory<Word, Grammar> := { Expression<Word, Grammar> }`

---

**`Axiom`** := `Word` that cannot be expressed in given `Grammar`.

> `Axiom<Grammar> := ¬∃ Theory :: Axiom ∈ Theory`

---

**`Terminal`** := `Word` that nothing can be derived from in given `Grammar`.

> `Terminal<Grammar> := Word :: Theory<Word, Grammar> = Zero`

---

**`Language`** := `Dictionary` of all `Terminals` expressed from given `Axioms` within given `Grammar`.

> `Language<{Axiom}, Grammar> := { Terminal ∈ Theory<A, Grammar> : A ∈ {Axiom} }`
