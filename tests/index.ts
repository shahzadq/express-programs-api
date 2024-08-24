import initialiseSupertest from "supertest";
import { app } from "~/v3/server";

export const supertest = initialiseSupertest(app);
