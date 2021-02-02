import React from "react";
import Styles from "./styled";
import Button from "../Parts/Button";
import Image from "../Parts/Image";
import { useInView } from "react-intersection-observer";
import WaveLines from "../Svgs/WaveLines";
import AbstractPointGraph from "../Svgs/AbstractPointGraph";
import CircleRed from "../Svgs/CircleRed";
import ScrollArrow from "../Svgs/ScrollArrow";
import ImageRandom from "../ImageRandom";

export default ({ title, tagline, ctaText }) => {
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  const randomSrc = [
    "building-circle1",
    "building-circle2",
    "meeting-portrait-circle",
    "megan-working-circle",
    "meeting3-circle",
    "kensoffice-circle",
  ];
  const cycleImages = (images, step) => {
    images.forEach((image, index) =>
      setTimeout(() => {
        console.log(image);
        return <div></div>;
      }, step * (index + 1))
    );
    setTimeout(
      () => cycleImages(images, step),
      step * images.length
    );
  };

  return (
    <Styles>
      <article
        ref={ref}
        style={{ transitionDelay: `.2s` }}
        className={`fadeUp ${
          inView ? "active" : ""
        }`}
      >
        <CircleRed />
        <ImageRandom classes="itemTo bounce2" />

        {/* SOLUTION WITH MATH RANDOM */}
        {/* <Image
          classes="itemTo bounce2"
          src={`/images/${cycleImages(
            randomSrc,
            10000
          )}.png`}
          alt="images of Cadre5's building and staff"
        /> */}
        {/* randomSrc[
        Math.floor(
        Math.random() * randomSrc.length
        )
        ] */}
        {/* Original Solution: */}
        {/* <Image
          classes="itemTo bounce2"
          src="/images/building-circle1.png"
          alt="images of Cadre5's building and staff"
        /> */}

        <h2
          ref={ref}
          style={{ transitionDelay: `.6s` }}
          className={`fadeUp ${
            inView ? "active" : ""
          }`}
        >
          Welcome
        </h2>
        <h3
          style={{ transitionDelay: `.7s` }}
          ref={ref}
          className={`fadeUp ${
            inView ? "active" : ""
          }`}
        >
          We design and develop software for
          global leaders.{" "}
          <a href="./Projects">View Portfolio</a>
        </h3>
        {/* <Button
          themeColor="lightTheme"
          btnStyle="primary"
          text={`${ctaText}`}
          href="/Projects"
        /> */}
      </article>
      <ScrollArrow
        classes={`fadeUp scrollArrow ${
          inView ? "active" : ""
        }`}
      />
      <div className="svg-wrapper wave-lines">
        <WaveLines />
      </div>
      <div className="svg-wrapper abstract-graph">
        <AbstractPointGraph />
      </div>
    </Styles>
  );
};
