import "./slider.css";
import React, { useState } from "react";

const Slider = ({ images }) => {
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
            ⇦
          </div>
          <div className="slider__arrow right" onClick={goRight}>
            ⇨
          </div>
        </div>
        <img className="w-full" src={`${images[currentIndex]}`} alt="project-slider" />
      </div>
      <div className=" dots-container| flex">
        {images.map((image, imageIndex) => (
          <div className="dots" key={imageIndex} onClick={() => setcurrentIndex(imageIndex)}>
            ⚫
          </div>
        ))}
      </div>
    </div>
  );
};
export default Slider;
