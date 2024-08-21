import { ApiErrorReturn, ApiSuccessReturn } from "~/types/api";

export const constructSuccessJson = (
  content?: Omit<ApiSuccessReturn, "type">
): ApiSuccessReturn => ({ type: "Success", ...content });

export const constructErrorJson = (
  content: Omit<ApiErrorReturn, "type">
): ApiErrorReturn => ({
  type: "Error",
  ...content,
});

export const internalServerErrorJson = constructErrorJson({
  message: "Something went wrong on our end.",
});
