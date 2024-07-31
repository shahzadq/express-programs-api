// typescript has issues with normal array includes method
export const arrayIncludes = (
  arr: unknown[] | readonly unknown[],
  element: unknown
) => arr.includes(element);
