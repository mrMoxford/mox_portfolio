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
    summary: 
    "I’m a big fan of coffee so much so that I’ve dedicated a whole section of my apartment to drip coffee equipment and utensils. Odessy Java is an exploration of my passion for coffee the idea behind this website is about exploring the world of coffee, and having access to boutique single origin coffee from around the world the world. The site was built with React and Vite on the frontend and Node, Express and MongoDB for the backend." 
    ,
  },
  {name: "ChatGPT3Project",
    image: gpt3,
    live:"https://chatgpt3project.netlify.app",
    github:"https://github.com/mrMoxford/chatGPTProject",
    summary:
    "In this new world of A.I. I’ve developed a keen interest in learning about A.I. and how I could incorporate it into my work flow, in the coming years A.I. will become much more prominent and there is an ever looming fear that it will consume the job market. The tech industry is always about innovation and staying ahead of the curve. This project was built using React and Tailwind CSS",
  },
    {
      name: "spaceProject",
      image: space,
      live:"https://dragon2-space-exploration.netlify.app",
      github:"https://github.com/mrMoxford/spaceProject",
      summary: 
      "When I was a kid I was always fascinated with space and all things SCI-FI I had always dreamed of being an astronaut and gazing into the endless abyss of space, I’m always keeping up to date with new discoveries and all things space related. This project was built using Vanilla JS, and Vanilla CSS. ",
    }]
  return (
    <div
      id="projects"
      className="mox__profile-coffee-section | section__padding bg-white text-black  grid place-items-center "
    >
      <h2 className="lg:text-6xl md:text-5xl text-4xl justify-self-start uppercase mb-4">
      Projects
      </h2>
      <Slider projects={projects} />
    </div>
  );
};

export default Projects;
