import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import { ApiError } from "~/errors";

type ValidationOptions = {
  schema: ZodSchema;
  toLocalsKey?: string;
  error?: Partial<ApiError>;
};

export const validateBody =
  ({ schema, ...options }: ValidationOptions) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { data, success } = schema.safeParse(req.body);

    if (!success)
      return next(
        new ApiError({
          status: "BAD_REQUEST",
          message: "Invaild body. Check values provided are of correct type.",
          ...options?.error,
        })
      );

    if (typeof options?.toLocalsKey !== "undefined")
      res.locals[options.toLocalsKey] = data;

    return next();
  };

export const validateParam =
  ({ schema, param, ...options }: ValidationOptions & { param: string }) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { data, success } = schema.safeParse(req.params[param]);

    if (!success)
      return next(
        new ApiError({
          status: "BAD_REQUEST",
          message: `Invalid ${param} param provided. Make sure param is of correct type.`,
          ...options?.error,
        })
      );

    if (typeof options?.toLocalsKey !== "undefined")
      res.locals[options.toLocalsKey] = data;

    return next();
  };
