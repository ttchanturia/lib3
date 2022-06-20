import * as React from "react";
import { SVGProps } from "react";

const SvgJp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 34.435c5.763 0 10.434-4.672 10.434-10.435 0-5.763-4.671-10.435-10.434-10.435-5.763 0-10.435 4.672-10.435 10.435 0 5.763 4.672 10.435 10.435 10.435Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgJp;
