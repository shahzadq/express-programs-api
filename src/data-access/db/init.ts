import { db } from ".";
import rawExamplePrograms from "../../../example-programs.json";
import { Program, programs } from "./schema";

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
