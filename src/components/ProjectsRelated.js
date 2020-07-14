import React from "react";
import ProjectCard from "./ProjectCard";
import WaveHr from "./Parts/WaveHR";

const ProjectsRelated = ({ projTitle, projLeadin, img = "", tags }) => (
  <section className="ProjectsRelated">
    <h2 className="ProjectsRelated_title">Similar Projects</h2>
    <div className="ProjectsRelated_cards">
      <ProjectCard
        subheader="2007--2020"
        title="Resolution"
        leadin="Simplify Work. Improve Scientific Productivity."
        img={{
          src: "/images/graph-full-min.png",
          alt: "resolution interface graphics",
        }}
        link={{
          href: "./resolution",
        }}
      />
      <ProjectCard
        subheader="2007--2020"
        title="Resolution"
        leadin="Simplify Work. Improve Scientific Productivity."
        img={{
          src: "/images/graph-full-min.png",
          alt: "resolution interface graphics",
        }}
        link={{
          href: "./resolution",
        }}
      />
      <ProjectCard
        subheader="2007--2020"
        title="Resolution"
        leadin="Simplify Work. Improve Scientific Productivity."
        img={{
          src: "/images/graph-full-min.png",
          alt: "resolution interface graphics",
        }}
        link={{
          href: "./resolution",
        }}
      />
    </div>
  </section>
);

export default ProjectsRelated;
