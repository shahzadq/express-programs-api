import { status } from "~/constants/router";
import { internalServerErrorJson } from "~/helpers/router";
import { Request, Response } from "~/types/api";

export const controller =
  (fn: (req: Request, res: Response) => void) =>
  (req: Request, res: Response) => {
    try {
      return fn(req, res);
    } catch {
      return res.status(status.error.server).json(internalServerErrorJson);
    }
  };
