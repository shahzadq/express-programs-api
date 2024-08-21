import bodyParser from "body-parser";
import express from "express";
import { httpStatus } from "~/constants/api";
import { router as programs } from "~/programs";

const app = express();

app.use(bodyParser.json());

app.use("/api/v1/programs", programs);

app.use((req, res) =>
  res
    .status(httpStatus.NOT_FOUND)
    .json({ type: "error", message: "Endpoint not found." })
);

export { app };
