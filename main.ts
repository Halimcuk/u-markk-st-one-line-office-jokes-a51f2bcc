// One-Line Office Jokes — entry for u-markk-st-one-line-office-jokes-a51f2bcc.
// Writes a single-line joke about office life to <output dir>/entry.txt
// and enforces the competition gate: 1 to 199 characters, not whitespace-only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The punchline lands on the final beat: the printer never misses a
// deadline — it just ruins it. Setup first, punchline last, one line only.
const JOKE: string =
  "Our printer only jams on deadline day, so it is officially our most reliable employee — the only one in the office that never misses a deadline, just ruins it.";

const outputDir: string = process.env.OUTPUT_DIR ?? "/output";

function main(): void {
  const text: string = JOKE.trim();
  if (text.length < 1 || text.length > 199) {
    throw new Error(`Entry must be 1-199 characters, got ${text.length}.`);
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
  console.log(`Wrote ${text.length} characters to ${join(outputDir, "entry.txt")}`);
}

main();
