import * as React from "react";
import { SVGProps } from "react";

const SvgGr = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 17.74h23.173a23.866 23.866 0 0 0-2.696-6.262H24v6.261ZM9.06 42.783h29.88a24.12 24.12 0 0 0 5.537-6.261H3.522a24.126 24.126 0 0 0 5.538 6.26ZM8.348 5.807a24.117 24.117 0 0 0-4.826 5.671h4.826V5.807Z"
      fill="#338AF3"
    />
    <path
      d="M24 24v-6.261h-9.391V24H8.348v-6.261H.827A24.027 24.027 0 0 0 0 24c0 2.166.289 4.265.827 6.26h46.346c.538-1.995.827-4.094.827-6.26H24ZM24 0c-3.333 0-6.507.68-9.392 1.908v9.57H24v-6.26h14.94A23.898 23.898 0 0 0 24 0Z"
      fill="#338AF3"
    />
  </svg>
);

export default SvgGr;
