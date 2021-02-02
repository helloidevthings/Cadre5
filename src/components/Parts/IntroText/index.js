import React, { Fragment } from "react";

import Styles from "./styled";
export default ({
  subheader,
  leadin,
  descLg,
  desc,
}) => (
  <Styles>
    {subheader && (
      <div className="date-wrap">
        <h4 className="date">{subheader}</h4>
        <div></div>
      </div>
    )}

    {leadin && (
      <Fragment>
        <hr />

        <h3 className="leadin">{leadin}</h3>
        <hr />
      </Fragment>
    )}
    <p className="description--lg">{descLg}</p>
    {desc && (
      <p className="description">{desc}</p>
    )}
  </Styles>
);
