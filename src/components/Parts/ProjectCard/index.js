import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "../Image";
import Styles from "./styled";
import Title from "../Title";

export default ({
  cards = [],
  themeColor,
  title = true,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });

  return (
    <Styles
      className={themeColor ? themeColor : ""}
    >
      {title && (
        <Title
          className="title"
          title="Other Projects"
        />
      )}
      <div
        className={`cards ${
          inView ? "active" : ""
        }`}
        ref={ref}
      >
        {cards.map(
          (
            {
              title,
              leadin,
              img = "",
              link = "",
              tags = [],
            },
            i
          ) => (
            <a
              href={link.href}
              key={i}
              style={{
                transitionDelay: `${0.2 * i}s`,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
              />
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
          )
        )}
      </div>
    </Styles>
  );
};
