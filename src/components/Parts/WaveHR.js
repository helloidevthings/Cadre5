import React from "react";

const WaveHr = ({ bg, wave }) => (
  <figure className="WaveHr" style={{ background: `${bg}` }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1353 90">
      <path
        d="M0 0v35.55a780.296 780.296 0 00417.81 37.82c75.4-14.03 148.41-39.17 223.6-54.42 107.1-21.73 218.64-23.04 325.58-.5 103.92 21.85 262.18 71.59 386.36 71.59V0z"
        fill={`${wave}`}
      />
    </svg>
  </figure>
);

export default WaveHr;
