import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import { httpStatus } from "~/constants/api";
import { router as programs } from "~/programs";
import { ApiError, handleError } from "./errors";

const app = express();

app.use(bodyParser.json());

app.use("/api/v1/programs", programs);

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  if (!err) {
    return next(
      new ApiError({ status: "NOT_FOUND", message: "Endpoint not found" })
    );
  }
});

app.use(
  async (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    return handleError(err, res);
  }
);

export { app };
