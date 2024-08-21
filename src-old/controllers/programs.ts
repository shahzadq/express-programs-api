import { httpStatus } from "~/constants/router";
import { constructSuccessJson } from "~/helpers/router";
import { addProgram, getAllPrograms } from "~/services/programs";
import { controller } from ".";

export const getController = controller(async (req, res) => {
  const programs = await getAllPrograms();
  return res
    .status(httpStatus.OK)
    .json(constructSuccessJson({ data: programs }));
});

export const postController = controller(async (req, res) => {
  await addProgram(res.locals.program);
  return res.status(httpStatus.OK).json(constructSuccessJson());
});
