import bodyParser from "body-parser";
import { env } from "env";
import express from "express";
import { requireUserRole } from "src/middleware";
import { programsRouter } from "src/routers/programs";

const app = express();

app.use(bodyParser.json());

app.use(
  "/api/programs",
  requireUserRole(["admin", "marketing-manager"]),
  programsRouter
);

app.listen(env.PORT, () => {
  console.log(`[SERVER]: Server is running at: http://localhost:${env.PORT}`);
});

export { app };
