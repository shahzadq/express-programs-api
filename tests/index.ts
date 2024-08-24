import supertest from "supertest";
import { app } from "~/server";

export const api = supertest(app);
