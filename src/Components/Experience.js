import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import Chip from "@material-ui/core/Chip";
import "react-vertical-timeline-component/style.min.css";
import "./components.css";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <div class="experience" id="experience">
          <Typography variant="h3" className="center">
            <strong className="color">EXPERIENCE</strong>
            <div className="subhead" />
          </Typography>
          <VerticalTimeline>
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

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May - June 2018"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={
                <img
                  src={require("../images/hackcville.png")}
                  className="timelineavatar"
                />
              }
            >
              <a className="none2" href="http://www.hackcville.com/">
                <div className="vertical">
                  <div className="padding">
                    <Chip
                      avatar={
                        <img
                          src={require("../images/react.png")}
                          className="avatar2"
                        />
                      }
                      label="React"
                      clickable
                      color="basic"
                    />
                    &nbsp;
                    <Chip
                      avatar={
                        <img
                          src={require("../images/firebase.png")}
                          className="avatar2"
                        />
                      }
                      label="Firebase"
                      clickable
                      color="basic"
                    />
                  </div>
                  <h3 className="vertical-timeline-element-title">
                    Hackcville
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle role">
                    Software Engineering Intern
                  </h4>
                  <p>
                    5-week training program developing functional web
                    applications/software using React, Firebase, and REST APIs
                    in teams using agile development techniques. Deployed 3
                    websites. Gained experience with React.
                  </p>
                </div>
              </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="June - August 2018"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={
                <img
                  src={require("../images/tucows.png")}
                  className="timelineavatar"
                />
              }
            >
              <a className="none2" href="http://www.tucows.com/">
                <div className="vertical">
                  <div className="padding">
                    <Chip
                      avatar={
                        <img
                          src={require("../images/python.png")}
                          className="avatar2"
                        />
                      }
                      label="Python"
                      clickable
                      color="basic"
                    />
                    &nbsp;
                    <Chip
                      avatar={
                        <img
                          src={require("../images/jquery.png")}
                          className="avatar2"
                        />
                      }
                      label="jQuery"
                      clickable
                      color="basic"
                    />
                  </div>
                  <h3 className="vertical-timeline-element-title">Tucows</h3>
                  <h4 className="vertical-timeline-element-subtitle role">
                    Software Engineering Intern
                  </h4>
                  <p>
                    Built microservices for company’s backbone using jQuery, and
                    Python.
                  </p>
                </div>
              </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="August 2018 - April 2019"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={
                <img
                  src={require("../images/ridgeback.png")}
                  className="timelineavatar"
                />
              }
            >
              <a className="none2" href="http://www.ridgebacknet.com/">
                <div className="vertical">
                  <div className="padding">
                    <Chip
                      avatar={
                        <img
                          src={require("../images/javascript.png")}
                          className="avatar2"
                        />
                      }
                      label="Javascript"
                      clickable
                      color="basic"
                    />
                    &nbsp;
                    <Chip
                      avatar={
                        <img
                          src={require("../images/visjs.png")}
                          className="avatar2"
                        />
                      }
                      label="visjs"
                      clickable
                      color="basic"
                    />
                    &nbsp;
                    <Chip
                      avatar={
                        <img
                          src={require("../images/d3.png")}
                          className="avatar2"
                        />
                      }
                      label="d3"
                      clickable
                      color="basic"
                    />
                  </div>
                  <h3 className="vertical-timeline-element-title">
                    Ridgeback Network Defense
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle role">
                    Javascript Developer Intern (Remote)
                  </h4>
                  <p>
                    Developed on the user interface and the functionalities of
                    the Ridgeback-Hunter platform using vis.js and d3.js. Built
                    13 network visualization widgets.
                  </p>
                </div>
              </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
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
                <div className="vertical">
                  <div className="padding">
                    <Chip
                      avatar={
                        <img
                          src={require("../images/react.png")}
                          className="avatar2"
                        />
                      }
                      label="React"
                      clickable
                      color="basic"
                    />
                    &nbsp;
                    <Chip
                      avatar={
                        <img
                          src={require("../images/aws.jpg")}
                          className="avatar2"
                        />
                      }
                      label="AWS"
                      clickable
                      color="basic"
                    />
                    &nbsp;
                    <Chip
                      avatar={
                        <img
                          src={require("../images/docker.png")}
                          className="avatar2"
                        />
                      }
                      label="Docker"
                      clickable
                      color="basic"
                    />
                  </div>
                  {/* <br />
              <br /> */}
                  <h3 className="vertical-timeline-element-title">
                    Volkswagen Credit
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle role">
                    Software Developer Intern
                  </h4>
                  <p>
                    Integrating and deploying React applications with Docker and
                    AWS (ECR, ECS Fargate, RDS, CloudFormation, CloudFront, S3)​
                  </p>
                </div>
              </a>
            </VerticalTimelineElement>
          </VerticalTimeline>
          <p />
        </div>
      </div>
    );
  }
}
