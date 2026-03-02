import "./slider.css";
import React, { useState } from "react";

const Slider = ({ projects }) => {
  const [currentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div id="blur" className="mox__profile-slider | flex">
      <div className="mox__profile-slider_container flex">
        {projects.map((project, index) => {
          const isExpanded = activeIndex === index;

          return (
            <div
              key={index}
              className="project-card flex"
            >
              <div className="flex flex-col relative">
                <img
                  className="project-img"
                  src={project.image}
                  alt={project.name}
                />

                <button
                  className="card-trigger"
                  aria-expanded={isExpanded}
                  aria-controls={`project--${index}`}
                  onClick={() => handleAccordion(index)}
                />
              </div>

              <div
                className="project-info"
                id={`project--${index}`}
                aria-hidden={!isExpanded}
              >
                <div className="info-container">
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>

                  <div className="project-links">
                    <a
                      className="project__live-site"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                    <a
                      className="project__Github-site"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
