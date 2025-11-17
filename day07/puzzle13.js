import fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8");

const regex = /(\w)(?!\1)(\w)(\2)(\1)/g;
let count = 0;

for (const line of input.split("\n")) {
  if (!line) break;

  const insides = line.match(/\[(\w+)\]/g);

  if (insides?.some((inside) => inside.match(regex))) {
    continue;
  }

  const matched = line.match(regex);
  if (matched) {
    count++;
  }
}

console.log(count);
