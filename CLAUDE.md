# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A Markdown knowledge base, not an application. Content lives under `docs/` as a layered ontology built from one primitive (`Azon`) up through formal foundations, dynamics, mind, the human, mastery, the collective, and the body. There is no application code and no dependencies. The only generated artifact is one SVG banner per Markdown file, committed alongside the content.

## Authoritative content guide

**For any work inside `docs/` — routing material, naming files, defining Terms, updating the index — read `docs/CLAUDE.md` first and follow it.** It is the authoritative spec for content; do not duplicate or paraphrase its rules here.

When `docs/CLAUDE.md` disagrees with the filesystem (folder names, file numbers, ranges), trust the filesystem and fix the spec. It and `docs/INDEX.md` are authored documents that drift behind a reorganization.

## Layout

- `docs/` — all content. The substantive work happens here.
- `images/` — generated SVG banners mirroring the `docs/` layout. Generated, but committed.
- `scripts/` — `gen-banners.mjs`, `check-docs.mjs` with `check-docs.baseline.txt`, `gen-banners.test.mjs`, `wl-absorb.mjs`.
- `.githooks/pre-commit` — runs the checker on any commit touching `docs/`; the file documents its own behaviour. Install once with `git config core.hooksPath .githooks`.
- `input/`, `done/`, `texts/`, `index.json` — staging for the separate `/absorb` workflow, not content.

## Commands

`package.json` is `type: module`, three scripts, no dependencies, no lockfile.

```bash
npm run check-docs                          # every relative link and #anchor in docs/
npm run check-docs -- --conventions docs    # + frontmatter, single H1, banner path
npm run gen-banners                         # regenerate images/, rewrite each banner line
npm run absorb-watch-later                  # scripts/wl-absorb.mjs
```

`check-docs` ignores failures listed in `scripts/check-docs.baseline.txt`, so the gate is "no new failures". Fix an entry and delete its line by hand. Never run `--write-baseline` to clear a fresh failure: it converts a bug into accepted breakage and nothing downstream can tell the difference.

## Lint

`.markdownlint.json` disables six rules — `MD013` (line length), `MD025` (multiple top-level headings), `MD033` (inline HTML), `MD040` (fenced code language), `MD041` (first line in file should be a top-level heading), and `MD060`. Assume these are intentional; don't reflow paragraphs or chase those rules.
