export const wrapIndex = (value: number, length: number) => {
  return ((value % length) + length) % length;
};
