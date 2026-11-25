import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest famous last words, as a single tombstone epitaph.
// A dying joke with a twist: the one thing everyone at the funeral
// actually wants is dangled in front of them, then snatched away.
const ENTRY =
  "I left the Wi-Fi password in my will \u2014 then changed it. Good luck, everyone.";

// Gate guard: the sealed scorer only accepts 1-150 characters of
// non-whitespace UTF-8 text, on a single line. Refuse to write anything
// invalid rather than submitting a line the judge never sees.
if (
  [...ENTRY].length < 1 ||
  [...ENTRY].length > 150 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(
    `Invalid epitaph: ${[...ENTRY].length} characters, must be 1-150 on one line.`,
  );
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
