import { boolean, date, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { InferSelectModel } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  topic: varchar("topic", { length: 100 }).notNull(),
  learningFormats: varchar("leaning_formats", { length: 50 }).array().notNull(),
  bestseller: boolean("bestseller").notNull(),
  startDate: date("start_date").notNull(),
});

export const programsInsertSchema = createInsertSchema(programs).and(
  z.object({
    // need to overwrite - for some reason drizzle-zod doesn't infer correctly
    learningFormats: z.string().array(),
  })
);

export type InsertProgram = z.infer<typeof programsInsertSchema>;
export type Program = InferSelectModel<typeof programs>;
