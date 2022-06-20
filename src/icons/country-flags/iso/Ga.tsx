import * as React from "react";
import { SVGProps } from "react";

const SvgGa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#GA_svg__a)">
      <path
        d="M46.507 32.348A23.946 23.946 0 0 0 48 24c0-2.936-.528-5.748-1.493-8.348L24 13.565 1.493 15.652A23.95 23.95 0 0 0 0 24c0 2.936.528 5.748 1.493 8.348L24 34.435l22.507-2.087Z"
        fill="#FFDA44"
      />
      <path
        d="M24 48c10.32 0 19.116-6.513 22.507-15.652H1.493C4.883 41.487 13.68 48 24 48Z"
        fill="#0052B4"
      />
      <path
        d="M24 0C13.68 0 4.884 6.513 1.493 15.652h45.014C43.117 6.513 34.32 0 24 0Z"
        fill="#6DA544"
      />
    </g>
    <defs>
      <clipPath id="GA_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGa;
