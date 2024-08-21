import { Request, Response } from "express";
import { httpStatus } from "src-old/constants/router";
import { requireProgramIdLocal, requireProgramLocal } from "./programs.helpers";
import * as services from "./programs.services";

export const getPrograms = async (req: Request, res: Response) => {
  const programs = await services.getAllPrograms();

  return res.status(httpStatus.OK).json({ type: "success", data: programs });
};

export const addProgram = async (req: Request, res: Response) => {
  const program = requireProgramLocal(res);

  await services.addProgram(program);

  return res.status(httpStatus.OK).json({ type: "success" });
};

export const deleteProgram = async (req: Request, res: Response) => {
  const programId = requireProgramIdLocal(res);

  await services.deleteProgram(programId);

  return res.status(httpStatus.OK).json({ type: "success" });
};

export const updateProgram = async (req: Request, res: Response) => {
  const programId = requireProgramIdLocal(res);
  const program = requireProgramLocal(res);

  await services.updateProgram({ ...program, id: programId });

  return res.status(httpStatus.OK).json({ type: "success" });
};
