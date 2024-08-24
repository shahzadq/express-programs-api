import { validateBody, validateParam } from "~/v3/middleware/validation";
import { programIdSchema, programsInsertSchema } from "./programs.schemas";

export const validateProgramBody = validateBody(programsInsertSchema, {
  toLocalsKey: "program",
  error: {
    message:
      "Invalid body. Make sure the program you provide contains the required values of the correct types.",
  },
});

export const validateProgramId = validateParam("programId", programIdSchema, {
  toLocalsKey: "programId",
});
