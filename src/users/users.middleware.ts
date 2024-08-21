import { NextFunction, Request, Response } from "express";
import { httpStatus } from "~/constants/api";

type Role = "marketing-manager" | "admin" | "other";

export const requireUserRole =
  (roles: Role | Role[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    // check if user role is of required type probably from a jwt token
    if (false)
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ type: "error", message: "Unauthorized" });

    return next();
  };
