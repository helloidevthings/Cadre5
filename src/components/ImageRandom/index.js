import React, { useState, useEffect, useRef } from "react";
import Styles from "./styled";

export default ({ classes }) => {
  // src={`/images/${randomSrc[Math.floor(Math.random() * randomSrc.length)]}.png`}

  const imageSrc = [
    "building-circle1",
    "meeting3-circle",
    "kensoffice-circle",
    "megan-working-circle",
    "meeting-portrait-circle",
    "building-circle2",
  ];

  const [src, newSrc] = useState(0);
  // const refContainer = useRef(initialValue);

  useEffect(() => {
    if (src <= imageSrc.length - 2) {
      const interval = setInterval(() => {
        newSrc(src + 1);
      }, 4000);
      return () => clearInterval(interval);
    }
  });
  return (
    <Styles className={classes}>
      <img
        className="fadeImg"
        src={`/images/${imageSrc[src]}.png`}
        alt="employees writing on white boards and the Cadre5 building exterior"
      />
    </Styles>
  );
};
