import * as React from "react";
const LikeIconSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={25}
    height={25}
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      d="M21.5 5A7.46 7.46 0 0 0 16 7.406 7.46 7.46 0 0 0 10.5 5 7.488 7.488 0 0 0 3 12.5C3 21.542 16 27 16 27s13-5.458 13-14.5C29 8.333 25.636 5 21.5 5zM16 24.797C13.378 23.521 5 18.938 5 12.5 5 9.467 7.467 7 10.5 7c1.55 0 2.982.626 4.03 1.762l.735.797h1.47l.735-.797A5.425 5.425 0 0 1 21.5 7c3.033 0 5.5 2.467 5.5 5.5 0 6.438-8.378 11.021-11 12.297z"
      className="linesandangles_een"
    />
  </svg>
);
export default LikeIconSVG;
