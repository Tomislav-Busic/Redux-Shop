import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImageSlider.scss";

export const ImageSlider = ({ images }) => {
  let imgNum = 0;

  const hideImages = () => {
    images.forEach((img) => (img.style.display = "none"));
  };

  const moveRight = () => {
    hideImages();

    imgNum++;

    if (imgNum === images.length) {
      imgNum = 0;
    }

    images[imgNum].style.display = "block";
  };

  const moveLeft = () => {
    hideImages();

    imgNum--;

    if (imgNum === -1) {
      imgNum = images.length - 1;
    }

    images[imgNum].style.display = "block";
  };

  return (
    <div className="images-slider">
      <Button onClick={moveLeft}>Prev</Button>
      <div className="images-container">
        {images?.map((img, index) => (
          <img style={{display: }} src={img} key={index} />
        ))}
      </div>
      <Button onClick={moveRight}>Next</Button>
    </div>
  );
};
