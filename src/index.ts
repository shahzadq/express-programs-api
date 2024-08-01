import { env } from "~/env";
import { app } from "./server";

app.listen(env.PORT, () => {
  console.log(`[SERVER]: Server is running at: http://localhost:${env.PORT}`);
});
