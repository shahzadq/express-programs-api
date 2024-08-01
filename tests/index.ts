import initialiseSupertest from "supertest";
import { app } from "~/server";

export const supertest = initialiseSupertest(app);
