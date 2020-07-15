import React from "react";
// import { useInView } from "react-intersection-observer";

const LogoGridItem = ({ type, name, alt }) => {
  // const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  return <img src={`/images/logos/${type}/${name}.png`} alt={`${alt} Logo`} />;
};

export default LogoGridItem;
