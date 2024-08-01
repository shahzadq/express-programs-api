import { status } from "src/constants/router";
import { deleteProgram, updateProgram } from "src/data-access/programs";
import { constructSuccessJson } from "src/helpers/router";
import { withProgramData, withProgramId } from "src/helpers/with";
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
