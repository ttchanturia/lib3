import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRightMedium = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 11.959a1 1 0 1 0 0 2h11.627l-4.334 4.334a1 1 0 0 0 1.414 1.414l5.997-5.997.003-.003a1.001 1.001 0 0 0 0-1.414l-.003-.003-5.997-5.997a1 1 0 1 0-1.414 1.414l4.252 4.252H5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowRightMedium;
