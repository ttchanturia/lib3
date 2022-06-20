import * as React from "react";
import { SVGProps } from "react";

const SvgNorfolkIsland = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M34.434 2.381A23.905 23.905 0 0 0 23.999 0c-3.74 0-7.28.856-10.434 2.381L11.477 24l2.088 21.619A23.906 23.906 0 0 0 23.998 48c3.74 0 7.28-.856 10.435-2.381L36.521 24 34.434 2.381Z"
      fill="#F0F0F0"
    />
    <path
      d="M13.565 2.382C5.537 6.264 0 14.485 0 24c0 9.515 5.537 17.736 13.565 21.618V2.382ZM34.434 2.382v43.236C42.462 41.736 48 33.515 48 24c0-9.515-5.537-17.736-13.565-21.618ZM30.261 31.304l-6.26-19.826-6.262 19.826h4.696v5.218h3.13v-5.218h4.696Z"
      fill="#6DA544"
    />
  </svg>
);

export default SvgNorfolkIsland;
