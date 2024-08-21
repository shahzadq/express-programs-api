import { Response } from "express";
import { InsertProgram, Program } from "./programs.types";

export const requireProgramLocal = (
  res: Response<{}, { program?: InsertProgram }>
) => {
  if (typeof res.locals.program === "undefined")
    throw new Error(
      "validateProgramBody middleware required before calling this handler"
    );

  return res.locals.program;
};

export const requireProgramIdLocal = (
  res: Response<{}, { programId?: Program["id"] }>
) => {
  if (typeof res.locals.programId === "undefined")
    throw new Error(
      "validateProgramId middleware required before calling this handler"
    );

  return res.locals.programId;
};
