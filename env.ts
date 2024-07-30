import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

export const env = createEnv({
    server: {
        PORT: z.string(),
        DATABASE_URL: z.string().url()
    },
    runtimeEnv: process.env
})