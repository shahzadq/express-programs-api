import { Router } from "express";
import { deleteController, putController } from "~/controllers/program";
import { getController, postController } from "~/controllers/programs";

const programsRouter = Router();

programsRouter.route("/").get(getController).post(postController);
programsRouter.route("/:id").put(putController).delete(deleteController);

export { programsRouter };
