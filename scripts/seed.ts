import { programs } from "~/routers/programs/programs.schemas";
import { Program } from "~/routers/programs/programs.types";
import { db } from "~/services/db";
import rawExamplePrograms from "../example-programs.json";

async function main() {
  console.log("Reading and parsing 'example-programs.json'...");

  const examplePrograms = (rawExamplePrograms as Program[]).map(
    ({ id, ...program }) => program
  );

  console.log("Inserting example data into database...");

  await db.insert(programs).values(examplePrograms);

  console.log("Data inserted successfully.");

  process.exit();
}

main();
