import * as React from "react";
import { SVGProps } from "react";

const SvgGalapagosIslands = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#galapagos-islands_svg__a)">
      <path
        d="M48 24c0-2.936-.528-5.748-1.493-8.348L24 14.61 1.493 15.652A23.949 23.949 0 0 0 0 24c0 2.936.528 5.748 1.493 8.348L24 33.39l22.507-1.043A23.946 23.946 0 0 0 48 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 48c10.32 0 19.116-6.513 22.507-15.652H1.493C4.883 41.487 13.68 48 24 48Z"
        fill="#0052B4"
      />
      <path
        d="M1.493 15.652h45.015C43.115 6.513 34.319 0 24 0 13.681 0 4.884 6.513 1.493 15.652Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="galapagos-islands_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGalapagosIslands;
