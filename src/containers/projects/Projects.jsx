import "./projects.css";
import React from "react";
import { Slider } from "src/components";
import index from "src/assets/index"
const Projects = () => {
  const {coffee , space , gpt3} = index;
  const projects = [{
    name: "coffeeProject",
    image:coffee,
    live:"https://odessycoffee.netlify.app/",
    github:"https://github.com/mrMoxford/CoffeeProject",
  },
  {name: "ChatGPT3Project",
    image: gpt3,
    live:"https://chatgpt3project.netlify.app",
    github:"https://github.com/mrMoxford/chatGPTProject"
  },
    {
      name: "spaceProject",
      image: space,
      live:"https://dragon2-space-exploration.netlify.app",
      github:"https://github.com/mrMoxford/spaceProject",
    }]
  return (
    <div
      id="projects"
      className="mox__profile-coffee-section | section__padding bg-white text-black  grid place-items-center "
    >
      <h2 className="lg:text-6xl md:text-5xl text-4xl justify-self-middle uppercase mb-4">
      Projects
      </h2>
      <Slider projects={projects} />
    </div>
  );
};

export default Projects;
