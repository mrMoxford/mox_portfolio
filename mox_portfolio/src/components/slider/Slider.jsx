import "./slider.css";
import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import SiteInfo from "../SiteInfo/SiteInfo";
const Slider = ({ images, github, live }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  const goRight = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  return (
    <div className="mox__profile-slider | flex">
      <div className="slider-container">
        <div className="mox__profile-images_arrows">
          <div className="slider__arrow left" onClick={goLeft}>
            <FaChevronCircleLeft color="black" size="5vw" />
          </div>
          <div className="slider__arrow right" onClick={goRight}>
            <FaChevronCircleRight color="black" size="5vw" />
          </div>
        </div>
        <img
          className="w-full"
          src={`${images[currentIndex]}`}
          alt="project-slider"
        />
      </div>
      <SiteInfo live={live} github={github} />
      {/* <div className=" dots-container| flex">
        {images.map((image, imageIndex) => (
          <div
            className="dots"
            key={imageIndex}
            onClick={() => setcurrentIndex(imageIndex)}
          >
            ⚫
          </div>
        ))}
      </div> */}
    </div>
  );
};
export default Slider;
