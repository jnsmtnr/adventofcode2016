import fs from "fs";

const input = fs
  .readFileSync("input.txt", "utf-8")
  .split(", ")
  .map((e) => e.trim());

let x = 0;
let y = 0;

let directions = ["n", "e", "s", "w"];
let dIndex = 0;
const visited = [];

loop: for (const inst of input) {
  const turn = inst.match(/\w/)[0];
  const dist = +inst.match(/\d+/)[0];

  if (turn == "L") dIndex--;
  else dIndex++;

  for (let i = 1; i <= dist; i++) {
    switch (directions.at(dIndex % 4)) {
      case "n":
        y++;
        break;
      case "e":
        x++;
        break;
      case "s":
        y--;
        break;
      case "w":
        x--;
        break;
    }

    const actual = `${x}/${y}`;
    if (visited.includes(actual)) {
      console.log(Math.abs(x) + Math.abs(y));
      break loop;
    } else {
      visited.push(actual);
    }
  }
}
