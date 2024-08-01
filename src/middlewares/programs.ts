import { httpStatus } from "~/constants/router";
import { constructErrorJson } from "~/helpers/router";
import { programIdSchema, programsInsertSchema } from "~/schemas/programs";
import { Next, Request, Response } from "~/types/api";

export const validateProgramId = (req: Request, res: Response, next: Next) => {
  const id = programIdSchema.safeParse(req.params.id);

  if (!id.success)
    return res.status(httpStatus.BAD_REQUEST).json(
      constructErrorJson({
        message: "Invalid id param provided. Make sure id param is a number",
      })
    );

  res.locals.programId = id.data;

  return next();
};

export const validateProgramBody = (
  req: Request,
  res: Response,
  next: Next
) => {
  const program = programsInsertSchema.safeParse(req.body);

  if (!program.success)
    return res.status(httpStatus.BAD_REQUEST).json(
      constructErrorJson({
        message: "Invalid input. Check values provided are correct.",
      })
    );

  res.locals.program = program.data;

  return next();
};
