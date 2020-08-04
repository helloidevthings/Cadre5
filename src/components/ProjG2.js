import React from "react";
import Project from "./Project";
import Page from "./Page";
import WaveHr from "./Parts/WaveHR";
import FeatureApp from "./FeatureApp";
import ProjectFeature from "./ProjectFeature";

const ProjResolution = () => {
  const details = [
    {
      subheader: "2007 • 2020",
      title: "G2",
      leadin: "Project management for government agencies.",
      descLg:
        "G2 integrates Headquarters and National Laboratory scope, schedule, budget, and metric information, creating a single repository of program data. ",

      img: {
        src: "/images/g2/g2_array2.png",
        alt: "g2 graphics",
      },
    },
  ];
  return (
    <Page>
      <Project details={details} />
      <WaveHr color="white" bg="#efefef"></WaveHr>
      <ProjectFeature
        themeColor="mediumTheme"
        introText={{
          title: "The Challenge",
          descLg:
            "The National Nuclear Security Administration maintains and enhances the safety, security, and effectiveness of U.S. nuclear capabilities and works globally to reduce nuclear proliferation and the danger from weapons of mass destruction.",
          desc: "They need a… detailed management system?",
          svg: "ChartArrow",
        }}
        iframe={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BEwz3IA8NQ8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        }
      />
      <ProjectFeature
        themeColor="mediumTheme"
        row="reverse"
        introText={{
          title: "The Challenge",
          descLg:
            "Healthcare providers who work in long-term care facilities work in a fast paced environment taking care of multiple residents throughout their shift",
          desc:
            "They need a system that is easy to learn and can be used quickly.",
          svg: "ChartArrow",
        }}
        img={{
          src: "/images/g2/responsive_graphic.png",
          alt: "",
        }}
      />
    </Page>
  );
};

export default ProjResolution;
