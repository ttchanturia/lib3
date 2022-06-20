import * as React from "react";
import { SVGProps } from "react";

const SvgVerticalDotsMedium = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 5.876a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgVerticalDotsMedium;
