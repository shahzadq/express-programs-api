import { status } from "~/constants/router";
import { constructSuccessJson } from "~/helpers/router";
import { withProgramData, withProgramId } from "~/helpers/with";
import { deleteProgram, updateProgram } from "~/services/programs";
import { controller } from ".";

export const deleteController = controller(
  withProgramId(async (req, res, id) => {
    await deleteProgram(id);
    return res.status(status.success).json(constructSuccessJson());
  })
);

export const putController = controller(
  withProgramId((req, res, id) =>
    withProgramData(async (req, res, program) => {
      await updateProgram({ id, ...program });
      return res.status(status.success).json(constructSuccessJson());
    })(req, res)
  )
);
