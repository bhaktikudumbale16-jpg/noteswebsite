const crypto = require("crypto");

function generateJWTKey() {
  const secret = crypto.randomBytes(64).toString("hex");
  console.log("\nYour JWT Secret Key:\n");
  console.log(secret);
  console.log("\nCopy this key and paste it into your .env file as:");
  console.log("JWT_SECRET=" + secret);
}

generateJWTKey();
