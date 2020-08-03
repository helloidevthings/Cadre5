import React from "react";
import Page from "./Page";
import HeroBasic from "./HeroBasic";
import { useInView } from "react-intersection-observer";


export default () => {
const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

return (
  <Page>
    <HeroBasic
      title="Careers"
      img={{
        src: "/images/stock-of-working.png",
        alt: "People working in an office",
      }}
    />{" "}
    <section className="Careers"></section>
  </Page>
);
}
