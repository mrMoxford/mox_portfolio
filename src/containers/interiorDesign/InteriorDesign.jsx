import "./interiorDesign.css";
import React from "react";
import { Slider } from "../../components";
import Images from "../../constants/Images";

const InteriorDesign = () => {
  const interiorImg = [Images.interiorDesign01, Images.interiorDesign02, Images.interiorDesign03, Images.interiorDesign04, Images.interiorDesign05];
  return (
    <div className="mox__profile-IntreriorDesign-section | bg-white section__padding grid place-items-center ">
      <Slider images={interiorImg} />
    </div>
  );
};

export default InteriorDesign;
