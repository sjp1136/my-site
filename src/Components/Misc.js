import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";

import GridListTile from "@material-ui/core/GridListTile";
import ModalImage from "react-modal-image";
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
        cols: 2.6
      },
      {
        img: require("../images/group2.jpg"),
        author: "SJP",
        cols: 2.4
      },
      {
        img: require("../images/group3.jpg"),
        author: "SJP",
        cols: 2.5
      },
      {
        img: require("../images/group5.jpg"),
        author: "SJP",
        cols: 2.5
      }
    ];
    const vw = [
      {
        img: require("../images/vw1.JPG"),
        title: "VW",
        author: "SJP",
        cols: 1
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
    ];

    const touring = [
      {
        img: require("../images/touring.JPG"),
        title: "VW",
        author: "SJP",
        cols: 2
      },
      {
        img: require("../images/touring.jpeg"),
        title: "VW",
        author: "SJP",
        cols: 2
      },
      {
        img: require("../images/touring2.JPG"),
        title: "VW",
        author: "SJP",
        cols: 1
      }
    ];

    const nature = [
      {
        img: require("../images/nature3.JPG"),
        title: "VW",
        author: "SJP",
        cols: 1
      },
      {
        img: require("../images/nature1.JPG"),
        title: "VW",
        author: "SJP",
        cols: 2
      },
      {
        img: require("../images/nature2.JPG"),
        title: "VW",
        author: "SJP",
        cols: 2
      }

    ];
    // const gcf = [
    //   {
    //     src: require("../images/group1.jpg"),
    //     width: 7,
    //     height: 4
    //   },
    //   {
    //     src: require("../images/group2.jpg"),
    //     width: 5,
    //     height: 3

    //   },
    //   {
    //     src: require("../images/group3.jpg"),
    //     width: 4,
    //     height: 3

    //   },
    //   {
    //     src: require("../images/group5.jpg"),
    //     width: 5,
    //     height: 3

    //   }
    // ];
    // const nature = [
    //   {
    //     src: require("../images/nature3.JPG"),
    //     width: 2,
    //     height: 5
    //   },
    //   {
    //     src: require("../images/nature1.JPG"),
    //     width: 2,
    //     height: 3
    //   },
    //   {
    //     src: require("../images/nature2.JPG"),
    //     width: 2,
    //     height: 3
    //   }
    // ];
    // const touring = [
    //   {
    //     src: require("../images/touring.JPG"),
    //     width: 2,
    //     height: 3
    //   },
    //   {
    //     src: require("../images/touring.jpeg"),
    //     width: 2,
    //     height: 3
    //   },
    //   {
    //     src: require("../images/touring2.JPG"),
    //     author: "SJP",
    //     width: 2,
    //     height: 3
    //   }
    // ];
    // const vw = [
    //   {
    //     src: require("../images/vw1.JPG"),
    //     width: 2,
    //     height: 3
    //   },
    //   {
    //     src: require("../images/vw14.JPG"),
    //     width: 2,
    //     height: 3
    //   },

    //   {
    //     src: require("../images/vw11.JPG"),
    //     width: 2,
    //     height: 3
    //   },
    // ];

    const all = gcf.concat(nature.concat(touring.concat(vw)));
    var height = 300;
    return (
      <div class="misc" id="misc">
        <div className="background2" />

        <Typography variant="h3" className="center1">
          <Slide left>PHOTOS</Slide>
          <Slide left>
            <div className="subhead" />
          </Slide>
          {/* <div className="quote2">
            “If I find in myself a desire which no experience in this world can
            satisfy, the most probable explanation is that I was made for
            another world.”
          </div>
          <div className="author2">-C.S. Lewis</div> */}
        </Typography>
        <div className="misccontainer">
          <Fade delay="200">
            <Slide bottom>
              <GridList cellHeight={height} className="overflow" cols={5}>
                {all.map(tile => (
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
