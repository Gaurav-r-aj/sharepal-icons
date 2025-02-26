import * as React from "react";

const SvgIconDummy = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="4"
    height="4"
    fill="none"
    viewBox="0 0 4 4"
      {...props}
   className={`sharepal-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true"
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M0 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0M2 .444a1.556 1.556 0 1 0 0 3.112A1.556 1.556 0 0 0 2 .444"
      clipRule="evenodd"
    ></path>
    <path
      fill="#000"
      d="M.444 2a1.556 1.556 0 1 1 3.112 0A1.556 1.556 0 0 1 .444 2"
    ></path>
  </svg>
);

export default SvgIconDummy;
