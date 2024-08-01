import { Router } from "express";
import { deleteController, putController } from "~/controllers/program";
import { getController, postController } from "~/controllers/programs";
import { validateProgramBody, validateProgramId } from "~/middlewares/programs";

const programsRouter = Router();

programsRouter
  .route("/")
  .get(validateProgramBody, getController)
  .post(postController);
programsRouter
  .route("/:id")
  .put(validateProgramId, validateProgramBody, putController)
  .delete(validateProgramId, deleteController);

export { programsRouter };
