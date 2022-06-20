import * as React from "react";
import { SVGProps } from "react";

const SvgFilterActiveMedium = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.126 7.959H5a1 1 0 0 0 0 2h9.126a4.01 4.01 0 0 1 0-2Zm1.228 4H8a1 1 0 1 0 0 2h8a1 1 0 0 0 .992-1.128 3.99 3.99 0 0 1-1.638-.872Zm-5.354 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z"
      fill="#312B78"
    />
    <path d="M20 8.959a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="#50E2D1" />
  </svg>
);

export default SvgFilterActiveMedium;
