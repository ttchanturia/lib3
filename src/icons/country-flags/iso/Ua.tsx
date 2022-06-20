import * as React from "react";
import { SVGProps } from "react";

const SvgUa = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24" fill="#338AF3" />
  </svg>
);

export default SvgUa;
