export const httpSuccessStatus = {
  OK: 200,
} as const;

export const httpErrorStatus = {
  INTERNAL_SERVER_ERROR: 500,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
} as const;

export const httpStatus = {
  ...httpErrorStatus,
  ...httpSuccessStatus,
} as const;
