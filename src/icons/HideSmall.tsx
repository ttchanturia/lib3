import * as React from "react";
import { SVGProps } from "react";

const SvgHideSmall = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.47 12.709a.75.75 0 1 0 1.06 1.06l1.32-1.318c.936.473 1.998.799 3.15.799 2.276 0 4.201-1.272 5.502-2.443a14.779 14.779 0 0 0 1.967-2.171 8.764 8.764 0 0 0 .142-.201l.009-.013.003-.004v-.001S15.625 8.415 15 8l.624.416a.75.75 0 0 0 0-.832L15 8l.624-.416v-.001l-.002-.001-.002-.004-.009-.013a4.958 4.958 0 0 0-.142-.2 14.781 14.781 0 0 0-1.967-2.172c-.234-.211-.488-.425-.761-.634l1.042-1.042a.75.75 0 1 0-1.06-1.061L2.47 12.709Zm9.2-7.079L9.906 7.394a2 2 0 0 1-2.513 2.513L5.98 11.32c.639.266 1.317.429 2.021.429 1.724 0 3.299-.978 4.498-2.057A13.269 13.269 0 0 0 14.07 8a13.268 13.268 0 0 0-1.572-1.693c-.26-.233-.536-.462-.828-.677ZM8 4.25c.259 0 .514.022.766.063l1.238-1.238A6.508 6.508 0 0 0 8 2.75c-2.276 0-4.201 1.272-5.502 2.443A14.774 14.774 0 0 0 .531 7.364a8.687 8.687 0 0 0-.142.2l-.009.014-.002.004-.001.001L1 8l-.624-.416a.75.75 0 0 0 0 .832L1 8l-.624.416v.001l.002.001.002.004.009.013a5.188 5.188 0 0 0 .142.2A14.843 14.843 0 0 0 2.379 10.7l1.062-1.061A13.315 13.315 0 0 1 1.931 8a13.275 13.275 0 0 1 1.572-1.693C4.7 5.228 6.275 4.25 7.999 4.25Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHideSmall;
