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

  const { Mox } = index;
  return (
    <section
      id="about"
      className=" about-me | section__padding flex flex-col mask"
    >
      <h2 className="about-me__title | lg:text-6xl md:text-5xl text-4xl uppercase  mb-4">
        About Me
      </h2>
      <div ref={contentRef} className="content">
        <div className="img-container">
          <img className="profileImg" src={Mox} alt="coffee placeholder" />
        </div>
        <div className="about-me__text | flex flex-col align-between">
          <div id="first-slide" className="mask">
            <p className="animated-text hide">
              <span className="about-me__name">Mox</span>

              <span className="about-me__role">
                Front-end Developer &amp; Designer, Tokyo
              </span>

              <span className="about-me__stack">
                React · Next.js · TypeScript
              </span>

              <span className="about-me__lead">
                I build{" "}
                <strong>high-performance, scalable web applications</strong>{" "}
                with clean, responsive interfaces, where{" "}
                <strong>
                  performance, accessibility, and attention to detail
                </strong>{" "}
                come first.
              </span>
            </p>
          </div>

          <div className="mask">
            <p id="middle-slide" className="animated-text hide">
              <span className="about-me__heading">How I work</span>I collaborate
              closely with designers and engineers to turn ideas into{" "}
              <strong>polished, maintainable products.</strong>
              <span className="about-me__values">
                <strong>
                  Clear communication. Shared ownership. Steady iteration.
                </strong>
              </span>
              I'm motivated by teams that take pride in quality and user
              experience.
            </p>
          </div>

          <div className="mask">
            <p id="last-slide" className="animated-text hide">
              <span className="about-me__heading">Craft</span>
              Outside of coding, I study{" "}
              <strong>design systems and visual structure</strong>.{" "}
              <em>Grid Systems</em> and <em>Atomic Habits</em> reflect how I
              think:{" "}
              <strong>
                structured thinking, continuous improvement, and mastery of the
                fundamentals.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
