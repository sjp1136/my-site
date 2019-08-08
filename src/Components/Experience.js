import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import Chip from "@material-ui/core/Chip";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import "react-vertical-timeline-component/style.min.css";
import "./experience.css";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <div class="experience" id="experience">
          <Typography variant="h3" className="center">
            <Slide right>EXPERIENCE</Slide>
            <Slide right>
              <div className="subhead3" />
            </Slide>
          </Typography>

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work vertical"
              // date="May 2019 - Present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              icon={
                <img
                  src={require("../images/volkswagen.png")}
                  className="timelineavatar"
                />
              }
            >
              <a
                className="none2"
                href="http://www.volkswagengroupofamerica.com/"
              >
                <div className="padding padding1">
                  <Chip label="AWS" clickable color="basic" />
                  &nbsp;
                  <Chip label="Kubernetes" clickable color="basic" />
                  &nbsp;
                  <Chip label="Docker" clickable color="basic" />
                  &nbsp;
                  <Chip label="ConcourseCI" clickable color="basic" />
                </div>

                <h2 className="vertical-timeline-element-title bold1">
                  Volkswagen Credit
                </h2>
                <div className="underline1" />
                <h3 className="vertical-timeline-element-subtitle role">
                  Software Developer Intern
                </h3>
                {/* <div className="underline" /> */}
                <div className="text2">
                  I integrated and automated deployment of the VCI React
                  application with Docker, AWS (ECR, ECS Fargate, RDS,
                  CloudFormation, CloudFront, CloudWatch, Lambda, S3)​, and
                  ConcourseCI. Docker was used to host up WordPress using ECR
                  and ECS, which communicated with the RDS as a database.
                  ConcourseCI automated the deployment to the S3 bucket, making
                  changes to the CloudFront, which allowed the website to update
                  periodically. CloudFormation templates were written and used
                  to efficiently host up services. I also worked on the Proof of
                  Concept running a VCI React application. using AWS EKS and
                  Kubernetes and presented to the dev team for future
                  scalability. Gained experience using AWS, Docker, and
                  Kubernetes.
                </div>
                <div className="text3">May - Aug 2019</div>
              </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work vertical"
              // date="Aug 2018 - Apr 2019"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={
                <img
                  src={require("../images/ridgeback.png")}
                  className="timelineavatar"
                />
              }
            >
              <a className="none2" href="http://www.ridgebacknet.com/">
                <div className="padding padding2">
                  <Chip label="Javascript" clickable color="basic" />
                  &nbsp;
                  <Chip label="Vis.js" clickable color="basic" />
                  &nbsp;
                  <Chip label="D3.js" clickable color="basic" />
                </div>
                <h2 className="vertical-timeline-element-title bold2">
                  Ridgeback Network Defense
                </h2>
                <div className="underline2" />

                <h3 className="vertical-timeline-element-subtitle role">
                  Javascript Developer Intern (Remote)
                </h3>
                <div className="text2">
                  I worked on the visualization portion of the network graph on
                  the Ridgeback-Hunter platform using vis.js and also helped
                  build and deploy 13 network visualization widgets using d3.js.
                  Gained my first experience working in pure Javascript
                  application and using the two data visualization libraries,
                  vis.js and d3.js.
                </div>
                <div className="text3">Aug 2018 - Apr 2019</div>
              </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work vertical"
              // date="Jun - Aug 2018"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={
                <img
                  src={require("../images/tucows.png")}
                  className="timelineavatar"
                />
              }
            >
              <a className="none2" href="http://www.tucows.com/">
                <div className="padding padding3">
                  <Chip label="Python" clickable color="basic" />
                  &nbsp;
                  <Chip label="jQuery" clickable color="basic" />
                  &nbsp;
                  <Chip label="Selenium" clickable color="basic" />
                  &nbsp;
                  <Chip label="BeautifulSpoon" clickable color="basic" />
                </div>
                <h2 className="vertical-timeline-element-title bold3">
                  Tucows
                </h2>
                <div className="underline3" />

                <h3 className="vertical-timeline-element-subtitle role">
                  Software Engineering Intern
                </h3>
                <div className="text2">
                  I primarily worked on two projects during this internship. The
                  first project involved deploying the compiled and integrated
                  employee database into the employee site (OrgLink) built in
                  C#. This program was built using Python and shell scripts for
                  automation. The site was used by recruiters to find new hires
                  or promote employees. The second project I worked on was the
                  site for the internet installation team database. Using
                  jQuery, I worked on facilitating the user functionalities on
                  these site. Gained experience with Python, shell scripts, and
                  jQuery, while also learning Selenium, BeautifulSpoon, and
                  RubyOnRails on the side.
                </div>
                <div className="text3">Jun - Aug 2018</div>
              </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work vertical"
              // date="May - Jun 2018"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={
                <img
                  src={require("../images/hackcville.png")}
                  className="timelineavatar"
                />
              }
            >
              <a className="none2" href="http://www.hackcville.com/">
                <div className="padding padding4">
                  <Chip label="React" clickable color="basic" />
                  &nbsp;
                  <Chip label="Firebase" clickable color="basic" />
                  &nbsp;
                  <Chip label="RestAPI" clickable color="basic" />
                </div>
                <h2 className="vertical-timeline-element-title bold4">
                  Hackcville
                </h2>
                <div className="underline4" />

                <h3 className="vertical-timeline-element-subtitle role">
                  Software Engineering Intern
                </h3>
                <div className="text2">
                  This 5-week training program that involved developing
                  functional web applications/software using React, Firebase,
                  and incorporating different REST APIs in agile development
                  teams. Each project completed was completed in different teams
                  to introduce new team dynamics. In total, we deployed 3
                  websites, FaceMe, Pomodoro, and Trenchtek. Gained experience
                  using React.
                </div>
                <div className="text3">May - Jun 2018</div>
              </a>
            </VerticalTimelineElement>

            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work vertical-timeline-element--no-children"
              iconStyle={{ background: "rgb(0, 200, 0)", color: "#fff" }}
              icon={
                <img
                  src={require("../images/star.png")}
                  className="timelineavatar4"
                />
              }
            /> */}
          </VerticalTimeline>
          <p />
        </div>
      </div>
    );
  }
}
