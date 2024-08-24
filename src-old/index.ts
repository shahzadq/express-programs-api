import { env } from "~/v3/env";
import { app } from "~/v3/server";

app.listen(env.PORT, () => {
  console.log(`[SERVER]: Server is running at: http://localhost:${env.PORT}`);
});
