import React from "react";
import ProjectCard from "../Parts/ProjectCard";
import Styles from "./styled";
import Title from "../Parts/Title";

export default ({
  projTitle,
  projLeadin,
  img = "",
  tags,
}) => {
  const cards = [
    {
      title: "G2",
      leadin:
        "Project management for government agencies.",
      descLg:
        "G2 integrates Headquarters and National Laboratory scope, schedule, budget, and metric information, creating a single repository of program data. ",

      img: {
        src:
          "/images/g2/g2-project-image-card1.png",
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
      leadin:
        "Wireframing, Prototyping and Usability Testing",
      descLg:
        "HeathMEDX provides an all encompassing software platform to operate long-term care facilities. Their systems provide everything from point of care interfaces to enterprise reporting for assited living and nursing homes.",
      img: {
        src:
          "/images/healthmedex/healthmedex-project-card-image1.png",
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
      leadin:
        "Simplify Work. Improve Scientific Productivity.",
      img: {
        src:
          "/images/resolution/resolution-project-card-image1.png",
        alt: "resolution interface graphics",
      },
      link: {
        href: "./resolution",
      },
    },
  ];
  return (
    <Styles>
      <Title
        className="title"
        title="Other Projects"
      />
      <ProjectCard cards={cards} />
    </Styles>
  );
};
