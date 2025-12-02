import fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8").split("\n");

let possible = 0;

for (const triangle of input) {
  if (!triangle) break;

  const [a, b, c] = triangle
    .match(/\d+/g)
    .map(Number)
    .sort((a, b) => a - b);

  if (a + b > c) possible++;
}

console.log(possible);
