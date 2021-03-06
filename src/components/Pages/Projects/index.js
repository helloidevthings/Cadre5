import React from "react";
import Page from "../../Page";
import HeroBasic from "../../HeroBasic";
import ProjectCard from "../../Parts/ProjectCard";

export default () => {
  const cards1 = [
    {
      title: "G2",
      leadin: "Program Management for Government Agencies.",
      descLg:
        "G2 was created for the National Nuclear Security Administration (NNSA) to integrate Headquarter and National Laboratory scope, schedule, budget, and metric information, creating a single repository of program data.",

      img: {
        src: "/images/g2/g2-project-image-card1.png",
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
      title: "HealthMedEx",
      leadin: "Wireframing, Prototyping and Usability Testing",
      descLg:
        "HeathMEDX provides an all encompassing software platform to operate long-term care facilities. Their systems provide everything from point of care interfaces to enterprise reporting for assited living and nursing homes.",
      img: {
        src: "/images/healthmedex/healthmedex-project-card-image1.png",
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
      title: "RESolution",
      leadin: "Simplify Work. Improve Scientific Productivity.",
      img: {
        src: "/images/resolution/resolution-project-card-image1.png",
        alt: "resolution interface graphics",
      },
      link: {
        href: "./resolution",
      },
    },
    {
      title: "Research Data Collection System",
      leadin: "Data Acquisition & Aggregation System for Researchers",
      descLg: "Data acquisition and aggregation system for researchers",
      img: {
        src: "/images/research/research-project-image-card.png",
        alt: "g2 graphics",
      },
      link: {
        text: "View Project",
        href: "/researchdata",
        btnStyle: "secondary",
        themeColor: "dark",
        arrow: true,
      },
    },
    {
      title: "Mavnet",
      leadin: "Seamlessly Plan, Execute & Update Missions",
      descLg: "Mavnet makes it easy to plan and execute missions in real time for UAV and Rovers.",
      img: {
        src: "/images/mavnet/mavnet-project-image-card.png",
        alt: "mavnet interface graphics",
      },
      link: {
        text: "View Project",
        href: "./mavnet",
        btnStyle: "secondary",
        themeColor: "dark",
        arrow: true,
      },
    },
  ];
  return (
    <Page>
      <HeroBasic
        title="Featured Projects"
        v
        img={{
          src: "/images/office-wideangle-vibrant4.png",
          alt: "Cadre5 Building",
        }}
        svg="WavesWhite"
      />
      {/* <WaveHr color="white" bg="white" /> */}
      <ProjectCard cards={cards1} title={false} themeColor="lightTheme" />
      {/* <WaveHr color="white" bg="white" /> */}
    </Page>
  );
};
