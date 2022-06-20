import * as React from "react";
import { SVGProps } from "react";

const SvgCountryPlaceholder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={10} cy={10} r={9.5} fill="#50E2D1" stroke="#50E2D1" />
  </svg>
);

export default SvgCountryPlaceholder;
