import "../containers/header/header.css"
import React ,{forwardRef} from 'react'

const MyRuler = forwardRef(function Ruler(props,[performanceSvgRef,responsiveSvgRef,minimalSvgRef,accessibilitySvgRef]) {
  return (
    
    <svg   width="32" height="610" viewBox="0 0 32 610" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ruler">
<g id="secondSet">
<line id="Line 47" x1="22.6666" y1="260.204" x2="9.33329" y2="260.204" stroke="black"/>
<line id="Line 48" x1="22.6666" y1="245.271" x2="9.33329" y2="245.271" stroke="black"/>
<line id="Line 86" x1="22.6666" y1="170.606" x2="9.33329" y2="170.606" stroke="black"/>
<line id="Line 87" x1="22.6666" y1="185.539" x2="9.33329" y2="185.539" stroke="black"/>
<line id="Line 88" x1="22.6666" y1="200.472" x2="9.33329" y2="200.472" stroke="black"/>
<line id="Line 89" x1="22.6666" y1="215.405" x2="9.33329" y2="215.405" stroke="black"/>
<line id="Line 53" x1="22.6666" y1="290.07" x2="9.33329" y2="290.07" stroke="black"/>
<line id="Line 54" x1="22.6666" y1="275.137" x2="9.33329" y2="275.137" stroke="black"/>
<line id="Line 55" x1="32" y1="230.338" x2="-1.14236e-05" y2="230.338" stroke="black"/>
</g>
<g id="forthSet">
<line id="Line 60" x1="22.6666" y1="558.863" x2="9.33329" y2="558.863" stroke="black"/>
<line id="Line 97" x1="22.6666" y1="484.198" x2="9.33329" y2="484.198" stroke="black"/>
<line id="Line 61" x1="22.6666" y1="543.93" x2="9.33329" y2="543.93" stroke="black"/>
<line id="Line 98" x1="22.6666" y1="469.265" x2="9.33329" y2="469.265" stroke="black"/>
<line id="Line 66" x1="22.6666" y1="588.729" x2="9.33329" y2="588.729" stroke="black"/>
<line id="Line 99" x1="22.6666" y1="514.064" x2="9.33329" y2="514.064" stroke="black"/>
<line id="Line 67" x1="22.6666" y1="573.796" x2="9.33329" y2="573.796" stroke="black"/>
<line id="Line 100" x1="22.6666" y1="499.131" x2="9.33329" y2="499.131" stroke="black"/>
<line id="Line 68" x1="32" y1="528.997" x2="-1.14236e-05" y2="528.997" stroke="black"/>
</g>
<g id="thirdSet">
<line id="Line 91" x1="22.6666" y1="409.534" x2="9.33329" y2="409.534" stroke="black"/>
<line id="Line 92" x1="22.6666" y1="394.601" x2="9.33329" y2="394.601" stroke="black"/>
<line id="Line 49" x1="22.6666" y1="319.936" x2="9.33329" y2="319.936" stroke="black"/>
<line id="Line 50" x1="22.6666" y1="334.869" x2="9.33329" y2="334.869" stroke="black"/>
<line id="Line 51" x1="22.6666" y1="349.802" x2="9.33329" y2="349.802" stroke="black"/>
<line id="Line 52" x1="22.6666" y1="364.735" x2="9.33329" y2="364.735" stroke="black"/>
<line id="Line 93" x1="22.6667" y1="439.399" x2="9.33335" y2="439.399" stroke="black"/>
<line id="Line 94" x1="22.6666" y1="424.466" x2="9.33329" y2="424.466" stroke="black"/>
<line id="Line 56" x1="32" y1="379.668" x2="-1.14236e-05" y2="379.668" stroke="black"/>
</g>
<g id="firstSet">
<line id="Line 32" x1="22.6666" y1="36.2093" x2="9.33329" y2="36.2093" stroke="black"/>
<line id="Line 37" x1="22.6666" y1="21.2763" x2="9.33329" y2="21.2763" stroke="black"/>
<line id="Line 42" x1="22.6666" y1="95.9412" x2="9.33329" y2="95.9412" stroke="black"/>
<line id="Line 43" x1="22.6666" y1="110.874" x2="9.33329" y2="110.874" stroke="black"/>
<line id="Line 44" x1="22.6666" y1="125.807" x2="9.33329" y2="125.807" stroke="black"/>
<line id="Line 45" x1="22.6666" y1="140.74" x2="9.33329" y2="140.74" stroke="black"/>
<line id="Line 38" x1="22.6666" y1="66.0752" x2="9.33329" y2="66.0752" stroke="black"/>
<line id="Line 39" x1="22.6666" y1="51.1422" x2="9.33329" y2="51.1422" stroke="black"/>
<line id="Line 41" x1="32" y1="81.0082" x2="-1.14236e-05" y2="81.0082" stroke="black"/>
</g>
<g id="firstIndicator">
<line id="Line 33" x1="32" y1="6.34332" x2="-1.14236e-05" y2="6.34333" stroke="black"/>
<path id="Ellipse 28" d="M16 11.1867C12.9499 11.1867 10.5 8.78199 10.5 5.84334C10.5 2.90468 12.9499 0.5 16 0.5C19.0501 0.5 21.5 2.90468 21.5 5.84334C21.5 8.78199 19.0501 11.1867 16 11.1867Z" fill="white" stroke="black"/>
<ellipse ref={accessibilitySvgRef} id="firstIndicatorPoint" cx="16" cy="5.84331" rx="3.89556" ry="4" transform="rotate(90 16 5.84331)" fill="black" className="current"/>
</g>
<g id="secondIndicator">
<line id="Line 46" x1="32" y1="155.5" x2="-1.14236e-05" y2="155.5" stroke="black"/>
<path id="Ellipse 30" d="M16 161.186C12.9499 161.186 10.5 158.782 10.5 155.843C10.5 152.904 12.9499 150.5 16 150.5C19.0501 150.5 21.5 152.904 21.5 155.843C21.5 158.782 19.0501 161.186 16 161.186Z" fill="white" stroke="black"/>
<ellipse ref={performanceSvgRef} id="secondIndicatorPoint" cx="16" cy="155.895" rx="3.89556" ry="4" transform="rotate(90 16 155.895)" fill="white"/>
</g>
<g id="thirdIndicator">
<line id="Line 57" x1="32" y1="305.003" x2="-1.14236e-05" y2="305.003" stroke="black"/>
<path id="Ellipse 32" d="M16 310.186C12.9499 310.186 10.5 307.782 10.5 304.843C10.5 301.904 12.9499 299.5 16 299.5C19.0501 299.5 21.5 301.904 21.5 304.843C21.5 307.782 19.0501 310.186 16 310.186Z" fill="white" stroke="black"/>
<ellipse ref={responsiveSvgRef}id="thirdIndicatorPoint" cx="16" cy="304.895" rx="3.89556" ry="4" transform="rotate(90 16 304.895)" fill="white"/>
</g>
<g id="forthIndicator">
<line id="Line 95" x1="32" y1="454.332" x2="-1.14236e-05" y2="454.332" stroke="black"/>
<path id="Ellipse 34" d="M16 459.176C12.9499 459.176 10.5 456.771 10.5 453.832C10.5 450.894 12.9499 448.489 16 448.489C19.0501 448.489 21.5 450.894 21.5 453.832C21.5 456.771 19.0501 459.176 16 459.176Z" fill="white" stroke="black"/>
<ellipse ref={minimalSvgRef} id="forthIndicatorPoint" cx="15.9999" cy="453.895" rx="3.89556" ry="4" transform="rotate(90 15.9999 453.895)" fill="white"/>
</g>
<g id="fithIndicator">
<line id="Line 70" x1="32" y1="603.662" x2="-1.14236e-05" y2="603.662" stroke="black"/>
<path id="Ellipse 36" d="M15.9999 609.186C12.9498 609.186 10.4999 606.782 10.4999 603.843C10.4999 600.904 12.9498 598.5 15.9999 598.5C19.0501 598.5 21.4999 600.904 21.4999 603.843C21.4999 606.782 19.0501 609.186 15.9999 609.186Z" fill="white" stroke="black"/>
<ellipse  className="current" name="performance" id="fithIndicatorPoint" cx="15.9999" cy="603.895" rx="3.89556" ry="4" transform="rotate(90 15.9999 603.895)" fill="white"/>
</g>
</g>
</svg>

  )
})

export default MyRuler;