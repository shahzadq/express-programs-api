import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import { httpStatusCodes } from "~/constants/api";
import { ApiError } from "~/errors";
import { router } from "~/routers";

const app = express();

app.use(bodyParser.json());

app.use("/api/v1", router);

app.use((req, res, next) => {
  return next(
    new ApiError({
      status: "NOT_FOUND",
      message: "Endpoint not found or method not supported",
    })
  );
});

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  err = err instanceof ApiError ? err : new ApiError();
  return res
    .status(httpStatusCodes[err.status])
    .json({ type: "error", message: err.message });
});

export { app };
