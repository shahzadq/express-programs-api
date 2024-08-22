import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import { ApiError } from "~/errors";

type ValidationOptions = {
  toLocalsKey?: string;
};

export const validateBody =
  (schema: ZodSchema, options?: ValidationOptions) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { data, success } = schema.safeParse(req.body);

    if (!success)
      throw new ApiError({
        status: "BAD_REQUEST",
        message: "Invalid input. Check values provided are of correct type.",
      });

    if (typeof options?.toLocalsKey !== "undefined")
      res.locals[options.toLocalsKey] = data;

    return next();
  };

export const validateParam =
  (param: string, schema: ZodSchema, options?: ValidationOptions) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { data, success } = schema.safeParse(req.params[param]);

    if (!success)
      throw new ApiError({
        status: "BAD_REQUEST",
        message: `Invalid ${param} param provided. Make sure param is of correct type.`,
      });

    if (typeof options?.toLocalsKey !== "undefined")
      res.locals[options.toLocalsKey] = data;

    return next();
  };
