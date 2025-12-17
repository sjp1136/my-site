import React, { Component, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import { Timeline, Event } from "react-timeline-scribble";
import Paper from "@material-ui/core/Paper";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Navbar from "./Navbar";
import Drawer from "react-motion-drawer";
import { Parallax } from "react-scroll-parallax";
import Typewriter from "typewriter-effect";

import "./about.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="about" id="about">
          {/* <Navbar /> */}

          <Typography variant="h3" className="center">
            <Slide left>ABOUT ME</Slide>
            <Slide left>
              <div className="subhead" />
            </Slide>
            <div className="quote2">
              “Love is unselfishly choosing for another's highest good.”
            </div>
            &nbsp;
            {/* <div className="author">-C.S. Lewis</div> */}
          </Typography>
          <div className="flex">
            <div className="paper2">
              <Fade delay="100">
                {/* <Slide bottom delay="200"> */}
                <div className="paper">
                  <img
                    src={require("../images/uva3.jpeg")}
                    className="aboutpic"
                  />

                  <div className="blackglass">
                    <h2 className="who">
                      <a href="https://www.virginia.edu/" className="none4 p2">
                        University of Virginia
                      </a>
                    </h2>
                    <div className="p">
                      Graduate of 2021. Bachelor of Science in Computer Science,
                      Minor in Statistics .
                    </div>
                    <p className="p">
                      <strong>Activities:</strong> Grace Christian Fellowship,
                      Hackcville.
                    </p>

                    <p className="p">
                      <strong>Coursework:</strong> Operating Systems, Databases,
                      Info Retrieval, Machine Learning, Computer Vision,
                      Internet Scale Applications, Algorithms, Computer
                      Architecture, Data Structures
                    </p>
                  </div>
                </div>
                {/* </Slide> */}
              </Fade>
            </div>
            <div className="paper2">
              <Fade delay="100">
                <div className="paper">
                  <img
                    src={require("../images/me10.jpeg")}
                    className="aboutpic"
                  />

                  <div className="blackglass">
                    <h2 className="who">About Me</h2>
                    <p className="p">
                      💼 I am currently a Senior Software Engineer at &nbsp;
                      <a href="https://fptsoftware.com/" className="none4 p">
                        FPT Software
                      </a>
                      , developing automotive security IT solutions for client
                      &nbsp;
                      <a
                        href="https://www.hyundai-autoever.com/kor/main/index.do"
                        className="none4 p"
                      >
                        Hyundai Autoever
                      </a>
                      . Previously, I worked as a Software Engineer at &nbsp;
                      <a href="https://appian.com/" className="none4 p">
                        Appian
                      </a>
                      &nbsp;, building various full-stack enterprise software.
                    </p>
                    <p className="p">
                      <p className="p">
                        💻 I enjoy working with different technologies/tools and
                        building modular, robust (and later scalable) software
                        that help solve critical business problems. Currently, I
                        am learning Elixir and Phoenix Framework to build a
                        client-business web application.
                      </p>
                      <p className="p"></p>
                    </p>
                    <p className="p">
                      In my free time, I enjoy watching 🎾 professional tennis
                      (ATP), 🥾🏞️ hiking different national parks, playing 🎵
                      guitar, or exploring different places in 🇰🇷 Korea.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="paper2">
              <Fade delay="100">
                <div className="paper">
                  <img
                    src={require("../images/tjhsst.png")}
                    className="aboutpic"
                  />

                  <div className="blackglass">
                    <h2 className="who">
                      <a className="none4 p2" href="https://tjhsst.fcps.edu/">
                        Thomas Jefferson HSST
                      </a>
                    </h2>
                    <div className="p">Graduate of 2017.</div>
                    <p className="p">
                      <strong>Activities:</strong> Varsity Tennis, Neuroscience
                      Research Lab.
                    </p>

                    <p className="p">
                      <strong>Coursework:</strong> AP Computer Science,
                      Artificial Intelligence 1 & 2, Mobile App Development,
                      Computer Vision
                    </p>
                  </div>
                </div>
                {/* </Slide> */}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
