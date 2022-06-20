import * as React from "react";
import { SVGProps } from "react";

const SvgLa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M45.618 13.565C41.736 5.537 33.515 0 24 0 14.485 0 6.263 5.537 2.38 13.565L24 15.652l21.618-2.087ZM2.381 34.435C6.263 42.463 14.485 48 24 48s17.736-5.537 21.618-13.565L24 32.348 2.38 34.435Z"
      fill="#D80027"
    />
    <path
      d="M45.619 13.565H2.38A23.905 23.905 0 0 0 0 24c0 3.74.856 7.28 2.381 10.435h43.237A23.903 23.903 0 0 0 48 24c0-3.74-.856-7.28-2.381-10.435Z"
      fill="#0052B4"
    />
    <path
      d="M24 32.348a8.348 8.348 0 1 0 0-16.696 8.348 8.348 0 0 0 0 16.696Z"
      fill="#F0F0F0"
    />
  </svg>
);

export default SvgLa;
