import { boolean, date, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  topic: varchar("topic", { length: 100 }).notNull(),
  learningFormats: varchar("leaning_formats", { length: 50 }).array().notNull(),
  bestseller: boolean("bestseller").notNull(),
  startDate: date("start_date").notNull(),
});
