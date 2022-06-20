import * as React from "react";
import { SVGProps } from "react";

const SvgLv = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 0C12.913 0 3.582 7.52.828 17.74h46.347C44.42 7.52 35.089 0 24 0ZM24 48c11.09 0 20.42-7.52 23.174-17.74H.827C3.581 40.48 12.912 48 24.001 48Z"
      fill="#A2001D"
    />
  </svg>
);

export default SvgLv;
