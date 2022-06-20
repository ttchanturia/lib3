import * as React from "react";
import { SVGProps } from "react";

const SvgTemplate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 17a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1ZM12 12a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 22a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4ZM20 6H4v2h16V6ZM4 20V10h3v10H4Zm5 0V10h11v10H9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTemplate;
