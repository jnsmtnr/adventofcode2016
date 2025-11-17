import fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8");

const letters = [];

for (const line of input.split("\n")) {
  if (!line) break;

  for (const index in line) {
    const letter = line[index];
    if (!letters[index]) letters.push({});

    if (!letters[index][letter]) letters[index][letter] = 0;

    letters[index][letter]++;
  }

  console.log(
    letters
      .map((index) => Object.entries(index).sort((a, b) => a[1] - b[1])[0][0])
      .join("")
  );
}
