import { NextFunction, Request, Response } from "express";

type UserRole = "marketing-manager" | "admin" | "other";

export const requireUserRole =
  (roles: UserRole | UserRole[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    // replace with checking user role middleware probably from a jwt token
    if (true) {
      next();
    } else {
      return res.status(401).json({ type: "Error", message: "Unauthorized" });
    }
  };
