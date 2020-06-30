import React from "react";
import Image from "./Parts/Image";
import Title from "./Parts/Title";

const Featurette = ({ title, quote }) => (
  <section className="Featurette">
    <Title title={title} />
    <div className="Featurette_wrap">
      <article className="Featurette_item">
        <Image src="/images/Ken.png" alt="Ken Lowry" base="Featurette" />
        <div className="title-wrap">
          <h4>Ken Lowery</h4>
          <h5>Senior Partner</h5>
        </div>
      </article>
      <article className="Featurette_item">
        <Image src="/images/Steve.png" alt="Ken Lowry" base="Featurette" />
        <div className="title-wrap">
          <h4>Steve Hicks</h4>
          <h5>President :amp CEO</h5>
        </div>
      </article>
      <article className="Featurette_item">
        <Image src="/images/Chris.png" alt="Ken Lowry" base="Featurette" />
        <div className="title-wrap">
          <h4>Chris O'Neal</h4>
          <h5>Senior Partner</h5>
        </div>
      </article>
      <blockquote>{quote}</blockquote>
    </div>
  </section>
);

export default Featurette;
