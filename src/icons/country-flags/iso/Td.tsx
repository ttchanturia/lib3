import * as React from "react";
import { SVGProps } from "react";

const SvgTd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#TD_svg__a)">
      <path
        d="M24 0c-2.936 0-5.748.528-8.348 1.493L14.61 24l1.043 22.507C18.252 47.472 21.064 48 24 48c2.936 0 5.748-.528 8.348-1.493L33.39 24 32.348 1.493A23.95 23.95 0 0 0 24 0Z"
        fill="#FFDA44"
      />
      <path
        d="M48 24c0-10.32-6.513-19.116-15.652-22.507v45.014C41.487 43.117 48 34.32 48 24Z"
        fill="#D80027"
      />
      <path
        d="M15.652 46.507V1.493C6.513 4.883 0 13.68 0 24c0 10.32 6.513 19.116 15.652 22.507Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="TD_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTd;
