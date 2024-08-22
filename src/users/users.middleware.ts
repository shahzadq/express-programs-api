import { NextFunction, Request, Response } from "express";
import { httpStatus } from "~/constants/api";
import { ApiError } from "~/errors";

type Role = "marketing-manager" | "admin" | "other";

export const requireUserRole =
  (roles: Role | Role[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    // check if user role is of required type probably from a jwt token
    if (false)
      throw new ApiError({ status: "UNAUTHORIZED", message: "Unauthorized." });

    return next();
  };
