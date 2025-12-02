import { createHash } from "crypto";

const input = "reyedfim";
let password = new Array(8).fill('-');
let index = 0;

while (password.some(digit => digit == '-')) {
  const hashed = createHash("md5")
    .update(input + index)
    .digest("hex");

  if (hashed.slice(0, 5) == "00000") {
    const position = hashed[5];
    if (position >= 0 && position < 8 && password[position] == '-') {
      password[position] = hashed[6];
    }
    console.log(password.join(''));
  }

  index++;
}
