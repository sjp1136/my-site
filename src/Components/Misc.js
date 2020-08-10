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
import Carousel, { Modal, ModalGateway } from "react-images";

import Gallery from "react-photo-gallery";
import "./clouds.css";
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

  const gcf2 = [];
  const nature2 = [
    {
      src: require("../images/nature3.jpeg"),
      width: 5,
      height: 5,
    },

    {
      src: require("../images/vw11.jpeg"),
      width: 6,
      height: 4,
    },
    {
      src: require("../images/vw6.jpeg"),
      width: 3,
      height: 2,
    },
  ];
  const touring2 = [
    {
      src: require("../images/nature4.jpeg"),
      width: 4,
      height: 4,
    },
    {
      src: require("../images/touring22.jpeg"),
      width: 5,
      height: 7,
    },
    {
      src: require("../images/flower.jpeg"),
      width: 5,
      height: 7,
    },
    {
      src: require("../images/touring.jpeg"),
      width: 7,
      height: 5,
    },

    {
      src: require("../images/yk_audi.JPG"),
      width: 7,
      height: 5,
    },
    {
      src: require("../images/nature2.jpeg"),
      width: 7,
      height: 5,
    },
    {
      src: require("../images/6.jpeg"),
      width: 7,
      height: 5,
    },
  ];
  const friends = [
    {
      src: require("../images/summer_picnic.JPG"),
      width: 5,
      height: 7,
    },
    {
      src: require("../images/summer_hike.JPG"),
      width: 7,
      height: 5,
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
          “The heavens declare the glory of God, and the sky above proclaims his
          handiwork.”
        </div>
        <div className="author2">Psalm 19:1</div>
      </Typography>
      <div className="misccontainer">
        <Fade>
          <div className="gallery">
            <Gallery photos={src} onClick={openLightbox} />
          </div>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={src.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
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
