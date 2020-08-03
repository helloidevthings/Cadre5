import React from "react";
import Styles from "./styled";
import Image from "../Parts/Image";
import Title from "../Parts/Title";
import { useInView } from "react-intersection-observer";

export default ({ title, quote }) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });
  const partners = [
    { name: "Ken Lowry", title: "Senior Partner", img: "Ken" },
    { name: "Steve Hicks", title: "President & CEO", img: "Steve" },
    { name: "Chris O'Neal", title: "Senior Partner", img: "Chris" },
  ];
  return (
    <Styles>
      <Title title={title} />
      <div className="wrap">
        {partners.map(({ name = "", title = "", img = "" }, i) => (
          <article
            className={`item fadeUp ${inView ? "active" : ""}`}
            ref={ref}
            style={{ transitionDelay: `${i * 0.2}s` }}
          >
            <Image src={`/images/${img}.png`} alt={name} />
            <div className="title-wrap">
              <h4>{name}</h4>
              <h5>{title}</h5>
            </div>
          </article>
        ))}
        <blockquote>{quote}</blockquote>
      </div>
    </Styles>
  );
};
