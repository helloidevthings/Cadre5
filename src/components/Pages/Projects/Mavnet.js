import React from "react";
import Project from "../../Project";
import Page from "../../Page";
import WaveHr from "../../Parts/WaveHR";
import BlogText from "../../Parts/BlogText";
import ProjectFeature from "../../ProjectFeature";
import ProjectsRelated from "../../ProjectsRelated";
import FeatureApp from "../../FeatureApp";
import ProjectCard from "../../Parts/ProjectCard";

const Mavnet = () => {
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
      title: "Research Data Collection System",
      leadin:
        "Data Acquisition & Aggregation System for Researchers",
      descLg:
        "Data acquisition and aggregation system for researchers",
      img: {
        src:
          "/images/research/research-project-image-card.png",
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
  ];
  const details = [
    {
      title: "Mavnet",
      leadin:
        "A Collaboration with Oak Ridge National Lab",
      descLg:
        "The Multimodal Autonomous Vehicle Network executes missions in real time for UAV and Rovers.",
      desc:
        "Multiple individuals can control missions using various devices and networks. Real time updates to the map give each mission the flexibility to change with the terrain.",
      img: {
        src: "/images/mavnet/mavnet_graph2.png",
        alt: "resolution interface graphics",
      },
    },
  ];
  return (
    <Page>
      <Project details={details} />
      <WaveHr
        color="white"
        bg="#383838"
      ></WaveHr>{" "}
      <ProjectFeature
        themeColor="darkTheme"
        introText={{
          title: "Missions",
          descLg:
            "The user adds way points to the map with commands, the rover or drone then completes the objectives.",
          desc:
            "Missions can be controlled by multiple users in real time. Waypoints have geospatial recognition, in order for drones and rovers to safely navigate the terrain. ",
        }}
        img={{
          src: "/images/mavnet/rover-image.png",
          alt: "Mission Screenshot",
        }}
      />{" "}
      <FeatureApp
        img={{
          src: "/images/mavnet/mission.png",
          alt: "",
        }}
        themeColor="darkTheme"
      />
      <ProjectFeature
        themeColor="darkTheme"
        row="reverse"
        introText={{
          title: "Seemlessly Connected",
          descLg:
            "Each device can switch between Line of Sight, Wi-Fi, Cellular and Satellite links.",
          desc:
            "This can change depending on what signal is the strongest.",
        }}
        img={{
          src:
            "/images/mavnet/networks_icons.png",
          alt: "Image of the Networks",
        }}
      />
      <WaveHr color="#383838" bg="#383838" />
      <FeatureApp
        img={{
          src: "/images/mavnet/connection.png",
          alt: "",
        }}
        themeColor="darkTheme"
      />
      <WaveHr color="#383838" bg="#ffffff" />
      <ProjectFeature
        themeColor="lightTheme"
        introText={{
          title: "Drone Images",
          descLg:
            "The map shows a topographic view of the area. Mission planning can be flexible depending on the terrain. If a previous mission has been performed with LIDAR to map out the area, that data is captured and used the next mission.",
        }}
        img={{
          src:
            "/images/mavnet/mavnet_photo_landscape2.png",
          alt: "Mavnet Software Photo",
        }}
      />
      <WaveHr color="#ffffff" bg="#ffffff" />
      <BlogText textAlign="center">
        <h3>Project Details</h3>
        <p>
          This project was created in
          collaboration with Oak Ridge National
          Lab and Horizon 31. For product
          purchasing information see{" "}
          <a
            href="https://horizon31.com"
            target="_blank"
          >
            Horizon31
          </a>
          .
        </p>
      </BlogText>
      <WaveHr color="#ffffff" bg="#ffffff" />
      <WaveHr color="#ffffff" bg="#efefef" />
      <ProjectCard cards={cards} />
    </Page>
  );
};

export default Mavnet;
