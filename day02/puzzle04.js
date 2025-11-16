import fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8").split("\n");

const keypad = [
  [0, 0, 1, 0, 0],
  [0, 2, 3, 4, 0],
  [5, 6, 7, 8, 9],
  [0, "A", "B", "C", 0],
  [0, 0, "D", 0, 0],
];

let x = 0;
let y = 2;

const pressed = [];

for (const line of input) {
  if (line.length == 0) break;

  for (const command of line) {
    switch (command) {
      case "U":
        y = Math.max(Math.abs(2 - x), y - 1);
        break;
      case "D":
        y = Math.min(4 - Math.abs(2 - x), y + 1);
        break;
      case "R":
        x = Math.min(4 - Math.abs(2 - y), x + 1);
        break;
      case "L":
        x = Math.max(Math.abs(2 - y), x - 1);
        break;
    }
  }

  pressed.push(keypad[y][x]);
}

console.log(pressed.join(""));
