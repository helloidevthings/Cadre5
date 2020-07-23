import React from "react";

import Styles from "./styled";
export default ({ subheader, leadin, descLg, desc }) => (
  <Styles>
    <div className="date-wrap">
      <h4 className="date">{subheader}</h4>
    </div>
    <h3 className="leadin">{leadin}</h3>
    <hr />
    <p className="description--lg">{descLg}</p>
    {desc && <p className="description">{desc}</p>}
  </Styles>
);