# Graphs

This part introduces directed structure over `Azon`: `Arrow`, `Vertex`, `Path`, `Tree`. The composition operator that chains `Azon` is split out into [02-composition](02-composition.md).

### Graph Theory

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Arrow` | An `Azon` that responds emptily for all inputs except (at most) one | `R(x) := (x IS a ? b : 0)` for fixed `a, b` | A single `Pair`. |
| `Pair` | The Sign and Value of an `Arrow` | `(a, b)` |  |
| `Singleton` | A trivial `Arrow` whose Sign and Value coincide | `Singleton(C)(x) := (x IS C ? C : 0)` | As a `Set`, a `Singleton` contains exactly one `Element`. |
| `Plus-Constructor` | The `Azon` that wraps each Sign in a `Singleton` | `+(x) := Singleton(x)` | Maps any `Azon` to its singleton. |
| `Graph` | A `Set` of `Arrow` over a `Set` of `Vertex` | `Graph := (L, V)` such that `∀r ∈ L: DOM(r) ⊆ V ∧ COD(r) ⊆ V` | Every `Azon` has an equivalent `Graph` (its `Pair`-set). |
| `Vertex` | An `Azon` that is an Output for some `Arrow` and/or an Input for other `Arrow` in a `Graph` | `Vertex ∈ V` of a `Graph (L, V)` | Classified by junction type — see below. |
| `Structure` | A connected `Graph` — for every subset of `Vertex` there exists an `Arrow` entering or exiting | `∀V' ⊊ V: ∃r ∈ L: (DOM(r) ∩ V' ≠ 0 ∧ COD(r) ⊄ V') ∨ (COD(r) ∩ V' ≠ 0 ∧ DOM(r) ⊄ V')` | Ensures structural coherence — no subset of `Vertex` is completely isolated. |
| `Cycle` | A `Structure` where every `Vertex` is a pass-through `Link` | `{(1:1)+}` | A closed circular path. |
| `Path` | A `Structure` with one `Source`, one `Sink`, and all intermediate `Vertex` as `Link` | `{(0:1), (1:1)*, (1:0)}` | A single `Arrow` is a `Path` (minimal case). |
| `Tree` | A `Structure` with one `Source` and all other `Vertex` being `Fork` | `{(0:n), (1:n)*}` |  |
| `Transposition` | A `Graph` mapping `Vertex` of `G₁` to `Vertex` of `G₂` | `TS: V₁ → V₂` |  |
| `Translation` | A `Graph` mapping `Arrow` of `G₁` to `Arrow` of `G₂` | `TL: L₁ → L₂` | A `Transposition` or `Translation` is **relational** if it preserves all `Path` — equivalent to a graph homomorphism. |

**Junction types.** A `Vertex` is classified by its in-degree and out-degree:

| Type | Term | Description |
|---|---|---|
| `(0:n)` | `Source` | only outgoing `Arrow` — Origin |
| `(n:0)` | `Sink` | only incoming `Arrow` — Terminus |
| `(1:1)` | `Link` | one in, one out — pass-through |
| `(1:n)` | `Fork` | one in, many out — Divergence |
| `(n:1)` | `Merge` | many in, one out — Convergence |

An `Azon` is **univalent** — i.e., functional — if its `Graph` has no `Fork`: every `Vertex` has at most one outgoing edge.

### Composition

This part introduces the central operator that chains `Azon`: **`Composition`**.

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Composition` | The `Azon` that chains two `Azon` by feeding the output of one into the input of the next | `(A.B)(x) := A(B(x))` | Well-defined when `COD(B) ⊆ DOM(A)`. |

**Properties.**

- **Chain-composable**: `A.B` is well-defined when `COD(B) ⊆ DOM(A)`.
- **Identity**: `1.A = A.1 = A`. `Identity` is the composition identity (restricted to `DOM(A)` on the right, `COD(A)` on the left).
- **Null**: `0.A = A.0 = 0`. `Absorber` is composition-absorbing.
- **Associativity**: `(A.B).C = A.(B.C)`. `Composition` is associative — a consequence of `Concatenation` identity (see [04-sequence](04-sequence.md)).
- **Bijection**: `A` is **bijective** if there exists an inverse `A⁻¹` such that `∀x ∈ DOM(A): A⁻¹(A(x)) = x` and `∀y ∈ COD(A): A(A⁻¹(y)) = y`. Equivalently, `A⁻¹.A` agrees with `Identity` on `DOM(A)`, and `A.A⁻¹` agrees with `Identity` on `COD(A)`.

> `Composition` is the most-used primitive in later chapters — it underlies `Derivation` in `Language`, successor in `Number`, `Feedback` in `System`, and `Validation` in `Mind`.

### Correspondence to Category Theory

A **category** is, in ALMA terms, a `Set` of `Azon` closed under `Composition` and containing an `Identity` per `Object`. No new primitive is introduced — every categorical concept is reducible to an `Azon` (or a `Set` of `Azon`).

| Term | Definition | Formula | Notes |
|---|---|---|---|
| `Category` | A `Set` of `Azon` closed under `Composition`, containing an `Identity` for each `Domain` / `Codomain` of its members | `C ⊆ 1` such that `∀A, B ∈ C: COD(B) ⊆ DOM(A) ⟹ A.B ∈ C`, and `∀X ∈ Obj(C): 1_X ∈ C` |  |
| `Object` | A `Domain` or `Codomain` of some `Azon` in `C` — itself a `Set` (hence an `Azon`, see [01-set](01-set.md)) | `Obj(C) := {DOM(A) : A ∈ C} ∪ {COD(A) : A ∈ C}` |  |
| `Morphism` | An `Azon` `A ∈ C`, viewed structurally as `f: DOM(A) → COD(A)` | `A: DOM(A) → COD(A)` | No extra structure — an `Azon` *is* a `Morphism`. |
| `Identity Morphism` | The `Azon` that fixes every `Element` of an `Object` `X` and is empty elsewhere — `Identity` localized to `X` (see [00-azon](00-azon.md)) | `1_X(a) := (a ∈ X ? a : 0)` | `A.1_{DOM(A)} = A` and `1_{COD(A)}.A = A`. |
| `Isomorphism` | A bijective `Azon` — exactly the **Bijection** case above | `A.A⁻¹ = 1_{COD(A)}` and `A⁻¹.A = 1_{DOM(A)}` |  |
| `Monoid` | A `Category` over a single `Object` `X` — every member is endogenous on `X` (see [01-set](01-set.md)) | `∀A ∈ M: DOM(A) = COD(A) = X` |  |
| `Functor` | An `Azon` that maps one `Category` into another, preserving `Composition` and `Identity` — equivalent to a **relational `Translation`** (see [02-graph](02-graph.md)) | `F(A.B) = F(A).F(B)`, `F(1_X) = 1_{F(X)}` |  |
| `Natural Transformation` | An `Azon` `η` assigning to each `Object` `X` an `Azon` `η_X: F(X) → G(X)` that commutes with two `Functor` `F, G` | `∀A ∈ C: η_{COD(A)} . F(A) = G(A) . η_{DOM(A)}` |  |

**Notes:**

- A `Category` is *itself* an `Azon` — specifically a `Set` of `Azon`. Nothing leaves the framework.
- An `Object` is not a separate kind of entity: it is a `Set`, which is an `Azon` (see [01-set](01-set.md)).
- The categorical axioms (left/right unit, associativity, chain-composability) are exactly the properties of `Composition` listed above — re-named, not re-asserted.
- `Functor` ≡ **relational `Translation`** of [02-graph](02-graph.md): preserving `Path` is the same condition as preserving `Composition`.
- ALMA does not depend on category theory — but every `Composition`-based chapter (`Derivation` in `Language`, successor in `Number`, `Feedback` in `System`, `Validation` in `Mind`) inherits categorical structure for free.

## Algebraic Structures

### Single Set with Operations

#### Basic Structures

| Structure | Definition | Example |
| ----------- | ------------ | --------- |
| **Pointed Set** | Set with defined units (0-ary operations) | `unit: () => 1` |
| **Unary System** | Set with a single unary operation | `inc: (x) => x+1` |
| **Pointed Unary System** | Unary system with a pointed set | `zero: ()=>0, unit: ()=>1, inv: (x)=> x==1 ? 0 : 1` |
| **Poset** | Partially ordered set with `compare` defined partially | `≤: a,b => a,b in P ? (a < b ? T : F) : U` |
| **Setoid** | Set with `eq` equivalence | `eq: (a, b) => a == b ? T : F` (Reflexive+Associative+Transitive) |

#### Magma and Descendants

| Structure | Definition | Properties |
| ----------- | ------------ | ------------ |
| **Magma (Groupoid)** | Having a single binary operation | `op: (a,b) => c` |
| **Quasi-group** | A magma obeying Latin square property | Any a,b Exists x,y : ax = b; ya = b |
| **Loop** | A quasi-group with identity | - |
| **Semi-group** | An associative magma | `combine: a,b => (...) => a(b(...))` |
| **Semi-lattice** | An idempotent and commutative semigroup | Idempotent and commutative |
| **Monoid** | A semigroup with 'unit' | `unit: () => 1` (LR-identity) |
| **Group** | A monoid with 'inverse' | `inverse: a => -a` (LR-inverse) |
| **Abelian Group** | A group with commutative 'sum' | `sum: (a,b) => c` (associative+commutative) |

#### Ringoid Structures

| Structure | Definition |
| ----------- | ------------ |
| **Ringoid** | Set with 'add' and 'multiply', multiplication distributing over addition |
| **Semiring** | A ringoid that is also a monoid under each operation |
| **Near-ring** | A semiring whose 'add' is a group |
| **Ring** | A semiring whose 'add' is an abelian group |
| **Boolean Ring** | A commutative ring with idempotent multiplication |
| **Field** | A commutative ring containing multiplicative inverse for every nonzero element |

#### Lattice Structures

| Structure | Definition | Laws |
| ----------- | ------------ | ------ |
| **Lattice** | A poset with '∨ - meet (infimum)' and '∧ - join (supremum)' | Commutative, Associative, Absorption |
| **Complete Lattice** | A lattice with arbitrary 'meet' and 'joins' | - |
| **Bounded Lattice** | A lattice with '1-greatest (top)' and '0-least (bottom)' | 0 ≤ x ≤ 1 for every x in L |
| **Complemented Lattice** | A bounded lattice with unary '⊥ - complementation' | a ∨ a⊥ = 1 and a ∧ a⊥ = 0 |
| **Distributive Lattice** | A lattice where meet and join distribute over each other | - |
| **Boolean Algebra** | A complemented distributive lattice | - |

### Two Sets with Operations

| Structure | Definition |
| ----------- | ------------ |
| **Group with Operators** | A group G with a set Ω and binary operation Ω × G → G |
| **Module** | An abelian group M and a ring R acting as operators on M |
| **Vector Space** | A module where the ring R is a division ring or field |
| **Graded Vector Space** | A vector space with direct sum decomposition |
| **Algebra over a Ring** | A module over a commutative ring with compatible multiplication |
| **Associative Algebra** | An algebra with associative multiplication |
| **Lie Algebra** | A nonassociative algebra satisfying the Jacobi identity |

## Data Structures

### Fundamental Data Structures

| Structure | Definition | Used For |
| ----------- | ------------ | ---------- |
| **Array** | A collection of elements of the same size stored in contiguous memory locations | Storing elements with direct index-based access; sorting and searching algorithms |
| **Set** | A collection of unique elements | Mathematical set operations (union, intersection, difference) |
| **Map** | A collection of key-value pairs where each key is unique | Access to elements based on keys; dictionaries |
| **Hash Table** | Uses hash functions to map keys to indices in an array | Efficient searching and indexing; databases, caches, dictionaries |

### Graph-Based Structures

| Structure | Definition | Used For |
| ----------- | ------------ | ---------- |
| **Graph** | Collection of nodes connected by edges representing relationships | Finding solutions to network problems; shortest path |
| **Linked List** | A graph where nodes are linked in linear fashion (each has at most one prev/next sibling) | Dynamic memory allocation; implementing stacks and queues |
| **Stack** | A list where elements are added/removed from the top (LIFO) | Expression evaluation; backtracking; undo/redo operations |
| **Queue** | A list where elements are added at rear and removed from front (FIFO) | Scheduling tasks; processing events; maintaining waiting lists |

### Tree Structures

| Structure | Definition | Used For |
| ----------- | ------------ | ---------- |
| **Tree** | A graph with single root and one-to-many parent-children relations | Efficient searching, sorting; file systems, database indexing |
| **Trie (Prefix Tree)** | A tree with links defined by individual characters, not entire keys | Efficient string matching; spell checkers, IP routers, text editors |
| **Suffix Tree** | A tree-based structure for efficient string matching and manipulation | Finding longest repeating substring; pattern occurrences |
| **Heap** | A complete binary tree with elements in specific order (max/min) | Finding min/max element; sorting; priority queues |
| **B-tree** | A self-balancing tree structure | Efficient search and insertion for large data sets; disk-based indexing |
| **AVL Tree** | A self-balancing binary search tree where subtree heights differ by at most one | Efficient searching and sorting |
| **Red-Black Tree** | A self-balancing BST where each node is colored red or black | Efficient searching and sorting |
| **Segment Tree** | A tree for efficient range queries and updates | Finding min/max in a given range |
| **Fenwick Tree** | A binary indexed tree for prefix sum computation | Computing prefix sums efficiently |

### Specialized Structures

| Structure | Definition | Used For |
| ----------- | ------------ | ---------- |
| **K-Tree** | A tree for range searching in high-dimensional data sets | Image processing; computer graphics |
| **Tuple Space** | A coordination model for distributed systems | Distributed systems coordination |
| **Bloom Filter** | A probabilistic structure where false positives are possible but false negatives are not | Spell checkers; network routers; data compression |
