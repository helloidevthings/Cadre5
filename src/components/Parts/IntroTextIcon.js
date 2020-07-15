import React from "react";
// import ChartArrow from "./Svgs/ChartArrow";

const base = "IntroTextIcon";
const IntroTextIcon = ({ icon, title, descLg, desc }) => (
  <div className={`${base} text-wrapper`}>
    <div className={`${base}_text`}>
      <div className={`${base}_icon`} style={{}}>
        <figure
          style={{
            background: `url(/images/svgs/${icon}.svg) no-repeat center center`,
          }}
        ></figure>
      </div>
      {/* <div className={`${base}_icon`}>{<`${icon}`/>}</div> */}
      <h2>{title}</h2>
    </div>
    <p className={`${base}_descLg`}>{descLg}</p>
    <p className={`${base}_desc`}>{desc}</p>
  </div>
);

export default IntroTextIcon;
