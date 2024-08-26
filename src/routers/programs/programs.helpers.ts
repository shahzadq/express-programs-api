import { createRequireLocal } from "~/factory/helpers";
import { InsertProgram, Program } from "./programs.types";

export const requireProgramLocal = createRequireLocal<InsertProgram>({
  key: "program",
  error: "validateProgramBody middleware required before calling this handler",
});

export const requireProgramIdLocal = createRequireLocal<Program["id"]>({
  key: "programId",
  error: "validateProgramId middleware required before calling this handler",
});
