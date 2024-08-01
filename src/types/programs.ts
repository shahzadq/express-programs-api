import { InferSelectModel } from "drizzle-orm";
import { programs } from "src/data-access/db/schema";
import { programsInsertSchema } from "src/schemas/programs";
import { z } from "zod";

export type InsertProgram = z.infer<typeof programsInsertSchema>;
export type Program = InferSelectModel<typeof programs>;
