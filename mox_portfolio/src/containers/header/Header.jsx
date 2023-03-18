import "./header.css";
import React from "react";
import { ExploreBtnBw } from "../../assets/index";

const header = () => {
  return (
    <header id="/" className="mox__profile-header | section__padding m-h-screen relative flex">
      <div className="mox__profile-header_text | md:self-start flex flex-col justify-center items-center gap-6 md:items-start">
        <div className="title-text">
          <p>I'm Mox</p>
        </div>
        <div className="title-text">
          <p>A web developer</p>
        </div>
        <div className="title-text">
          <p>with a keen eye for design</p>
        </div>
        <div className="title-text">
          <p>and a passion for accessibility</p>
        </div>
      </div>
      <div className="mox-profile-header_cta-button | flex items-center justify-center">
        <a href="#projects">
          <img src={ExploreBtnBw} alt="explore my passion projects" />
        </a>
      </div>
    </header>
  );
};

export default header;
