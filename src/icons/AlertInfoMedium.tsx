import * as React from "react";
import { SVGProps } from "react";

const SvgAlertInfoMedium = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-1.5a1 1 0 0 1 1 1V16a1 1 0 1 1-2 0v-4.5a1 1 0 0 1 1-1ZM13 8a1 1 0 1 0-2 0v.02a1 1 0 1 0 2 0V8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAlertInfoMedium;