import express from "express";
import { env } from "@/env";
import { programsRouter } from "@/routers";
import { requireUserRole } from "@/middleware";

const app = express();

app.use("/api/programs", [requireUserRole(["admin", "marketing-manager"])], programsRouter);

app.listen(env.PORT, () => {
    console.log(`[SERVER]: Server is running at: http://localhost:${env.PORT}`);
});