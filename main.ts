// One Sentence for a Traveler from 1800 — at most 200 characters.
//
// The hook: explain the internet with a technology the traveler already
// knows — the telegraph — then break the analogy on purpose. A telegraph
// that never sleeps, that summons pictures, music, strangers and endless
// arguments from a box in your pocket: the familiar frame makes the
// absurd scale land in one read. No jargon, no second sentence, and the
// final image (a box in your pocket) is the thing that would truly
// frighten and delight someone from 1800.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "It is a worldwide telegraph that never sleeps: pictures, music, strangers, and endless arguments, all summoned from a box in your pocket.";

// Gate guard: the entry must be non-blank, 1-200 characters, exactly
// one sentence — the sealed scorer rejects anything else with Valid 0,
// so refuse loudly here instead of writing an invalid entry.
if (LINE.trim().length === 0 || LINE.length > 200 || LINE.includes("\n")) {
  console.error(
    `Gate failed: entry must be 1-200 characters, one line, got ${LINE.length} chars`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
