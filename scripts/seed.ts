import { programs } from "~/models/programs";
import { db } from "~/services/db";
import { Program } from "~/types/programs";
import rawExamplePrograms from "../example-programs.json";

async function main() {
  const examplePrograms = (rawExamplePrograms as Program[]).map(
    ({ id, ...program }) => program
  );

  console.log("Inserting example data into database...");

  await db.insert(programs).values(examplePrograms);

  console.log("Data inserted successfully.");

  process.exit();
}

main();
