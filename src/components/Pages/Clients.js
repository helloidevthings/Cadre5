import React from "react";
import Page from "../Page";
import HeroBasic from "../HeroBasic";
import ProjectsRelated from "../ProjectsRelated";
import WaveHR from "../Parts/WaveHR";
import LogoGrid from "../LogoGrid";

export default () => {
  return (
    <Page>
      <HeroBasic
        title="Clients"
        img={{
          src: "/images/meeting2.png",
          alt: "People working in an office",
        }}
        svg="CirclesWhite"
      />
            <article className="blog center">
              <h3>We deliver value to our customers.</h3>
              <p> Whether that is a new venture like Idle Air, or a National Defense project with Oak Ridge National Lab. We create custom software solutions. We are able to leverage solutions from our experience with a variety of clients.</p>
           <hr></hr>
            </article>
            {/* <WaveHR />  */}
      <LogoGrid />
      <ProjectsRelated />
    </Page>
  );
};
