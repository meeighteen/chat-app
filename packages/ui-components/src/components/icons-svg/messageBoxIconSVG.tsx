import * as React from "react";
const MessageBoxIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="M0 0h24v24H0z" />
      <path
        stroke="#000"
        strokeLinejoin="round"
        d="M20 12a8 8 0 0 1-11.876 7c-.591-.328-3.637 1.462-4.124 1-.559-.53 1.458-3.33 1.07-4A8 8 0 1 1 20 12Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default MessageBoxIcon;
