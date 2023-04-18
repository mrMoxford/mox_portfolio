import React from "react";
import "./card.css";
const Card = ({ image, text }) => {
  return (
    <div className="mox__profile-CTA_cards-container | grid place-content-center">
      <div className="about-me_card | flex flex-col items-center justify-between">
        <div className="about-me-img | flex justify-center items-center">
          <img
            className="card-image | mb-4 border-solid border-black border-4"
            src={image}
            alt="about me card"
          />
        </div>
        <div className="about-me-content | xl:text-4xl lg:text-2xl   items-start p-3">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
