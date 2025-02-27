import * as React from "react";

const SvgIconSearch = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
      {...props}
   className={`sharepal-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true"
  >
    <path
      fill="#000"
      d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
    ></path>
  </svg>
);

export default SvgIconSearch;
