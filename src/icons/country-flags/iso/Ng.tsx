import * as React from "react";
import { SVGProps } from "react";

const SvgNg = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 24c0 10.32 6.513 19.116 15.652 22.507V1.493C6.513 4.883 0 13.68 0 24ZM48 24c0-10.319-6.513-19.116-15.652-22.507v45.014C41.487 43.117 48 34.32 48 24Z"
      fill="#6DA544"
    />
  </svg>
);

export default SvgNg;
