import fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8").split("\n");

const keypad = ["123", "456", "789"];

let x = 1;
let y = 1;

const pressed = [];

for (const line of input) {
  if (line.length == 0) break;

  for (const command of line) {
    switch (command) {
      case "U":
        y = Math.max(0, y - 1);
        break;
      case "D":
        y = Math.min(2, y + 1);
        break;
      case "R":
        x = Math.min(2, x + 1);
        break;
      case "L":
        x = Math.max(0, x - 1);
        break;
    }
  }

  pressed.push(keypad[y][x]);
}

console.log(pressed.join(""));
