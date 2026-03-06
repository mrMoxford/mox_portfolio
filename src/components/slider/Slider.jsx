import React, { useState } from "react";
import "./slider.css";

const Slider = ({ projects }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mox__profile-slider">
      <div className="mox__profile-slider_container">
        {projects.map((project, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="project-card">
              <div className="project-image_container">
                <img
                  className="project-img"
                  src={project.image}
                  alt={project.name}
                />

                <button
                  className="card-trigger"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`project--${index}`}
                />
              </div>

              <div
                className="project-info"
                id={`project--${index}`}
                aria-hidden={!isOpen}
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
