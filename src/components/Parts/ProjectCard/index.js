import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "../Image";
import Styles from "./styled";

export default ({ cards = [] }) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Styles>
      <div className="cards">
        {cards.map(({ title, leadin, img = "", link = "", tags = [] }) => (
          <a href={link.href} ref={ref} className={inView ? "active" : ""}>
            <div className="text">
              <h3>{title}</h3>
              <p>{leadin}</p>
              <ul className="tags">
                {tags.map(({ type }) => (
                  <li className={type}>{type}</li>
                ))}
              </ul>
            </div>
            <Image src={img.src} alt={img.alt} />
          </a>
        ))}
      </div>
    </Styles>
  );
};
