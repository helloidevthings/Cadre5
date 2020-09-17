import React from "react";
import Project from "../../Project";
import Page from "../../Page";
import WaveHr from "../../Parts/WaveHR";
import Title from "../../Parts/Title";
import ProjectCard from "../../Parts/ProjectCard";

export default () => {
  const cards1 = [
    {
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
      title: "RESolution",
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
  const cards2 = [
    {
      title: "Ru",
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
      title: "Ma",
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
  ];
  return (
    <Page>
      <Title title="Our Projects" themeColor="darkTheme" />
      <WaveHr color="#000000" bg="white" />
      <WaveHr color="white" bg="white" />
      <ProjectCard cards={cards1} />
      <ProjectCard cards={cards2} />
      <WaveHr color="white" bg="white" />
    </Page>
  );
};
