import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownMedium = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 5.959a1 1 0 1 0-2 0v11.586l-4.293-4.293a1 1 0 0 0-1.414 1.414l6 6a.997.997 0 0 0 1.414 0l.002-.002.002-.002 5.996-5.996a1 1 0 0 0-1.414-1.414L13 17.545V5.959Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowDownMedium;
