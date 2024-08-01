import { status } from "src/constants/router";
import { addProgram, getAllPrograms } from "src/data-access/programs";
import { constructSuccessJson } from "src/helpers/router";
import { withProgramData } from "src/helpers/with";
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
