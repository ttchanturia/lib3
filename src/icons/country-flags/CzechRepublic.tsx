import * as React from "react";
import { SVGProps } from "react";

const SvgCzechRepublic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#czech-republic_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M21.913 24S7.043 40.974 7.029 40.97A23.925 23.925 0 0 0 24 48c13.255 0 24-10.745 24-24H21.913Z"
        fill="#D80027"
      />
      <path
        d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94L23.999 24 7.03 7.03Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="czech-republic_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCzechRepublic;
