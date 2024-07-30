import dotenv from "dotenv";

dotenv.config();

if (typeof process.env.PORT === "undefined")
  throw new Error("You need to set a PORT in .env");

if (typeof process.env.DATABASE_URL === "undefined")
  throw new Error("You need to set a DATABASE_URL in .env");

export const env = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};
