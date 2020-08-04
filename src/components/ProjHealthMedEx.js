import React, { Fragment } from "react";
import Project from "./Project";
import Page from "./Page";
import WaveHr from "./Parts/WaveHR";
import ProjectFeature from "./ProjectFeature";
import ProjectsRelated from "./ProjectsRelated";
import projects from "../projectData";
import FeatureApp from "./FeatureApp";
import IconDesc from "./Parts/IconDesc";

const ProjHealthMedEx = () => {
  const details = [
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
    },
  ];
  return (
    <Page>
      <Project details={details} />
      <WaveHr color="white" bg="#efefef"></WaveHr>
      <ProjectFeature
        themeColor="mediumTheme"
        introText={{
          title: "The Challenge",
          descLg:
            "Healthcare providers who work in long-term care facilities work in a fast paced environment taking care of multiple residents throughout their shift",
          desc:
            "They need a system that is easy to learn and can be used quickly.",
          svg: "ChartArrow",
        }}
        img={{
          src: "/images/healthmedex/users2.png",
          alt: "",
        }}
      />
      <ProjectFeature
        themeColor="mediumTheme"
        row="reverse"
        introText={{
          title: "Vision App",
          descLg:
            "We created the Vision App to aid healthcare providers. The system indicates who should receive care and the type of care.",
          desc:
            "Cards with the names of each resident are illuminated with a vibrant yellow color. Inside each patient's record, care and assessments that need completing are illuminated. The healthcare professionals know they have successfully delivered all scheduled care once the screen is quiescent.",
          svg: "ChartArrow",
        }}
        img={{
          src: "/images/healthmedex/names_inyellow.png",
          alt: "",
        }}
      />
      <WaveHr color="#efefef" bg="white" />
      {/* Project Management */}
      <ProjectFeature
        themeColor="lightTheme"
        introText={{
          title: "The Vision",
          descLg:
            "We wanted to create an app with vibrant illustrations that could easily communicate the type of care that needed to be given.",
          desc:
            "The app would need to be usable on a touch screen device. Our users needed to quickly learn how to use the app. We conducted user tests with wireframes to help prioritize the right information for our users. ",
          svg: "List",
        }}
        img={{
          src: "/images/healthmedex/healthmedex3.png",
          alt: "",
        }}
      />
      <FeatureApp
        img={{ src: "/images/healthmedex/1.2.png", alt: "" }}
        themeColor="lightTheme"
        tips={[
          {
            i: 1,
            top: "10%",
            left: "20%",
            desc: "Detailed iconography depicts a variety of care",
          },
          {
            i: 2,
            top: "23%",
            left: "10%",
            desc: "ADL: Activities of Daily Living",
          },
        ]}
      />
      <WaveHr color="white" bg="white" />

      <ProjectFeature
        themeColor="lightTheme"
        row="reverse"
        introText={{
          title: "Iconography",
          descLg:
            "Detailed and illustrative iconography was developed to make the interface easy to learn. The client set a goal of five-minute standup training, which was achieved.",
          desc:
            "The development of the iconography began with medical illustrations. Artists iterated through concepts with hand sketches and once approved, moved to final design.",
          svg: "Wrench",
        }}
        img={{
          src: "/images/healthmedex/icons_healthmedex.png",
          alt: "",
        }}
      />
      <ProjectFeature
        themeColor="lightTheme"
        introText={{
          title: "Wireframing",
          descLg:
            "The design process began with information architecture and interaction flow diagrams.",
          desc:
            "Wireframes were created to explore alternative approaches to navigating and interacting with the data.",
          svg: "Wrench",
        }}
        img={{
          src: "/images/healthmedex/wireframing.png",
          alt: "",
        }}
      />
      <ProjectFeature
        themeColor="lightTheme"
        row="reverse"
        introText={{
          title: "User Testing",
          descLg:
            "We conducted live user testing in our office and visited care facilities.",
          desc:
            "A touch screen prototype was developed in gray-frames to test the usability of different design paradigms. To minimize occlusion we positioned the navigation and action buttons at the bottom of the screen.",
          svg: "Wrench",
        }}
        img={{
          src: "/images/healthmedex/userTest2.png",
          alt: "",
        }}
      />
      <WaveHr color="white" bg="white" />
      <FeatureApp
        img={{ src: "/images/healthmedex/3.png", alt: "" }}
        themeColor="lightTheme"
        tips={[
          {
            i: 1,
            top: "45%",
            left: "27%",
            desc: "Large checkboxes are easier to select on a touch screen",
          },
          {
            i: 2,
            top: "85%",
            left: "27%",
            desc:
              "Navigation and action buttons are at the bottom of the screen to make them easier to reach",
          },
        ]}
      />
      <WaveHr color="white" bg="#efefef" />
      <ProjectsRelated />
    </Page>
  );
};

export default ProjHealthMedEx;
