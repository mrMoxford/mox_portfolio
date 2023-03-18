import "./cta.css";
import React from "react";
import Images from "../../constants/Images";
import Card from "../../components/ctacard/Card";

const CTA = () => {
  return (
    <div id="about" className="mox__profile-CTA | text-black section__padding">
      <h2 className="about-me-title | lg:text-6xl md:text-5xl text-4xl mb-8">About Me</h2>
      <div className="about-me-cards">
        <Card image={Images.sciFi} text=" I'm a big SciFi movie buff Stargate SG-1 holds a speacial place in my heart." />
        <Card
          image={Images.arsenalFc}
          text="I'm an Arsenal fan in fact my whole family supports Arsenal, football is a passion and being a north Londener offcourse i have to support the home team."
        />
        <Card image={Images.coffeeCircle} text=" I love coffee to an artistic degree some might say i'm addicted but i enjoy exploring the art of coffee making. " />

        <Card image={Images.anime} text="I started watching anime during university, when i watched Naruto for the 1st time it lit a spark in me that has evolved into a flame." />
      </div>
    </div>
  );
};

export default CTA;
