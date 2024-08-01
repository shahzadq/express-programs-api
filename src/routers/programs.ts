import { Router } from "express";
import { deleteController } from "src/controllers/program";
import { getController, postController } from "src/controllers/programs";

const programsRouter = Router();

programsRouter.route("/").get(getController).post(postController);
programsRouter.route("/:id").delete(deleteController);

export { programsRouter };
