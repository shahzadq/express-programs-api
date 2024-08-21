import { NextFunction, Request, Response } from "express";
import { httpStatus } from "~/constants/api";
import { param } from "./programs.constants";
import { programIdSchema, programsInsertSchema } from "./programs.schemas";

export const validateProgramBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const program = programsInsertSchema.safeParse(req.body);

  if (!program.success)
    return res.status(httpStatus.BAD_REQUEST).json({
      type: "error",
      message: "Invalid input. Check valued provided are of correct type.",
    });

  res.locals.programs = program.data;

  return next();
};

export const validateProgramId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = programIdSchema.safeParse(req.params[param]);

  if (!id.success)
    return res.status(httpStatus.BAD_REQUEST).json({
      type: "error",
      message: "Invalid id param provided. Make sure id param is a number.",
    });

  res.locals.programId = id.data;

  return next();
};
