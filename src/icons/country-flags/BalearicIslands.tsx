import * as React from "react";
import { SVGProps } from "react";

const SvgBalearicIslands = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#balearic-islands_svg__a)">
      <path
        d="M24 .001c13.256 0 24 10.745 24 24S37.257 48 24 48C10.747 48 .002 37.256.002 24"
        fill="#FFDA44"
      />
      <path
        d="M23.478 10.667h20.48a24.131 24.131 0 0 0-4.874-5.334H23.478v5.334ZM23.478 21.333h24.374A23.86 23.86 0 0 0 46.632 16H23.479v5.333ZM1.368 32h45.264a23.867 23.867 0 0 0 1.22-5.333H.148c.205 1.849.62 3.635 1.22 5.333ZM8.916 42.667h30.168a24.134 24.134 0 0 0 4.873-5.334H4.043a24.135 24.135 0 0 0 4.873 5.334Z"
        fill="#D80027"
      />
      <path d="M24 .001c-13.255 0-24 10.745-24 24h24v-24Z" fill="#4A1F63" />
      <path
        d="M19.826 12.522v2.087h-1.043v-2.087h-2.087v2.087h-1.044v-4.174h-4.174v4.174h-1.043v-2.087H8.348v2.087H7.304v-2.087H5.217v6.26h16.696v-6.26h-2.087Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="balearic-islands_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBalearicIslands;
