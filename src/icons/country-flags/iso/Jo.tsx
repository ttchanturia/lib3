import * as React from "react";
import { SVGProps } from "react";

const SvgJo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#JO_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M14.61 15.652h31.898C43.117 6.513 34.32 0 24 0A23.922 23.922 0 0 0 7.03 7.03l7.578 8.622Z"
        fill="#000"
      />
      <path
        d="M14.61 32.348h31.898C43.117 41.487 34.32 48 24 48a23.922 23.922 0 0 1-16.97-7.03l7.578-8.622Z"
        fill="#6DA544"
      />
      <path
        d="M7.029 7.03c-9.373 9.372-9.373 24.568 0 33.94L23.999 24 7.03 7.03Z"
        fill="#D80027"
      />
      <path
        d="m9.526 18.783 1.317 2.754 2.975-.688-1.332 2.747 2.391 1.897-2.978.672.009 3.052-2.382-1.91-2.382 1.91.009-3.052-2.979-.672 2.392-1.897-1.332-2.747 2.975.688 1.317-2.754Z"
        fill="#F0F0F0"
      />
    </g>
    <defs>
      <clipPath id="JO_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgJo;
