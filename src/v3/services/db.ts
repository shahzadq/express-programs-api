import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "~/v3/env";
import * as schema from "~/v3/schema";

const client = postgres(env.DATABASE_URL);

export const db = drizzle(client, { schema });
