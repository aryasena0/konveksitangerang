import { twMerge } from "tailwind-merge";

export function clsxm(...args: string[]) {
  return twMerge(...args);
}
