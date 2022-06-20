import * as React from "react";
import { SVGProps } from "react";

const SvgId = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24" fill="#A2001D" />
  </svg>
);

export default SvgId;
