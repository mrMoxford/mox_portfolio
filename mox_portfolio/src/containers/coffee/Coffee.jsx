import "./coffee.css";
import React from "react";
import { Slider } from "../../components";
import Images from "../../constants/Images";
const Coffee = () => {
  const coffeeImg = [Images.coffee01, Images.coffee02, Images.coffee03, Images.coffee04, Images.coffee05];

  return (
    <div id="projects" className="mox__profile-coffee-section | section__padding bg-white text-black  grid place-items-center ">
      <h2 className="lg:text-6xl md:text-5xl text-4xl md:justify-self-start mb-4">My Projects</h2>
      <Slider images={coffeeImg} />
    </div>
  );
};

export default Coffee;
