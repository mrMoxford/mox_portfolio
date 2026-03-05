import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./aboutMe.css";
import index from "../../assets/index";

const AboutMe = () => {
  const contentRef = useRef(null);
  const tl = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to("img", {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.4,
          scrollTrigger: {
            trigger: "#last-slide",
            markers: false,
          },
        })
        .to(".hide", {
          duration: 3,
          y: 0,
          stagger: 0.3,
          ease: "power2",
        });
    }, contentRef);
    return () => ctx.revert();
  }, []);

  const { ProfilePhotoNoBg2 } = index;
  return (
    <section
      id="about"
      className=" about-me | section__padding flex flex-col mask"
    >
      <h2 className="about-me__title | lg:text-6xl md:text-5xl text-4xl uppercase  mb-4">
        About Me
      </h2>
      <div ref={contentRef} className="content">
        <div className="img-container ">
          <img src={ProfilePhotoNoBg2} alt="coffee placeholder" />
        </div>
        <div className="about-me__text | flex flex-col align-end">
          <div id="first-slide" className="mask">
            <p className="animated-text hide">
              Hi, I’m Mox — a Tokyo-based Front-end Developer building
              high-performance, scalable web applications with React, Next.js,
              and TypeScript. I focus on creating clean, responsive interfaces
              where performance, accessibility, and attention to detail are
              treated as core priorities.
            </p>
          </div>
          <div className="mask">
            <p id="middle-slide" className="animated-text hide">
              I enjoy collaborating closely with designers and engineers to
              translate ideas into polished, maintainable products. I value
              clear communication, shared ownership, and steady iteration, and
              I’m motivated by contributing as part of a team that takes pride
              in quality and user experience.
            </p>
          </div>
          <div className="mask">
            <p id="last-slide" className="animated-text hide">
              Outside of coding, I study design systems and visual structure to
              refine my craft. Books like Grid Systems and Atomic Habits reflect
              my approach: structured thinking, continuous improvement, and a
              commitment to mastering the fundamentals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
