import dotenv from "dotenv";

dotenv.config();

const envs = ["PORT", "DATABASE_URL"] as const;

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export const env = envs
  .map((env) => {
    if (typeof process.env[env] === "undefined")
      throw new Error(`You need to set ${env} in .env`);

    return { [env]: process.env[env] };
  })
  .reduce((a, v) => ({ ...a, ...v })) as Record<
  ArrayElement<typeof envs>,
  string
>;
