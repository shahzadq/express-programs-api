import { status } from "src/constants/router";
import { programIdSchema, programsInsertSchema } from "src/schemas/programs";
import { Request, Response } from "src/types/api";
import { InsertProgram } from "src/types/programs";
import { constructErrorJson } from "./router";

export const withProgramData =
  (fn: (req: Request, res: Response, program: InsertProgram) => void) =>
  (req: Request, res: Response) => {
    const program = programsInsertSchema.safeParse(req.body);

    if (!program.success)
      return res.status(status.error.user).json(
        constructErrorJson({
          message: "Invalid input. Check values provided are correct.",
        })
      );

    return fn(req, res, program.data);
  };

export const withProgramId =
  (fn: (req: Request, res: Response, id: number) => void) =>
  (req: Request, res: Response) => {
    const id = programIdSchema.safeParse(req.params.id);

    if (!id.success)
      return res.status(status.error.user).json(
        constructErrorJson({
          message: "Invalid id param provided. Make sure id param is a number",
        })
      );

    return fn(req, res, id.data);
  };
