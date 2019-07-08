import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import "./components.css";
import "./skill.css";

// - Languages: Python, Javascript, Java, C++, R
// - Frameworks: React, Django, vis.js, d3.js
// - Tools: AWS, Docker, Concourse, Git, Unix
export default class Skill extends Component {
  render() {
    return (
      <div>
        <div className="skill" id="skill">
          <Typography variant="h3" className="center">
            <Slide right>TECHNICAL SKILLS</Slide>
            <Slide right>
              <div className="subhead3" />
            </Slide>
            {/* <Fade bottom delay="300"> */}
            <div className="quote">
              “When something is important enough, you do it even if the odds
              are not in your favor.”
            </div>
            <div className="author">-Elon Musk</div>
            {/* </Fade> */}
          </Typography>

          <div className="container">
            <div className="eachskill">
              <Flip bottom>
                <img
                  src={require("../images/languages.png")}
                  className="height2"
                />

                <div className="skilllabel">LANGUAGES</div>
              </Flip>
            </div>
            <div className="skills">
              <img src={require("../images/python.png")} className="height3" />
              <img
                src={require("../images/javascript.png")}
                className="height3"
              />
              <img src={require("../images/java.png")} className="height3" />
              <img src={require("../images/c++.png")} className="height3" />
              <img src={require("../images/r.png")} className="height3" />
            </div>
          </div>
          <div className="container2">
            <div className="eachskill">
              <Flip bottom delay="200">
                <img
                  src={require("../images/frameworks.png")}
                  className="height2"
                />
                <div className="skilllabel">FRAMEWORKS</div>
              </Flip>
            </div>
            <div className="skills">
              <img src={require("../images/react.png")} className="height3" />
              <img src={require("../images/django.png")} className="height3" />
              <img src={require("../images/visjs.png")} className="height3" />
              <img src={require("../images/d3.png")} className="height3" />
            </div>
          </div>

          <div className="container3">
            <div className="eachskill">
              <Flip bottom delay="300">
                <img src={require("../images/tools.png")} className="height2" />
                <div className="skilllabel">TOOLS</div>
              </Flip>
            </div>
            <div className="skills">
              <img src={require("../images/aws.png")} className="height3" />
              <img src={require("../images/docker.png")} className="height3" />
              <img
                src={require("../images/concourse.png")}
                className="height3"
              />
              <img src={require("../images/git.png")} className="height3" />

              <img src={require("../images/unix.png")} className="height3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
