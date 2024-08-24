import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "~/v3/env";

import * as schema from "~/models";

const connectionString = env.DATABASE_URL;

const client = postgres(connectionString);
export const db = drizzle(client, { schema });
