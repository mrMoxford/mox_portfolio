import React, { useState } from "react";
import "./header.css";

import index from "src/assets/index";
import MyRuler from "src/components/Ruler";

const Header = () => {
  const {
    performance,
    accessibility,
    union,
    responsive,
    ExploreBtn,
    closedEye,
  } = index;

  const features = [
    {
      name: "accessibility",
      label: "accessible",
      img: accessibility,
      svgId: "firstIndicatorPoint",
    },
    {
      name: "performance",
      label: "performant",
      img: performance,
      svgId: "secondIndicatorPoint",
    },
    {
      name: "responsive",
      label: "responsive",
      img: responsive,
      svgId: "thirdIndicatorPoint",
    },
    {
      name: "minimal",
      label: "minimal",
      img: union,
      svgId: "forthIndicatorPoint",
    },
    {
      name: "heading",
      label: "",
      img: "",
      svgId: "fifthIndicatorPoint",
    },
  ];

  const [activeFeature, setActiveFeature] = useState("accessibility");

  return (
    <header id="home" className="mox__profile-header section__padding flex">
      {/* LEFT COLUMN */}
      <div className="left-col flex">
        <MyRuler activeFeature={activeFeature} />

        <div className="title">
          {features.map((feature) => (
            <button
              key={feature.name}
              className={activeFeature === feature.name ? "current" : ""}
              onMouseEnter={() => setActiveFeature(feature.name)}
              onFocus={() => setActiveFeature(feature.name)}
            >
              {feature.label}
            </button>
          ))}

          <h1 className="titleHeader">
            These are the pillars of my design and development philosophy.
          </h1>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="right-col">
        {features.map((feature) => (
          <img
            key={feature.name}
            src={feature.img}
            alt={feature.label}
            className={`feature-image ${
              activeFeature === feature.name ? "current" : ""
            }`}
          />
        ))}
      </div>
      <div className="mox-profile-header_cta-button flex items-center justify-center">
        <a href="#projects">
          <img
            className="cta-default"
            src={ExploreBtn}
            alt="explore my passion projects"
          />
          <img
            className="cta-hover"
            src={closedEye}
            alt="explore my passion projects"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
