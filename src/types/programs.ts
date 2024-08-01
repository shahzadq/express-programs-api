import { InferSelectModel } from "drizzle-orm";
import { z } from "zod";
import { programs } from "~/models";
import { programsInsertSchema } from "~/schemas/programs";

export type InsertProgram = z.infer<typeof programsInsertSchema>;
export type Program = InferSelectModel<typeof programs>;
