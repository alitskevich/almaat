---
title: "ALMAAT — Project Guide"
description: "ALMAAT is a general-purpose framework for cognitive modeling, written as a layered knowledge base in Markdown."
keywords: [almaat]
---

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
- Route → this extends self-discipline, so it goes into `7-mastery/04-discipline.md`; no new file.
- Index → no title/scope change, so indexes stay as-is. (If scope had widened, update both indexes.)

## Repository layout

Content lives under numbered section folders, each one ontological layer or applied domain:

| Folder         | Domain                                                                         | File numbers      |
|----------------|--------------------------------------------------------------------------------|-------------------|
| `0-math`       | Formal foundations: `Azon`, `Composition`, `Set`, `Algebras`, `Graph`, `Numerals`, `Presentations`. | `00`–`05`         |
| `1-reality`    | Dynamics & metaphysics: `Process`, `System`, `Probability`, `Entropy`, `Evolution`, `Limits`, `Being`, transcendence, the given. | `02`, `07`, `10`, `14`–`16`, `22`, `24`, `27` |
| `2-mind`       | Knowing & mind: knowing, `Knowledge`, `Proof`, `Computation`, `Reasoning`, `Teleos`, free will, `Intellect`, `Mind`, the predictive brain, scientific method. | `04`–`13`, `90` |
| `4-human`      | The human: `Human`, `Rajdo` and approaching it, truth & faith, happiness & greatness, `Animal`, the self & death, the `Manifesto`. | `21`, `23`–`26`, `28`, `29`, `98` |
| `7-mastery`    | Mastery and its stages: mindset, vision, discipline, habits, environment, attention, productivity, learning, luck, clear thinking. | own domain, `01`–`11` |
| `8-socium`     | The collective: socium, ecology, culture, influence, identity, trances, conformism, politics. | `30`–`37`         |
| `8-sustain`    | Sustaining the body & self: vitality, recovery, nutrition, energy; security, frame, de-escalation, manipulation, reading, hostility, boundaries, defense. | own domain, `01`–`13` |

The leading digit on a folder (`0-`, `1-`, `2-`, `4-`, `7-`, `8-`) places it within the ontology's
ordering. The digit `8-` is shared by two applied folders (`8-socium`, `8-sustain`); gaps (`3-`,
`5-`, `6-`, `9-`) are reservations for future layers. Don't renumber a folder casually — it cascades
through every banner image path and every cross-reference.

Applied software engineering (formerly `9-engx`) has been extracted into its own repository,
[arrmagazin/engx](https://github.com/arrmagazin/engx). Do not route engineering material here.

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
2. Within the folder, find the file whose frontmatter `description` already covers the
   topic. If one does, embed there.
3. Only if no file fits, create a new one — and update `_translations.md` (if it coins
   canonical Terms), `INDEX.md`, and the section `index.md`.

## Naming

Content files are `NN-topic.md`, lowercase hyphenated slug, `NN` a two-digit ordering
number. The ontology folders (`0-math`, `1-reality`, `2-mind`, `4-human`, `8-socium`)
share **one global file-number sequence** that tracks the ontological progression
(`00`→`99`, with `98` reserved as a capstone — the manifesto). Numbers do not strictly
partition by folder; they roughly cluster by layer. `7-mastery` and `8-sustain` are
applied-domain folders, each an **independent number space** restarting at `01`.

When adding a file, take the next free number in that folder's existing range. Do not
renumber existing files just to keep the sequence dense.

## Frontmatter, title, banner

Frontmatter is exactly three fields, in this order: `title`, `description`, `keywords`.
`description` is one sentence; it is quoted, so backticks come out and inner quotes are
escaped. It is what the indexes quote. Do not reintroduce `license`, `created`,
`modified`, or `source` — they were dropped as noise on 2026-08-26.

Every content file then opens with a single H1 (a few legacy files use H2) title and a
banner image mirroring it, and goes straight into the body:

```markdown
---
title: "Dynamic Processes"
description: "The Process as a controlled Queue of Words: its Circuit, the kinds of Circuit, and the landmarks of a Flow."
keywords: [reality, process, circuit, flow]
---

# Dynamic Processes

![Dynamic Processes](/images/1-reality/02-process.svg)

## Parts of a Process
```

**No preface.** Nothing sits between the banner and the first heading: no intro line
restating the `description`, no spine table, no enumeration of the folder's other files.
Navigation lives in `INDEX.md`; cross-reference a specific Term where it is used.

The image path is always `/images/<folder>/<filename>.svg` and the alt text equals the
title. Assume the matching SVG will exist; do not invent a different path. Index files
follow the same banner convention (`/images/<folder>/index.svg`).

## Terminology and formatting

- **Canonical Terms are capitalized and backticked**: `Azon`, `Set`, `Agent`, `Flow`.
  Cross-reference related Terms with relative links, e.g. `[Systems](1-reality/07-system.md)`.
- **Formal definitions are prose, not tables.** A definition opens with the bolded backticked
  Term, then `:=`, then the defining clause; the formula follows as a blockquote, and `---`
  separates consecutive definitions. See `0-math/00-azon.md`, the reference example:

  ```markdown
  **`Zero`** := `Azon` that *always* responds with itself

  > `Zero := x → Zero`

  *DEF*: response with `Zero` *called* `empty`, otherwise - `valent`.
  ```

  (This rule previously mandated `Term | Definition | Formula | Notes` tables, which no file in
  the ontology layers has ever used — including the reference example it cited. Corrected
  2026-08-16 in favour of what the tree actually does.)
- **Tables are for enumerations**, not definitions: parallel lists of moves, forms, biases, or
  comparisons, where every row shares a shape. The applied folders (`7-mastery`, `8-socium`,
  `8-sustain`) use them heavily and correctly.
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
(link path, title, and the frontmatter `description`). Then record the new baseline:

- **Last full reconciliation:** 2026-08-07 — `INDEX.md` reconciled against the live tree after
  commit `c4dcb67` extracted `9-engx` into its own repository, folded `A-science` into `2-mind`
  (`90-science`, `99-branches`), renamed `1-reality/01-space` → `0-math/05-presentations`, and
  removed `2-mind/09-computation` and `7-mastery/14-methodology`. In the same pass, 75 relative
  links left stale by the earlier `1-nature`/`3-intellect`/`5-socium` reorg were retargeted.
  At that point every INDEX link and every relative `.md` link in `docs/` resolved to a real file.
- **2026-08-15 — `7-mastery` restructured.** The folder's six files became eleven, laid out as the
  `Mindset → Vision → Discipline → Productivity → Growth` spine it had always declared:
  `01-mastery` is now the hub, `04-productivity` was split across `03`–`08`, `06`/`07`/`24` were
  renumbered `09`/`10`/`11`, and the 0-byte `03-mindset` was deleted. `Depression` moved to
  `8-sustain/05-energy.md`; the tribe section moved to `8-socium/33-interpersonal.md`.
  The claim above that every link resolved as of 2026-08-07 no longer held: a later `0-math`/`2-mind`
  rename left 17 dead links, now recorded in `scripts/check-docs.baseline.txt`.
- **2026-08-16 — `1-reality`, `2-mind` and `4-human` restructured.** The ontology layers had the
  opposite defect from the applied folders: dense formal material with almost no navigation
  (`02-process.md` and `21-human.md` had zero headings). Each folder gained a hub with a spine table
  and per-file sections; `1-reality` 3 → 9 files, `2-mind` 6 → 11, `4-human` 4 → 8, all keeping the
  global number sequence. Every Term definition was preserved (verified by diff, not assertion).
  These folders GREW — +12%, +6.5%, +2.9% — because navigation costs words and formal definitions
  have no slack. That is the expected outcome here, not a failure.
- **2026-08-16 — `8-socium` and `8-sustain` restructured** on the same pattern. `8-socium` went 6 → 8
  files, staying in the global `30`–`37` range (`34-identity` and `36-conformism` extracted; `30-socium`
  is now the hub). `8-sustain` went 3 → 13 files in its own `01`–`13` space: the 460-line
  `05-security.md` split across `06`–`13`, the 14-item `01-vitality.md` regrouped by mechanism into
  `02`–`05`, and `01-sustain.md` is the hub. Six of the baselined link failures were fixed in the
  process; 11 remain, all from the `0-math`/`2-mind` rename.
- **Baseline commit:** `c4dcb67` ("up", 2026-08-04) — the commit whose changes the 2026-08-07
  reconciliation absorbed. Diff from here for the next sync.

Notes:

- INDEX entries are grouped by ontological-layer section; the description text mirrors each
  file's frontmatter `description` (see Frontmatter, title, banner).
- `INDEX.md` is the only navigation surface. No section has an `index.md`, and the per-folder
  spine tables were removed on 2026-08-26 — `7-mastery/01-mastery.md`, `8-sustain/01-sustain.md`,
  `2-mind/04-knowing.md` and `8-socium/30-socium.md` no longer list their siblings. The last two
  were nothing but that table and are now empty shells awaiting content or deletion.
- **Run `npm run check-docs` before committing content edits.** It resolves every relative `.md`
  link and every `#anchor` in `docs/`, and `--conventions <dir>` additionally checks the three
  frontmatter fields, the single H1, and the banner path.
  Pre-existing breakage is listed in `scripts/check-docs.baseline.txt`, so the gate is
  "no new failures"; fix an entry and delete its line.
- **Banner paths are stale tree-wide.** `images/` still carries the pre-reorg folder names
  (`1-nature`, `2-human`, `3-socium`) and content files point at paths like
  `/images/4-mastery/02-productivity.svg` that no longer exist. This is a `scripts/gen-banners.mjs`
  job, not an INDEX one — don't hand-patch individual banner paths.

## Editing checklist

1. Source translated to English and reduced to basic terminology.
2. Content routed to the correct file (or a correctly named new file created).
3. Frontmatter + title + banner image conform to the convention above, with no preface
   between the banner and the first heading.
4. New Terms backticked in text and, if canonical, added to `_translations.md`.
5. `INDEX.md` and the section `index.md` updated to match.
6. Relative links checked — they must resolve to real files.
