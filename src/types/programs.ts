import { InferSelectModel } from "drizzle-orm";
import { z } from "zod";
import { programs } from "~/data-access/db/schema";
import { programsInsertSchema } from "~/schemas/programs";

export type InsertProgram = z.infer<typeof programsInsertSchema>;
export type Program = InferSelectModel<typeof programs>;
