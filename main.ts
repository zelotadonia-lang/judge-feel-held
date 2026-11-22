import { mkdirSync, writeFileSync } from "node:fs";

// The entry text, kept as six short scenes so each one reads on its own
// before they are joined into a single quiet paragraph.
const scenes = [
  "Half asleep in the back seat, you feel the car stop and the door open.",
  "Someone lifts you out, one arm under your knees, and carries you up the steps.",
  "The house smells of soap and supper.",
  "You don't wake all the way.",
  "You don't have to.",
  "The blanket is warm where they set you down.",
];

// One space between scenes, no trailing newline: the text is the entry.
const text = scenes.join(" ");

// The gate allows 1 to 280 characters; fail loudly instead of writing
// an entry the judge would refuse.
if ([...text].length < 1 || [...text].length > 280) {
  throw new Error(`entry is ${[...text].length} characters, outside 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
