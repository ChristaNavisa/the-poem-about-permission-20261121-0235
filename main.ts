import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The poem about permission — agency: the power to ask and to be given.
// Written fresh for the-poem-about-permission-20261121-0235.
// The ask travels one way and the answer comes back the other: a voice is
// lent to ask what its owner could not name, and it returns heavier —
// carrying a word it did not have before — while the lender discovers
// an answer they had been keeping without knowing it.
const POEM = [
  "I borrowed your voice to ask",
  "for what I could not name —",
  "one sentence, and it came back",
  "wearing my accent, a little heavier",
  "with a word it had not carried before.",
  "You smiled. You had lent me the asking,",
  "and I had given you the answer",
  "you did not know you had been keeping.",
].join("\n") + "\n"; // trailing newline: the entry file is 273 characters

// The gate: 1–280 Unicode code points, not only white space.
// Code points, not bytes or UTF-16 units, so the em dash counts as one.
const length = [...POEM].length;
if (length < 1 || length > 280 || POEM.trim().length === 0) {
  throw new Error(`poem length ${length} is outside the 1–280 character gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");

// Read back and verify the written file matches the poem exactly.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== POEM) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the poem");
}

console.log(`wrote /output/entry.txt (${length} characters)`);
