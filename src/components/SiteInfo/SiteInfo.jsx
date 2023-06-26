import React from "react";
import "./SiteInfo.css";
const SiteInfo = ({ github, live }) => {
  return (
    <div className="button-container">
      <a href={live} target="_blank" className="Live">
        Live Site
      </a>
      <a href={github} target="_blank" className="Code">
        Code
      </a>
    </div>
  );
};

export default SiteInfo;
