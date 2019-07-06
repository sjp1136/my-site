import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";

import "./components.css";

export default class Skill extends Component {
  render() {
    return (
      <div className="skill" id="skill">
        {/* <img src={require("../images/me.jpg")} className="me" /> */}
        {/* <div src={require("../images/touring4b.jpeg")} className="background" /> */}
        {/* <Typing className="centered" speed={5} hideCursor={false}> */}
        <div className="centered5">
          <Typography variant="h3" className="center3">
            <strong>TECHNICAL SKILLS</strong>
            <div className="subhead3" />
            <div className="quote">
              “If something is important enough, you should try even if the
              probable outcome is a failure.”
            </div>
            <div className="author">- Elon Musk</div>
          </Typography>
        </div>
        <div className="center2" />
      </div>
    );
  }
}
