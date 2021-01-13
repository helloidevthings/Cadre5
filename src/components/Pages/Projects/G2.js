import React from "react";
import Project from "../../Project";
import Page from "../../Page";
import WaveHr from "../../Parts/WaveHR";
import CTA from "../../CTA";
import FeatureApp from "../../FeatureApp";
import ProjectFeature from "../../ProjectFeature";
import ProjectsRelated from "../../ProjectsRelated";

const ProjResolution = () => {
  const details = [
    {
      subheader: "2007 • 2020",
      title: "G2 - This Page is Unfinshed",
      leadin:
        "Project management for government agencies.",
      descLg:
        "G2 integrates Headquarters and National Laboratory scope, schedule, budget, and metric information, creating a single repository of program data. ",

      img: {
        src: "/images/g2/g2_array2.png",
        alt: "g2 graphics",
      },
    },
  ];
  return (
    <Page>
      <Project details={details} />
      <WaveHr color="white" bg="#efefef"></WaveHr>
      {/* <ProjectFeature
        themeColor="mediumTheme"
        row="reverse"
        introText={{
          title: "The Challenge",
          desc:
            "The National Nuclear Security Administration maintains and enhances the safety, security, and effectiveness of U.S. nuclear capabilities and works globally to reduce nuclear proliferation and the danger from weapons of mass destruction.",
        }}
        img={{
          src: "/images/logos/government/nnsa.png",
          alt: "",
        }}
      /> */}
      <ProjectFeature
        themeColor="mediumTheme"
        introText={{
          title: "The Challenge",
          descLg:
            "Nuclear projects can be difficult to manage, approve funding, and other needs. It took weeks to receive a status report from each lab. (?)",
          desc:
            "G2 provides transparency to Congress(?) and other constituents by giving the exact status of every project. By giving those in authority the ability to quickly view updates, projects can be managed more effectively. G2 also increases accountability between labs. Labs can see each other’s progress as well as the funding received. ",
          svg: "ChartArrow",
        }}
        img={{
          src: "/images/g2/",
          alt:
            "A few nice Images of the UI. That could be collaged together",
        }}
      />
      <ProjectFeature
        themeColor="mediumTheme"
        row="reverse"
        introText={{
          title: "Capabilities",
          descLg:
            "G2 offers a variety of services to fit their needs with a responsive design that makes it accessible on any any device.",
          svg: "List",
          list: [
            "Financial Management",
            "Cost Reporting, DOE STARS Reconciliation",
            "Year-End Forecasting",
            "Baseline/Forecast Schedules and Metrics",
            "Out-Year & Annual Planning",
            "Geo-Spatial Analysis",
            "On-demand Reports",
            "Data Warehousing",
            "Numerous Line of Business Modules.",
          ],
        }}
        img={{
          src:
            "/images/g2/responsive_graphic.png",
          alt: "",
        }}
      />
      {/* <WaveHr color="#efefef" bg="#383838" />
      <WaveHr color="#383838" bg="#383838" />
      <ProjectFeature
        themeColor="darkTheme"
        row="basic"
        introText={{
          title: "Main Dashboard",
          descLg:
            "Gives an overview of project state and notifications that need to be addressed.(?)",
          desc: "Details?",
          svg: "Wrench",
        }}
        img={{
          src: "/images/g2/g2-graphs.png",
          alt: "",
        }}
      />
      <FeatureApp
        img={{ src: "/images/g2/desktop.png", alt: "" }}
        themeColor="darkTheme"
      />
*/}
      <WaveHr color="#efefef" bg="#fff" />
      <article className="blog">
        <h3>SAFe Agile</h3>
        Text about SAFe Agile.
      </article>
      <FeatureApp
        img={{
          src: "/images/g2/safe.png",
          alt: "",
        }}
        themeColor="mediumTheme"
      />
      <WaveHr color="#efefef" bg="white" />
      <WaveHr color="white" bg="white" />
      <ProjectFeature
        themeColor="lightTheme"
        row="reverse"
        introText={{
          title: "Icon Signalling",
          descLg:
            "To make viewing projects more efficient we used iconography to indicate each change. By doing this the user can quickly see which areas need their attention. Projects change throughout the process, the user can see exactly what updates have been made to each plan.",
          desc:
            "(Maybe we explain one example icon?) -- This could be a nice place to use Jason's Sketches",
          svg: "Shapes",
        }}
        img={{
          src: "/images/g2/icon_signals.png",
          alt: "",
        }}
      />

      <ProjectFeature
        themeColor="lightTheme"
        row="basic"
        introText={{
          title: "Financial Plan Chart",
          descLg:
            "Each piece of the chart represents a variable of the total financial plan.",
          desc:
            "Each section is outlined below, also there's an option to hover each piece so that it is very clear what it represents.",
          svg: "Money",
        }}
        img={{
          src: "/images/g2/fin_plan_detail.png",
          alt: "",
        }}
      />
      <article className="blog">
        <h3>Fin Plan Dashboard(?)</h3>
        Description of this dashboard goes here. I
        initially thought this was the Fin Plan
        Dashboard. If it is, I can move it back up
        to the top.
      </article>
      <FeatureApp
        img={{
          src: "/images/g2/notifications.png",
          alt: "",
        }}
        themeColor="lightTheme"
        tips={[
          {
            i: 1,
            top: "45%",
            left: "5%",
            desc:
              "The red-dot next to the icon shows that this item has been updated.",
          },
        ]}
      />
      <WaveHr color="white" bg="#383838" />
      <ProjectFeature
        themeColor="darkTheme"
        row="reverse"
        introText={{
          title: "Milestones",
          descLg:
            "This dashboard shows the progress of all projects. The user can quickly get an idea of the status of each project... They can also view every project in detail to see if the project is ahead of schedule, behind schedule, etc… (I’m not sure exactly what to say in this section)",
          desc:
            "(The next image is pretty big, but I wanted to show you what it looked like on the site.)",
          svg: "List",
        }}
        img={{
          src: "/images/g2/.png",
          alt:
            "image of the milestones (detailed view)",
        }}
      />
      <FeatureApp
        img={{
          src:
            "/images/g2/Expanded-Tasks--Expanded-Timeline-huge.png",
          alt: "",
        }}
        themeColor="darkTheme"
        tips={[
          {
            i: 1,
            top: "45%",
            left: "5%",
            desc:
              "The red-dot next to the icon shows that this item has been updated.",
          },
        ]}
      />
      <ProjectFeature
        themeColor="darkTheme"
        introText={{
          title: "Awards",
          descLg:
            '"NNSA is a model for organizations that value project management as a discipline that increases success rates, creates efficiencies and aligns with demanding strategic requirements. Few organizational missions demand excellent project execution more than the NNSA G2 project."',
          desc:
            "- Mark Langley, President Project Management Institute",
          svg: "Award",
        }}
        iframe={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5ZJRWg8_4Uc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
      />

      <ProjectFeature
        themeColor="darkTheme"
        row="reverse"
        introText={{
          title: "NNSA",
          descLg:
            "The National Nuclear Security Administration maintains and enhances the safety, security, and effectiveness of U.S. nuclear capabilities and works globally to reduce nuclear proliferation and the danger from weapons of mass destruction.",
          desc:
            "^ I’m not sure where to put this… at the moment it’s next to a video",
        }}
        iframe={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BEwz3IA8NQ8"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
      />

      <WaveHr color="#383838" bg="#1f1f1f" />
      <WaveHr color="#1f1f1f" bg="#1f1f1f" />
      <CTA
        leadin="AFEI EXCELLENCE IN ENTERPRISE INFORMATION"
        descLg={`"NNSA's innovative system is designed to optimize investments of taxpayer funded infrastructure recapitalization, maintenance, and support nuclear nonproliferation activities in the most cost-effective manner. G2 has given the NNSA the ability to analyze key data in a holistic manner on the scale of $2 billion in annual investment decisions."`}
        desc="– Mark Langley, President Project Management Institute"
        img={{
          src: "/images/g2/G2_cover.jpg",
          alt:
            "people working in an office environment",
        }}
        type="basic"
        themeColor="darkTheme"
      />
      <CTA
        row="reverse"
        descLg={`"NNSA’s G2 system drives risk-based decisions at the enterprise level. Defensibility, traceability, and risk-based decision-making are now the norm at NNSA."`}
        desc="– James McConnell, Associate Administrator for the Office of Safety, Infrastructure, and Operations"
        img={{
          src: "/images/g2/img_of_everyone.jpg",
          alt:
            "people working standing with an award",
        }}
        themeColor="darkTheme"
        link={{
          themeColor: "lightTheme",
          btnStyle: "secondary",
          text: "Learn More",
          target: true,
          href:
            "https://www.energy.gov/nnsa/articles/nnsa-s-g2-management-information-system-wins-association-enterprise",
        }}
      />
      <WaveHr color="#1f1f1f" bg="#efefef" />
      <ProjectsRelated />
    </Page>
  );
};

export default ProjResolution;
