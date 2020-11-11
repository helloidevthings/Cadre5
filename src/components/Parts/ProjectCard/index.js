import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "../Image";
import Styles from "./styled";

export default ({ cards = [], themeColor }) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Styles className={themeColor ? themeColor : ""}>
      <div className={`cards ${inView ? "active" : ""}`} ref={ref}>
        {cards.map(({ title, leadin, img = "", link = "", tags = [] }, i) => (
          <a
            href={link.href}
            key={i}
            style={{ transitionDelay: `${0.2 * i}s` }}
          >
                        <Image src={img.src} alt={img.alt} />
            <div className="text">
              <h3>{title}</h3>
              <p>{leadin}</p>
              <ul className="tags">
                {tags.map(({ type }, i) => (
                  <li className={type} key={i}>
                    {type}
                  </li>
                ))}
              </ul>
            </div>

          </a>
        ))}
      </div>
    </Styles>
  );
};
