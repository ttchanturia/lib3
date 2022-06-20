import * as React from "react";
import { SVGProps } from "react";

const SvgVn = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#D80027"
    />
    <path
      d="m24 12.522 2.59 7.971h8.381l-6.78 4.927 2.59 7.971-6.782-4.926-6.78 4.926 2.59-7.971-6.781-4.927h8.381L24 12.522Z"
      fill="#FFDA44"
    />
  </svg>
);

export default SvgVn;
