import express from "express";
import { env } from "@/env";

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({message: "Success"});
});

app.listen(env.PORT, () => {
    console.log(`[SERVER]: Server is running at: http://localhost:${env.PORT}`);
});