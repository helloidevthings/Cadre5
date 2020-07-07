import React from "react";

const IntroText = ({ subheader, leadin, descLg, desc }) => (
  <article className="IntroText">
    <div className="IntroText_date-wrap">
      <h4 className="IntroText_date">{subheader}</h4>
    </div>
    <h3 className="IntroText_leadin">{leadin}</h3>
    <hr />
    <p className="IntroText_description--lg">{descLg}</p>
    {desc && <p className="IntroText_description">{desc}</p>}
  </article>
);

export default IntroText;
