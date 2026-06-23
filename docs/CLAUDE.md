# ALMAAT — Project Guide

ALMAAT is a general-purpose framework for cognitive modeling, written as a layered
knowledge base in Markdown. It builds a single ontology from one irreducible primitive
(the `Azon`) up through `Set`, `Graph`, `Language`, `Sequence`, `Space`, dynamic
`System`, `Mind`, `Agent`, and `Growth`, then applies that ontology to the human,
society, and software engineering.

This file is the authoritative instruction set for working in this repository. Follow it
for every edit. When it conflicts with a one-off request, ask before deviating.

## Core task: ingesting content

The recurring job is **ingesting source material** the user pastes in or points to by URL:

1. **Translate to English.** English Terms are canonical. Render non-English source into
   clear English first.
2. **Reduce to basic terminology.** Rewrite in plain language. Strip jargon, marketing
   tone, and filler. Reuse the framework's own vocabulary (the capitalized `Terms`)
   wherever a concept already has one. Also fill gaps with content from external resources.
3. **Place it in the right file.** Embed it in the existing file whose topic it extends.
   Create a new file only when no existing topic fits (see Routing and Naming below).
4. **Keep the indexes current.** Any new file, or any change to a file's title or scope,
   must be reflected in `INDEX.md` and the section's `index.md`. Stale indexes are a bug.

Never paste raw source. Ingestion means rewriting into the framework's voice.

### Worked example

> Source (pasted, Russian): "Дисциплина важнее мотивации — это привычка, а не черта характера."

- Translate → "Discipline matters more than motivation — it is a habit, not a character trait."
- Reduce → state it plainly in the framework's register, mark concepts as `Terms`.
- Route → this extends self-discipline, so it goes into `7-mastery/02-productivity.md`; no new file.
- Index → no title/scope change, so indexes stay as-is. (If scope had widened, update both indexes.)

## Repository layout

Content lives under numbered section folders, each one ontological layer or applied domain:

| Folder         | Domain                                                                         | File numbers      |
|----------------|--------------------------------------------------------------------------------|-------------------|
| `0-math`       | Formal foundations: `Azon`, `Set`, `Composition`, `Graph`, `Algebras`, `Sequence`, `Space`. | `00`–`06`         |
| `1-nature`     | Dynamics: `Process`, `System`, `Agency`.                                       | `06`, `07`, `09`  |
| `3-intellect`  | Knowing: `Reasoning`, `Computation`, `Intellect`, `Science`, `Methodology`, `Psyche`. | `08`–`14`, `22`   |
| `4-human`      | The human: body and joy.                                                       | `21`, `23`        |
| `5-socium`     | The collective: society, ecology, politics, the manifesto.                     | `30`, `31`, `37`, `98` |
| `7-mastery`    | The disciplines: vitality, productivity, mindset, defense, security, learning, biases. | own domain, `01`– |
| `9-engx`       | Applied software engineering.                                                  | own domain, `01`– |

The leading digit on a folder (`0-`, `1-`, `3-`, `4-`, `5-`, `7-`, `9-`) places it within
the ontology's ordering; gaps (`2-`, `6-`, `8-`) are intentional reservations for future
layers. Don't renumber a folder casually — it cascades through every banner image path and
every cross-reference.

Special top-level files, prefixed with `_` or named `welcome`:

- `welcome.md` — the framework's entry page.
- `_quotes.md` — a curated, numbered list of quotations.
- `_translations.md` — canonical English Term → Belarusian-rooted equivalent. Reverse map
  only; English stays canonical in content.
- `INDEX.md` — master content index (all sections and files).
- `<section>/index.md` — per-section index.

## Routing: where does material go?

1. Identify the layer the material belongs to (formal, dynamic, human, collective,
   mastery/discipline, engineering) and pick that folder.
2. Within the folder, find the file whose intro line already covers the topic. If one
   does, embed there.
3. Only if no file fits, create a new one — and update `_translations.md` (if it coins
   canonical Terms), `INDEX.md`, and the section `index.md`.

## Naming

Content files are `NN-topic.md`, lowercase hyphenated slug, `NN` a two-digit ordering
number. The ontology folders (`0-math`, `1-nature`, `3-intellect`, `4-human`, `5-socium`)
share **one global file-number sequence** that tracks the ontological progression
(`00`→`98`, with `98` reserved as a capstone — the manifesto). Numbers do not strictly
partition by folder; they roughly cluster by layer. `7-mastery` and `9-engx` are
applied-domain folders, each an **independent number space** restarting at `01`.

When adding a file, take the next free number in that folder's existing range. Do not
renumber existing files just to keep the sequence dense.

## Title, banner, intro

Every content file opens with a single H1 (a few legacy files use H2) title, then a banner
image mirroring the title, then a self-contained intro line:

```markdown
# Dynamic Processes

![Dynamic Processes](/images/1-nature/06-process.svg)

<intro sentence — reused verbatim as the file's description in the indexes>
```

The image path is always `/images/<folder>/<filename>.svg` and the alt text equals the
title. Assume the matching SVG will exist; do not invent a different path. Index files
follow the same banner convention (`/images/<folder>/index.svg`).

## Terminology and formatting

- **Canonical Terms are capitalized and backticked**: `Azon`, `Set`, `Agent`, `Flow`.
  Cross-reference related Terms with relative links, e.g. `[05-space](05-space.md)`.
- **Definitions go in tables** with columns `Term | Definition | Formula | Notes`; keep
  formulas in backticks. Follow a table with a `**Notes:**` list when commentary helps.
- **Formal statements** (axioms, laws) use the same tabular style; see
  `0-math/00-azon.md` as the reference example.
- **Prose** is plain and direct — basic terminology, short sentences, no filler.
  Declarative, defined, unhurried.
- When a new canonical Term is coined, add it to `_translations.md` under the matching
  section heading. Newly-proposed Belarusian forms get a trailing asterisk (`Razvoda*`).

## Syncing `INDEX.md`

To bring `INDEX.md` back in sync after a stretch of content edits, diff against the last
recorded sync baseline instead of re-reading the whole tree:

```bash
git diff <baseline-commit>..HEAD -- docs/
```

This surfaces exactly which `docs/*.md` files were **added, renamed, removed, or
retitled** since the baseline. For each change, update the matching `INDEX.md` entry
(link path, title, and the intro-line description). Then record the new baseline:

- **Baseline commit:** `9d497b9` ("add idealism", 2026-06-19) — last full sync.
- After each sync, replace the commit above with the current `HEAD`.

Notes:

- INDEX entries are grouped by ontological-layer section; the description text mirrors each
  file's intro line (see Title, banner, intro).
- Only sections that actually have a `<section>/index.md` should carry a
  "See section index" link — currently just `7-mastery`.

## Editing checklist

1. Source translated to English and reduced to basic terminology.
2. Content routed to the correct file (or a correctly named new file created).
3. Title + banner image + intro line conform to the convention above.
4. New Terms backticked in text and, if canonical, added to `_translations.md`.
5. `INDEX.md` and the section `index.md` updated to match.
6. Relative links checked — they must resolve to real files.
