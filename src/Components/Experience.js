import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import Chip from "@material-ui/core/Chip";
import "react-vertical-timeline-component/style.min.css";
import "./components.css";
import "./experience.css";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <div class="experience" id="experience">
          <Typography variant="h3" className="center">
            EXPERIENCE
            <div className="subhead3" />
          </Typography>

          {/* <img
            src={require("../images/experience2.png")}
            className="experiencesplash1"
          /> */}

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work vertical"
              date="May 2019 - Present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
                <div className="padding">
                  <Chip
                    // avatar={
                    //   <img
                    //     src={require("../images/react.png")}
                    //     className="avatar2"
                    //   />
                    // }
                    label="React"
                    clickable
                    color="basic"
                  />
                  &nbsp;
                  <Chip
                    // avatar={
                    //   <img
                    //     src={require("../images/aws.jpg")}
                    //     className="avatar2"
                    //   />
                    // }
                    label="AWS"
                    clickable
                    color="basic"
                  />
                  &nbsp;
                  <Chip
                    // avatar={
                    //   <img
                    //     src={require("../images/docker.png")}
                    //     className="avatar2"
                    //   />
                    // }
                    label="Docker"
                    clickable
                    color="basic"
                  />
                </div>
                {/* <br />
              <br /> */}
                <h2 className="vertical-timeline-element-title">
                  Volkswagen Credit
                </h2>
                <h3 className="vertical-timeline-element-subtitle role">
                  Software Developer Intern
                </h3>
                <div className="text2">
                  I am currently integrating and deploying the VCI React
                  application with Docker and AWS (ECR, ECS Fargate, RDS,
                  CloudFormation, CloudFront, S3)​. The projects are setup in
                  sprint style formation. Gained some experience using Docker
                  and AWS.
                </div>
              </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work vertical"
              date="Aug 2018 - Apr 2019"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={
                <img
                  src={require("../images/ridgeback.png")}
                  className="timelineavatar"
                />
              }
            >
              <a className="none2" href="http://www.ridgebacknet.com/">
                <div className="padding">
                  <Chip
                    // avatar={
                    //   <img
                    //     src={require("../images/javascript.png")}
                    //     className="avatar2"
                    //   />
                    // }
                    label="Javascript"
                    clickable
                    color="basic"
                  />
                  &nbsp;
                  <Chip
                    // avatar={
                    //   <img
                    //     src={require("../images/visjs.png")}
                    //     className="avatar2"
                    //   />
                    // }
                    label="visjs"
                    clickable
                    color="basic"
                  />
                  &nbsp;
                  <Chip
                    // avatar={
                    //   <img
                    //     src={require("../images/d3.png")}
                    //     className="avatar2"
                    //   />
                    // }
                    label="d3"
                    clickable
                    color="basic"
                  />
                </div>
                <h2 className="vertical-timeline-element-title">
                  {" "}
                  Ridgeback Network Defense
                </h2>

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
              </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work vertical"
              date="Jun - Aug 2018"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={
                <img
                  src={require("../images/tucows.png")}
                  className="timelineavatar"
                />
              }
            >
              <a className="none2" href="http://www.tucows.com/">
                {/* <div className="vertical"> */}
                <div className="padding">
                  <Chip
                    // avatar={
                    //   <img
                    //     src={require("../images/python.png")}
                    //     className="avatar2"
                    //   />
                    // }
                    label="Python"
                    clickable
                    color="basic"
                  />
                  &nbsp;
                  <Chip
                    // avatar={
                    //   <img
                    //     src={require("../images/jquery.png")}
                    //     className="avatar2"
                    //   />
                    // }
                    label="jQuery"
                    clickable
                    color="basic"
                  />
                </div>
                <h2 className="vertical-timeline-element-title">Tucows</h2>
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
                  jQuery.
                </div>
                {/* </div> */}
              </a>
            </VerticalTimelineElement>
            {/* </div> */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work vertical"
              date="May - Jun 2018"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={
                <img
                  src={require("../images/hackcville.png")}
                  className="timelineavatar"
                />
              }
            >
              <a className="none2" href="http://www.hackcville.com/">
                {/* <div className="vertical"> */}
                <div className="padding">
                  <Chip
                    // avatar={
                    //   <img
                    //     src={require("../images/react.png")}
                    //     className="avatar2"
                    //   />
                    // }
                    label="React"
                    clickable
                    color="basic"
                  />
                  &nbsp;
                  <Chip
                    // avatar={
                    //   <img
                    //     src={require("../images/firebase.png")}
                    //     className="avatar2"
                    //   />
                    // }
                    label="Firebase"
                    clickable
                    color="basic"
                  />
                </div>
                <h2 className="vertical-timeline-element-title">Hackcville</h2>
                <h3 className="vertical-timeline-element-subtitle role">
                  Software Engineering Intern
                </h3>
                <div className="text2">
                  This 5-week training program that involved developing
                  functional web applications/software using React, Firebase,
                  and incorporating different REST APIs in agile development
                  teams. Each project completed was completed in different teams
                  to introduce new team dynamics. In total, we deployed 3
                  websites, FaceMe, Pomodoro, and Trenchtek. Gained first
                  experience using React.
                </div>
                {/* </div> */}
              </a>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work vertical-timeline-element--no-children"
              iconStyle={{ background: "rgb(0, 200, 0)", color: "#fff" }}
              icon={
                <img
                  src={require("../images/star.png")}
                  className="timelineavatar"
                />
              }
            />
          </VerticalTimeline>
          <p />
        </div>
      </div>
    );
  }
}
