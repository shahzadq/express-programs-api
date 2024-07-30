Muhammad Qureshi

Date: 30/07/2024
Session 1:
Start Time: 13:25
End Time: 14:45

Setup Instructions:

1. Create a `.env` file and copy contents from `.env.example` into it.
1. Setup Supabase database:
   a. Go to supabase.com and create a free account.
   b. Create a new project and record the secure password you choose.
   c. Click on the connect button in the top right corner and copy the connection string into `.env` next to `DATABASE_URL`.
   d. Replace `[YOUR-PASSWORD]` with the password you created earlier.
1. run `npx pnpm i`. This will install all project dependencies.
1. run `npx pnpm run db:push`. This will setup your supabase database (when asked if you want to execute the query shown, say yes).
