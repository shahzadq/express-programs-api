Muhammad Qureshi

Date: 30/07/2024
Session 1:
Start Time: 13:25
End Time: 15:15
Session 2:
Start Time: 19:10
End Time:

Setup Instructions:

Before starting make sure you have `Node.js` and `pnpm` installed. You can check if you have Node installed by running `node --version` in the terminal which should return a version number and `pnpm` by running `npx pnpm --version` which should also return a version number. You can install Node through their website, and pnpm by running the command `npm i -g pnpm`.

1. Create a `.env` file and copy contents from `.env.example` into it.
2. Setup Supabase database (techinically any postgres db solution should work):
   a. Go to supabase.com and create a free account.
   b. Create a new project and record the secure password you create.
   c. Click on the connect button in the top right corner and copy the connection string into `.env` next to `DATABASE_URL`.
   d. Replace `[YOUR-PASSWORD]` in the connection string with the password you created earlier.
3. run `npx pnpm i`. This will install all project dependencies.
4. run `npx pnpm run db:push`. This will setup your supabase database (when asked if you want to execute the query shown, say yes).
5. run `npx pnpm run db:insert` to insert the data from `example-programs.json` into your database (this step is optional).
6. run `npx pnpm dev` and the server should start.
