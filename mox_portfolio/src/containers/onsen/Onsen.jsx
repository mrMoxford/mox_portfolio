import "./onsen.css";
import React from "react";
import { Slider } from "../../components";
import Images from "../../constants/Images";
const Onsen = () => {
  const onsenImg = [Images.onsen01, Images.onsen02, Images.onsen03, Images.onsen04, Images.onsen05];
  return (
    <div className="mox__profile-onsen-section | bg-white section__padding grid place-items-center">
      <Slider images={onsenImg} />
    </div>
  );
};

export default Onsen;
