import React, { Component } from "react";
import "./contact.css";
import "./contact_fireworks.css";
import "./home.css";

import Typography from "@material-ui/core/Typography";

import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import ReactSimpleTooltip from "react-simple-tooltip";
import { Link, animateScroll as scroll } from "react-scroll";
import axios from "axios";

// https://ciunkos.com/creating-contact-forms-with-nodemailer-and-react
export default class Contact extends Component {
  handleSubmit(e) {
    e.preventDefault();
    // document.getElementById("response").innerHTML = "Please wait a few seconds..";

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "https://fathomless-reaches-11670.herokuapp.com/send",
      data: {
        name: name,
        email: email,
        message: message,
      },
    });
    // .then(response => {
    //   if (response.data.msg === "success") {
    //     document.getElementById("response").innerHTML = "Submitted!";

    //   } else if (response.data.msg === "fail") {
    //     document.getElementById("response").innerHTML = "Failed to submit!";
    //   }
    // });
    document.getElementById("response").innerHTML =
      "Submitted! Thank you for visiting my page!";
    this.resetForm();
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }
  render() {
    return (
      <div>
        <div className="contact" id="contact">
          <div className="pyro">
            <div class="before"></div>
            <div class="after"></div>
          </div>
          <div className="center5">
            <Typography variant="h3" className="gentlepadding">
              <Fade bottom>CONTACT</Fade>
              <Fade bottom>
                <div className="subhead" />
              </Fade>
              <div id="response">
                "Give thanks to the Lord, for He is good; His love endures
                forever." <br />
                <br /> Psalm 118:1
              </div>
            </Typography>
            <form
              method="POST"
              className="flex2"
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
            >
              <Fade delay="200">
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="contactname"
                  required="required"
                />
              </Fade>
              <Fade delay="200">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="contactemail"
                  required="required"
                />
              </Fade>

              <Fade delay="200">
                <textarea
                  id="message"
                  type="text"
                  rows="4"
                  cols="20"
                  placeholder="Message"
                  className="contactmessage"
                  wrap="hard"
                />
              </Fade>
              <Fade top delay="200">
                <button type="submit" className="button">
                  SUBMIT
                </button>
              </Fade>
            </form>

            <div className="footer">
              <div className="icons2">
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
                  fontSize="15px"
                  offset={0}
                  padding={10}
                  placement="top"
                  radius={0}
                  zIndex={1}
                >
                  <Flip left delay="400" duration="1000">
                    <div className="icon2">
                      <a href="tel:7035776388">
                        <img
                          src={require("../images/phone.png")}
                          className="icon3"
                        />
                      </a>
                    </div>
                  </Flip>
                </ReactSimpleTooltip>

                <div className="iconpadding" />
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
                  fontSize="15px"
                  offset={0}
                  padding={10}
                  placement="top"
                  radius={0}
                  zIndex={1}
                >
                  <Flip left delay="600" duration="1000">
                    <div className="icon2">
                      <a href="mailto:sp3bk@virginia.edu">
                        <img
                          src={require("../images/mail4.png")}
                          className="icon3"
                        />
                      </a>
                    </div>
                  </Flip>
                </ReactSimpleTooltip>

                <div className="iconpadding" />
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
                  fontSize="15px"
                  offset={0}
                  padding={10}
                  placement="top"
                  radius={0}
                  zIndex={1}
                >
                  <Flip left delay="800" duration="1000">
                    <div className="icon2">
                      <a href="https://www.linkedin.com/in/sung-joon-park/">
                        <img
                          src={require("../images/linkedin2.png")}
                          className="icon3"
                        />
                      </a>
                    </div>
                  </Flip>
                </ReactSimpleTooltip>

                <div className="iconpadding" />
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
                  fontSize="15px"
                  offset={0}
                  padding={10}
                  placement="top"
                  radius={0}
                  zIndex={1}
                >
                  <Flip left delay="1000" duration="1000">
                    <div className="icon2">
                      <a href="http://github.com/sjp1136/">
                        <img
                          src={require("../images/github2.svg")}
                          className="icon3"
                        />
                      </a>
                    </div>
                  </Flip>
                </ReactSimpleTooltip>
              </div>
              <Link to="home" spy={true} smooth={true} duration={2000}>
                <Fade bottom delay="1200">
                  <div className="button2container">
                    <div className="button2">BACK TO HOME</div>
                  </div>
                </Fade>
              </Link>
              <div className="copyright">&copy;2019 SUNG JOON PARK</div>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
