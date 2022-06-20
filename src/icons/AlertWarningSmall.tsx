import * as React from "react";
import { SVGProps } from "react";

const SvgAlertWarningSmall = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 1.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5ZM.25 8a7.75 7.75 0 1 1 15.5 0A7.75 7.75 0 0 1 .25 8ZM8 4.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 8 4.25ZM8.75 11a.75.75 0 0 0-1.5 0v.02a.75.75 0 0 0 1.5 0V11Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAlertWarningSmall;
