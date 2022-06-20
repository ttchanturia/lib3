import * as React from "react";
import { SVGProps } from "react";

const SvgEngland = (props: SVGProps<SVGSVGElement>) => (
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
      d="M47.797 20.87H27.13V.203a24.24 24.24 0 0 0-6.261 0V20.87H.203a24.237 24.237 0 0 0 0 6.261H20.87v20.667a24.223 24.223 0 0 0 6.261 0V27.13h20.667a24.22 24.22 0 0 0 0-6.261Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgEngland;
