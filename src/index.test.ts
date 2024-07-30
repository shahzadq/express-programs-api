import supertest from "supertest";
import { app } from ".";

describe("programs", () => {
  describe("get all programs", () => {
    it("should return an array", async () => {
      const { statusCode, body } = await supertest(app).get("/api/programs");
      expect(statusCode).toBe(200);
      expect(body.type).toBe("Success");
      expect(Array.isArray(body.data)).toBe(true);
    });
  });
});
