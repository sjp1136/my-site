import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";

import "./components.css";

// - Languages: Python, Javascript, Java, C++, R
// - Frameworks: React, Django, vis.js, d3.js
// - Tools: AWS, Docker, Concourse, Git, Unix
export default class Skill extends Component {
  render() {
    return (
      <div className="skill" id="skill">
        {/* <img src={require("../images/me.jpg")} className="me" /> */}
        {/* <div src={require("../images/touring4b.jpeg")} className="background" /> */}
        {/* <Typing className="centered" speed={5} hideCursor={false}> */}
        <div className="centered5">
          {/* <div className="portfoliosplash" /> */}

          <Typography variant="h3" className="center3">
            TECHNICAL SKILLS
            <div className="subhead3" />
            <div className="quote">
              “When something is important enough, you do it even if the odds
              are not in your favor.”
            </div>
            <div className="author">-Elon Musk</div>
          </Typography>
        </div>
        <div className="center2">
          <div className="container">
            <div className="eachskill">
              <img
                src={require("../images/languages.png")}
                className="height2"
              />
              <div className="skilllabel">LANGUAGES</div>
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
              <img
                src={require("../images/frameworks.png")}
                className="height2"
              />
              <div className="skilllabel">FRAMEWORKS</div>
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
              <img src={require("../images/tools.png")} className="height2" />
              <div className="skilllabel">TOOLS</div>
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
