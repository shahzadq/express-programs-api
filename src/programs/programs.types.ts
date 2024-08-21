import { InferSelectModel } from "drizzle-orm";
import { z } from "zod";
import { programs, programsInsertSchema } from "./programs.schemas";

export type Program = InferSelectModel<typeof programs>;
export type InsertProgram = z.infer<typeof programsInsertSchema>;
