import { NextFunction, Request, Response } from "express"

type UserRole = "marketing-manager" | "admin" | "other"

export const requireUserRole = (roles: UserRole | UserRole[]) => (req: Request, res: Response, next: NextFunction) => {
    next();
}