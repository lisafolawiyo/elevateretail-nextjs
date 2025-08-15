import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

 export const stripOuterTags = (str: string) => {
    return str
      .replace(/<[^>]*>/g, '')   // remove all tags
      .replace(/\n/g, '')        // remove newline characters
      .trim();  
  };