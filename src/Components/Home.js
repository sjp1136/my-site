import React, { Component } from "react";
import Typing from "react-typing-animation";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ReactTooltip from "react-tooltip";
import ReactSimpleTooltip from "react-simple-tooltip";
import { Link, animateScroll as scroll } from "react-scroll";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import ScrollAnimation from "react-animate-on-scroll";
import { Parallax } from "react-scroll-parallax";

import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import "animate.css/animate.min.css";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home" id="home">
        <div className="background" />
        <div className="centered">
          <Fade>
            <img src={require("../images/me7.jpeg")} className="me" />
          </Fade>
          <Fade bottom>
            <div className="name">SUNG JOON PARK</div>
          </Fade>

          <Fade bottom delay="300">
            <div className="subhead0" />
          </Fade>
          <Fade bottom delay="300">
            <div className="name2">
              <Typewriter
                options={{
                  strings: ["John 17:17", "Philippians 1:6"],
                  autoStart: true,
                  loop: true,
                }}
              ></Typewriter>
              CS STUDENT @ UVA
            </div>
          </Fade>

          <div className="icons">
            <Flip left delay="400" duration="1000">
              <ReactSimpleTooltip
                arrow={15}
                background="#000"
                border="#000"
                color="#fff"
                content="7035776388"
                fadeDuration={0}
                fadeEasing="linear"
                fixed={false}
                fontFamily="inherit"
                fontSize="inherit"
                offset={0}
                padding={10}
                placement="top"
                radius={0}
                zIndex={1}
              >
                <a href="tel:7035776388">
                  <div className="icon1">
                    <img
                      src={require("../images/phone.png")}
                      className="icon"
                    />
                  </div>
                </a>
              </ReactSimpleTooltip>
            </Flip>

            <div className="iconpadding" />
            <Flip left delay="600" duration="1000">
              <ReactSimpleTooltip
                arrow={15}
                background="#000"
                border="#000"
                color="#fff"
                content="sp3bk@virginia.edu"
                fadeDuration={0}
                fadeEasing="linear"
                fixed={false}
                fontFamily="inherit"
                fontSize="inherit"
                offset={0}
                padding={10}
                placement="top"
                radius={0}
                zIndex={1}
              >
                <a href="mailto:sp3bk@virginia.edu">
                  <div className="icon1">
                    <img
                      src={require("../images/mail4.png")}
                      className="icon"
                    />
                  </div>
                </a>
              </ReactSimpleTooltip>
            </Flip>

            <div className="iconpadding" />
            <Flip left delay="800" duration="1000">
              <ReactSimpleTooltip
                arrow={15}
                background="#000"
                border="#000"
                color="#fff"
                content="linkedin.com/in/sjp/"
                fadeDuration={0}
                fadeEasing="linear"
                fixed={false}
                fontFamily="inherit"
                fontSize="inherit"
                offset={0}
                padding={10}
                placement="top"
                radius={0}
                zIndex={1}
              >
                <a href="https://www.linkedin.com/in/sjp/">
                  <div className="icon1">
                    <img
                      src={require("../images/linkedin2.png")}
                      className="icon"
                    />
                  </div>
                </a>
              </ReactSimpleTooltip>
            </Flip>

            <div className="iconpadding" />
            <Flip left delay="1000" duration="1000">
              <ReactSimpleTooltip
                arrow={15}
                background="#000"
                border="#000"
                color="#fff"
                content="github.com/sjp1136/"
                fadeDuration={0}
                fadeEasing="linear"
                fixed={false}
                fontFamily="inherit"
                fontSize="inherit"
                offset={0}
                padding={10}
                placement="top"
                radius={0}
                zIndex={1}
              >
                <a href="http://github.com/sjp1136/">
                  <div className="icon1">
                    <img
                      src={require("../images/github2.svg")}
                      className="icon"
                    />
                  </div>
                </a>
              </ReactSimpleTooltip>
            </Flip>
          </div>
        </div>

        <div className="centeredb">
          <Link to="about" spy={true} smooth={true} duration={1250}>
            <Fade top delay="1100">
              {/* <Parallax y={[-40, 100]} tagOuter="figure"> */}
              <div className="toabout">ABOUT ME</div>
              {/* </Parallax> */}
            </Fade>
          </Link>
        </div>
        {/* <div className="centeredc">
          <Fade top>
            <div className="quote2">
              “Hardships often prepare ordinary people for an extraordinary
              destiny.”
            </div>

            <div className="author2">-C.S. Lewis</div>
          </Fade>
        </div> */}
        <Navbar />
      </div>
    );
  }
}
