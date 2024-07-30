import express from "express";
import { env } from "@/env";
import { addProgram, getAllPrograms, validateInsertProgram } from "./data-access/programs";

const app = express();

app.get("/api/programs", async (req, res) => {
    try {
        const programs = await getAllPrograms();
        res.status(200).json({ type: "Success", data: programs });
    }
    catch {
        res.status(500).json({ type: "Error", message: "Something went wrong" })
    }
});

app.post("/api/programs", async (req, res) => {
    try {
        const data = req.body;
        const isDataValid = validateInsertProgram(data);

        if (isDataValid) {
            await addProgram(data);
            return res.status(200).json({ type: "Success"  })
        }
        else return res.status(400).json({ type: "Error", message: "Input provided invalid. Check values provided are correct." });
    }
    catch {
        res.status(500).json({ type: "Error", message: "Something went wrong" })
    }
});

app.delete("/api/programs/:id", async (req, res) => {});

app.put("/api/programs/:id", async (req, res) => {});

app.listen(env.PORT, () => {
    console.log(`[SERVER]: Server is running at: http://localhost:${env.PORT}`);
});