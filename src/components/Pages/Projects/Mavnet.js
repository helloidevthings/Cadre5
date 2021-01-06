import React from "react";
import Project from "../../Project";
import Page from "../../Page";
import WaveHr from "../../Parts/WaveHR";
import ProjectFeature from "../../ProjectFeature";
import ProjectsRelated from "../../ProjectsRelated";
import FeatureApp from "../../FeatureApp";

const Mavnet = () => {
  const details = [
    {
      subheader: "2007 • 2020",
      title: "Mavnet",
      leadin:
        "Seamlessly Plan, Execute, & Update Missions",
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
          src: "/images/mavnet/mission_path2.png",
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
      <WaveHr color="white" bg="#efefef" />
      <ProjectsRelated />
    </Page>
  );
};

export default Mavnet;
