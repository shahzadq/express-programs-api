import dotenv from "dotenv";
import { ArrayElement } from "~/v3/types";

dotenv.config();

// add required envs to this array
const requiredEnvs = ["PORT", "DATABASE_URL"] as const;

// contains any envs missing
const missing = [] as ArrayElement<typeof requiredEnvs>[];

export const env = requiredEnvs
  .map((env) => {
    if (typeof process.env[env] === "undefined") missing.push(env);
    return { [env]: process.env[env] };
  })
  .reduce((a, v) => ({ ...a, ...v })) as Record<
  ArrayElement<typeof requiredEnvs>,
  string
>;

// if we have any missing envs, throw an error with a list
if (missing.length > 0)
  throw new Error(
    `You need to add the following env variables to .env: ${missing.join(", ")}`
  );
