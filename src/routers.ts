import { Router } from "express";
import {
  addProgram,
  deleteProgram,
  getAllPrograms,
  validateInsertProgram,
} from "./data-access/programs";
import { z } from "zod";

const programsRouter = Router();

programsRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const programs = await getAllPrograms();
      return res.status(200).json({ type: "Success", data: programs });
    } catch {
      return res
        .status(500)
        .json({ type: "Error", message: "Something went wrong" });
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
      return res
        .status(500)
        .json({ type: "Error", message: "Something went wrong" });
    }
  });

programsRouter
  .route("/:id")
  .put(async (req, res) => {})
  .delete(async (req, res) => {
    try {
      const id = z.number().parse(req.params.id);
      try {
        console.log(id);
        await deleteProgram(id);
        return res.status(200).json({ type: "Success" });
      } catch (err) {
        console.log(err);
        return res
          .status(500)
          .json({ type: "Error", message: "Something went wrong" });
      }
    } catch {
      return res.status(400).json({
        type: "Error",
        message: "Invalid id provided. Make sure id is a number.",
      });
    }
  });

export { programsRouter };
