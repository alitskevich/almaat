# Fundamental Data Structures

The concrete data structures used in computing — each defined through the upper primitives of [00-azon](00-azon.md), [01-set](02-set.md), and [02-graph](03-graph.md).

| Structure | Definition | Formula | Used For |
|---|---|---|---|
| **Array** | An `Azon` from natural-number index to `Element` of a fixed `Set` | `A: ℕ → X` | Direct index-based access; sorting and searching algorithms |
| **Set** | A collection of unique `Element` (see [01-set](02-set.md)) | s`⊆ U` | Mathematical set operations (union, intersection, difference) |
| **Map** | An `Azon` from `Key` to `Value` | `M: K → V` | Access to elements by key; dictionaries |
| **Hash Table** | A `Map` accessed via `Composition` with a hash `Azon` | `H = M . hash` | Efficient searching and indexing; databases, caches, dictionaries |
| **Graph** | A `Set` of `Arrow` over a `Set` of `Vertex` (see [02-graph](03-graph.md)) | `(L, V)` | Network problems; shortest path |
| **Path** | A `Structure` with one `Source`, one `Sink`, all intermediate `Vertex` as `Link` | `{(0:1), (1:1)*, (1:0)}` | Linear traversal; routes |
| **Cycle** | A `Structure` where every `Vertex` is a pass-through `Link` | `{(1:1)+}` | Closed loops; rotational sequences |
| **Linked List** | A `Path` whose `Vertex` carry data — each has at most one prev/next sibling | `Path` over data-bearing `Vertex` | Dynamic memory allocation; stacks and queues |
| **Stack** | A `Linked List` with insert/remove at one end (LIFO) | `push/pop` at one end of `Linked List` | Expression evaluation; backtracking; undo/redo |
| **Queue** | A `Linked List` with insert at rear, remove at front (FIFO) | `push` rear, `pop` front of `Linked List` | Scheduling tasks; processing events; waiting lists |
| **Tree** | A `Structure` with one `Source` and all other `Vertex` being `Fork` | `{(0:n), (1:n)*}` | Searching, sorting; file systems, database indexing |
| **Trie (Prefix Tree)** | A `Tree` whose `Arrow` are labeled by individual characters | `Tree` with `Arrow ∈ Char` | String matching; spell checkers, IP routers, text editors |
| **Suffix Tree** | A `Tree` indexing all suffixes of a string | `Tree` over suffix `Set` | Longest repeating substring; pattern occurrences |
| **Heap** | A complete binary `Tree` with `Element` in min/max order | binary `Tree` + heap property | Finding min/max; sorting; priority queues |
| **B-tree** | A self-balancing `Tree` with multi-child `Vertex` | balanced `Tree` | Search and insertion for large data sets; disk-based indexing |
| **AVL Tree** | A self-balancing binary `Tree` where subtree heights differ by ≤ 1 | balanced binary `Tree` | Efficient searching and sorting |
| **Red-Black Tree** | A self-balancing binary `Tree` where each `Vertex` is colored red or black | balanced binary `Tree` | Efficient searching and sorting |
| **Segment Tree** | A `Tree` supporting range queries and updates | range-indexed `Tree` | Finding min/max in a given range |
| **Fenwick Tree** | A binary indexed `Tree` for prefix sum computation | indexed binary `Tree` | Computing prefix sums efficiently |
| **K-Tree** | A `Tree` for range searching in high-dimensional data sets | `Tree` over `K`-dimensional `Set` | Image processing; computer graphics |
| **Tuple Space** | A shared `Set` of `Tuple` accessed by pattern matching | shared `Set` of `Tuple` | Distributed systems coordination |
| **Bloom Filter** | A probabilistic `Set` (hashed bit-`Array`) with possible false positives, no false negatives | hashed bit-`Array` | Spell checkers; network routers; data compression |
