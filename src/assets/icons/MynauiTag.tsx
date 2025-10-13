import type { SVGProps } from "react";
import React from "react";

export function MynauiTag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.472 5.5H14.77a2 2 0 0 1 1.396.568l5.35 5.216a1 1 0 0 1 0 1.432l-5.35 5.216a2 2 0 0 1-1.396.568H4.472c-.95 0-2.222-.541-2.222-1.625v-9.75C2.25 6.041 3.523 5.5 4.472 5.5"
      ></path>
    </svg>
  );
}
