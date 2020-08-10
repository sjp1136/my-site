import React, { Component } from "react";
import "./contact.css";
import "./contact_fireworks.css";
import "./home.css";
import "./contact_bubbles.css";

import Typography from "@material-ui/core/Typography";

import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import ReactSimpleTooltip from "react-simple-tooltip";
import { Link, animateScroll as scroll } from "react-scroll";
import axios from "axios";
import firebase from "./Firebase";

// https://ciunkos.com/creating-contact-forms-with-nodemailer-and-react
export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
    };
  }
  componentDidMount() {
    const rootRef = firebase.database();
    const usernameRef = rootRef.ref("people");

    usernameRef.on("value", (snapshot) => {
      var a = [];
      snapshot.forEach(function(childSnapshot) {
        a.push(childSnapshot.val());
      });
      this.setState({
        people: a,
      });
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    document.getElementById("response").innerHTML =
      "Please wait a few seconds..";

    const name = document.getElementById("name").value;
    // const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    var today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    this.state.people.push({
      name: name,
      message: message,
      date: date,
    });
    var size = this.state.people.length;
    if (size > 10) {
      firebase
        .database()
        .ref()
        .set({
          people: this.state.people.slice(1, size),
        });
    } else {
      firebase
        .database()
        .ref()
        .set({
          people: this.state.people,
        });
    }
    // axios({
    //   method: "POST",
    //   url: "https://fathomless-reaches-11670.herokuapp.com/send",
    //   data: {
    //     name: name,
    //     email: email,
    //     message: message,
    //   },
    // });
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
          <div id="background-wrap">
            {this.state.people.map(function(people, index) {
              var name = "bubble x" + (index + 1);
              if (index + 1 <= 10) {
                return (
                  <div className={name}>
                    <strong>#{index + 1} </strong>
                    <q>
                      <strong>{people.message}</strong>
                    </q>
                    <div>
                      from <strong>{people.name}</strong> on{" "}
                      <strong> {people.date}</strong>
                    </div>
                  </div>
                );
              }
            })}

            <div className="panel"></div>
          </div>

          <div className="pyro">
            <div class="before"></div>
            <div class="after"></div>
          </div>
          <div className="center5">
            <Typography variant="h3" className="gentlepadding">
              <Fade bottom>VISITOR CHECK-IN</Fade>
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
                  rows="2"
                  cols="15"
                  placeholder="Message"
                  className="contactmessage"
                  wrap="hard"
                  maxlength="150"
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
