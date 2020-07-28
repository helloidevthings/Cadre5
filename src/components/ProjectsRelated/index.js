import React from "react";
import ProjectCard from "../Parts/ProjectCard";
import Styles from "./styled";

export default ({ projTitle, projLeadin, img = "", tags }) => {
  const cards = [
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
    <Styles>
      <h2 className="title">Similar Projects</h2>
      <ProjectCard cards={cards} />
    </Styles>
  );
};
