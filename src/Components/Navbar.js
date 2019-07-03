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
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home |
            </Link>
            <Link to="about" spy={true} smooth={true} duration={500}>
              About Me |
            </Link>
            <Link to="portfolio" spy={true} smooth={true} duration={500}>
              Projects |
            </Link>
            <Link to="experience" spy={true} smooth={true} duration={500}>
              Experiences |
            </Link>
            <Link to="misc" spy={true} smooth={true} duration={500}>
              Misc |
            </Link>
            <a
              className="none2"
              href={require("../files/SungJoonParkResume.pdf")}
              target="SungJoonParkResume"
            >
              Resume
            </a>
            {/* <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
