import React, { Component } from "react";
import "./components.css";
import "./footer.css";
import ReactSimpleTooltip from "react-simple-tooltip";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer" id="">
          <div className="center5">
            {/* <div className="contact">CONTACT </div> */}
            <div className="icons2">
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
                    <img
                      src={require("../images/phone.png")}
                      className="icon"
                    />
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
                  <img
                    src={require("../images/linkedin2.png")}
                    className="icon"
                  />
                </a>
              </div>

              <div className="iconpadding" />
              <div className="icon1">
                <a href="http://github.com/sp3bk/">
                  <img
                    src={require("../images/github2.svg")}
                    className="icon"
                  />
                </a>
              </div>
            </div>{" "}
            <Link to="home" spy={true} smooth={true} duration={1500}>
              <div className="button">HOME</div>
            </Link>
            <div className="copyright">&copy;2019 SUNG JOON PARK</div>
          </div>
        </div>
      </div>
    );
  }
}
