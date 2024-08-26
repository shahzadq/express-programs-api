import { httpErrorStatusCodes } from "./constants/api";

type ErrorStatus = keyof typeof httpErrorStatusCodes;

export class ApiError extends Error {
  status: ErrorStatus;

  constructor(
    {
      message,
      status,
    }: {
      message: string;
      status: ErrorStatus;
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
