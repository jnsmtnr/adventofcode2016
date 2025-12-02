import fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").split("\n");

const alphabet = new Array(26)
  .fill(true)
  .map((_, index) => String.fromCharCode(index + "a".charCodeAt(0)));

for (const room of input) {
  if (!room) break;
  const name = room.match(/\w+(?=-)/g).join("");
  const sector = +room.match(/\d+/)[0];
  const checksum = room.match(/(\[)(?<sum>\w+)(\])/).groups.sum;

  const letters = {};

  for (const letter of name) {
    if (!letters[letter]) letters[letter] = 0;
    letters[letter]++;
  }

  const calculatedChecksum = Object.entries(letters)
    .sort((a, b) => (a[1] == b[1] ? (a[0] > b[0] ? 1 : -1) : b[1] - a[1]))
    .slice(0, 5)
    .reduce((acc, cur) => acc + cur[0], "");

  if (checksum == calculatedChecksum) {
    const decrypted = name
      .split("")
      .reduce(
        (acc, cur) => acc + alphabet[(alphabet.indexOf(cur) + sector) % 26],
        ""
      );

    if (decrypted.includes("north")) {
      console.log(decrypted, sector);
    }
  }
}
