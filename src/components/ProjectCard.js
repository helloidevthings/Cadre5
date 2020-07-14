import React from "react";
import Image from "./Parts/Image";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, leadin, img = "", link = "" }) => (
  <a className="ProjectCard_link" href={link.href}>
    <article className="ProjectCard">
      <div className="ProjectCard_text">
        <h3 className="ProjectCard_title">{title}</h3>
        <p className="ProjectCard_leadin">{leadin}</p>
        <ul className="ProjectCard_tags">
          <li>Government</li>
          <li>Health</li>
        </ul>
      </div>
      <Image src={img.src} alt={img.alt} base="ProjectCard" />
    </article>
  </a>
);

export default ProjectCard;
