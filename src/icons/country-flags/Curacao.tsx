import * as React from "react";
import { SVGProps } from "react";

const SvgCuracao = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#FFDA44"
    />
    <path
      d="M24 48c7.875 0 14.864-3.793 19.24-9.651H4.76C9.136 44.206 16.125 48 24 48ZM48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 2.838.494 5.56 1.398 8.088h45.203A23.954 23.954 0 0 0 48 24Z"
      fill="#0052B4"
    />
    <path
      d="m16.427 15.392 1.295 3.986h4.191l-3.39 2.463 1.294 3.986-3.39-2.464-3.39 2.464 1.295-3.986-3.39-2.463h4.19l1.295-3.986ZM9.23 11.218l.777 2.392h2.514l-2.034 1.478.777 2.391-2.034-1.478-2.034 1.478.777-2.391-2.034-1.478h2.514l.777-2.392Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgCuracao;
