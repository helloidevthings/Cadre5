import React from "react";
import Page from "../Page";
import HeroBasic from "../HeroBasic";
import WaveHR from "../Parts/WaveHR";
import LogoGrid from "../LogoGrid";
import ProjectCard from "../Parts/ProjectCard";

export default () => {
  const cards = [
    {
      title: "G2",
      leadin:
        "Program Management for Government Agencies.",
      descLg:
        "G2 was created for the National Nuclear Security Administration (NNSA) to integrate Headquarter and National Laboratory scope, schedule, budget, and metric information, creating a single repository of program data.",

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

    {
      title: "Mavnet",
      leadin:
        "Seamlessly Plan, Execute & Update Missions",
      descLg:
        "Mavnet makes it easy to plan and execute missions in real time for UAV and Rovers.",
      img: {
        src:
          "/images/mavnet/mavnet-project-image-card.png",
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
        title="Clients"
        img={{
          src: "/images/meeting2.png",
          alt: "People working in an office",
        }}
        svg="CirclesWhite"
      />
      <article className="blog center">
        <h3>
          We deliver value to our customers.
        </h3>
        <p>
          {" "}
          Whether that is a new venture like Idle
          Air, or a National Defense project with
          Oak Ridge National Lab. We create custom
          software solutions. We are able to
          leverage solutions from our experience
          with a variety of clients.
        </p>
        <hr></hr>
      </article>
      <LogoGrid />
      <WaveHR color="#ffffff" bg="#efefef" />
      <ProjectCard cards={cards} />
    </Page>
  );
};
