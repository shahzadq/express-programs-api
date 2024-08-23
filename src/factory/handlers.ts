import { NextFunction, Request, Response } from "express";
import { ApiError } from "~/errors";

export const createHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => void) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      return fn(req, res, next);
    } catch {
      return next(new ApiError());
    }
  };
