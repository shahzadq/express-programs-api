import { NextFunction, Request, Response } from "express";
import { status } from "./constants/router";
import { constructErrorJson } from "./helpers/router";

type UserRole = "marketing-manager" | "admin" | "other";

export const requireUserRole =
  (roles: UserRole | UserRole[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    // replace with checking user role middleware probably from a jwt token
    if (true) {
      next();
    } else {
      return res
        .status(status.error.unauthorized)
        .json(constructErrorJson({ message: "Unauthorized" }));
    }
  };
