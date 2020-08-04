import React from "react";
import Project from "./Project";
import Page from "./Page";
import WaveHr from "./Parts/WaveHR";
import Title from "./Parts/Title";
import ProjectsRelated from "./ProjectsRelated";
import ProjectCard from "./Parts/ProjectCard";

export default () => {
  const resolution = [
    {
      subheader: "Featured Project",
      title: "RESolution",
      leadin: "Simplify Work. Improve Scientific Productivity.",
      descLg:
        "RESolution was created for Oak Ridge National Laboratory which is the largest US Department of Energy science and energy laboratory.",
      img: {
        src: "/images/resolution/anothergraph.png",
        alt: "resolution interface graphics",
      },
      link: {
        themeColor: "dark",
        btnStyle: "secondary",
        text: "View Project",
        href: "/resolution",
        arrow: true,
      },
    },
  ];
  const cards = [
    {
      subheader: "2007 • 2020",
      title: "G2",
      leadin: "Project management for government agencies.",
      descLg:
        "G2 integrates Headquarters and National Laboratory scope, schedule, budget, and metric information, creating a single repository of program data. ",

      img: {
        src: "/images/g2-screen-array.png",
        alt: "g2 graphics",
      },
      link: {
        text: "View Project",
        href: "/g2",
        btnStyle: "secondary",
        themeColor: "dark",
        arrow: true,
      },
    },
    {
      subheader: "2007 • 2020",
      title: "HealthMedEx",
      leadin: "Wireframing, Prototyping and Usability Testing",
      descLg:
        "HeathMEDX provides an all encompassing software platform to operate long-term care facilities. Their systems provide everything from point of care interfaces to enterprise reporting for assited living and nursing homes.",
      img: {
        src: "/images/healthmedex/healthmedex1.png",
        alt: "resolution interface graphics",
      },
      link: {
        text: "View Project",
        href: "./healthmedex",
        btnStyle: "secondary",
        themeColor: "dark",
        arrow: true,
      },
    },
    {
      title: "Resolution",
      leadin: "Simplify Work. Improve Scientific Productivity.",
      img: {
        src: "/images/graph-full-min.png",
        alt: "resolution interface graphics",
      },
      link: {
        href: "./resolution",
      },
    },
  ];
  return (
    <Page>
      <Title title="Our Projects" />
      <WaveHr color="white" bg="#efefef" />
      <ProjectCard cards={cards} />
      <Project details={resolution} />
    </Page>
  );
};
