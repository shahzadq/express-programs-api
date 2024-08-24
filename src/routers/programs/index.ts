import { Router } from "express";
import { requireUserRole } from "~/middleware/users";
import { param } from "./programs.constants";
import {
  addProgram,
  deleteProgram,
  getPrograms,
  updateProgram,
} from "./programs.handlers";
import { validateProgramBody, validateProgramId } from "./programs.middleware";

const router = Router();

router.use(requireUserRole(["admin", "marketing-manager"]));

router.route("/").get(getPrograms).post(validateProgramBody, addProgram);
router
  .route(`/:${param}`)
  .put(validateProgramId, validateProgramBody, updateProgram)
  .delete(validateProgramId, deleteProgram);

export { router };
