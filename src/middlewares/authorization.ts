import { httpStatus } from "~/constants/router";
import { constructErrorJson } from "~/helpers/router";
import { Next, Request, Response } from "~/types/api";

type UserRole = "marketing-manager" | "admin" | "other";

export const requireUserRole =
  (roles: UserRole | UserRole[]) =>
  (req: Request, res: Response, next: Next) => {
    // replace with checking user role middleware probably from a jwt token
    if (true) {
      next();
    } else {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json(constructErrorJson({ message: "Unauthorized" }));
    }
  };
