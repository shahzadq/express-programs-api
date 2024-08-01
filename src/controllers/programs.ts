import { status } from "~/constants/router";
import { constructSuccessJson } from "~/helpers/router";
import { addProgram, getAllPrograms } from "~/services/programs";
import { controller } from ".";

export const getController = controller(async (req, res) => {
  const programs = await getAllPrograms();
  return res
    .status(status.success)
    .json(constructSuccessJson({ data: programs }));
});

export const postController = controller(async (req, res) => {
  await addProgram(res.locals.program);
  return res.status(status.success).json(constructSuccessJson());
});
