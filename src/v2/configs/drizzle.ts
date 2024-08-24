import { defineConfig } from "drizzle-kit";
import { env } from "~/v2/env";

export default defineConfig({
  schema: "./models/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
