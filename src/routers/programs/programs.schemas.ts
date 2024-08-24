import { boolean, date, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { z } from "zod";

export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  topic: varchar("topic", { length: 100 }).notNull(),
  learningFormats: varchar("leaning_formats", { length: 50 }).array().notNull(),
  bestseller: boolean("bestseller").notNull(),
  startDate: date("start_date").notNull(),
});

export const programIdSchema = z.number();
export const programTitleSchema = z.string().min(1).max(100);
export const programTopicSchema = z.string().min(1).max(100);
export const programLearningFormatsSchema = z.array(z.string().min(1).max(50));
export const programBestsellerSchema = z.boolean();
export const programStartDate = z.string().date();

export const programsInsertSchema = z.object({
  title: programTitleSchema,
  topic: programTopicSchema,
  learningFormats: programLearningFormatsSchema,
  bestseller: programBestsellerSchema,
  startDate: programStartDate,
});
