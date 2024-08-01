import initialiseSupertest from "supertest";
import { app } from "~/index";

export const supertest = initialiseSupertest(app);
