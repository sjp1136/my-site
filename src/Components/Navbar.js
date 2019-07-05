import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";

import "./components.css";

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
              <div className="link">HOME</div>
            </Link>
            <Link to="about" spy={true} smooth={true} duration={500}>
              <div className="link">ABOUT</div>
            </Link>
            <Link to="portfolio" spy={true} smooth={true} duration={500}>
              <div className="link">PROJECTS</div>
            </Link>
            <Link to="experience" spy={true} smooth={true} duration={500}>
              <div className="link">EXPERIENCES</div>
            </Link>
            <Link to="misc" spy={true} smooth={true} duration={500}>
              <div className="link">MISC</div>
            </Link>

            <a
              className="link"
              href={require("../files/SungJoonParkResume.pdf")}
              target="SungJoonParkResume"
            >
              RESUME
            </a>
          </div>
        </div>
      </div>
    );
  }
}
