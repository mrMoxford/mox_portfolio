import "./header.css";
import React, { useRef, useEffect }  from "react";
import { ExploreBtnBw } from "../../assets/index";

const header = () => {

  const ref = useRef(null)
  
  const letters = "abcdefghijklmnopqrstuvwxyz1234567890"
  

  const handleHover = (e,value) =>{
   let iterations = 0
    const interval = setInterval (()=> {
    e.target.innerText = e.target.innerText.split("").map((item, index) => index <= iterations ? value[index] : letters[Math.floor(Math.random() * letters.length)]).join(""); 
    if(iterations >= value.length){ clearInterval(interval)}
    iterations += 1 / 2 
    },10)}
 
  return (
    <header   id="/" className="mox__profile-header | section__padding m-h-screen relative flex">
      <div ref={ref} className="mox__profile-header_text | md:self-start flex flex-col justify-center items-center gap-6 md:items-start">
        <div  onMouseOver={(e)=> handleHover(e, "i'm Mox")} className="title-text">
          <p>i'm Mox</p>
        </div>
        <div  onMouseOver={(e)=> handleHover(e,'a web developer / designer')}  className="title-text">
          <p>a web developer / designer</p>
        </div>
        <div  onMouseOver={(e)=> handleHover(e,'ith a passion for acessibility')} className="title-text">
          <p>with a passion for acessibility</p>
        </div>
        <div onMouseOver={(e)=> handleHover(e,'and a keen interest in performance testing')} className="title-text">
          <p>and a keen interest in performance testing</p>
        </div>
      </div>
      <div  className="mox-profile-header_cta-button | flex items-center justify-center">
        <a href="#projects">
          <img src={ExploreBtnBw} alt="explore my passion projects" />
        </a>
      </div>
    </header>
  );
};
export default header;

