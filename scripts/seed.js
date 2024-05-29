const { db } = require("@/lib/db");
const bcrypt = require("bcrypt");

const { users, keys, storage } = require("@/lib/placeholder-data.js");

async function seedUsers(client) {
  try {
    await db;
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}
