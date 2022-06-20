import * as React from "react";
import { SVGProps } from "react";

const SvgIo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M44 26.872c-2 0-2-1.828-4-1.828s-2 1.828-4 1.828-2-1.828-4-1.828-2 1.828-4 1.828-2-1.828-4-1.828-2 1.828-4 1.828-2-1.828-4-1.828-2 1.828-4 1.828-2-1.828-4-1.828-2 1.828-4 1.828c-1.99 0-2-1.808-3.969-1.828.056 1.098.187 2.176.385 3.23C2.01 28.508 2.15 30.072 4 30.072c2 0 2-1.828 4-1.828s2 1.828 4 1.828 2-1.828 4-1.828 2 1.828 4 1.828 2-1.828 4-1.828 2 1.828 4 1.828 2-1.828 4-1.828 2 1.828 4 1.828 2-1.828 4-1.828 2 1.828 4 1.828c1.85 0 1.99-1.564 3.584-1.798.198-1.054.33-2.132.385-3.23-1.968.02-1.98 1.828-3.97 1.828ZM40 31.304c-2 0-2 1.83-4 1.83s-2-1.83-4-1.83-2 1.83-4 1.83-2-1.83-4-1.83-2 1.83-4 1.83-2-1.83-4-1.83-2 1.83-4 1.83-2-1.83-4-1.83-2 1.83-4 1.83c-1.474 0-1.863-.993-2.765-1.515a23.884 23.884 0 0 0 2.131 4.643c.188.045.396.071.634.071 2 0 2-1.828 4-1.828s2 1.828 4 1.828 2-1.828 4-1.828 2 1.828 4 1.828 2-1.828 4-1.828 2 1.828 4 1.828 2-1.828 4-1.828 2 1.828 4 1.828 2-1.828 4-1.828 2 1.828 4 1.828c.237 0 .446-.026.633-.071a23.873 23.873 0 0 0 2.131-4.643c-.902.523-1.291 1.514-2.765 1.514-2 0-2-1.829-4-1.829ZM47.441 18.838c-1.461.304-1.648 1.773-3.442 1.773-2 0-2-1.828-4-1.828s-2 1.828-4 1.828-2-1.828-4-1.828-2 1.828-4 1.828-2-1.828-4-1.828c-1.08 0-1.577.533-2.12 1.024v3.2c.543-.49 1.04-1.024 2.12-1.024 2 0 2 1.828 4 1.828 2.001 0 2.001-1.828 4-1.828 2 0 2 1.828 4 1.828s2-1.828 4-1.828 2 1.828 4 1.828c1.851 0 1.99-1.564 3.585-1.798.102 0 .216 0 .333-.002a23.95 23.95 0 0 0-.476-3.173ZM45.688 13.713c-.414.348-.893.638-1.688.638-2 0-2-1.83-4-1.83s-2 1.83-4 1.83-2-1.83-4-1.83-2 1.83-4 1.83-2-1.83-4-1.83c-1.081 0-1.578.535-2.122 1.025v3.2c.544-.49 1.04-1.024 2.122-1.024 2 0 2 1.828 4 1.828s2-1.828 4-1.828 2 1.828 4 1.828 2-1.828 4-1.828 2 1.828 4 1.828c1.419 0 1.832-.919 2.666-1.453-.284-.816-.61-1.611-.978-2.384ZM40.17 6.266A3.146 3.146 0 0 0 40 6.26c-2 0-2 1.829-4 1.829s-2-1.83-4-1.83-2 1.83-4 1.83-2-1.83-4-1.83c-1.081 0-1.578.535-2.122 1.026v3.2c.544-.491 1.04-1.025 2.121-1.025 2 0 2 1.829 4 1.829s2-1.829 4-1.829 2 1.829 4 1.829 2-1.829 4-1.829 2 1.829 4 1.829c.124 0 .239-.008.348-.02a24.114 24.114 0 0 0-4.177-5.004ZM30.134.793c-.549.493-1.045 1.036-2.134 1.036C26 1.829 26 0 24 0c-1.035 0-1.534.49-2.052.962v3.2C22.466 3.689 22.965 3.2 24 3.2c2 0 2 1.829 4 1.829S30 3.2 32 3.2s2 1.829 4 1.829c.84 0 1.326-.322 1.756-.696a23.886 23.886 0 0 0-7.622-3.54ZM28 45.655c-2 0-2-1.829-4-1.829s-2 1.829-4 1.829-2-1.829-4-1.829c-1.532 0-1.891 1.072-2.874 1.574a23.85 23.85 0 0 0 8.898 2.518c.492-.45.992-.892 1.975-.892.985 0 1.484.443 1.977.892a23.85 23.85 0 0 0 8.897-2.518c-.982-.502-1.341-1.574-2.873-1.574-2 0-2 1.829-4 1.829ZM36 39.394c-2 0-2-1.829-4-1.829s-2 1.829-4 1.829-2-1.829-4-1.829-2 1.829-4 1.829-2-1.829-4-1.829-2 1.829-4 1.829-2-1.829-4-1.829c-1.439 0-1.843.946-2.7 1.477a24.091 24.091 0 0 0 1.713 1.912c.271-.116.589-.189.986-.189 2 0 2 1.829 4 1.829s2-1.829 4-1.829 2 1.829 4 1.829 2-1.829 4-1.829 2 1.829 4 1.829 2-1.829 4-1.829 2 1.829 4 1.829 2-1.829 4-1.829c.398 0 .716.073.987.19a24.098 24.098 0 0 0 1.714-1.913c-.858-.53-1.262-1.477-2.7-1.477-2 0-2 1.829-4 1.829Z"
      fill="#0052B4"
    />
    <path d="M23.936 24H24v-.064l-.064.064Z" fill="#F0F0F0" />
    <path
      d="M24 12.522v7.05l-8.348-8.094L24 12.522ZM12.522 24h7.05l-7.05-9.391-1.044 7.304L12.522 24Z"
      fill="#0052B4"
    />
    <path
      d="M24 12.522V0h-.004C10.743.002 0 10.746 0 24h12.522v-7.051L19.572 24h4.364l.064-.064v-4.363l-7.051-7.051H24Z"
      fill="#F0F0F0"
    />
    <path
      d="M12.142 3.13a24.115 24.115 0 0 0-9.012 9.012V24h6.261V9.392H24V3.13H12.142Z"
      fill="#D80027"
    />
    <path d="m24 21.049-8.527-8.527h-2.951L24 24v-2.951Z" fill="#D80027" />
    <path d="M31.304 12.522h9.392L36 17.217l-4.696-4.695Z" fill="#6DA544" />
    <path
      d="M37.043 16.174h-2.087v5.739h2.087v-5.739ZM37.043 31.304h-2.087v5.74h2.087v-5.74Z"
      fill="#A2001D"
    />
    <path
      d="M42.261 28.174a3.13 3.13 0 0 0-5.217-2.333V24h1.043v-2.087h-1.043V20.87h-2.087v1.043h-1.044V24h1.044v1.841a3.13 3.13 0 0 0-4.174 4.665v1.842h10.435v-1.841a3.122 3.122 0 0 0 1.043-2.333Z"
      fill="#FFDA44"
    />
    <path
      d="M39.13 27.13c-.329 0-.56.145-.695.266l-1.392 1.246h-2.086l-1.392-1.246a1.045 1.045 0 0 0-1.39 1.556l.695.622v.687h6.26v-.687l.695-.622c.13-.117.35-.373.35-.778-.001-.575-.47-1.044-1.045-1.044Z"
      fill="#D80027"
    />
  </svg>
);

export default SvgIo;
