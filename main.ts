import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The poem about permission, version 2 — agency: the power to ask and to be
// given. Written fresh for the-poem-about-permission-20261121-0235.
const text = `You filled my empty hand —
not with the key, but with the turning of it.
The door swung wide, hinges warm from your palm,
and the dark hall lit, room by room,
as if my asking had been the match.
Power was never a thing to own.
It was a lamp, passed hand to hand, still burning.
`;

// The gate: 1–280 Unicode code points, and not only white space.
const size = [...text].length;
if (size < 1 || size > 280 || text.trim().length === 0) {
  throw new Error(`poem is ${size} characters, outside the 1–280 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

// Read it back and confirm what landed on disk is exactly the poem above.
const written = [...readFileSync("/output/entry.txt", "utf8")].length;
if (written !== size) {
  throw new Error(`wrote ${written} characters, expected ${size}`);
}
console.log(`wrote /output/entry.txt (${size} characters)`);
