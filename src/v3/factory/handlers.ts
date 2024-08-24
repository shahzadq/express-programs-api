import { NextFunction, Request, Response } from "express";
import { httpSuccessStatus } from "~/v3/constants/api";
import { ApiError } from "~/v3/errors";

type Success = {
  type: "success";
  status?: keyof typeof httpSuccessStatus;
  data?: object;
};

export const createHandler =
  (
    fn: (
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<Success> | Success
  ) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { status, ...json } = await fn(req, res, next);

      return res.status(httpSuccessStatus[status ?? "OK"]).json(json);
    } catch (err) {
      return next(err instanceof ApiError ? err : new ApiError());
    }
  };
