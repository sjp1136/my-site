import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Icon } from "antd";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import "./components.css";
import "./project.css";

export default class Project extends Component {
  render() {
    return (
      <div className="portfolio" id="portfolio">
        <div className="portfoliosplash" />
        <Typography variant="h3" className="center0">
          <Slide left>PROJECTS</Slide>
          <Slide left>
            <div className="subhead" />
          </Slide>
          <div className="quote2">
            “When something is important enough, you do it even if the odds are
            not in your favor.”
          </div>
          <div className="author2">-Elon Musk</div>
        </Typography>

        <div className="portfoliozindex">
          <Grid
            container
            // spacing={0}
            alignItems="center"
            alignContent="center"
            justify="center"
          >
            <Fade bottom delay="100">
              {/* <Fade> */}
              <Grid item>
                <div className="post">
                  <img
                    src={require("../images/shareit.png")}
                    className="height"
                  />
                  <div className="github">
                    <a href="https://github.com/sjp1136/cs4501-internet-scale">
                      <img
                        src={require("../images/github.png")}
                        className="github2"
                      />
                    </a>
                  </div>
                  <div class="post-s">
                    <div className="used">SHAREIT</div>
                    <div className="description">3TierECommercePlatform</div>
                    <div className="technology django"> DJANGO</div>
                    <a
                      className="none"
                      href="https://github.com/sjp1136/cs4501-internet-scale"
                    >
                      <div className="centered label">VIEW</div>
                    </a>
                  </div>
                </div>
              </Grid>
              {/* </Fade> */}
            </Fade>

            {/* <Fade delay="400"> */}
            <Fade bottom delay="200">
              <Grid item>
                <div className="post">
                  <img
                    src={require("../images/lucky13b.png")}
                    className="height"
                  />

                  <div className="github">
                    <a href="https://github.com/sjp1136/lucky13-skillmatcher">
                      <img
                        src={require("../images/github.png")}
                        className="github2"
                      />
                    </a>
                  </div>
                  <div class="post-s">
                    <div className="used">SKILLMATCHER</div>
                    <div className="description">
                      Student2StudentInteraction
                    </div>

                    <div className="technology django"> DJANGO</div>
                    <a className="none" href="https://lucky-13.herokuapp.com/">
                      <div className="centered label">VIEW</div>
                    </a>
                  </div>
                </div>
              </Grid>
            </Fade>
            {/* </Fade> */}
            {/* <Fade delay="200"> */}
            <Fade bottom delay="300">
              <Grid item>
                <div className="post">
                  <img
                    src={require("../images/trenchtekb.png")}
                    className="height"
                  />
                  <div className="github">
                    <a href="https://github.com/sjp1136/trenchtek">
                      <img
                        src={require("../images/github.png")}
                        className="github2"
                      />
                    </a>
                  </div>
                  <div class="post-s">
                    <div className="used">TRENCHTEK</div>
                    <div className="description">CompanyClientInteraction</div>
                    <div className="technology react"> REACT</div>
                    <a
                      className="none"
                      href="https://trenchtek.firebaseapp.com/"
                    >
                      <div className="centered label">VIEW</div>
                    </a>
                  </div>
                </div>
              </Grid>
            </Fade>
            {/* </Fade> */}

            {/* <Fade delay="500"> */}
            <Fade bottom delay="400">
              <Grid item>
                <div className="post">
                  <img
                    src={require("../images/faceme2.png")}
                    className="height"
                  />
                  <div className="github">
                    <a href="https://github.com/sjp1136/FaceMe-">
                      <img
                        src={require("../images/github.png")}
                        className="github2"
                      />
                    </a>
                  </div>
                  <div class="post-s">
                    <div className="used">FACEME</div>
                    <div className="description">YourFBProfile</div>
                    <div className="technology react"> REACT</div>
                    <a className="none" href="https://github.com/sjp1136/FaceMe-">
                      <div className="centered label">VIEW</div>
                    </a>
                  </div>
                </div>
              </Grid>
            </Fade>
            {/* </Fade> */}
            {/* <Fade delay="700"> */}
            <Fade bottom delay="500">
              <Grid item>
                <div className="post">
                  <img
                    src={require("../images/snflask.png")}
                    className="height"
                  />
                  <div className="github">
                    <a href="https://github.com/sjp1136/sn_flask">
                      <img
                        src={require("../images/github.png")}
                        className="github2"
                      />
                    </a>
                  </div>
                  <div class="post-s">
                    <div className="used">SNFLASK</div>
                    <div className="description">SocialNetwork</div>
                    <div className="technology flask"> FLASK</div>
                    <div className="label2">
                      <a
                        className="none"
                        href="https://github.com/sjp1136/sn_flask"
                      >
                        <div className="centered label">VIEW</div>
                      </a>
                    </div>
                  </div>
                </div>
              </Grid>
            </Fade>
            {/* </Fade> */}
            {/* <Fade delay="600"> */}
            <Fade bottom delay="600">
              <Grid item>
                <div className="post">
                  <img
                    src={require("../images/pomodorob.png")}
                    className="height"
                  />
                  <div className="github">
                    <a href="https://github.com/sjp1136/Pomodoro">
                      <img
                        src={require("../images/github.png")}
                        className="github2"
                      />
                    </a>
                  </div>
                  <div class="post-s">
                    <div className="used">POMODORO</div>
                    <div className="description">ProducitivityTimerApp</div>

                    <div className="technology react"> REACT</div>
                    <a
                      className="none"
                      href="https://pomodoro-18245.firebaseapp.com/login"
                    >
                      <div className="centered label">VIEW</div>
                    </a>
                  </div>
                </div>
              </Grid>
            </Fade>
            {/* </Slide> */}
          </Grid>
          {/* </Slide>
          </Slide> */}

          {/* </Grid> */}
        </div>
      </div>
    );
  }
}
