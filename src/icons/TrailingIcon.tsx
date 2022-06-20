import * as React from "react";
import { SVGProps } from "react";

const SvgTrailingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.53 7.53a.75.75 0 0 0-1.06-1.06L8 8.94 5.53 6.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3Z"
      fill="#fff"
    />
  </svg>
);

export default SvgTrailingIcon;
