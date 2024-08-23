import { Response } from "express";
import { httpErrorStatus, httpStatus } from "./constants/api";

type ErrorStatusCodes = keyof typeof httpErrorStatus;

export class ApiError extends Error {
  status: ErrorStatusCodes;

  constructor(
    {
      message,
      status,
    }: {
      message: string;
      status: ErrorStatusCodes;
    } = {
      message:
        "Something went wrong on our end. Try calling this endpoint again.",
      status: "INTERNAL_SERVER_ERROR",
    }
  ) {
    super(message);
    this.status = status;
  }
}

export const handleError = (err: ApiError, res: Response) => {
  return res
    .status(httpStatus[err.status])
    .json({ type: "error", message: err.message });
};
