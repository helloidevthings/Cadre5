import * as React from "react";

function ScrollArrow({ classes = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19.16}
      height={39.17}
      overflow="visible"
      className={`${classes}`}
    >
      <path
        d="M9.58 0v37.65m9.23-8.42l-9.23 9.23-9.23-9.23"
        fill="none"
        stroke="#ffffff"
        strokeMiterlimit={10}
      />
    </svg>
  );
}

export default ScrollArrow;
