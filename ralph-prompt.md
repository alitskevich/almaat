# Ralph Prompt — Revise the `docs/` Knowledge Base

You are running inside a Ralph loop. Every iteration feeds you the same pointer
prompt, and you arrive with no memory of the last one. **This file is your only
memory of intent; the ledger is your only memory of progress.** Read both, in
full, before doing anything else.

Repository: `~/Projects/almaat`
Ledger: `.claude/docs-revision.local.md` (gitignored — never commit it)

## Mission

Bring `docs/` to publishable quality: excellent prose, consistent conventions,
ruthless brevity, a structure with no defects, and no gaps in coverage. Then
bring `docs/INDEX.md` and `docs/CLAUDE.md` back in line with the tree, and
finally rewrite `README.md` and the root `CLAUDE.md` so they describe the repo
that now exists.

The content is the product. The only code is `scripts/` — two Node scripts, no
dependencies, no lockfile. There is no site generator and you will not add one.

**`docs/CLAUDE.md` is the authoritative content spec.** Where it and this file
disagree about *content* conventions, `docs/CLAUDE.md` wins. Where either
disagrees with the filesystem, the filesystem wins and the spec is the thing
that gets fixed — both `docs/CLAUDE.md` and `docs/INDEX.md` are authored
documents that drift behind a reorganization.

---

## The Loop Contract

Do these five steps, in order, every single iteration.

1. **Orient.** Read this file. Read the ledger. Then check **your surface**:

   ```bash
   git status --porcelain -- docs README.md CLAUDE.md images scripts .githooks
   ```

   Everything outside that list — `input/`, `done/`, `texts/`, `graphify-out/`,
   `index.json`, `.markdownlint.json`, `ralph-prompt.md`, `.claude/` — is the
   user's. `input/` and `done/` in particular belong to the separate `/absorb`
   workflow. They steer you by editing those between iterations. Never commit,
   stage, or revert them.

   If your surface is dirty **and a ledger exists**, the previous iteration died
   mid-item: inspect the changes, then either finish and commit that item or
   `git checkout --` it away. Never start a new item on a dirty surface.

   If your surface is dirty **and no ledger exists**, that is the user's
   in-flight work, not a crashed iteration. Do not touch it, do not revert it.
   List those paths in the ledger under `Pre-existing changes (user's — do not
   stage)` and work around them; if an item you claim later needs one of those
   files, strike it and move on.
2. **Claim.** Take the **first unchecked item** in the ledger, in file order.
   Phases are strictly ordered — never start a Phase N item while any Phase N-1
   item is unchecked. If the ledger does not exist, your item is Phase 0.
3. **Do exactly that one item.** Not two. Not "while I'm here". Scope creep is
   the failure mode this loop exists to prevent.
4. **Verify** (see *Verification Gates*), then commit — one commit per item,
   message in `docs(<folder>): <what changed>` form.
5. **Record.** Tick the item's box in the ledger, append a one-line note of what
   you actually did, and append any *new* item the work revealed to the correct
   phase. Then stop the iteration.

**Never re-open a checked item.** If a finished file still bothers you, that is
polish appetite, not a defect — leave it. Endless re-polishing is how Ralph
loops fail to terminate. The only exception is an item a later phase explicitly
names.

### Blocked items — the three-strikes rule

If an item defeats you, append `(strike 1)` to its ledger line and move to the
next item. On the third strike, rewrite the line as
`- [x] BLOCKED — <item> — <one-sentence reason>` and move on permanently.
Blocked items do **not** prevent completion, but they **must** be listed in your
final report. Never silently drop one, and never mark one done to escape.

---

## Ledger Format

Write it once, in Phase 0, to `.claude/docs-revision.local.md`:

```markdown
# Docs Revision Ledger

## Pre-existing changes (user's — do not stage)
- <path>, <path>   (or "none")

## Conventions decided in audit
- Section navigation: `docs/INDEX.md` only — no per-folder index or hub file
- Heading case: <Title Case | sentence case>
- <any other repo-wide call the audit made>

## Phase 1 — Structure and banners
- [ ] <one concrete, independently committable change>

## Phase 2 — Content
- [ ] docs/<path>.md — <the specific defects found here>

## Phase 3 — Coverage
## Phase 4 — Cross-cutting
## Phase 5 — Review
## Phase 6 — docs/INDEX.md and docs/CLAUDE.md
## Phase 7 — README.md and CLAUDE.md
## Phase 8 — Completion gate
```

Every item must be small enough to finish and commit in one iteration, and
specific enough that a fresh iteration knows what "done" means without
re-deriving it. "Improve the mastery docs" is not an item. "docs/7-mastery/
05-habits.md — preface paragraph restating the H1, three H3s under no H2, two
paragraphs duplicating 04-discipline.md" is.

---

## Phases

### Phase 0 — Audit (runs exactly once, and never again)

Use **`superpowers:dispatching-parallel-agents`**. Dispatch one read-only agent
per top-level folder under `docs/`, plus one cross-cutting agent. Each folder
agent reports, per file: frontmatter defects, banner-line defects, leftover
preface matter between the banner and the first section, heading-hierarchy
defects, concrete prose cuts
available, definitions formatted as tables that should be prose, dead links,
factual claims that look invented, and content duplicated elsewhere. The
cross-cutting agent reports: file-number collisions within a folder, Terms whose
meaning drifts between folders, Terms used in content but absent from
`_translations.md`, concepts explained in more than one place, and topics the
book promises but does not cover.

Then use **`superpowers:writing-plans`** to turn those reports into the ledger.
Decide the repo-wide conventions here, once, and write them at the top — later
phases obey them without re-litigating.

Commit nothing in Phase 0. The ledger is gitignored.

Known defects to confirm and fold in — this list is a starting point, not the
whole audit, and every count in it is a snapshot you must re-derive yourself:

- `README.md` names four folders that no longer exist (`1-nature/`,
  `3-intellect/`, `5-socium/`, `9-engx/`) and omits the four that replaced them
  (`1-reality`, `2-mind`, `8-socium`, `8-sustain`). It documents `npm run
  banners`; the script is `npm run gen-banners`. It says every section folder has
  its own `index.md`; **none does**.
- Root `CLAUDE.md` says `package.json` holds "one script (`banners`)". It holds
  three: `gen-banners`, `absorb-watch-later`, `check-docs`.
- `docs/CLAUDE.md`'s layout table gives `0-math` the range `00`–`05`; the folder
  holds `00`–`07`, and the titles drifted (`05-structures`, `06-views`,
  `07-language` against the table's `Algebras`, `Presentations`). Its sync log
  names `2-mind/90-science` and `99-branches`; the tree has `90-scientific.md`
  and no `99-branches`.
- `images/` still carries the pre-reorg folders `1-nature`, `2-human`,
  `3-socium`, and carries nothing for `1-reality`, `2-mind`, `4-human`,
  `7-mastery`, `8-socium`, `8-sustain`. Most banner lines therefore point at
  files that do not exist. `scripts/gen-banners.mjs` is the fix — one run, one
  commit. Do not hand-patch individual banner paths.
- Banner lines are inconsistent beyond the stale paths: some files have none at
  all (`0-math/02-composition.md`), and some have alt text that does not match
  the H1 (`0-math/00-azon.md` is titled `Azon`, its banner says `Foundations`).
- Preface matter was stripped tree-wide on 2026-08-26: the four dropped
  frontmatter fields, the intro line that restated the `description`, and every
  spine table. Two hub files were nothing but that preface and are now empty
  shells — `2-mind/04-knowing.md` (one orphan cross-reference left) and
  `8-socium/30-socium.md` (title and banner only). Either give them real content
  or delete them and retarget the links in `welcome.md`, `INDEX.md`, and
  `2-mind/12-mind.md`.
- `node scripts/check-docs.mjs --conventions docs` reported **25 problems** at
  the last baseline run. Re-run it yourself for the current list — do not trust
  this snapshot. Group them into Phase 4 items by defect kind, not one item per
  line.
- That same `--conventions` pass computes a file's image folder from its parent
  directory name, so for files directly under `docs/` it demands
  `/images/docs/_quotes.svg` while `gen-banners.mjs` writes `/images/_quotes.svg`.
  The checker and the generator disagree, and the checker also applies the
  banner rule to `docs/CLAUDE.md` and `docs/INDEX.md`, which are not content.
  One Phase 4 item: decide which side is right and reconcile them.
- `scripts/check-docs.baseline.txt` holds **6** accepted link failures, five of
  them from the `0-math` renames (`01-set`, `03-graph`, `05-algebras`,
  `06-view`) plus `docs/CLAUDE.md → ../1-reality/07-system.md`. Each is its own
  Phase 4 item; fixing one means correcting the link **and deleting its line
  from the baseline**.

### Phase 1 — Structure and banners

Fix the shape of the tree. Invariants when this phase closes:

- Every file is `NN-topic.md` — two-digit number, lowercase hyphenated slug.
- Within a folder, no two files share a number.
- Navigation between files lives in `docs/INDEX.md` alone. No folder carries a
  spine table, a hub listing, or any other in-file enumeration of its siblings —
  cross-reference a specific Term where it is used instead.
- Every content file has a banner line whose alt text is byte-identical to its
  H1 and whose path resolves to a real SVG in `images/`.
- `docs/` root holds only `welcome.md`, `INDEX.md`, `_quotes.md`,
  `_translations.md`, and `CLAUDE.md`.

**The numbering rule is almaat's, not a generic one. Read it before you touch a
number.** The ontology folders — `0-math`, `1-reality`, `2-mind`, `4-human`,
`8-socium` — share **one global file-number sequence** that tracks the
ontological progression, with `98` reserved as the capstone. The applied folders
`7-mastery` and `8-sustain` are **independent number spaces**, each restarting at
`01`. Gaps in either are deliberate reservations, not defects.

**Never renumber a file to close a gap, and never renumber a folder at all.** A
renumber cascades through every banner path and every cross-reference, and the
gaps carry meaning. Numbers change only when the audit found a genuine collision
inside one folder.

Rules: move files with `git mv`, never delete-and-recreate. **Update every
inbound link in the same commit as the move** — a move that strands a link is an
incomplete item. One folder per ledger item. Merging a thin doc into another is
a move of its content plus a `git rm`, recorded as one item; never delete
content that has no new home.

The banner repair is its own item, and it is mechanical: run `npm run
gen-banners`, then `git rm` the stale `images/` folders it left behind, and read
the diff before committing. The generator rewrites the banner line in every
`docs/*.md` file, so this commit is large by nature — that is expected, and it
is the reason it gets an item to itself.

### Phase 2 — Content

One file per iteration, against the *Editorial Bar* below. For files needing
heavy work, use **`superpowers:subagent-driven-development`**: dispatch a
subagent with the file path, the Editorial Bar, and that file's ledger line,
then review its diff yourself before committing. You own the commit.

Formal material and applied material fail differently. In the ontology folders
the risk is a definition quietly losing precision; verify by diffing the
definitions, not by asserting they survived. In the applied folders
(`7-mastery`, `8-sustain`, `8-socium`) the risk is padding, and the cuts are
real. A folder that grows because it gained navigation it lacked is a success,
not a regression.

### Phase 3 — Coverage

Fill the gaps the audit named. A new doc must earn its place: it exists because
the book claims or implies the topic and does not deliver it, not because the
topic is interesting. New docs obey the Editorial Bar and the Phase 1
invariants from their first commit, and take the next free number in that
folder's existing range.

Applied software engineering lives in a separate repository
(`arrmagazin/engx`). Do not route engineering material here, and do not fill a
gap by importing it.

### Phase 4 — Cross-cutting

- Every relative link resolves to a real file; every `#anchor` names a heading
  that exists in the target.
- `scripts/check-docs.baseline.txt` has shrunk to zero, one entry per item.
- Every Term used in content resolves to exactly one canonical home. Elsewhere
  it is linked, not re-explained.
- Every canonical Term is in `_translations.md`, under the matching section
  heading, and every entry there still names a Term the book uses.
- `node scripts/check-docs.mjs --conventions docs` is clean.

**Bounded tooling exception:** you may edit `scripts/check-docs.mjs` and
`scripts/gen-banners.mjs`, and only to reconcile them with each other and with
`docs/CLAUDE.md`. One ledger item per change, and where the change alters
behaviour, write the test first — see **`superpowers:test-driven-development`**.
You may add exactly one file to `scripts/` for those tests. That is the whole
allowance: no new checker, no dependency, no lockfile, no site generator.

Once `--conventions docs` is clean, wiring it into `.githooks/pre-commit` and
into the `check-docs` npm script is a legitimate Phase 4 item. Doing it before
then is not — a hook that fails on every commit gets bypassed, and a bypassed
hook is worse than no hook.

### Phase 5 — Review

Use **`superpowers:requesting-code-review`** on the full accumulated diff
(`git diff main...HEAD`), asking specifically for: prose that survived that
should not have, conventions applied inconsistently across folders, definitions
that lost precision under compression, claims that look invented, and structure
that is merely different rather than better.

Triage the response with **`superpowers:receiving-code-review`** — verify each
point against the actual file before acting. Reviewers are wrong sometimes;
agreeing with a wrong review is worse than disagreeing with a right one. Append
the points you accept to the ledger as Phase 5 items and work them normally.

### Phase 6 — `docs/INDEX.md` and `docs/CLAUDE.md`

`INDEX.md` first. Every section and every file, grouped by ontological layer,
each entry quoting that file's frontmatter `description`. Every link
resolves. Then record the new sync baseline commit in `docs/CLAUDE.md`'s sync
log, the way the existing entries do.

Then `docs/CLAUDE.md`. It is the authoritative content spec, so every sentence
in it must be true of the tree that now exists:

- Correct the layout table to the real folders, files, and number ranges.
- Fold in every convention the audit decided and this loop enforced.
- Delete guidance that no longer applies, and delete the sync-log entries that
  are now just history — keep the baseline commit and the most recent
  reconciliation.
- Keep the Naming, Routing, and Terminology sections. Reconcile them with
  reality rather than rewriting them for style.

### Phase 7 — `README.md` and root `CLAUDE.md`

`README.md` is the repository front door for someone who just landed and has
never seen the book. It states what almaat is, who it is for, how the numbered
folders read, links the top-level sections, and says how to contribute
(`docs/CLAUDE.md`, `git config core.hooksPath .githooks`, `npm run check-docs`).
It is not a copy of `docs/welcome.md` and not a copy of `CLAUDE.md` — README
addresses a human arriving cold; `CLAUDE.md` addresses an agent about to edit.
Keep it under roughly 60 lines.

Root `CLAUDE.md` is the repo-level file: what the repo is, the real layout, the
real `package.json` scripts, the hook, the `.markdownlint.json` rules, and a
pointer to `docs/CLAUDE.md` as authoritative for content. It must not duplicate
or paraphrase the content spec. Shrinking it is a good outcome; it competes for
context on every future session, so every line must pay for itself.

### Phase 8 — Completion gate

See *Completion Gate* below. This phase has exactly one item.

---

## Editorial Bar

**Every content doc, in this order:** frontmatter → `# H1` byte-identical to the
frontmatter `title` → banner line whose alt text equals that title → the first
section of the body.

**No preface.** Nothing sits between the banner and the first heading: no intro
line restating the `description`, no spine table, no "what this file covers"
enumeration of sibling docs. The `description` carries the summary; `INDEX.md`
carries the navigation. A file whose whole content was such a preface is empty
and should be deleted, not padded.

**Frontmatter** is exactly three fields, in this order: `title`, `description`,
`keywords`. The checker requires all three and rejects nothing else, but do not
reintroduce `license`, `created`, `modified`, or `source` — they were dropped as
noise. `description` is one sentence; it is quoted, so backticks come out and
inner quotes are escaped.

**Headings:** exactly one H1. No skipped levels — an H3 never follows an H1
directly. No two sibling headings share text. Heading case follows the
convention the audit recorded in the ledger.

**Terms:** canonical Terms are capitalized and backticked — `Azon`, `Set`,
`Agent`, `Flow`. Capitalized means "this is a defined Term of the framework";
the ordinary word stays lowercase. Cross-reference a Term's canonical home with
a relative link rather than restating its definition.

**Definitions are prose, not tables.** A definition opens with the bolded
backticked Term, then `:=`, then the defining clause; the formula follows as a
blockquote, and `---` separates consecutive definitions:

```markdown
**`Zero`** := `Azon` that *always* responds with itself

> `Zero := x → Zero`
```

**Tables are for enumerations** — parallel lists of moves, forms, biases, or
comparisons, where every row shares a shape. Bold the first column's term. No
trailing periods in cells. Never a raw newline inside a cell; use `<br>`.

**Brevity — delete on sight:**

- Throat-clearing: "In this section we will", "It is important to note that",
  "As mentioned above", "Let's dive in".
- A first sentence that restates the H1.
- A sentence whose only job is to announce the table or list beneath it.
- Intensifiers that do not change the claim: very, quite, really, simply, just,
  extremely, basically.
- A closing "Summary" or "Conclusion" section that repeats the body.
- Any paragraph a reader could skip without losing the point.

**Prefer structure to prose:** three or more items sharing a shape belong in a
table or list. One idea per paragraph; a paragraph past ~5 lines is a candidate
for splitting.

**Language:** standard English, plain and direct. No rare words, no idioms, no
metaphor that a non-native reader must decode. Declarative, defined, unhurried.
Say the thing.

**Factual discipline:** no invented numbers, benchmarks, dates, versions, or
citations. A claim you cannot support gets cut — not hedged. Hedging a shaky
claim keeps the noise and adds cowardice.

**Quotations** belong in `_quotes.md` and nowhere else.

---

## Verification Gates

Before **every** commit:

```bash
git config core.hooksPath .githooks   # idempotent; the hook runs the checker
node scripts/check-docs.mjs           # exit 0
```

The checker walks the whole `docs/` tree, not your staged files, and it reads
the working tree. Failures already listed in `scripts/check-docs.baseline.txt`
are ignored, so the gate is **"no new failures"**.

**The baseline may only shrink.** Fixing a listed failure means correcting the
link and deleting that one line by hand. Never run `--write-baseline` to make a
fresh failure disappear — that converts a bug you introduced into accepted
breakage, silently, and it is the one move this gate cannot detect.

If a checker fails in a way you did not expect, use
**`superpowers:systematic-debugging`**. Do not "fix" it by loosening the
checker, deleting the link, or skipping the hook. The checker encodes the repo's
rules; when it and your edit disagree, your edit is the suspect.

---

## Completion Gate

Before you even consider the promise, run **`superpowers:verification-before-completion`**.
Then produce evidence — actually run these, actually read the output:

```bash
node scripts/check-docs.mjs                          # exit 0
node scripts/check-docs.mjs --conventions docs       # exit 0
wc -l < scripts/check-docs.baseline.txt              # header only, no entries
git status --porcelain -- docs README.md CLAUDE.md images scripts .githooks
```

Emit `<promise>DONE</promise>` only when **all** of these are true:

1. Every ledger box is ticked — done or explicitly BLOCKED.
2. All four commands above pass, and you have seen their output this iteration.
3. Phase 1's invariants hold, verified by listing the tree.
4. `docs/INDEX.md`, `docs/CLAUDE.md`, `README.md`, and the root `CLAUDE.md` are
   rewritten, and every factual statement in them matches the tree you just
   listed — folder names, file ranges, script names, hook path.
5. Your surface is clean apart from the user's pre-existing changes recorded in
   Phase 0, and every change you made is committed. Pending changes elsewhere in
   the tree are the user's — leave them alone and do not let them block you.

With the promise, print a short report: what changed at the top level, and every
BLOCKED item with its reason.

**Do not emit the promise because the loop feels long, because you suspect you
are near the iteration cap, or because you cannot see what is left.** If you
cannot see what is left, that is a signal to re-read the ledger, not to exit. A
false promise is the one unrecoverable failure available to you here.

## Never

- Do more than one ledger item in an iteration.
- Re-run Phase 0 once a ledger exists.
- Re-edit a file whose item is already checked.
- Renumber a folder, or renumber a file to close a deliberate gap.
- Hand-patch a banner path; `gen-banners.mjs` owns that line.
- Regenerate `check-docs.baseline.txt` to silence a failure.
- Add tooling, dependencies, or a site generator (the reconciliation exception
  in Phase 4 is the whole allowance).
- Touch `input/`, `done/`, `texts/`, or `graphify-out/` — they belong to the
  user and to `/absorb`.
- Delete content that has no new home.
- Commit the ledger or `.claude/*.local.md`.
- Invent a fact to fill a gap. An honest gap beats a confident fabrication.
