import React, { Fragment } from "react";
import Styles from "./styled";

export default ({ logos = [] }) => {
  return (
    <Fragment>
      {logos.map(({ type, name, alt, link, delay = false }, i) => (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Styles
            src={`/images/logos/${type}/${name}.png`}
            alt={`${alt} Logo`}
            key={i}
            className="logo"
            style={{
              transitionDelay: `${delay === true ? 0.1 * i : "0"}s `,
            }}
          />
        </a>
      ))}
    </Fragment>
  );
};
