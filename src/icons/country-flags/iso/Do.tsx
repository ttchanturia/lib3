import * as React from "react";
import { SVGProps } from "react";

const SvgDo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
      fill="#F0F0F0"
    />
    <path
      d="M.827 30.26a24.042 24.042 0 0 0 16.912 16.913V30.261H.827Z"
      fill="#D80027"
    />
    <path
      d="M17.74.827A24.042 24.042 0 0 0 .826 17.739h16.912V.827Z"
      fill="#0052B4"
    />
    <path
      d="M47.173 17.74A24.042 24.042 0 0 0 30.261.826v16.912h16.912Z"
      fill="#D80027"
    />
    <path
      d="M30.26 47.173a24.042 24.042 0 0 0 16.913-16.912H30.261v16.912Z"
      fill="#0052B4"
    />
    <path
      d="M30.261 24a6.26 6.26 0 1 1-12.522 0c0-3.458 6.261-6.26 6.261-6.26s6.261 2.802 6.261 6.26Z"
      fill="#496E2D"
    />
    <path d="M17.74 24a6.26 6.26 0 1 1 12.521 0" fill="#0052B4" />
    <path
      d="M20.478 20.87v3.913a3.522 3.522 0 1 0 7.044 0V20.87h-7.044Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgDo;
