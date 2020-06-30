import React from "react";
import Image from "./Parts/Image";

const ProjectsRelated = ({ projTitle, projLeadin, imgsrc, imgalt, tags }) => (
  <section className="ProjectsRelated">
    <article className="Project">
      <div className="header">
        <h2 className="ProjectsRelated_title">{projTitle}</h2>
        <h3 className="ProjectsRelated_leadin">{projLeadin}</h3>
        <ul className="ProjectsRelated_tags">
          <li>{tags}</li>
        </ul>
      </div>
      <Image src="imgsrc" alt="imgalt" base="ProjectsRelated" />
    </article>
  </section>
);

export default ProjectsRelated;
