import rawExamplePrograms from "example-programs.json";
import { Program } from "src/types/programs";
import { db } from ".";
import { programs } from "./schema";

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
