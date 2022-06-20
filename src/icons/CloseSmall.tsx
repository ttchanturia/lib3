import * as React from "react";
import { SVGProps } from "react";

const SvgCloseSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m4 4 8 8m0-8-8 8" fill="currentColor" />
  </svg>
);

export default SvgCloseSmall;
