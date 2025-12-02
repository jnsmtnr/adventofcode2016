import fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8");

const width = 50;
const height = 6;

const screen = {};

for (const line of input.split("\n")) {
  if (!line) break;

  const [a, b] = line.match(/\d+/g).map(Number);

  if (line.includes("rect")) {
    for (let x = 0; x < a; x++) {
      for (let y = 0; y < b; y++) {
        screen[`${x}-${y}`] = "#";
      }
    }
  } else if (line.includes("row")) {
    let newRow = "";

    for (let i = 0; i < width; i++) {
      newRow += screen[`${i - b < 0 ? i - b + width : i - b}-${a}`] || ".";
    }

    for (let i in newRow) {
      screen[`${i}-${a}`] = newRow[i];
    }
  } else if (line.includes("column")) {
    let newColumn = "";

    for (let i = 0; i < height; i++) {
      newColumn += screen[`${a}-${i - b < 0 ? i - b + height : i - b}`] || ".";
    }

    for (let i in newColumn) {
      screen[`${a}-${i}`] = newColumn[i];
    }
  }
}

for (let y = 0; y < height; y++) {
  let row = "";

  for (let x = 0; x < width; x++) {
    row += screen[`${x}-${y}`] == "#" ? "#" : " ";
  }

  console.log(row);
}
