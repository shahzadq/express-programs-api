import { httpErrorStatus } from "./constants/api";

type ErrorStatusCodes = keyof typeof httpErrorStatus;

export class ApiError extends Error {
  status: ErrorStatusCodes;

  constructor({
    message,
    status,
  }: {
    message: string;
    status: ErrorStatusCodes;
  }) {
    super(message);
    this.status = status;
  }
}
