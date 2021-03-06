import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import "./skill.css";

// - Languages: Python, Javascript, Java, C++, R
// - Frameworks: React, Django, vis.js, d3.js
// - Tools: AWS, Docker, Concourse, Git, Unix
export default class Skill extends Component {
  render() {
    return (
      <div>
        <div className="skill" id="skill">
          <Typography variant="h3" className="centerskill">
            <Slide right>TECHNICAL SKILLS</Slide>
            <Slide right>
              <div className="subhead3skill" />
            </Slide>
            {/* <div className="quoteskill">
              “For by you I can run against a troop, and by my God I can leap
              over a wall.”
            </div>

            <div className="authorskill">Psalm 18:29</div> */}
            <div className="quoteskill">
              “He saw, and behold, the mountain was full of horses and chariots
              of fire all around Elisha."
            </div>

            <div className="authorskill">2 Kings 6:17</div>
          </Typography>
          <div className="containercontainer">
            <div className="container">
              <div className="eachskill">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      {/* <Flip left> */}
                      <img
                        src={require("../images/language2.png")}
                        className="height2"
                      />
                      {/* </Flip> */}
                      <div className="skilllabel">LANGUAGES</div>
                    </div>
                    <div class="flip-card-back">
                      <img
                        src={require("../images/language2.png")}
                        className="height2"
                      />

                      <div className="skilllabel">LANGUAGES</div>
                    </div>
                  </div>
                </div>
                {/* <img
                  src={require("../images/languages.png")}
                  className="height2"
                />

                <div className="skilllabel">LANGUAGES</div> */}
                {/* </Flip> */}
              </div>
              <Fade bottom>
                <div className="skills">
                  <img
                    src={require("../images/python.png")}
                    className="height3"
                  />{" "}
                  <img
                    src={require("../images/javascript.png")}
                    className="height3"
                  />
                  <img
                    src={require("../images/java.png")}
                    className="height3"
                  />{" "}
                  <img src={require("../images/c++.png")} className="height3" />
                  <img src={require("../images/r.png")} className="height3" />
                </div>
              </Fade>
            </div>

            <div className="container2">
              <div className="eachskill">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={require("../images/framework2.png")}
                        className="height2"
                      />
                      <div className="skilllabel">FRAMEWORKS</div>
                    </div>
                    <div class="flip-card-back">
                      <img
                        src={require("../images/framework2.png")}
                        className="height2"
                      />

                      <div className="skilllabel">FRAMEWORKS</div>
                    </div>
                  </div>
                </div>
              </div>
              <Fade bottom delay="200">
                <div className="skills">
                  <img
                    src={require("../images/react.png")}
                    className="height3"
                  />
                  <img
                    src={require("../images/django.png")}
                    className="height3"
                  />
                  <img
                    src={require("../images/visjs.png")}
                    className="height3"
                  />
                  <img src={require("../images/d3.png")} className="height3" />
                </div>
              </Fade>
            </div>

            <div className="container3">
              <div className="eachskill">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      {/* <Flip left delay="300"> */}
                      <img
                        src={require("../images/tool2.png")}
                        className="height2"
                      />
                      {/* </Flip> */}
                      <div className="skilllabel">TOOLS</div>
                    </div>
                    <div class="flip-card-back">
                      <img
                        src={require("../images/tool2.png")}
                        className="height2"
                      />

                      <div className="skilllabel">TOOLS</div>
                    </div>
                  </div>
                </div>
                {/* <Flip left delay="300">
                <img src={require("../images/tools.png")} className="height2" />
                <div className="skilllabel">TOOLS</div>
              </Flip> */}
              </div>
              <Fade bottom delay="400">
                <div className="skills">
                  <img src={require("../images/aws.png")} className="height3" />
                  <img
                    src={require("../images/docker.png")}
                    className="height3"
                  />
                  <img
                    src={require("../images/jenkins.png")}
                    className="height3"
                  />
                  <img src={require("../images/git.png")} className="height3" />

                  <img
                    src={require("../images/unix.png")}
                    className="height3"
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
