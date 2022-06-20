import * as React from "react";
import { SVGProps } from "react";

const SvgSpinnerMedium = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "auto",
      display: "block",
      shapeRendering: "auto",
    }}
    width="1em"
    height="1em"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      r={24}
      strokeDasharray="113.09733552923255 39.69911184307752"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      />
    </circle>
  </svg>
);

export default SvgSpinnerMedium;
