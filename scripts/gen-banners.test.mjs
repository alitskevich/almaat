// Unit tests for the pure helpers in gen-banners.mjs.
// Run: node --test scripts/
//
// These cover the two ways the generator used to damage a file: it stripped
// banner-shaped lines and searched for the page title without regard for fenced
// code blocks, and it walked every .md under docs/ including the project spec.

import assert from "node:assert/strict";
import { test } from "node:test";

import { findTitleIndex, isGenerated, stripBannerLines } from "./gen-banners.mjs";

test("stripBannerLines removes a banner line in ordinary prose", () => {
  const lines = ["# Azon", "", "![Foundations](/images/0-math/00-azon.svg)", "", "Body."];

  assert.deepEqual(stripBannerLines(lines), ["# Azon", "", "", "Body."]);
});

test("stripBannerLines keeps a banner line inside a fenced code block", () => {
  const lines = [
    "# ALMAAT — Project Guide",
    "",
    "```markdown",
    "# Dynamic Processes",
    "",
    "![Dynamic Processes](/images/1-reality/02-process.svg)",
    "```",
  ];

  assert.deepEqual(stripBannerLines(lines), lines);
});

test("stripBannerLines resumes stripping after the fence closes", () => {
  const lines = [
    "```markdown",
    "![Example](/images/example.svg)",
    "```",
    "![Real Banner](/images/welcome.svg)",
  ];

  assert.deepEqual(stripBannerLines(lines), ["```markdown", "![Example](/images/example.svg)", "```"]);
});

test("findTitleIndex returns the first heading outside a fenced code block", () => {
  const lines = ["```markdown", "# Example Heading", "```", "", "# Real Title"];

  assert.equal(findTitleIndex(lines), 4);
});

test("findTitleIndex returns -1 when a file has no heading", () => {
  assert.equal(findTitleIndex(["Just prose.", ""]), -1);
});

test("isGenerated excludes the project spec and includes content files", () => {
  assert.equal(isGenerated("CLAUDE.md"), false);
  assert.equal(isGenerated("INDEX.md"), true);
  assert.equal(isGenerated("welcome.md"), true);
  assert.equal(isGenerated("0-math/00-azon.md"), true);
});
