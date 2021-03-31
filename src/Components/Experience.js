import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Chip from "@material-ui/core/Chip";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import "react-vertical-timeline-component/style.min.css";
import Typewriter from "typewriter-effect";

import "./experience.css";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <div class="experience" id="experience">
          <Typography variant="h3" className="center">
            <Slide right>EXPERIENCE</Slide>
            <Slide right>
              <div className="subhead" />
            </Slide>
            {/* <div className="quote">
              “There are far, far better things ahead than any we leave behind.”
            </div>
            <div className="author">-C.S. Lewis</div> */}
            <div className="quote2">
              “For though a righteous man falls seven times, he rises again."
            </div>
            <div className="author">Proverbs 24:16</div>
          </Typography>

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work vertical"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              icon={
                <img
                  src={require("../images/appian.JPG")}
                  className="timelineavatar"
                />
              }
            >
              <div className="padding padding0"></div>
              <a className="none2" href="http://appian.com/">
                <h2 className="vertical-timeline-element-title bold0 underline0">
                  Appian Corporation
                </h2>
              </a>
              <h3 className="vertical-timeline-element-subtitle role">
                Incoming Software Engineer
              </h3>
              {/* <div className="underline" /> */}
              <div className="text2"></div>
              <div className="text3">Fall 2021</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work vertical"
              // date="May 2019 - Present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
              icon={
                <img
                  src={require("../images/appian.JPG")}
                  className="timelineavatar"
                />
              }
            >
              <div className="padding padding0">
                <Chip label="SAIL" clickable color="basic" />
                &nbsp;
                <Chip label="Java" clickable color="basic" />
                &nbsp;
                <Chip label="Javascript" clickable color="basic" />
                &nbsp;
                <Chip label="Jenkins" clickable color="basic" />
                &nbsp;
                <Chip label="Agile" clickable color="basic" />
              </div>
              <a className="none2" href="http://appian.com/">
                <h2 className="vertical-timeline-element-title bold0 underline0">
                  Appian Corporation
                </h2>
              </a>
              <h3 className="vertical-timeline-element-subtitle role">
                Software Engineer Intern
              </h3>
              {/* <div className="underline" /> */}
              <div className="text2">
                I helped build and improve on features that facilitated the use
                of the bulk execute test cases on the Appian Designer. I also
                created the generic metrics collector to improve performance of
                bulk execute test cases and improved quality of use through
                recommendations on the Appian Process Model. Gained experience
                using SAIL, Java, Javascript, and Jenkins in an agile
                development setting.
              </div>
              <div className="text3">Summer 2020</div>
            </VerticalTimelineElement>
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
              <div className="padding padding1">
                <Chip label="AWS" clickable color="basic" />
                &nbsp;
                <Chip label="Kubernetes" clickable color="basic" />
                &nbsp;
                <Chip label="Docker" clickable color="basic" />
                &nbsp;
                <Chip label="ConcourseCI" clickable color="basic" />
              </div>
              <a
                className="none2"
                href="http://www.volkswagengroupofamerica.com/"
              >
                <h2 className="vertical-timeline-element-title bold1 underline1">
                  Volkswagen Credit
                </h2>
              </a>

              <h3 className="vertical-timeline-element-subtitle role">
                Software Developer Intern
              </h3>
              {/* <div className="underline" /> */}
              <div className="text2">
                I integrated and automated deployment of the VCI React
                application with Docker, AWS (ECR, ECS Fargate, RDS,
                CloudFormation, CloudFront, CloudWatch, Lambda, S3)​, and
                ConcourseCI. I also worked on the Proof of Concept running a VCI
                React application. using AWS EKS and Kubernetes and presented to
                the dev team for future scalability. Gained experience using
                AWS, Docker, and Kubernetes.
              </div>
              <div className="text3">Summer 2019</div>
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
              <div className="padding padding2">
                <Chip label="Javascript" clickable color="basic" />
                &nbsp;
                <Chip label="Vis.js" clickable color="basic" />
                &nbsp;
                <Chip label="D3.js" clickable color="basic" />
              </div>
              <a className="none2" href="http://www.ridgebacknet.com/">
                <h2 className="vertical-timeline-element-title bold2 underline2">
                  Ridgeback Network Defense
                </h2>
              </a>

              <h3 className="vertical-timeline-element-subtitle role">
                Javascript Developer Intern (Remote)
              </h3>
              <div className="text2">
                I worked on the visualization portion of the network graph on
                the Ridgeback-Hunter platform using vis.js and also helped build
                and deploy 13 network visualization widgets using d3.js. Gained
                my first experience working in pure Javascript application and
                using the two data visualization libraries, vis.js and d3.js.
              </div>
              <div className="text3">Aug 2018 - Apr 2019</div>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
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
              <div className="padding padding3">
                <Chip label="Python" clickable color="basic" />
                &nbsp;
                <Chip label="jQuery" clickable color="basic" />
              </div>
              <a className="none2" href="http://www.tucows.com/">
                <h2 className="vertical-timeline-element-title bold3 underline3">
                  Tucows
                </h2>
              </a>

              <h3 className="vertical-timeline-element-subtitle role">
                Software Engineering Intern
              </h3>
              <div className="text2">
                I primarily worked on two projects during this internship. The
                first project involved deploying the compiled and integrated
                employee database into the employee site (OrgLink) using Python
                and shell scripts. The second project I worked on was the site
                for the building user functionalities on the internet
                installation team database using jQuery. Gained experience with
                Python, shell scripts, and jQuery, while also learning Selenium,
                BeautifulSpoon, and RubyOnRails on the side.
              </div>
              <div className="text3">Summer 2018</div>
            </VerticalTimelineElement> */}
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
              <div className="padding padding4">
                <Chip label="React" clickable color="basic" />
                &nbsp;
                <Chip label="Firebase" clickable color="basic" />
                &nbsp;
                <Chip label="Python" clickable color="basic" />
              </div>
              <a className="none2" href="http://www.hackcville.com/">
                <h2 className="vertical-timeline-element-title bold4 underline4">
                  Forge
                </h2>
              </a>

              <h3 className="vertical-timeline-element-subtitle role">
                Software Engineering Intern
              </h3>
              <div className="text2">
                This 5-week training program that involved developing functional
                web applications/software using React, Firebase, and
                incorporating different REST APIs in agile development teams.
                Each project completed was completed in different teams to
                introduce new team dynamics. In total, we deployed 3 websites,
                FaceMe, Pomodoro, and Trenchtek. Gained experience using React.
                Through Forge, I participated in a 5-6 week internship with
                Tucows where I primarily worked on two projects during this
                internship. The first project involved deploying the compiled
                and integrated employee database into the employee site
                (OrgLink) using Python and shell scripts. The second project I
                worked on was the site for the building user functionalities on
                the internet installation team database using jQuery.
              </div>
              <div className="text3">Summer 2018</div>
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
