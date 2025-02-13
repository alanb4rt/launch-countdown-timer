import { CountdownType } from "../types/countdown";

export const checkValue = (
  value: CountdownType["value"],
  unit: CountdownType["unit"]
): number => {
  switch (unit) {
    case "seconds":
    case "minutes":
      return value === 59 ? 0 : value + 1;
    case "hours":
      return value === 23 ? 0 : value + 1;
    default:
      return value + 1;
  }
};
