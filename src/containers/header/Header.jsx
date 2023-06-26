import "./header.css";
import React, { useRef}  from "react";
// import {union,performance, accessibilty,responsive} from "../../assets/index"
import union from "../../assets/index"
import  performance from "../../assets/index"
import accessibilty from "../../assets/index"
import responsive from "../../assets/index"
import MyRuler from "../../components/Ruler";


const header = () => {
// refrences for the different text elements
  const imgContainerRef = useRef(null)
  const textContainerRef = useRef(null)
  const performanceSvgRef = useRef(null)
  const responsiveSvgRef = useRef(null)
  const minimalSvgRef = useRef(null)
  const accessibilitySvgRef = useRef(null)
const arrayOfRefs = [performanceSvgRef,responsiveSvgRef,minimalSvgRef,accessibilitySvgRef]


 const handleChange = (e,svgArray,imageContainer,textContainer)=> {
    const textArray = Array.from(textContainer.current.children)
    const imgArray = Array.from(imageContainer.current.children)
    handleActiveTitle(textArray,imgArray,e)
    handleActiveElipse(svgArray,e)
  
 }
  const handleActiveTitle = (parentNode, childNode, currentTarget) => {
    parentNode.forEach(sibling => sibling.classList.remove("current"))
    currentTarget.target.classList.add("current")
    childNode.forEach(child => child.style.zIndex = 0)
    const current = childNode.find(item => item.getAttribute("name") === currentTarget.target.getAttribute("name"))
    current.style.zIndex = 1
  }
  const handleActiveElipse = (svgArray,currentTarget)=>{
    const currentSvgs = svgArray.map(singleSVG=> singleSVG.current)
    currentSvgs.forEach(ellipse => ellipse.style.fill = "white")
    const currentEllipse = currentSvgs.find(((ellipse)=>ellipse.id === currentTarget.target.getAttribute("svgref")))
     if(currentEllipse){
       currentEllipse.style.fill = "black"
     }
  }
  return (
    <header id="/" className="mox__profile-header | section__padding  flex">
      <div className="left-col | flex ">
      <MyRuler ref={[performanceSvgRef,responsiveSvgRef,minimalSvgRef,accessibilitySvgRef]} />
      <div ref={textContainerRef} className="title">
        <p className="current" name="accessibility" svgref="firstIndicatorPoint" onMouseOver={(e) => handleChange (e,arrayOfRefs,imgContainerRef,textContainerRef)}>accesible</p>
        <p name="performance" svgref="secondIndicatorPoint"onMouseOver={(e)=> handleChange( e,arrayOfRefs,imgContainerRef,textContainerRef)}>performant</p>
        <p name="responsive"svgref="thirdIndicatorPoint" onMouseOver={(e)=> handleChange( e,arrayOfRefs,imgContainerRef,textContainerRef)}>responsive</p>
        <p name="minimal"svgref="forthIndicatorPoint" onMouseOver={(e)=> handleChange( e,arrayOfRefs,imgContainerRef,textContainerRef)}>minimal</p>
        <h1 className="titleHeader">These are the pillars of my design and development philosphy.</h1>
      </div>
    </div>
    <div ref={imgContainerRef} className="right-col">
      <p> test</p>
      <img name="performance"src={performance} alt="performance" />
      <img name="responsive"src={responsive} alt="responsive" />
      <img name="minimal"src={union} alt="minimal" />
      <img name="accessibility" src={accessibilty} alt="accessibility" />
      </div>

    </header>
  );
};
export default header;

