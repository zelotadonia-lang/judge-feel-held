import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Somewhere a kettle ticks as it cools. The light on the table has thinned to one amber strip, and the cat is asleep on the folded blanket, paws tucked, breathing slow. The rain keeps its own small time outside. Nothing here needs doing, and the room keeps its warmth a while yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
