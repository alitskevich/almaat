---
description: Fetch transcripts for unchecked URLs in input/youtube.md → input/yt-<id>.md, mark each done
argument-hint: "[extra flags for scripts/yt-fetch.mjs, e.g. --lang nl --count 2]"
allowed-tools: Bash(node:*), Read
---

# yt-fetch

Worker 1 of the YouTube pipeline (worker 2 is `/yt-absorb`). All logic lives in the script;
do not edit `input/youtube.md` or write transcript files yourself.

## Procedure

1. Run `node scripts/yt-fetch.mjs $ARGUMENTS` and relay its output.
2. Report one line per video: written (`input/yt-<id>-<title>.md`), skipped (`[-]`, no captions), or failed.
   "No unchecked items" → report "idle" and stop.

## Semantics (handled by the script)

- Success → `- [x]`; permanent skip (no captions / not a YouTube URL) → `- [-]` with a note.
- Transient failures stay `- [ ]` and are retried on the next run — do not "fix" them by hand.
