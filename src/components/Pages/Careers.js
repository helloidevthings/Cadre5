import React from "react";
import Page from "../Page";
import HeroBasic from "../HeroBasic";

export default () => {
  // let el =
  //   document && document.getElementById("career");

  // if (document && !el) {
  //   el.id = "career";
  // }
  return (
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
      <iframe
        id="gnewtonjs"
        type="text/javascript"
        src="https://recruitingbypaycor.com/career/internalIframe.action?internal=true&clientId=8a7883c66613934801661bdfb1e02ad3&key=6e6a502b10acd334af10d43f8c75a70d"
        frameborder="0"
      ></iframe>
    </Page>
  );
};
