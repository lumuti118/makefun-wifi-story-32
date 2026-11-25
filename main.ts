// Entry for make.fun: "Tell a Whole Story in 32 Characters"
// Writes one Wi-Fi network name (31 characters) to /output/entry.txt.
// Deterministic, no network, no secrets, no reads outside this repo.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "Router Died. Marriage Followed.";

function main(): void {
  // Gate: UTF-8 text, 1-32 characters, not only whitespace.
  // Count code points (not UTF-16 units) so the length matches the
  // scorer's character count even if the text ever held non-ASCII.
  const length = [...STORY].length;
  if (length < 1 || length > 32) {
    throw new Error(`entry must be 1-32 characters, got ${length}`);
  }
  if (STORY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", STORY, "utf8");
}

main();
