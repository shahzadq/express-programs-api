import { validateBody, validateParam } from "~/middleware/validation";
import { programIdSchema, programsInsertSchema } from "./programs.schemas";

export const validateProgramBody = validateBody({
  schema: programsInsertSchema,
  toLocalsKey: "program",
  error: {
    message:
      "Invalid body. Make sure the program you provide contains the required values of the correct types.",
  },
});

export const validateProgramId = validateParam({
  schema: programIdSchema,
  param: "programId",
  toLocalsKey: "programId",
  error: {
    message:
      "Invalid programId param provided. Make sure programId is a number.",
  },
});
