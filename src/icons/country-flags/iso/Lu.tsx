import * as React from "react";
import { SVGProps } from "react";

const SvgLu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#LU_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 0C13.68 0 4.882 6.513 1.491 15.652h45.014C43.117 6.513 34.319 0 24 0Z"
        fill="#D80027"
      />
      <path
        d="M24 48c10.318 0 19.115-6.513 22.506-15.652H1.492C4.883 41.487 13.68 48 23.999 48Z"
        fill="#338AF3"
      />
    </g>
    <defs>
      <clipPath id="LU_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLu;
