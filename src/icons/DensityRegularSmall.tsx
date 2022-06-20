import * as React from "react";
import { SVGProps } from "react";

const SvgDensityRegularSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 0a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Zm0 8a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H1ZM0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm1 7a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDensityRegularSmall;
