import dotenv from "dotenv";
import { ArrayElement } from "~/types/generics";

dotenv.config();

const requiredEnvs = ["PORT", "DATABASE_URL"] as const;

const missingEnvs = [] as ArrayElement<typeof requiredEnvs>[];

export const env = requiredEnvs
  .map((env) => {
    if (typeof process.env[env] === "undefined") missingEnvs.push(env);
    return { [env]: process.env[env] };
  })
  .reduce((a, v) => ({ ...a, ...v })) as Record<
  ArrayElement<typeof requiredEnvs>,
  string
>;

if (missingEnvs.length > 0) {
  throw new Error(
    `You are missing the following env variables: ${missingEnvs.join(
      ", "
    )}. Add them to .env.`
  );
}
