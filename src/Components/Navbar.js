import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import "./components.css";
import "./navbar.css";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div>
        <div>
          <div className="nav " />
          <div className="nav2 centered2">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <Fade>
                <div className="link">HOME</div>
              </Fade>
            </Link>
            <Link to="about" spy={true} smooth={true} duration={500}>
              <Fade delay="100">
                <div className="link">ABOUT</div>
              </Fade>
            </Link>
            <Link to="skill" spy={true} smooth={true} duration={500}>
              <Fade delay="200">
                <div className="link">SKILLS</div>
              </Fade>
            </Link>
            <Link to="portfolio" spy={true} smooth={true} duration={500}>
              <Fade delay="300">
                <div className="link">PROJECTS</div>
              </Fade>
            </Link>
            <Link to="experience" spy={true} smooth={true} duration={500}>
              <Fade delay="400">
                <div className="link">EXPERIENCE</div>
              </Fade>
            </Link>
            <Link to="misc" spy={true} smooth={true} duration={500}>
              <Fade delay="500">
                <div className="link">MISC</div>
              </Fade>
            </Link>
            <a
              className="none"
              href={require("../files/SungJoonParkResume.pdf")}
              target="SungJoonParkResume"
            >
              <Fade delay="600">
                <div className="link">RESUME</div>
              </Fade>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
