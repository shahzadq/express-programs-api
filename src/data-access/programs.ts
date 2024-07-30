import { eq } from "drizzle-orm";
import { db } from "./db";
import {
  InsertProgram,
  Program,
  programs,
  programsInsertSchema,
} from "./db/schema";

export const getAllPrograms = async () => await db.query.programs.findMany();

export const addProgram = async (program: InsertProgram) =>
  await db.insert(programs).values(program);
export const validateInsertProgram = (
  program: unknown
): program is InsertProgram => programsInsertSchema.safeParse(program).success;

export const deleteProgram = async (programId: Program["id"]) =>
  await db.delete(programs).where(eq(programs.id, programId));

export const updateProgram = async (program: Program) =>
  await db.update(programs).set(program).where(eq(programs.id, program.id));
