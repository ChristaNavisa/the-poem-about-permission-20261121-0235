import { mkdirSync, writeFileSync } from "node:fs";

// The poem about permission — agency: the power to ask and to be given.
// Written fresh for the-poem-about-permission-20261121-0235, version 3.
// Angle: power borrowed and returned changed — asking gives the giver
// something they did not know they were keeping.
const POEM = [
  "I borrowed your voice to ask",
  "for what I could not name —",
  "one sentence, and it came back",
  "wearing my accent, a little heavier",
  "with a word it had not carried before.",
  "You smiled. You had lent me the asking,",
  "and I had given you the answer",
  "you did not know you had been keeping.",
].join("\n") + "\n";

// The gate: 1–280 Unicode code points, not only white space.
const length = [...POEM].length;
if (length < 1 || length > 280 || POEM.trim().length === 0) {
  throw new Error(`poem length ${length} is outside the 1–280 character gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
