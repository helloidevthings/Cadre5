import React, { Fragment } from "react";
import Project from "./Project";
import Page from "./Page";
import WaveHr from "./Parts/WaveHR";
import ProjectFeature from "./ProjectFeature";
import projects from "../projectData";
import FeatureApp from "./FeatureApp";

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
        title: "Opportunity",
        desc:
          "RESolution knits together the disparate user interfaces as well as builds new modules to fill in system gaps in the research lifecycle.",
        descLg:
          "The responsive design makes It accessible from desktops, smartphones and tablets. RESolution's design provides an enjoyable and efficient user experience for the researcher.",
        svg: "ChartArrow",
      }}
      img={{
        src: "/images/resolution/responsive_ipad_phone.png",
        alt: "",
      }}
    />
    <ProjectFeature
      theme="medium"
      row="reverse"
      introText={{
        title: "Applications",
        descLg:
          "RESolution knits together the disparate user interfaces as well as builds new modules to fill in system gaps in the research lifecycle.",
        svg: "Wrench",
      }}
      img={{
        src: "/images/resolution/responsive_ipad_phone.png",
        alt: "",
      }}
    />
    <WaveHr color="#efefef" bg="white" />
    <FeatureApp />
  </Page>
);

export default ProjResolution;
