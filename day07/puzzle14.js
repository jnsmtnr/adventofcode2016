import fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8");

const abaRegex = /(\w)(?!\1)(?=(\w)(\1))/g;
const insideRegex = /\[\w+\]/g;
let count = 0;

for (const line of input.split("\n")) {
  if (!line) break;

  const insides = line.match(insideRegex);
  if (!insides) continue;

  const outside = line.replace(insideRegex, "-");

  const insideMatches = insides
    .map((inside) =>
      Array.from(inside.matchAll(abaRegex)).map(
        (match) => match[1] + match[2] + match[3]
      )
    )
    .flat();

  if (!insideMatches.length) continue;

  const outsideMatches = insideMatches
    .map((match) => {
      const [a, b] = match.split("");

      return outside.match(new RegExp(b + a + b, "g"));
    })
    .flat()
    .filter(Boolean);

  if (outsideMatches.length) count++;
}

console.log(count);
