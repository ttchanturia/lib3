import * as React from "react";
import { SVGProps } from "react";

const SvgRapaNui = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#FCFCFC"
    />
    <path
      d="M31.303 19.826v2.087h2.864a12.58 12.58 0 0 1-4.637 3.93 2.61 2.61 0 0 0-4.424 1.238 12.655 12.655 0 0 1-2.214 0 2.61 2.61 0 0 0-4.425-1.237 12.58 12.58 0 0 1-4.637-3.931h2.864v-2.087H9.39c0 8.068 6.54 14.609 14.608 14.609 8.069 0 14.609-6.54 14.609-14.609h-7.304Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgRapaNui;
