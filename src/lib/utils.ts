import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

// __________Merge Tailwind + conditional classes__________
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
