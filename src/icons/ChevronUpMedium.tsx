import * as React from "react";
import { SVGProps } from "react";

const SvgChevronUpMedium = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.707 13.364a1 1 0 1 0 1.414 1.414l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414-1.414l-5.657-5.657a1 1 0 0 0-1.414 0l-5.657 5.657Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChevronUpMedium;