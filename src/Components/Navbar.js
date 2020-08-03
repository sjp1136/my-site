import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import $ from "jquery";
import "./navbar.css";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  constructor(props) {
    super(props);

    this.state = {};

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = 0);
  }
  render() {
    return (
      <div className="navz">
        <nav>
          <div
            className={
              this.state.scroll > this.state.top ? "nav-scrolled" : "nav"
            }
          >
            <Link
              className="link"
              activeClassName="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Fade>
                <div className="nav_underliner">HOME</div>
              </Fade>
            </Link>
            <Link
              className="link"
              activeClassName="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Fade delay="100">
                <div className="nav_underliner">ABOUT</div>
              </Fade>
            </Link>
            <Link
              className="link"
              activeClassName="active"
              to="skill"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Fade delay="200">
                <div className="nav_underliner">SKILLS</div>
              </Fade>
            </Link>
            <Link
              className="link"
              activeClassName="active"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Fade delay="300">
                <div className="projectsname">
                  <div className="nav_underliner">PROJECTS</div>
                </div>
              </Fade>
            </Link>
            <Link
              className="link"
              activeClassName="active"
              to="experience"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Fade delay="400">
                <div className="nav_underliner">EXPERIENCE</div>
              </Fade>
            </Link>
            <Link
              className="link"
              activeClassName="active"
              to="misc"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Fade delay="500">
                <div className="nav_underliner">MISC</div>
              </Fade>
            </Link>
            <Link
              className="link"
              activeClassName="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Fade delay="500">
                <div className="nav_underliner">CONTACT</div>
              </Fade>
            </Link>
            <a
              className="link none"
              href={require("../files/SungJoonParkResume.pdf")}
              target="SungJoonParkResume.pdf"
            >
              <Fade delay="600">
                <div className="nav_underliner">RESUME</div>
              </Fade>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
