import * as React from "react";
import { SVGProps } from "react";

const SvgTrinidadAndTobago = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#trinidad-and-tobago_svg__a)">
      <path
        d="M12.995 2.665a23.985 23.985 0 0 0-5.967 4.364 23.984 23.984 0 0 0-4.364 5.966l15.432 16.908 16.908 15.432a23.989 23.989 0 0 0 5.967-4.364 23.988 23.988 0 0 0 4.363-5.966L29.902 18.097 12.995 2.665Z"
        fill="#F0F0F0"
      />
      <path
        d="M40.972 40.971a24.144 24.144 0 0 0 2.695-3.208l-33.43-33.43a24.136 24.136 0 0 0-5.903 5.904l33.43 33.43a24.14 24.14 0 0 0 3.208-2.696Z"
        fill="#000"
      />
      <path
        d="M7.029 40.971c7.572 7.572 18.943 9.026 27.976 4.364l-32.34-32.34C-1.997 22.028-.543 33.4 7.03 40.971ZM40.971 7.029C33.4-.543 22.028-1.997 12.995 2.665l32.34 32.34c4.661-9.033 3.208-20.405-4.364-27.976Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="trinidad-and-tobago_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTrinidadAndTobago;
