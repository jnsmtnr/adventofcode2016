import { createHash } from "crypto";

const input = "reyedfim";
let password = "";
let index = 0;

while (password.length < 8) {
  const hashed = createHash("md5")
    .update(input + index)
    .digest("hex");

  if (hashed.slice(0, 5) == "00000") {
    password += hashed[5];
    console.log(password);
  }

  index++;
}
