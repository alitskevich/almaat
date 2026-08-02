# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A Markdown knowledge base, not an application. Content lives under `docs/` as a layered ontology that builds from one primitive (`Azon`) up through formal foundations, dynamics, intellect, the human, society, mastery, and applied software engineering. The only build artifact is one SVG banner per Markdown file.

## Authoritative content guide

**For any work inside `docs/` — ingesting source material, routing it to the right file, naming new files, formatting Terms, updating indexes — read `docs/CLAUDE.md` first and follow it verbatim.** It is the authoritative spec for content. Do not duplicate or paraphrase its rules here.

When the spec in `docs/CLAUDE.md` ever disagrees with the filesystem (folder names, file numbers), trust the filesystem and update the spec — `docs/CLAUDE.md` and `docs/INDEX.md` are both authored documents that can drift behind a reorganization.

## Banner generation

```bash
npm run banners      # walks docs/, regenerates every banner SVG, edits every .md
```

`scripts/gen-banners.mjs` is destructive in two ways and you must understand both before running it on a branch with unstaged work:

1. **It edits Markdown files.** For each `.md` under `docs/`, it strips any existing `![…](/images/…)` line, finds the first heading, and inserts a fresh `![<title>](/images/<rel>.svg)` line right after it. If a file has no heading, the image line is prepended.
2. **It regenerates SVGs deterministically from the file's relative path.** Seed = hash of `0-math/00-azon.md`-style path + title. Renaming a file changes its banner art; the old SVG is left orphaned under `images/` until manually deleted.

Implications:

- `images/` currently has stale folder names (`2-human`, `3-socium`, `5-engx`) from before the renumbering. Running `npm run banners` will create new folders matching the current `docs/` layout but will **not** delete the old ones — clean them up by hand.
- Don't hand-edit the `![…](/images/…)` line in a Markdown file; the next banner run overwrites it.
- The script assumes repo root = parent of `scripts/`. Run it from anywhere; don't move the script.

## Repository layout (root)

- `docs/` — all content. The substantive work happens here. See `docs/CLAUDE.md`.
- `images/` — generated SVG banners, mirroring `docs/` layout. Generated, but committed.
- `scripts/gen-banners.mjs` — the only build step.
- `package.json` — `type: module`, one script (`banners`), no dependencies, no lockfile.
- `.markdownlint.json` — disables `MD013` (line length), `MD033` (inline HTML), `MD040` (fenced code language), `MD041` (first-line H1), `MD060`. Assume these are intentional; don't reflow paragraphs or chase those rules.
