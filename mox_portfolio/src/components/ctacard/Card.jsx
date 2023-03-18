import React from "react";
import "./card.css";
const Card = ({ image, text }) => {
  return (
    <div className="mox__profile-CTA_cards-container | grid place-items-center">
      <div className="about-me_card | flex flex-col items-center justify-center">
        <div className="about-me-img">
          <img className="card-image | mb-4 border-solid border-black border-4" src={image} alt="card-image" />
        </div>
        <div className="about-me-content | xl:text-4xl lg:text-2xl bg-blue-50  items-start p-3">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
