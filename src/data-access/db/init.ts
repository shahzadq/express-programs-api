import { db } from ".";
import rawExamplePrograms from "../../../example-programs.json";
import { Program, programs } from "./schema";

const examplePrograms = rawExamplePrograms as Program[];

console.log("Inserting example data into database...");

async function insert() {
  await db.insert(programs).values(examplePrograms);
}

insert();

console.log("Data inserted successfully.");
