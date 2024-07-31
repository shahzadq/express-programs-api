import { Router } from "express";
import {
  addProgram,
  deleteProgram,
  getAllPrograms,
} from "./data-access/programs";
import { programsInsertSchema, programsSchema } from "./data-access/db/schema";
import {
  constructErrorJson,
  constructSuccessJson,
  internalServerErrorJson,
} from "./helpers/router";

const programsRouter = Router();

programsRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const programs = await getAllPrograms();
      return res.status(200).json(constructSuccessJson(programs));
    } catch {
      return res.status(500).json(internalServerErrorJson);
    }
  })
  .post(async (req, res) => {
    try {
      const program = programsInsertSchema.parse(req.body);

      try {
        await addProgram(program);
        return res.status(200).json(constructSuccessJson());
      } catch {
        return res.status(500).json(internalServerErrorJson);
      }
    } catch {
      return res
        .status(400)
        .json(
          constructErrorJson(
            "Invalid input. Check values provided are correct."
          )
        );
    }
  });

programsRouter
  .route("/:id")
  .put(async () => {})
  .delete(async (req, res) => {
    try {
      const id = programsSchema.shape.id.parse(req.params.id);
      try {
        await deleteProgram(id);
        return res.status(200).json(constructSuccessJson());
      } catch {
        return res.status(500).json(internalServerErrorJson);
      }
    } catch {
      return res
        .status(400)
        .json(
          constructErrorJson(
            "Invalid id provided. Make sure id param is a number."
          )
        );
    }
  });

export { programsRouter };
