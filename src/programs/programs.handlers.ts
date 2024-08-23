import { httpStatus } from "src-old/constants/router";
import { createHandler } from "~/factory/handlers";
import { requireProgramIdLocal, requireProgramLocal } from "./programs.helpers";
import * as services from "./programs.services";

export const getPrograms = createHandler(async (req, res) => {
  const programs = await services.getAllPrograms();
  return res.status(httpStatus.OK).json({ type: "success", data: programs });
});

export const addProgram = createHandler(async (req, res) => {
  const program = requireProgramLocal(res);
  await services.addProgram(program);
  return res.status(httpStatus.OK).json({ type: "success" });
});

export const deleteProgram = createHandler(async (req, res) => {
  const programId = requireProgramIdLocal(res);
  await services.deleteProgram(programId);
  return res.status(httpStatus.OK).json({ type: "success" });
});

export const updateProgram = createHandler(async (req, res) => {
  const programId = requireProgramIdLocal(res);
  const program = requireProgramLocal(res);
  await services.updateProgram({ ...program, id: programId });
  return res.status(httpStatus.OK).json({ type: "success" });
});
