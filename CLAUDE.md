# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A Markdown knowledge base, not an application. Content lives under `docs/` as a layered ontology that builds from one primitive (`Azon`) up through formal foundations, dynamics, intellect, the human, society, mastery, and applied software engineering. The only build artifact is one SVG banner per Markdown file.

## Authoritative content guide

**For any work inside `docs/` — ingesting source material, routing it to the right file, naming new files, formatting Terms, updating indexes — read `docs/CLAUDE.md` first and follow it verbatim.** It is the authoritative spec for content. Do not duplicate or paraphrase its rules here.

When the spec in `docs/CLAUDE.md` ever disagrees with the filesystem (folder names, file numbers), trust the filesystem and update the spec — `docs/CLAUDE.md` and `docs/INDEX.md` are both authored documents that can drift behind a reorganization.

## Repository layout (root)

- `docs/` — all content. The substantive work happens here. See `docs/CLAUDE.md`.
- `images/` — generated SVG banners, mirroring `docs/` layout. Generated, but committed.
- `scripts/gen-banners.mjs` — the only build step.
- `package.json` — `type: module`, one script (`banners`), no dependencies, no lockfile.
- `.markdownlint.json` — disables `MD013` (line length), `MD033` (inline HTML), `MD040` (fenced code language), `MD041` (first-line H1), `MD060`. Assume these are intentional; don't reflow paragraphs or chase those rules.
