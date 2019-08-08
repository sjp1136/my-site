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
import Navbar from "./Navbar";
import "animate.css/animate.min.css";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home" id="home">
        <div className="background" />
        <div className="centered">
          <Fade>
            <img src={require("../images/me.png")} className="me" />
          </Fade>
          <Fade bottom>
            <div className="name">SUNG JOON PARK</div>
          </Fade>

          <Fade bottom delay="1500">
            <div className="subhead0" />
          </Fade>
          <Fade bottom delay="300">
            <div className="name2">STUDENT & SOFTWARE DEVELOPER</div>
          </Fade>

          <div className="icons">
            <ReactSimpleTooltip
              arrow={15}
              background="#000"
              border="#000"
              color="#fff"
              content="703-577-6388"
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
              <Flip left delay="400" duration="1500">
                <div className="icon1">
                  <a href="tel:7035776388">
                    <img
                      src={require("../images/phone.png")}
                      className="icon"
                    />
                  </a>
                </div>
              </Flip>
            </ReactSimpleTooltip>

            <div className="iconpadding" />

            <Flip left delay="600" duration="1500">
              <div className="icon1">
                <a href="mailto:sp3bk@virginia.edu">
                  <img src={require("../images/mail4.png")} className="icon" />
                </a>
              </div>
            </Flip>

            <div className="iconpadding" />
            <Flip left delay="800" duration="1500">
              <div className="icon1">
                <a href="https://www.linkedin.com/in/sung-joon-park/">
                  <img
                    src={require("../images/linkedin2.png")}
                    className="icon"
                  />
                </a>
              </div>
            </Flip>

            <div className="iconpadding" />
            <Flip left delay="1000" duration="1500">
              <div className="icon1">
                <a href="http://github.com/sjp1136/">
                  <img
                    src={require("../images/github2.svg")}
                    className="icon"
                  />
                </a>
              </div>
            </Flip>
          </div>
        </div>

        <div className="centeredb">
          <Link to="about" spy={true} smooth={true} duration={1250}>
            <Fade top delay="1100">
              <Typography className="toabout">ABOUT ME</Typography>
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
