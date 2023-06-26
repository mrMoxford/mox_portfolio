import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./aboutMe.css";
import index from "../../assets/index"


const AboutMe = () => {
  const contentRef = useRef(null);
  const tl = useRef()
  gsap.registerPlugin(ScrollTrigger);
 
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline()
    .to("img", {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: 1.4,
        scrollTrigger: {
          trigger: "#last-slide",
           markers: false
           }
      })
    .to(".hide", {
        duration: 3,
        y: 0,
        stagger: 0.3,
        ease: "power2",
        
  
    });},contentRef)
    return () => ctx.revert();
  }, []);

  const {onsen01} = index
  return (
    <section id="about" className=" about-me | section__padding flex flex-col mask">
      <h2 className="about-me__title | lg:text-6xl md:text-5xl text-4xl uppercase  mb-4">
        About Me
      </h2>
      <div  ref={contentRef} className="content">
        <div  className="img-container ">
          <img  src={onsen01} alt="coffee placeholder" />
        </div>
        <div
         
          className="about-me__text | flex flex-col align-end"
        >
          <div id="first-slide"className="mask">
            <p className="animated-text hide">
            My name is Mohamed-Deeq Abdi better known as Mox, I’m a frontend web developer from London UK, currently based in Tokyo Japan.

            </p>
          </div>
          <div className="mask">
          <p id="middle-slide" className="animated-text hide">
          I have keen interest in developing websites that are fast, well built with accessibility at the forefront. I continually incorporate good UI/UX design principles to ensure that my websites cater to all the needs of the business and the consumer. 
          </p>
          </div>
          <div className="mask">
          <p id="last-slide" className="animated-text hide">
          When I’m not coding, I enjoy reading and learning about design history, my current books on rotation  are : Grid Systems by Kimberly Elam,  and Atomic Habits by James Clear.
          </p>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
