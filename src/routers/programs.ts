import { Router } from "express";
import { deleteController } from "~/controllers/program";
import { getController, postController } from "~/controllers/programs";

const programsRouter = Router();

programsRouter.route("/").get(getController).post(postController);
programsRouter.route("/:id").delete(deleteController);

export { programsRouter };
