import {
  NextFunction as ExpressNextFunction,
  Request as ExpressRequest,
  Response as ExpressResponse,
} from "express";

export type ApiReturnType = "Success" | "Error";

type ConstructApiReturn<T extends ApiReturnType, O> = { type: T } & O;

export type ApiSuccessReturn = ConstructApiReturn<"Success", { data?: object }>;
export type ApiErrorReturn = ConstructApiReturn<"Error", { message: string }>;

export type ApiReturn = ApiErrorReturn | ApiSuccessReturn;

export type Response = ExpressResponse<ApiReturn>;
export type Request = ExpressRequest;
export type Next = ExpressNextFunction;
