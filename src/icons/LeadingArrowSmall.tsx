import * as React from "react";
import { SVGProps } from "react";

const SvgLeadingArrowSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.667 8.667a.667.667 0 0 0 0-1.334H4.943l2.862-2.862a.667.667 0 0 0-.943-.942l-4 4a.667.667 0 0 0 0 .942l4 4a.667.667 0 0 0 .943-.942L4.943 8.667h7.724Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLeadingArrowSmall;
