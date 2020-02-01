import React, { Component, useState, useCallback } from "react";
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
import Carousel, { Modal, ModalGateway } from 'react-images';

import Gallery from "react-photo-gallery";

import "./misc.css";

// export default class Misc extends Component {
function Misc() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    console.log(photo);
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  // const gcf = [
  //   {
  //     img: require("../images/group1.jpg"),
  //     author: "SJP",
  //     cols: 2.6
  //   },
  //   {
  //     img: require("../images/group2.jpg"),
  //     author: "SJP",
  //     cols: 2.4
  //   },
  //   {
  //     img: require("../images/group3.jpg"),
  //     author: "SJP",
  //     cols: 2.5
  //   },
  //   {
  //     img: require("../images/group5.jpg"),
  //     author: "SJP",
  //     cols: 2.5
  //   }
  // ];
  // const vw = [
  //   {
  //     img: require("../images/vw1.JPG"),
  //     title: "VW",
  //     author: "SJP",
  //     cols: 1
  //   },
  //   {
  //     img: require("../images/vw14.JPG"),
  //     title: "VW",
  //     author: "SJP",
  //     cols: 2
  //   },

  //   {
  //     img: require("../images/vw11.JPG"),
  //     title: "VW",
  //     author: "SJP",
  //     cols: 2
  //   },
  // ];

  // const touring = [
  //   {
  //     img: require("../images/touring.JPG"),
  //     title: "VW",
  //     author: "SJP",
  //     cols: 2
  //   },
  //   {
  //     img: require("../images/touring.jpeg"),
  //     title: "VW",
  //     author: "SJP",
  //     cols: 2
  //   },
  //   {
  //     img: require("../images/touring2.JPG"),
  //     title: "VW",
  //     author: "SJP",
  //     cols: 1
  //   }
  // ];

  // const nature = [
  //   {
  //     img: require("../images/nature3.JPG"),
  //     title: "VW",
  //     author: "SJP",
  //     cols: 1
  //   },
  //   {
  //     img: require("../images/nature1.JPG"),
  //     title: "VW",
  //     author: "SJP",
  //     cols: 2
  //   },
  //   {
  //     img: require("../images/nature2.JPG"),
  //     title: "VW",
  //     author: "SJP",
  //     cols: 2
  //   }

  // ];
  // const img = gcf.concat(nature.concat(touring.concat(vw)));

  const gcf2 = [
    // {
    //   src: require("../images/group1.jpg"),
    //   width: 4,
    //   height: 2
    // },
    // {
    //   src: require("../images/group2.jpg"),
    //   width: 3,
    //   height: 2

    // },
    // {
    //   src: require("../images/group3.jpg"),
    //   width: 3,
    //   height: 2

    // },
    // {
    //   src: require("../images/group5.jpg"),
    //   width: 6,
    //   height: 4

    // }
  ];
  const nature2 = [
    {
      src: require("../images/nature3.JPG"),
      width: 5,
      height: 7
    },
    // {
    //   src: require("../images/nature4.JPG"),
    //   width: 5,
    //   height: 7
    // },
    {
      src: require("../images/uva_fall.jpg"),
      width: 5,
      height: 4
    },
    {
      src: require("../images/nature1.JPG"),
      width: 3,
      height: 2
    },

    // {
    //   src: require("../images/nature8.JPG"),
    //   width: 5,
    //   height: 4
    // },


  ];
  const touring2 = [

    {
      src: require("../images/touring.JPG"),
      width: 7,
      height: 5
    },
    {
      src: require("../images/touring2.JPG"),
      width: 5,
      height: 7
    },
    {
      src: require("../images/2.JPG"),
      width: 5,
      height: 7
    },
    {
      src: require("../images/touring.jpeg"),
      width: 7,
      height: 5
    },

    {
      src: require("../images/5.JPG"),
      width: 5,
      height: 7
    },
    {
      src: require("../images/7.JPG"),
      width: 7,
      height: 5
    },
    {
      src: require("../images/6.JPG"),
      width: 7,
      height: 5
    },


  ];
  const friends = [
    {
      src: require("../images/summer_picnic.JPG"),
      width: 5,
      height: 7
    },
    {
      src: require("../images/summer_hike.JPG"),
      width: 7,
      height: 5
    },

    {
      src: require("../images/chapel_friends.jpg"),
      width: 7,
      height: 5,
    },
    {
      src: require("../images/summer_beach.jpg"),
      width: 8,
      height: 5,
    },
  ];
  // const vw2 = [
  //   {
  //     src: require("../images/vw1.JPG"),
  //     width: 5,
  //     height: 7
  //   },
  //   {
  //     src: require("../images/vw14.JPG"),
  //     width: 7,
  //     height: 5
  //   },

  //   {
  //     src: require("../images/vw3.JPG"),
  //     width: 7,
  //     height: 5,
  //   },
  // ];

  const src = gcf2.concat(nature2.concat(friends.concat(touring2)));
  const height = 300;

  return (
    <div class="misc" id="misc">
      <div className="background2" />

      <Typography variant="h3" className="center1">
        <Slide left>PHOTOS</Slide>
        <Slide left>
          <div className="subhead" />
        </Slide>
        <div className="quote2">
          “Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken.”          </div>
        <div className="author2">Ecclesiastes 4:12</div>

      </Typography>
      <div className="misccontainer">
        {/* <Fade delay="200">
            <Slide bottom>
              <GridList cellHeight={height} className="overflow" cols={5}>
                {img.map(tile => (
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
          </Fade> */}
        <Fade >
          <div className="gallery">
            <Gallery photos={src} onClick={openLightbox} />
          </div>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={src.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />

              </Modal>
            ) : null}
          </ModalGateway>
        </Fade>

      </div>
    </div>
  );

}
export default Misc;
