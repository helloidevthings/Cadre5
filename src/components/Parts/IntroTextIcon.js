import React from "react";

const base = "IntroTextIcon";
const IntroTextIcon = ({ icon, title, descLg, desc }) => (
  <div className={base}>
    <div className={`${base}_text`}>
      <div className={`${base}_icon`}>{icon}</div>
      <h3>{title}</h3>
    </div>
    <p className={`${base}_descLg`}>{descLg}</p>
    <p className={`${base}_desc`}>{desc}</p>
  </div>
);

export default IntroTextIcon;
