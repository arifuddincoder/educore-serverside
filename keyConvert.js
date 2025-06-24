const fs = require("fs");
const key = fs.readFileSync("./b11a11-educore-firebase-credential.json", "utf8");
const base64 = Buffer.from(key).toString("base64");
console.log(base64);
