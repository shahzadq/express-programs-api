import { Router, response, Response } from "express";
import {
  addProgram,
  deleteProgram,
  getAllPrograms,
} from "./data-access/programs";
import { programsInsertSchema, programsSchema } from "./data-access/db/schema";
import { ArrayElement } from "./types";
import { arrayIncludes } from "./utils";

const programsRouter = Router();

const responseStatusCodes = {
  error: [500, 400, 401],
  success: [200],
} as const;

type ErrorResponse = {
  status: ArrayElement<typeof responseStatusCodes.error>;
  message: string;
};
type SuccessResponse = {
  status: ArrayElement<typeof responseStatusCodes.success>;
  data?: object;
};

const res = ({ status, ...obj }: ErrorResponse | SuccessResponse) =>
  response.status(status).json({
    type: arrayIncludes(responseStatusCodes.error, status)
      ? "Error"
      : "Success",
    obj,
  });

const internalServerError = res({
  status: 500,
  message: "Something went wrong on our end.",
});

const success = res({ status: 200 });

programsRouter
  .route("/")
  .get(async () => {
    try {
      const programs = await getAllPrograms();
      return res({ status: 200, data: programs });
    } catch {
      return internalServerError;
    }
  })
  .post(async (req) => {
    try {
      const program = programsInsertSchema.parse(req.body);

      try {
        await addProgram(program);
        return success;
      } catch {
        return internalServerError;
      }
    } catch {
      return res({
        status: 400,
        message: "Input invalid. Check values provided are correct.",
      });
    }
  });

programsRouter
  .route("/:id")
  .put(async () => {})
  .delete(async (req) => {
    try {
      const id = programsSchema.shape.id.parse(req.params.id);
      try {
        await deleteProgram(id);
        return success;
      } catch {
        return internalServerError;
      }
    } catch {
      return res({
        status: 400,
        message: "Invalid id provided. Make sure id param is a number.",
      });
    }
  });

export { programsRouter };
