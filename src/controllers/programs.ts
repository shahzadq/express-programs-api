import { status } from "~/constants/router";
import { constructSuccessJson } from "~/helpers/router";
import { withProgramData } from "~/helpers/with";
import { addProgram, getAllPrograms } from "~/services/programs";
import { controller } from ".";

export const getController = controller(async (req, res) => {
  const programs = await getAllPrograms();
  return res
    .status(status.success)
    .json(constructSuccessJson({ data: programs }));
});

export const postController = controller(
  withProgramData(async (req, res, program) => {
    await addProgram(program);
    return res.status(status.success).json(constructSuccessJson());
  })
);
