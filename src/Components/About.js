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
            <div className="author">-C.S. Lewis</div>
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
                      4th Year (School of Engineering) - CS, Statistics (Minor),
                      '21.
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
                    src={require("../images/me5.jpeg")}
                    className="aboutpic"
                  />

                  <div className="blackglass">
                    <h2 className="who">WHO AM I?</h2>
                    <p className="p">
                      I am a 4th year student studying at the University of
                      Virginia, majoring in Computer Science in the School of
                      Engineering with a minor in Statistics. I am an incoming
                      software engineer at&nbsp;
                      <a href="http://appian.com/" className="none4 p">
                        Appian Corporation
                      </a>
                      , a cloud computing B2B software company in Tysons Corner
                      VA based in the Washington D.C metro area.
                      <p className="p">
                        Down the road, I aspire to become a full-stack engineer
                        and enjoy challenging myself to learn and use new modern
                        technologies and tools that software development is
                        revolving around today.
                      </p>
                    </p>
                    <p className="p">
                      Outside of academics, I enjoy hanging out with friends in
                      my fellowship, playing tennis, and playing guitar.
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
                    <div className="p">Student 2013-2017.</div>
                    <p className="p">
                      <strong>Activities:</strong> Varsity Tennis 2014-15,
                      2016-17, Senior Research (NeuroLab).
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
