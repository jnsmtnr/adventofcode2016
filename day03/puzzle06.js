import fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8").split("\n");

let possible = 0;

for (let i = 0; i < input.length; i += 3) {
  if (!input[i]) break;

  const triangles = [[], [], []];

  for (let j = 0; j < 3; j++) {
    const sides = input[i + j].match(/\d+/g);
    triangles.forEach((triangle, index) => triangle.push(+sides[index]));
  }

  triangles.forEach((triangle) => {
    const [a, b, c] = triangle.sort((a, b) => a - b);

    if (a + b > c) possible++;
  });
}

console.log(possible);
