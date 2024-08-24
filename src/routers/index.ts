import { Router } from "express";
import { router as programs } from "./programs";

const router = Router();

router.use("/programs", programs);

export { router };
