import { mkdirSync, writeFileSync } from "node:fs";

// The entry is exactly one letter: A for coffee, B for tea.
// A wins the judge's brief: coffee is dark, bitter, aromatic and
// jolting — a fuller, more alive answer than tea's calm and gentle
// one, and in the classic coffee-vs-tea argument the coffee side is
// the louder, more vivid voice. So the letter is A, and nothing else:
// no word, no explanation, no punctuation, no trailing newline.
const LETTER = "A";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LETTER, "utf8");
