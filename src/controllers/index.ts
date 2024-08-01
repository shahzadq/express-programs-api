import { status } from "src/constants/router";
import { internalServerErrorJson } from "src/helpers/router";
import { Request, Response } from "src/types/api";

export const controller =
  (fn: (req: Request, res: Response) => void) =>
  (req: Request, res: Response) => {
    try {
      return fn(req, res);
    } catch {
      return res.status(status.error.server).json(internalServerErrorJson);
    }
  };
