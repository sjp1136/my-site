import React, { Component } from "react";
import "./components.css";
import Typing from "react-typing-animation";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import ReactTooltip from "react-tooltip";
import ReactSimpleTooltip from "react-simple-tooltip";
import { Link, animateScroll as scroll } from "react-scroll";

import { Icon } from "antd";

export default class Home extends Component {
  render() {
    return (
      <div className="home" id="home">
        <img src={require("../images/me.jpg")} className="me" />
        <div src={require("../images/touring4.JPG")} className="background" />
        {/* <Typing className="centered" speed={5} hideCursor={false}> */}
        <div className="centered6">
          <Typography>
            <div className="quote2">
              “Hardships often prepare ordinary people for an extraordinary
              destiny.”
            </div>
            <div className="author2">-C.S. Lewis</div>
          </Typography>
        </div>
        <div className="centered">
          <Typography>
            <div className="name">SUNG JOON PARK</div>
          </Typography>
          <Typography>
            <div className="subhead0" />

            <div className="name2">STUDENT & SOFTWARE DEVELOPER</div>
          </Typography>
        </div>
        {/* </Typing> */}
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
            <div className="icon1">
              <a href="tel:7035776388">
                <img src={require("../images/phone.png")} className="icon" />
              </a>
            </div>
          </ReactSimpleTooltip>

          <div className="iconpadding" />

          <div className="icon1">
            <a href="mailto:sp3bk@virginia.edu">
              <img src={require("../images/mail4.png")} className="icon" />
            </a>
          </div>

          <div className="iconpadding" />
          <div className="icon1">
            <a href="https://www.linkedin.com/in/sung-joon-park/">
              <img src={require("../images/linkedin2.png")} className="icon" />
            </a>
          </div>

          <div className="iconpadding" />
          <div className="icon1">
            <a href="http://github.com/sp3bk/">
              <img src={require("../images/github2.svg")} className="icon" />
            </a>
          </div>
        </div>
        <Link to="about" spy={true} smooth={true} duration={6500}>
          <Typography className="toabout">ABOUT ME</Typography>
        </Link>
      </div>
    );
  }
}
