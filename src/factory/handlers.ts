import { NextFunction, Request, Response } from "express";
import { ApiError } from "~/errors";

export const createHandler =
  (
    fn: (
      req: Request,
      res: Response<{ type: "success"; data?: object }>,
      next: NextFunction
    ) => Promise<Response> | Response
  ) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await fn(req, res, next);
    } catch (err) {
      return next(err instanceof ApiError ? err : new ApiError());
    }
  };
