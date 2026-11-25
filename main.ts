// The One-Liner Groan-Off — entry program (program/v1, Node 22 stdlib only).
// Writes a single original one-line dad joke to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The sealed scorer requires entry.txt to be UTF-8, 1-140 chars, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My calendar's days are numbered.";

// Guard: the bounty caps the line at 140 characters; refuse to write an
// over-long or blank line rather than shipping an entry the gate rejects.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  console.error(`entry line must be 1-140 chars, got ${LINE.length}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (typeof outDir !== "string" || outDir.trim().length === 0) {
  console.error("MAKEFUN_OUTPUT_DIR must be a non-empty path");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
