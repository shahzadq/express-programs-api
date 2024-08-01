import { eq } from "drizzle-orm";
import { InsertProgram, Program } from "~/types/programs";
import { db } from "./db";
import { programs } from "./db/schema";

export const getAllPrograms = async () => await db.query.programs.findMany();

export const addProgram = async (program: InsertProgram) => {
  await db.insert(programs).values(program);
};

export const deleteProgram = async (programId: Program["id"]) => {
  await db.delete(programs).where(eq(programs.id, programId));
};

export const updateProgram = async (program: Program) => {
  await db.update(programs).set(program).where(eq(programs.id, program.id));
};
