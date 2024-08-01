import { status } from "~/constants/router";
import { constructSuccessJson } from "~/helpers/router";
import { deleteProgram, updateProgram } from "~/services/programs";
import { controller } from ".";

export const deleteController = controller(async (req, res) => {
  await deleteProgram(res.locals.programId);
  return res.status(status.success).json(constructSuccessJson());
});

export const putController = controller(async (req, res) => {
  await updateProgram({ id: res.locals.programId, ...res.locals.program });
  return res.status(status.success).json(constructSuccessJson());
});
