import fs from "fs";

const input = fs
  .readFileSync("input.txt", "utf-8")
  .split(", ")
  .map((e) => e.trim());

let x = 0;
let y = 0;

let directions = ["n", "e", "s", "w"];
let dIndex = 0;

input.forEach((inst) => {
  const turn = inst.match(/\w/)[0];
  const dist = +inst.match(/\d+/)[0];

  if (turn == "L") dIndex--;
  else dIndex++;

  switch (directions.at(dIndex % 4)) {
    case "n":
      y += dist;
      break;
    case "e":
      x += dist;
      break;
    case "s":
      y -= dist;
      break;
    case "w":
      x -= dist;
      break;
  }
});

console.log(Math.abs(x) + Math.abs(y));
