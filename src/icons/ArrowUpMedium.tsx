import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpMedium = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 19.959a1 1 0 1 0 2 0V8.373l4.293 4.293a1 1 0 1 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-.005.005-5.995 5.995a1 1 0 1 0 1.414 1.414L11 8.373V19.96Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowUpMedium;
