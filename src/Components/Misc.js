import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";

import GridListTile from "@material-ui/core/GridListTile";
import ModalImage from "react-modal-image";
import Footer from "./Footer.js";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
// import tileData from "./tileData";
// import ListHeader from "@material-ui/core/ListHeader";

import "./components.css";
import "./misc.css";

export default class Misc extends Component {
  render() {
    const classes = makeStyles(theme => ({
      root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
      },
      gridList: {
        width: 1500,
        height: 500
      }
    }));
    const gcf = [
      {
        img: require("../images/group1.jpg"),
        author: "SJP",
        cols: 3
      },
      {
        img: require("../images/group2.jpg"),
        author: "SJP",
        cols: 3
      },
      {
        img: require("../images/group3.jpg"),
        author: "SJP",
        cols: 3
      },
      // {
      //   img: require("../images/group4.jpg"),
      //   author: "SJP",
      //   cols: 3
      // },
      {
        img: require("../images/group5.jpg"),
        author: "SJP",
        cols: 3
      }
      // {
      //   img: require("../images/group6.jpg"),
      //   author: "SJP",
      //   cols: 2
      // }
    ];
    const vw = [
      {
        img: require("../images/vw1.JPG"),
        title: "VW",
        author: "SJP",
        cols: 1
      },
      {
        img: require("../images/vw3.JPG"),
        title: "VW",
        author: "SJP",
        cols: 2
      },
      {
        img: require("../images/vw14.JPG"),
        title: "VW",
        author: "SJP",
        cols: 2
      },

      {
        img: require("../images/vw11.JPG"),
        title: "VW",
        author: "SJP",
        cols: 2
      },

      {
        img: require("../images/vw9.JPG"),
        title: "VW",
        author: "SJP",
        cols: 2
      },
      {
        img: require("../images/vw8.JPG"),
        title: "VW",
        author: "SJP",
        cols: 1
      }
    ];

    const touring = [
      {
        img: require("../images/touring.JPG"),
        title: "VW",
        author: "SJP",
        cols: 2
      },
      {
        img: require("../images/touring2.JPG"),
        title: "VW",
        author: "SJP",
        cols: 1
      },
      {
        img: require("../images/touring3.JPG"),
        title: "VW",
        author: "SJP",
        cols: 2
      },
      // {
      //   img: require("../images/touring5.JPG"),
      //   title: "VW",
      //   author: "SJP",
      //   cols: 1
      // },
      {
        img: require("../images/touring6.JPG"),
        title: "VW",
        author: "SJP",
        cols: 2
      },
      // {
      //   img: require("../images/touring7.JPG"),
      //   title: "VW",
      //   author: "SJP",
      //   cols: 1
      // },
      {
        img: require("../images/touring4.JPG"),
        title: "VW",
        author: "SJP",
        cols: 2
      },
      {
        img: require("../images/touring8.JPG"),
        title: "VW",
        author: "SJP",
        cols: 1
      }
    ];

    const nature = [
      {
        img: require("../images/nature1.JPG"),
        title: "VW",
        author: "SJP",
        cols: 2
      },
      {
        img: require("../images/nature3.JPG"),
        title: "VW",
        author: "SJP",
        cols: 1
      },
      {
        img: require("../images/nature2.JPG"),
        title: "VW",
        author: "SJP",
        cols: 2
      },

      {
        img: require("../images/nature4.JPG"),
        title: "VW",
        author: "SJP",
        cols: 2
      },
      {
        img: require("../images/nature5.JPG"),
        title: "VW",
        author: "SJP",
        cols: 2
      },
      {
        img: require("../images/nature6.JPG"),
        title: "VW",
        author: "SJP",
        cols: 1
      }
      // {
      //   img: require("../images/nature7.JPG"),
      //   title: "VW",
      //   author: "SJP",
      //   cols: 2
      // },
      // {
      //   img: require("../images/nature8.JPG"),
      //   title: "VW",
      //   author: "SJP",
      //   cols: 1
      // }
    ];
    var height = 250;
    return (
      <div class="misc" id="misc">
        <div className="background2" />

        {/* <div className="centeredmisc"> */}
        <Typography variant="h3" className="center1">
          <Slide left>PHOTOS</Slide>
          <Slide left>
            <div className="subhead" />
          </Slide>
          <div className="quote2">
            “If I find in myself a desire which no experience in this world can
            satisfy, the most probable explanation is that I was made for
            another world.”
          </div>
          <div className="author2">-C.S. Lewis</div>
        </Typography>
        <div className="misccontainer">
          <Fade delay="200">
            <Slide bottom>
              <GridList cellHeight={height} className="overflow" cols={6}>
                {gcf.map(tile => (
                  <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <div className="picture">
                      <div className="picture3">
                        <a className="none2" href={tile.img} target="_blank">
                          <div className="download">VIEW</div>
                        </a>
                      </div>

                      <img
                        src={tile.img}
                        alt={tile.title}
                        className="picture2"
                      />
                    </div>
                  </GridListTile>
                ))}
              </GridList>
              <GridList cellHeight={height} className="overflow" cols={5}>
                {nature.map(tile => (
                  <GridListTile
                    key={tile.img}
                    cols={tile.cols || 1}
                    className="overflow"
                  >
                    <div className="picture overflow">
                      <div className="picture3 overflow">
                        <a
                          className="none2 overflow"
                          href={tile.img}
                          target="_blank"
                        >
                          <div className="download">VIEW</div>
                        </a>
                      </div>

                      <img
                        src={tile.img}
                        alt={tile.title}
                        className="picture2"
                      />
                    </div>
                  </GridListTile>
                ))}
              </GridList>

              <GridList cellHeight={height} className="overflow" cols={5}>
                {touring.map(tile => (
                  <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <div className="picture">
                      <div className="picture3">
                        <a className="none2" href={tile.img} target="_blank">
                          <div className="download">VIEW</div>
                        </a>
                      </div>

                      <img
                        src={tile.img}
                        alt={tile.title}
                        className="picture2"
                      />
                    </div>
                  </GridListTile>
                ))}
              </GridList>

              <GridList cellHeight={height} className="overflow" cols={5}>
                {vw.map(tile => (
                  <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <div className="picture">
                      <div className="picture3">
                        <a className="none2" href={tile.img} target="_blank">
                          <div className="download">VIEW</div>
                        </a>
                      </div>

                      <img
                        src={tile.img}
                        alt={tile.title}
                        className="picture2"
                      />
                    </div>
                  </GridListTile>
                ))}
              </GridList>
            </Slide>
          </Fade>
        </div>
      </div>
      // </div>
    );
  }
}
