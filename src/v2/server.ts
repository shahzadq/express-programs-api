import bodyParser from "body-parser";
import express from "express";
import { httpStatus } from "~/constants/router";
import { constructErrorJson } from "~/helpers/router";
import { requireUserRole } from "~/middlewares/authorization";
import { programsRouter } from "~/routes/programs";

const app = express();

app.use(bodyParser.json());

app.use(
  "/api/programs",
  requireUserRole(["admin", "marketing-manager"]),
  programsRouter
);

app.use((req, res) => {
  return res
    .status(httpStatus.NOT_FOUND)
    .json(constructErrorJson({ message: "Endpoint not found" }));
});

export { app };
