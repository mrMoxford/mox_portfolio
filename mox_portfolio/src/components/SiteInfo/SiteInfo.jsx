import React from "react";
import "./SiteInfo.css";
const SiteInfo = ({ github, live }) => {
  return (
    <div className="button-container">
      <a href={live} className="Live">
        Live Site
      </a>
      <a href={github} className="Code">
        Code
      </a>
    </div>
  );
};

export default SiteInfo;
