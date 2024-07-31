import { boolean, date, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  topic: varchar("topic", { length: 100 }).notNull(),
  learningFormats: varchar("leaning_formats", { length: 50 }).array().notNull(),
  bestseller: boolean("bestseller").notNull(),
  startDate: date("start_date").notNull(),
});

export const programsInsertSchema = createInsertSchema(programs, {
  // need to overwrite - for some reason drizzle-zod doesn't infer correctly
  learningFormats: (schema) => z.array(schema.learningFormats),
});
export const programsSchema = createSelectSchema(programs, {
  learningFormats: (schema) => z.array(schema.learningFormats),
});

export type InsertProgram = z.infer<typeof programsInsertSchema>;
export type Program = z.infer<typeof programsSchema>;
