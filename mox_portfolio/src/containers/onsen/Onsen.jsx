import "./onsen.css";
import React from "react";
import { Slider } from "../../components";
import Images from "../../constants/Images";
const Onsen = () => {
  const onsenImg = [
    Images.onsen01,
    Images.onsen02,
    Images.onsen03,
    Images.onsen04,
  ];
  const github = "https://github.com/mrMoxford/blogProject";
  const live = "#";
  return (
    <div className="mox__profile-onsen-section | bg-white section__padding grid place-content-center place-items-center">
      <Slider images={onsenImg} github={github} live={live} />
    </div>
  );
};

export default Onsen;
