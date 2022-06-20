import * as React from "react";
import { SVGProps } from "react";

const SvgTrailingArrowSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.333 7.333a.667.667 0 0 0 0 1.334h7.752l-2.89 2.889a.667.667 0 1 0 .943.943L13.136 8.5l.002-.002a.667.667 0 0 0 0-.943l-.002-.002-3.998-3.998a.667.667 0 1 0-.943.943l2.835 2.834H3.333Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTrailingArrowSmall;
