import React, { Fragment } from "react";
import Styles from "./styled";

export default ({ logos = [] }) => {
  return (
    <Fragment>
      {logos.map(({ type, name, alt }, i) => (
        <Styles
          src={`/images/logos/${type}/${name}.png`}
          alt={`${alt} Logo`}
          key={i}
          className="logo"
          style={{ transitionDelay: `${0.1 * i}s` }}
        />
      ))}
    </Fragment>
  );
};
