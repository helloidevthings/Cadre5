import React, { Fragment } from "react";
import Project from "./Project";
import Page from "./Page";
import WaveHr from "./Parts/WaveHR";
import ProjectFeature from "./ProjectFeature";
import projects from "../projectData";

const projData = { projects };

const ProjResolution = () => (
  <Page>
    <Project
      subheader="2007--2020"
      title="Resolution"
      leadin="Simplify Work. Improve Scientific Productivity."
      descLg="Currently researchers interact with 80 different systems that were designed from the perspective of the business unit."
      img={{
        src: "/images/graph-full-min.png",
        alt: "resolution interface graphics",
      }}
    />
    <WaveHr color="white" bg="#efefef"></WaveHr>
    <ProjectFeature
      theme="medium"
      introText={{
        icon: "Up Arrow",
        title: "Opportunity",
        desc:
          "RESolution knits together the disparate user interfaces as well as builds new modules to fill in system gaps in the research lifecycle.",
        descLg:
          "The responsive design makes It accessible from desktops, smartphones and tablets. RESolution's design provides an enjoyable and efficient user experience for the researcher.",
        svg: "Chart Arrow",
      }}
      img={{
        src: "/images/resolution/responsive_ipad_phone.png",
        alt: "",
      }}
    />
  </Page>
);

export default ProjResolution;
