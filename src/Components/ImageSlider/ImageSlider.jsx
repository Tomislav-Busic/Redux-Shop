import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ImageSlider.scss";

export const ImageSlider = ({ images, category }) => {
  const theme = useSelector((state) => state.theme.themeState);
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveRight = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveLeft = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="images-slider">
      <svg
        onClick={moveLeft}
        className={`btn ${theme && "btn-theme"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
      </svg>
      <div className="images-container">
        <img src={images[currentIndex]} alt={category} />
        <h3 className={`category ${theme && "category-theme"}`}>{category}</h3>
      </div>
      <svg
        onClick={moveRight}
        className={`btn ${theme && "btn-theme"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
      </svg>
    </div>
  );
};
