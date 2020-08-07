import React from "react";
import Project from "../Project";
import Page from "../Page";
import WaveHr from "../Parts/WaveHR";
import Title from "../Parts/Title";
import ProjectCard from "../Parts/ProjectCard";

export default () => {
  const cards = [
    {
      title: "Project Management Graphs",
      leadin:
        "We created a chart that quickly displays a project status. The project manager can easily see at a glance where a project is at.",

      img: {
        src: "/images/resolution/circle_chart3.png",
        alt: "g2 graphics",
      },
      link: {
        href: "/Posts/ProjectManagementGraphs",
      },
    },
    {
      title: "Using Iconography",
      leadin:
        "We used iconography to quickly speed up the process of communicating and training new health care workers.",

      img: {
        src: "/images/healthmedex/icons_2.png",
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
      title: "Project Management Graphs",
      leadin: "We solve issues with Project Management...",

      img: {
        src: "/images/resolution/circle_chart3.png",
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
      title: "Project Management Graphs",
      leadin: "We solve issues with Project Management...",

      img: {
        src: "/images/resolution/circle_chart3.png",
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
      title: "Project Management Graphs",
      leadin: "We solve issues with Project Management...",

      img: {
        src: "/images/resolution/circle_chart3.png",
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
      title: "Project Management Graphs",
      leadin: "We solve issues with Project Management...",

      img: {
        src: "/images/resolution/circle_chart3.png",
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
  ];
  return (
    <Page>
      <Title title="UX Blog" themeColor="darkTheme" />
      <WaveHr color="#000000" bg="white" />
      <WaveHr color="white" bg="white" />
      <ProjectCard cards={cards} themeColor="mediumTheme" />
      <WaveHr color="white" bg="white" />
    </Page>
  );
};
