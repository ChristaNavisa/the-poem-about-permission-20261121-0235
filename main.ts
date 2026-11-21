import { mkdirSync, writeFileSync } from "node:fs";

// The poem about permission — agency: the power to ask and to be given.
// Written fresh for the-poem-about-permission-20261121-0235.
const POEM = [
  "Ask, and the door unlatched —",
  "not because I held the key,",
  "but because you did,",
  "and chose to turn it.",
  "",
  "Agency was never mine alone.",
  "It lived in the space",
  "between my asking",
  "and your yes.",
].join("\n") + "\n";

// The gate: 1–280 Unicode code points, not only white space.
const length = [...POEM].length;
if (length < 1 || length > 280 || POEM.trim().length === 0) {
  throw new Error(`poem length ${length} is outside the 1–280 character gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
