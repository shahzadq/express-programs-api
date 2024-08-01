import { constructErrorJson, constructSuccessJson } from "~/helpers/router";

describe("construct success json", () => {
  it("no content should return an object with a type", () => {
    expect(constructSuccessJson()).toStrictEqual({ type: "Success" });
  });

  it("content should return an object with a type and data", () => {
    expect(constructSuccessJson({ data: {} })).toStrictEqual({
      type: "Success",
      data: {},
    });
  });
});

describe("construct error json", () => {
  it("should return an object with a type and message", () => {
    expect(constructErrorJson({ message: "Some error" })).toStrictEqual({
      type: "Error",
      message: "Some error",
    });
  });
});
