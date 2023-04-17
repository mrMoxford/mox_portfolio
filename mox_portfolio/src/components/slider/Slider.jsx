import "./slider.css";
import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import SiteInfo from "../SiteInfo/SiteInfo";
const Slider = ({ images, github, live }) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const goLeft = () => {
    const isfirstImage = currentIndex === 0;
    const newIndex = isfirstImage ? images.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };
  const goRight = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };
  return (
    <div className="mox__profile-slider | flex">
      <div className="slider-container">
        <div className="mox__profile-images_arrows">
          <div className="slider__arrow left" onClick={goLeft}>
            <FaChevronCircleLeft color="red" />
          </div>
          <div className="slider__arrow right" onClick={goRight}>
            <FaChevronCircleRight color="red" />
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
