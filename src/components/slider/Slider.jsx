import "./slider.css";
import React, { useState, useRef } from "react";

const Slider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const[toggleInfo, setToggleInfo]= useState({expanded: "false", hidden: "true"})
  const sliderRef = useRef(null);

const handleAccordian = (e) =>  {
  const activePanel = e.target.closest(".project-card")
  if(activePanel){
  const activeButton = activePanel.querySelector(".card-trigger")
  const activeContent = activePanel.querySelector(".project-info")
  return toggleAccordian(activeButton,activeContent)
  }
 

};

const toggleAccordian = (activeButton,activeContent) => {
  const contentIsVisible = activeButton.getAttribute("aria-expanded")
  if(contentIsVisible === "true"){
    activeButton.setAttribute("aria-expanded", false)
    activeContent.setAttribute("aria-hidden", true)
  }
  else {
    activeButton.setAttribute("aria-expanded", true)
    activeContent.setAttribute("aria-hidden", false)
  }
  
}
  return (
    <div ref={sliderRef} onClick={(e)=> handleAccordian(e)} id="blur" className="mox__profile-slider | flex">
      <div className="mox__profile-slider_container flex">
        {projects.map((project, index) => (
          <div key={index} className="project-card flex">
            <div className="flex flex-col relative">
              {console.log(project.image)}
            <img
              className="project-img"
              src={project.image}
              alt={project.name}
             
            />
              <button className="card-trigger" aria-expanded="false" aria-controls={`project--${index}`}></button>
              </div>
            <div  className="project-info" id={`project--${index}`} aria-hidden="true" >
              <div  className="info-container"  >
              <p>
                project details as follows... Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Odio veritatis laborum dignissimos
                laudantium rerum nesciunt consequatur culpa similique et eius
                accusantium quaerat in, atque ratione quos sint aliquid deserunt
                alias.
                
              </p>
              <div className="project-links">
                <a
                  className="project__live-site"
                  href={project.live}
                  target="_blank"
                >
                  Live
                </a>
                <a
                  className="project__Github-site"
                  href={project.github}
                  target="_blank"
                >
                  Code
                </a>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Slider;

const calculateTransform = () => {
  return `translateX(-${currentIndex * 10}%)`;
};
