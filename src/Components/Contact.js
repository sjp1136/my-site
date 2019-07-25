import React, { Component } from "react";
import "./contact.css";
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
    document.getElementById("response").innerHTML = "Please wait a few seconds..";

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      // url: "http://localhost/send",
      url: "https://fathomless-reaches-11670.herokuapp.com/send",
      data: {
        name: name,
        email: email,
        message: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        // alert("Message Sent!");
        document.getElementById("response").innerHTML = "Submitted!";

        this.resetForm();
      } else if (response.data.msg === "fail") {
        // alert("Message failed to send.");
        document.getElementById("response").innerHTML = "Failed to submit!";
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }
  render() {
    return (
      <div>
        <div className="contact" id="contact">
          <div className="center5">
            <Typography variant="h3" className="gentlepadding">
              <Fade bottom>CONTACT</Fade>
              <Fade bottom>
                <div className="subhead" />
              </Fade>
              <div id="response" />
            </Typography>
            <form
              method="POST"
              className="flex2"
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
            >
              <Fade bottom>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="contactname"
                  required="required"
                />
              </Fade>
              <Fade bottom delay="200">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="contactemail"
                  required="required"
                />
              </Fade>

              <Fade bottom delay="200">
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
              <Fade top delay="800">
                <button type="submit" className="button">
                  Submit
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
                  content="703-577-6388"
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
                  <Flip left delay="800" duration="1500">
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

                <Flip left delay="1000" duration="1500">
                  <div className="icon2">
                    <a href="mailto:sp3bk@virginia.edu">
                      <img
                        src={require("../images/mail4.png")}
                        className="icon3"
                      />
                    </a>
                  </div>
                </Flip>

                <div className="iconpadding" />
                <Flip left delay="1200" duration="1500">
                  <div className="icon2">
                    <a href="https://www.linkedin.com/in/sung-joon-park/">
                      <img
                        src={require("../images/linkedin2.png")}
                        className="icon3"
                      />
                    </a>
                  </div>
                </Flip>

                <div className="iconpadding" />
                <Flip left delay="1400" duration="1500">
                  <div className="icon2">
                    <a href="http://github.com/sjp1136/">
                      <img
                        src={require("../images/github2.svg")}
                        className="icon3"
                      />
                    </a>
                  </div>
                </Flip>
              </div>
              <Link to="home" spy={true} smooth={true} duration={2000}>
                <Fade bottom delay="1600">
                  <div className="button2container"><div className="button2">BACK TO HOME</div></div>
                </Fade>
              </Link>
              <div className="copyright">JULY&copy; 2019 SUNG JOON PARK</div>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
