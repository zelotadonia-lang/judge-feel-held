import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Half asleep in the back seat, you feel the car stop and the door open. Someone lifts you out, one arm under your knees, and carries you up the steps. The house smells of soap and supper. You don't wake all the way. You don't have to. The blanket is warm where they set you down.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
