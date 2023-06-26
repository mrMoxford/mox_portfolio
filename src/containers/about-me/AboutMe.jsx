import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./aboutMe.css";
import index from "src/assets/index"


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
           markers: true
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
    <section className=" about-me | section__padding flex flex-col mask">
      <h2 className="about-me__title | lg:text-6xl md:text-5xl text-4xl uppercase  mb-4">
        About Me
      </h2>
      <div  ref={contentRef} className="content">
        <div  className="img-container ">
          <img  src={onsen01} alt="coffee placeholder" />
        </div>
        <div
         
          className="about-me__text | flex flex-col align-center"
        >
          <div id="first-slide"className="mask">
            <p className="animated-text hide">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              perferendis magnam enim fuga esse impedit aliquid totam molestias
              deserunt tempora, repellendus laudantium nemo accusamus ut
              temporibus dolorum? Cum, vitae explicabo.
            </p>
          </div>
          <div className="mask">
          <p className="animated-text hide">
            Et dolorem eligendi facilis cum ea sit ex officia asperiores
            dolores, veniam quam nihil sapiente! Enim quia saepe quam, deserunt
            ipsum fugit reprehenderit veniam accusamus optio rem soluta
            aspernatur neque.
          </p>
          </div>
          <div className="mask">
          <p id="middle-slide"className="animated-text hide">
            Ducimus ipsum animi debitis veritatis unde amet molestiae recusandae
            consectetur similique libero iste ab, facilis est, nam nihil
            laboriosam et culpa. Aperiam voluptas aliquam assumenda. Rerum fuga
            aut a explicabo.
          </p>
          </div>
          <div className="mask">
          <p id="last-slide"className="animated-text hide">
            {" "}
            Voluptatibus maxime quasi eaque, doloribus nihil, placeat ratione
            sit error perspiciatis id amet voluptatum nostrum. Quos doloremque
            quaerat illum id. Consequuntur possimus aspernatur laborum unde
            perferendis illum at eveniet voluptatem.
          </p>
          </div>

         
         
          
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
