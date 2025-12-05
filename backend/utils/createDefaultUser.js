// utils/createDefaultUser.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("../config/db");
const User = require("../models/User");
const hashPassword = require("./hashPassword");

connectDB();

const createUsers = async () => {
  try {
    // -------- Create Admin ----------------
    const adminExists = await User.findOne({ email: "admin@gmail.com" });

    if (!adminExists) {
      const adminPassword = await hashPassword("Admin@123");

      await User.create({
        name: "Admin",
        email: "admin@gmail.com",
        password: adminPassword,
        role: "admin",
      });

      console.log("✔ Admin created: admin@gmail.com / Admin@123");
    } else {
      console.log("Admin already exists");
    }

    // -------- Create Normal User ----------------
    const userExists = await User.findOne({ email: "user@gmail.com" });

    if (!userExists) {
      const userPassword = await hashPassword("User@123");

      await User.create({
        name: "Test User",
        email: "user@gmail.com",
        password: userPassword,
        role: "user",
      });

      console.log("✔ User created: user@gmail.com / User@123");
    } else {
      console.log("User already exists");
    }

    mongoose.connection.close();
    console.log("Database connection closed.");
  } catch (error) {
    console.log("Error creating default users:", error);
  }
};

createUsers();
