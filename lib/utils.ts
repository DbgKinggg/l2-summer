import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function copyToClipboard(address: string) {
  navigator.clipboard.writeText(address);
}

export {cn, copyToClipboard};
