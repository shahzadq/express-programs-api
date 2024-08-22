import { validateBody, validateParam } from "~/middleware/validation";
import { programIdSchema, programsInsertSchema } from "./programs.schemas";

export const validateProgramBody = validateBody(programsInsertSchema, {
  toLocalsKey: "program",
});

export const validateProgramId = validateParam("programId", programIdSchema, {
  toLocalsKey: "programId",
});
