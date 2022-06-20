import * as React from "react";
import { SVGProps } from "react";

const SvgChevronUpSmall = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.47 8.47a.75.75 0 0 0 1.06 1.06L8 7.06l2.47 2.47a.75.75 0 0 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChevronUpSmall;
