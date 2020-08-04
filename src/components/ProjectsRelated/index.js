import React from "react";
import ProjectCard from "../Parts/ProjectCard";
import Styles from "./styled";
import Title from "../Parts/Title";

export default ({ projTitle, projLeadin, img = "", tags }) => {
  const cards = [
    {
      subheader: "2007 • 2020",
      title: "G2",
      leadin: "Project management for government agencies.",
      descLg:
        "G2 integrates Headquarters and National Laboratory scope, schedule, budget, and metric information, creating a single repository of program data. ",

      img: {
        src: "/images/g2/card_graphic.png",
        alt: "g2 graphics",
      },
      link: {
        text: "View Project",
        href: "/g2",
        btnStyle: "secondary",
        themeColor: "dark",
        arrow: true,
      },
      tags: [
        {
          type: "Government",
        },
      ],
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
      tags: [
        {
          type: "Medical",
        },
        {
          type: "User Experience",
        },
      ],
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
      tags: [
        {
          type: "Government",
        },
        {
          type: "User Experience",
        },
      ],
    },
  ];
  return (
    <Styles>
      <Title className="title" title="Other Projects" />
      <ProjectCard cards={cards} />
    </Styles>
  );
};
