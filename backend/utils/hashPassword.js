// utils/hashPassword.js
const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
  } catch (error) {
    console.log("Error hashing password:", error);
    return null;
  }
};

module.exports = hashPassword;
