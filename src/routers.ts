import { Router } from "express";
import {
  addProgram,
  getAllPrograms,
  validateInsertProgram,
} from "./data-access/programs";

const programsRouter = Router();

programsRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const programs = await getAllPrograms();
      res.status(200).json({ type: "Success", data: programs });
    } catch {
      res.status(500).json({ type: "Error", message: "Something went wrong" });
    }
  })
  .post(async (req, res) => {
    try {
      const data = req.body;
      const isDataValid = validateInsertProgram(data);

      if (isDataValid) {
        await addProgram(data);
        return res.status(200).json({ type: "Success" });
      } else
        return res.status(400).json({
          type: "Error",
          message: "Input provided invalid. Check values provided are correct.",
        });
    } catch {
      res.status(500).json({ type: "Error", message: "Something went wrong" });
    }
  });

programsRouter
  .route("/:id")
  .put(async (req, res) => {})
  .delete(async (req, res) => {});

export { programsRouter };
