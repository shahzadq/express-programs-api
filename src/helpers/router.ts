export const constructSuccessJson = (data?: object) => ({
  type: "Success",
  data,
});

export const constructErrorJson = (message: string) => ({
  type: "Error",
  message,
});

export const internalServerErrorJson = constructErrorJson(
  "Something went wrong on our end."
);
