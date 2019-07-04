import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    const classes = makeStyles({
      root: {
        flexGrow: 1
      }
    });

    return (
      <div>
        <div>
          <div className="nav " />
          <div className="nav2 centered2">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <div className="link">Home</div>
            </Link>
            <Link to="about" spy={true} smooth={true} duration={500}>
              <div className="link">About</div>
            </Link>
            <Link to="portfolio" spy={true} smooth={true} duration={500}>
              <div className="link">Projects</div>
            </Link>
            <Link to="experience" spy={true} smooth={true} duration={500}>
              <div className="link">Experiences</div>
            </Link>
            <Link to="misc" spy={true} smooth={true} duration={500}>
              <div className="link">Misc</div>
            </Link>

            <a
              className="link"
              href={require("../files/SungJoonParkResume.pdf")}
              target="SungJoonParkResume"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}
