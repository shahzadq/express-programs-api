import { z } from "zod";

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
