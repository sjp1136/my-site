import React, { Component, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import { Timeline, Event } from "react-timeline-scribble";
import Paper from "@material-ui/core/Paper";

import "./components.css";

export default class About extends Component {
  render() {
    function handleDelete() {}

    function handleClick() {}
    return (
      <div>
        <div class="about" id="about">
          {/* <img src={require("../images/uva4.jpg")} className="aboutsplash" /> */}
          <div className="centered3">
            <Typography variant="h3" className="center3">
              <strong>ABOUT ME</strong>
              <div className="subhead3" />
              <div className="quote">
                “Don’t let your happiness depend on something you may lose.”
              </div>
              <div className="author">- C.S. Lewis</div>
            </Typography>
          </div>
          <div className="center2">
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <div className="paper text">
                  <div className="centered4">
                    <img
                      src={require("../images/selfpic.JPG")}
                      className="aboutpic"
                    />
                  </div>
                  <div className="blackglass">
                    <h2 className="who">WHO AM I?</h2>
                    <p>
                      I am a 3rd year student studying at the University of
                      Virginia, majoring in Computer Science & Statistics in the
                      School of Engineering. I aspire to become a full-stack
                      engineer and enjoy challenging myself to learn and use new
                      modern technologies and tools that software development is
                      revolving around today. My current interests lie in
                      machine learning and cloud services.
                    </p>
                    <p>
                      Outside of academics, I enjoy hanging out with friends in
                      my fellowship, playing tennis, and sometimes reading
                      interesting books.
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <Fragment>
                  {/* <br />
                  <Typography variant="h3">
                    <strong>EDUCATION</strong>
                  </Typography>
                  <br /> */}

                  <VerticalTimeline layout="one-column">
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2017 - Present"
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff"
                      }}
                      icon={
                        <img
                          src={require("../images/uva2.jpg")}
                          className="timelineavatar2"
                        />
                      }
                    >
                      <a className="none2" href="http://www.virginia.edu/">
                        <div className="vertical2">
                          <h2 className="vertical-timeline-element-title ">
                            <a
                              className="none2"
                              href="https://www.virginia.edu/"
                            >
                              University of Virginia
                            </a>
                          </h2>
                          <h4 className="vertical-timeline-element-subtitle role">
                            2nd Year (SEAS) - CS & Statistics
                          </h4>
                          <p>
                            <strong>Activities:</strong> Grace Christian
                            Fellowship, Hackcville.
                          </p>
                          <p>
                            <strong>Coursework: </strong>CS4774 Machine
                            Learning, CS4501 Computer Vision, CS4501 Internet
                            Scale Applications, CS4102 Algorithms, CS3330
                            Computer Arhictecture, CS3240 Advanced Software
                            Development, CS2150 Program and Data Representation,
                            CS2110 Software Development Methods
                          </p>
                        </div>
                      </a>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2013 - 2017"
                      iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff"
                      }}
                      icon={
                        <img
                          src={require("../images/tj.jpg")}
                          className="timelineavatar2"
                        />
                      }
                    >
                      <a className="none2" href="https://tjhsst.fcps.edu/">
                        <div className="vertical2">
                          <h2 className="vertical-timeline-element-title">
                            <a
                              className="none2"
                              href="https://tjhsst.fcps.edu/"
                            >
                              Thomas Jefferson HSST
                            </a>
                          </h2>
                          <h4 className="vertical-timeline-element-subtitle role">
                            Student
                          </h4>
                          <p>
                            <strong>Activities:</strong> Varsity Tennis 2014-15,
                            2016-17.
                          </p>
                          <p>
                            <strong>Coursework: </strong>AP Computer Science,
                            Artificial Intelligence 1 & 2, Mobile App
                            Development, Computer Vision
                          </p>
                        </div>
                      </a>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work vertical-timeline-element--no-children"
                      iconStyle={{
                        background: "rgb(0, 200, 0)",
                        color: "#fff"
                      }}
                      icon={
                        <img
                          src={require("../images/star.png")}
                          className="timelineavatar2"
                        />
                      }
                    />
                  </VerticalTimeline>
                </Fragment>
              </Grid>
              {/*  */}

              {/* <Grid item xs={4} md={4}>
                <div className="">
                  <br />
                  <Typography variant="h3">
                    <strong>COURSES</strong>
                  </Typography>
                  <br />

                  <Grid container spacing={0}>
                    <Grid item xs={6} md={6}>
                      <Typography variant="h4">TJHSST</Typography>

                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <img
                              src={require("../images/tj.jpg")}
                              className="avatar"
                            />
                          </ListItemAvatar>
                          <ListItemText primary="AP CS" />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <img
                              src={require("../images/tj.jpg")}
                              className="avatar"
                            />
                          </ListItemAvatar>
                          <ListItemText primary="Artificial Intelligence" />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <img
                              src={require("../images/tj.jpg")}
                              className="avatar"
                            />
                          </ListItemAvatar>
                          <ListItemText primary="Mobile App Dev" />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <img
                              src={require("../images/tj.jpg")}
                              className="avatar"
                            />
                          </ListItemAvatar>
                          <ListItemText primary="Computer Vision" />
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography variant="h4">UVA</Typography>
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <img
                              src={require("../images/uva2.jpg")}
                              className="avatar"
                            />
                          </ListItemAvatar>
                          <ListItemText primary="CS2110 Software Dev. Methods" />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <img
                              src={require("../images/uva2.jpg")}
                              className="avatar"
                            />
                          </ListItemAvatar>
                          <ListItemText primary="CS2150 Data/Program Rep." />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <img
                              src={require("../images/uva2.jpg")}
                              className="avatar"
                            />
                          </ListItemAvatar>
                          <ListItemText primary="CS4102 Algorithms" />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <img
                              src={require("../images/uva2.jpg")}
                              className="avatar"
                            />
                          </ListItemAvatar>
                          <ListItemText primary="CS4501 Internet Scale App." />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <img
                              src={require("../images/uva2.jpg")}
                              className="avatar"
                            />
                          </ListItemAvatar>
                          <ListItemText primary="CS3240 Adv. Software Dev." />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <img
                              src={require("../images/uva2.jpg")}
                              className="avatar"
                            />
                          </ListItemAvatar>
                          <ListItemText primary="CS3330 Computer Architecture" />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <img
                              src={require("../images/uva2.jpg")}
                              className="avatar"
                            />
                          </ListItemAvatar>
                          <ListItemText primary="CS4774 Machine Learning (Curr.)" />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <img
                              src={require("../images/uva2.jpg")}
                              className="avatar"
                            />
                          </ListItemAvatar>
                          <ListItemText primary="CS4501 Computer Vision (Curr.)" />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </div>
              </Grid> */}
              {/* <Grid item xs={4}>
                <br />
                <Typography variant="h3">
                  <strong>TECH. SKILLS</strong>
                </Typography>
                <br />
                <Typography variant="h5">Languages</Typography>
                <br />

                <div className="">
                  <Chip
                    avatar={
                      <img
                        src={require("../images/python.png")}
                        className="avatar2"
                      />
                    }
                    label="Python"
                    clickable
                    className="chip"
                    color="basic"
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                    className="size"
                  />
                  <Chip
                    avatar={
                      <img
                        src={require("../images/javascript.png")}
                        className="avatar2"
                      />
                    }
                    label="Javascript"
                    clickable
                    className=""
                    color="basic"
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                  />
                  <Chip
                    avatar={
                      <img
                        src={require("../images/java.png")}
                        className="avatar2"
                      />
                    }
                    label="Java"
                    clickable
                    className=""
                    color="basic"
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                  />
                  <Chip
                    avatar={
                      <img
                        src={require("../images/c++.png")}
                        className="avatar2"
                      />
                    }
                    label="C++"
                    clickable
                    className=""
                    color="basic"
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                  />
                  <Chip
                    avatar={
                      <img
                        src={require("../images/r.png")}
                        className="avatar2"
                      />
                    }
                    label="R"
                    clickable
                    className=""
                    color="basic"
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                  />

                  <br />
                  <br />
                  <br />
                  <Typography variant="h5">Frameworks</Typography>
                  <br />

                  <Chip
                    avatar={
                      <img
                        src={require("../images/react.png")}
                        className="avatar2"
                      />
                    }
                    label="React"
                    clickable
                    className=""
                    color="basic"
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                  />
                  <Chip
                    avatar={
                      <img
                        src={require("../images/visjs.png")}
                        className="avatar2"
                      />
                    }
                    label="vis.js"
                    clickable
                    className=""
                    color="basic"
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                  />
                  <Chip
                    avatar={
                      <img
                        src={require("../images/d3.png")}
                        className="avatar2"
                      />
                    }
                    label="d3.js"
                    clickable
                    className=""
                    color="basic"
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                  />
                  <Chip
                    avatar={
                      <img
                        src={require("../images/django.png")}
                        className="avatar2"
                      />
                    }
                    label="Django"
                    clickable
                    className=""
                    color="basic"
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                  />
                  <br />
                  <br />
                  <br />
                  <Typography variant="h5">Tools</Typography>
                  <br />

                  <Chip
                    avatar={
                      <img
                        src={require("../images/aws.jpg")}
                        className="avatar2"
                      />
                    }
                    label="AWS"
                    clickable
                    className=""
                    color="basic"
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                  />
                  <Chip
                    avatar={
                      <img
                        src={require("../images/docker.png")}
                        className="avatar2"
                      />
                    }
                    label="Docker"
                    clickable
                    className=""
                    color="basic"
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                  />
                  <Chip
                    avatar={
                      <img
                        src={require("../images/unix.png")}
                        className="avatar2"
                      />
                    }
                    label="Unix"
                    clickable
                    className=""
                    color="basic"
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                  />
                  <Chip
                    avatar={
                      <img
                        src={require("../images/git.png")}
                        className="avatar2"
                      />
                    }
                    label="GitHub"
                    clickable
                    className=""
                    color="basic"
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                  />
                  <Chip
                    avatar={
                      <img
                        src={require("../images/bitbucket.jpg")}
                        className="avatar2"
                      />
                    }
                    label="Bitbucket"
                    clickable
                    className=""
                    color="basic"
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                  />
                  <Chip
                    avatar={
                      <img
                        src={require("../images/linux.jpeg")}
                        className="avatar2"
                      />
                    }
                    label="Linux"
                    clickable
                    className=""
                    color="basic"
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                  />
                </div>
              </Grid> */}
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
