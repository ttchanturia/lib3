import * as React from "react";
import { SVGProps } from "react";

const SvgMinusMedium = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 7.002h-1L7 7H2a1 1 0 0 0 0 2h5l1 .002h1V9h5a1 1 0 1 0 0-2H9l-.5.002Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMinusMedium;
