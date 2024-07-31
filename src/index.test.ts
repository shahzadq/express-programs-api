import initialiseSupertest from "supertest";
import { app } from ".";

const supertest = initialiseSupertest(app);

describe("programs", () => {
  describe("get all programs", () => {
    it("should return a 200 status code, have a success type and have an array in body.data", async () => {
      const { statusCode, body } = await supertest.get("/api/programs");
      expect(body.type).toBe("Success");
      expect(statusCode).toBe(200);
      expect(Array.isArray(body.data)).toBe(true);
    });
  });

  describe("insert a program", () => {
    describe("good data", () => {
      it("should return a 200 status code and have a success type", async () => {
        const { statusCode, body } = await supertest
          .post("/api/programs")
          .send({
            title: "Test Program",
            topic: "example-topic",
            learningFormats: ["online"],
            bestseller: true,
            startDate: "2023-04-20T00:00:00+0000",
          });
        expect(statusCode).toBe(200);
        expect(body.type).toBe("Success");
      });
    });

    describe("bad data", () => {
      it("should return a 400 status code and have an error type", async () => {
        const { statusCode, body } = await supertest
          .post("/api/programs")
          .send({
            topic: "example-topic",
            learningFormats: ["online"],
            bestseller: true,
            startDate: "2023-04-20T00:00:00+0000",
          });
        expect(statusCode).toBe(400);
        expect(body.type).toBe("Error");
      });
    });
  });

  describe("delete a program", () => {
    describe("bad id", () => {
      it("should return a 400 status code and have an error type", async () => {
        const { statusCode, body } = await supertest.delete(
          "/api/programs/nonsense"
        );
        expect(statusCode).toBe(400);
        expect(body.type).toBe("Error");
      });
    });
  });
});
