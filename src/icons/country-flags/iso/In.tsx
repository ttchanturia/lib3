import * as React from "react";
import { SVGProps } from "react";

const SvgIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#IN_svg__a)">
      <path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Z"
        fill="#F0F0F0"
      />
      <path
        d="M24 0C14.485 0 6.263 5.537 2.38 13.565h43.237C41.736 5.537 33.515 0 24 0Z"
        fill="#FF9811"
      />
      <path
        d="M24 48c9.515 0 17.736-5.537 21.618-13.565H2.381C6.263 42.463 14.485 48 24 48Z"
        fill="#6DA544"
      />
      <path
        d="M24 32.348a8.348 8.348 0 1 0 0-16.696 8.348 8.348 0 0 0 0 16.696Z"
        fill="#0052B4"
      />
      <path
        d="M24 29.217a5.217 5.217 0 1 0 0-10.434 5.217 5.217 0 0 0 0 10.434Z"
        fill="#F0F0F0"
      />
      <path
        d="m24 17.562 1.61 3.65 3.965-.431L27.22 24l2.356 3.219-3.966-.431-1.61 3.65-1.609-3.65-3.966.43L20.781 24l-2.357-3.22 3.966.432 1.61-3.65Z"
        fill="#0052B4"
      />
    </g>
    <defs>
      <clipPath id="IN_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgIn;
