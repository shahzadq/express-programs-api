import rawExamplePrograms from "example-programs.json";
import { db } from "src/data-access/db";
import { programs } from "src/data-access/db/schema";
import { Program } from "src/types/programs";

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
