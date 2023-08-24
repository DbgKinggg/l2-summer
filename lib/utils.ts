import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function copyToClipboard(address: string) {
  navigator.clipboard.writeText(address);
}

// function that will take in a string and truncate the middle part of it, the length of starting and ending part are pass in as props
// e.g. "0x1234567890abcdef" => "0x1234...cdef"
function truncateMiddle(str: string, start: number = 6, end: number = 6) {
  if (str.length <= start + end) {
    return str;
  }
  return str.slice(0, start) + "..." + str.slice(str.length - end);
}

export {cn, copyToClipboard, truncateMiddle};
