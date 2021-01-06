import React from "react";
import Project from "../../Project";
import Page from "../../Page";
import WaveHr from "../../Parts/WaveHR";
import ProjectFeature from "../../ProjectFeature";
import ProjectsRelated from "../../ProjectsRelated";
import FeatureApp from "../../FeatureApp";
import BlogText from "../../Parts/BlogText";

const ResearchData = () => {
  const details = [
    {
      title: "Research Data Collection System",
      descLg:
        "We created a data acquisition and aggregation system for researchers. The system is designed to interact with any sensor set and correlate data from these sensors.",
      img: {
        src: "/images/research/research_ai.png",
        alt: "resolution interface graphics",
      },
    },
  ];
  return (
    <Page>
      <Project details={details} />
      <WaveHr color="white" bg="#efefef"></WaveHr>
      <BlogText themeColor="mediumTheme">
        <h3>{"Requirements & Parameters"}</h3>
        <h4>
          The system needed to be flexible and
          easily deployed on multiple nodes.
          Researchers wanted to be able to add
          sensors and sensor data to the system
          without altering the user interface (UI)
          code or network code. The main body of
          code is written in Python to accommodate
          researchers who wanted to write analysis
          code for the system.
        </h4>

        <ul>
          <li>
            Stand-alone data collection for a
            sensor or group of sensors
          </li>
          <li>
            Ability to add sensors as needed and
            repurpose existing sensors
          </li>
          <li>
            Operates with command line user
            interface or rich user interface
          </li>
          <li>
            Light-weight and can be deployed using
            internet connection or a USB flash
            drive
          </li>
        </ul>
      </BlogText>
      <BlogText themeColor="mediumTheme"></BlogText>
      <ProjectFeature
        themeColor="mediumTheme"
        introText={{
          title: "Data Aggregation System",
          descLg:
            "Allows researchers to gather and view data from multiple nodes. Researchers can remotely start and stop recordings as well as set any component’s configuration.",
          list: [
            "The system is robust against network failure. Data is reported in 100ms time slices, the system is in sync with each sensor and saves data with every slice.",
            "System includes campaign planning and execution that can be used as a record of experiments.",
          ],
        }}
        img={{
          src:
            "/images/research/research-system-ui.png",
          alt: "",
        }}
      />
      <ProjectFeature
        themeColor="mediumTheme"
        row="reverse"
        introText={{
          title: "Dataset Nodes",
          descLg:
            "Each node is a fully independent data collection centers. They can operate alone or in tandem with additional systems with the fully functional console and web user interface.",
          list: [
            "A new sensor is easily deployed by specifying the class of sensor. In addition, multiple sensors of the same type can also be used simultaneously.",
            "Each node is capable of edge computing able to make decisions based on custom algorithms",
          ],
        }}
        img={{
          src:
            "/images/research/research-node-ui.png",
          alt: "",
        }}
      />
      <ProjectFeature
        themeColor="mediumTheme"
        introText={{
          title: "User Interface",
          descLg:
            "OS agnostic interface using a Web based platform",
          list: [
            "The system was created with a rich web user interface to allow researchers to control N-number of systems simultaneously.",
            "Graphs real-time data streams",
            "Multiple graphs of each data set provide a meaningful way to view data.",
            "User testing was conducted throughout the process to make sure that the system and user interface would meet the researcher’s needs.",
          ],
        }}
        img={{
          src: "/images/research/ui.png",
          alt: "",
        }}
      />
      <WaveHr color="#efefef" bg="#383838" />
      {/* Casestudy: Urban Noise Pollution */}
      <BlogText themeColor="darkTheme">
        <h3>Case Study</h3>
        <h4>Urban Noise Pollution</h4>
        <p>
          A local city is interested in the amount
          of noise pollution in its downtown
          commercial sector and how that noise
          impacts the surrounding residential and
          shopping districts. Collecting data and
          analyzing this data will help the city
          determine how to zone new areas.
        </p>
        <ul>
          <li>The city deploys 50 nodes.</li>
          <li>
            Nodes are set up to record decibels,
            temperature, humidity, and pressure
            sensor
          </li>
          <li>Nodes report every 100ms</li>
          <li>
            Nodes send that data back to research
            and this requires no in-person data
            collection.
          </li>
        </ul>
      </BlogText>
      <FeatureApp
        img={{
          src:
            "/images/research/research_nodes.png",
          alt: "",
        }}
        themeColor="darkTheme"
      />

      <ProjectFeature
        themeColor="darkTheme"
        introText={{
          title: "50 Nodes Collecting",
          desc:
            "The system is setup to poll all the sensors at 100 milliseconds.  Each node collects 16,000 hertz data from the acoustic sensor and both microphones and rather than saving the raw data, distills the data into the high and low amplitudes as well as the average frequency over the 100 millisecond time slice.",
        }}
        img={{
          src: "/images/research/temperature.png",
          alt: "",
        }}
      />
      <ProjectFeature
        themeColor="darkTheme"
        row="reverse"
        introText={{
          title: "Collects Variety of Data",
          desc:
            "This data is all correlated using the GPS time with the temperature/pressure/humidity sensor.  The system is setup to record 12 hour databases so that 2 files per day are produced.",
        }}
        img={{
          src: "/images/research/map.png",
          alt: "",
        }}
      />
      <BlogText themeColor="darkTheme">
        <h3>Results</h3>
        <p>
          Since the data includes location, after
          a month of recording, a ‘heat map’ is
          generated and laid over a map of the
          city that shows the noise hotspots and
          allows city planners to investigate the
          source of the sound and where it is a
          viable option to expand residential and
          commercial zones.
        </p>
      </BlogText>

      {/* <FeatureApp
        img={{ src: "/images/research/research_UI.png", alt: "" }}
        themeColor="darkTheme"
      /> */}

      {/* Case Study Forestry */}
      <WaveHr color="#383838" bg="#fff" />
      <BlogText themeColor="lightTheme">
        <h3>Case Study</h3>
        <h4>Forestry Service</h4>
        <p>
          A state forestry service is interested
          in researching if low power seismic
          sensors could be used along game paths
          to determine the activity and amount of
          wildlife in a given area. 15 test nodes
          are procured that consist of the
          following items:
        </p>
        <ul>
          <li>
            A low power single board computer
            encased in an IP-67 rated enclosure
            that is WiFi capable
          </li>
          <li>
            A series of 4 low power seismic
            sensors that connect to the GPIO pins
            of the single board computer that are
            buried along the path at intervals of
            10 meters
          </li>
          <li>
            A low power GPS receiver for locating
            the system and synchronizing all of
            the timestamps
          </li>
          <li>
            A low power
            temperature/humidity/pressure sensor
            for recording environmental
            conditions, also connected to the GPIO
            pins of the single board computer
          </li>
          <li>
            Two low power miniature camera that
            can be operated by the SBC to take
            pictures when it detects seismic
            activity for confirming the presence
            of wildlife
          </li>
          <li>
            Two low power thermal cameras that can
            be operated by the SBC to take
            pictures when it detects seismic
            activity for confirm he presence of
            wildlife
          </li>
          <li>
            A long-life lead-acid battery
            connected to a solar panel that is
            affixed above the tree canopy and
            charges the batteries as needed
          </li>
        </ul>
      </BlogText>
      <FeatureApp
        img={{
          src:
            "/images/research/case_study_forestry.png",
          alt: "",
        }}
        themeColor="lightTheme"
      />
      <BlogText>
        {/* <h3>
                The process
              </h3>
              <p>
              Each Node is installed on the lower power single board computer that is running Linux and used to collect the data from the sensor suite and correlate it all in time.  The GPS in the system ensures that all the nodes running in a 1 square acre area are all time coordinated.  Each Node is configured to take data from the seismic sensors once per second and route the data to an algorithm running locally.  The algorithm within each node then determines if any or an aggregate of the sensors or if the sensors detect the presence of wildlife, and if so it triggers the cameras to start taking pictures and routes the data to a second algorithm.  The second algorithm collects data during the time the first algorithm determines that wildlife are in the area.  Once the wildlife have left the area, the second algorithm looks at the seismic data in aggregate and attempts to determine the size, type, and number of wildlife it just detected.  All of this data is constantly recorded in each node's local database and is correlated in time with the GPS data, environmental data, and visual data.  The database is set to rollover every 24 hours, providing a single database file for each day.
              </p>
              <hr/> */}
        <h3>Results</h3>
        <p>
          The nodes are buried for a month and
          allowed to run. Forestry service
          personnel check on the systems once a
          week by bringing a cell phone that is
          setup as a hotspot near the systems and
          access the local UI to ensure that the
          systems do not have any faults. At the
          end of the month, the nodes are dug up
          and and the data is then pulled from
          each individual node system and analyzed
          to determine the success or failure of
          the experiment.
        </p>
      </BlogText>
      {/* End of Page */}
      <WaveHr color="white" bg="#efefef" />
      <ProjectsRelated />
    </Page>
  );
};

export default ResearchData;
