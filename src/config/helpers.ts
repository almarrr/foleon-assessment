export function allowed<T>(key: keyof T): keyof T {
  return key;
}

export const multiply = (number: number, number_two: number) => {
  return number * number_two;
};
