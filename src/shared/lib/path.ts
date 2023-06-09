export const path = (obj: Record<string, any>, p: string[]) => {
  const [first, ...last] = p;
  if (last.length > 0) {
    return path(obj[first], last);
  }
  return obj?.[first];
};
