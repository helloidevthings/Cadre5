import React from "react";
import Styles from "./styled";
import Image from "../Parts/Image";
import Title from "../Parts/Title";

export default ({ title, quote }) => (
  <Styles>
    <Title title={title} />
    <div className="wrap">
      <article className="item">
        <Image src="/images/Ken.png" alt="Ken Lowry" />
        <div className="title-wrap">
          <h4>Ken Lowery</h4>
          <h5>Senior Partner</h5>
        </div>
      </article>
      <article className="item">
        <Image src="/images/Steve.png" alt="Ken Lowry" />
        <div className="title-wrap">
          <h4>Steve Hicks</h4>
          <h5>President :amp CEO</h5>
        </div>
      </article>
      <article className="item">
        <Image src="/images/Chris.png" alt="Ken Lowry" />
        <div className="title-wrap">
          <h4>Chris O'Neal</h4>
          <h5>Senior Partner</h5>
        </div>
      </article>
      <blockquote>{quote}</blockquote>
    </div>
  </Styles>
);
