import { Locals } from "express";

export const createRequireLocal =
  <T>({ error, key }: { error: string; key: string }) =>
  (locals: Record<string, T>) => {
    if (typeof locals[key] === "undefined") throw new Error(error);

    return locals[key];
  };
