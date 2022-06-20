import * as React from "react";
import { SVGProps } from "react";

const SvgLb = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 0C14.485 0 6.263 5.537 2.38 13.565h43.237C41.736 5.537 33.515 0 24 0ZM24 48c9.515 0 17.736-5.537 21.618-13.565H2.381C6.263 42.463 14.485 48 24 48Z"
      fill="#D80027"
    />
    <path
      d="m30.261 28.174-6.26-11.478-6.262 11.478h4.696v3.13h3.13v-3.13h4.696Z"
      fill="#6DA544"
    />
  </svg>
);

export default SvgLb;
