import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";

import GridListTile from "@material-ui/core/GridListTile";
import ModalImage from "react-modal-image";

// import tileData from "./tileData";
// import ListHeader from "@material-ui/core/ListHeader";

import "./components.css";

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
        width: 800,
        height: 450
      }
    }));
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

    return (
      <div>
        <div class="misc" id="misc">
          <Typography variant="h3" className="center">
            <strong>PHOTOS (iPhone7)</strong>
            <div className="subhead" />
          </Typography>
          {/* Nature */}
          <Typography variant="h5" className="center">
            <strong>Nature</strong>
            <div className="subhead2" />
          </Typography>
          <div className="limit">
            <GridList cellHeight={250} className={classes.gridList} cols={5}>
              {nature.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                  <div className="picture">
                    <div className="picture3">
                      <a className="none2" href={tile.img} target="_blank">
                        <div className="download">VIEW</div>
                      </a>
                    </div>
                    <ModalImage
                      small={tile.img}
                      large={tile.img}
                      alt="Hello World!"
                      className="picture2"
                    />
                  </div>
                  {/* <img src={tile.img} alt={tile.title} className="enlarge" /> */}
                </GridListTile>
              ))}
            </GridList>
            {/* Touring */}
            <div className={classes.root}>
              <Typography variant="h5" className="center">
                <strong>Touring</strong>
                <div className="subhead2" />
              </Typography>
              <GridList cellHeight={250} className={classes.gridList} cols={5}>
                {touring.map(tile => (
                  <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <div className="picture">
                      <div className="picture3">
                        <a className="none2" href={tile.img} target="_blank">
                          <div className="download">VIEW</div>
                        </a>
                      </div>
                      <ModalImage
                        small={tile.img}
                        large={tile.img}
                        alt="Hello World!"
                        className="picture2"
                      />
                    </div>
                    {/* <img src={tile.img} alt={tile.title} className="enlarge" /> */}
                  </GridListTile>
                ))}
              </GridList>
            </div>
            {/* Volkswagen Credit */}
            <div className={classes.root}>
              <Typography variant="h5" className="center">
                <strong>VW Group Of America</strong>
                <div className="subhead2" />
              </Typography>
              <GridList cellHeight={250} className={classes.gridList} cols={5}>
                {vw.map(tile => (
                  <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <div className="picture">
                      <div className="picture3">
                        <a className="none2" href={tile.img} target="_blank">
                          <div className="download">VIEW</div>
                        </a>
                      </div>
                      <ModalImage
                        small={tile.img}
                        large={tile.img}
                        alt="Hello World!"
                        className="picture2"
                      />
                    </div>
                    {/* <img src={tile.img} alt={tile.title} className="enlarge" /> */}
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
