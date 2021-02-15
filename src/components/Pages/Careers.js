import React from "react";
import Page from "../Page";
import HeroBasic from "../HeroBasic";

export default () => (
  <Page>
    <HeroBasic
      title="Careers"
      img={{
        src: "/images/kensoffice2.png",
        alt: "People working in an office",
      }}
      svg="WavesWhite"
    />

    <section className="Careers" />
    {/* <div>
      <script
        id="gnewtonjs"
        type="text/javascript"
        src="//recruitingbypaycor.com/career/iframe.action?clientId=8a7883c66613934801661bdfb1e02ad3"
      ></script>
    </div> */}
  </Page>
);
