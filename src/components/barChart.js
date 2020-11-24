import React, { useRef, useEffect } from 'react';
import CreateChart from './d3visual/createChart'


  let SvgStyle = {
    height: "80vh",
    width: "50vw"
  }


function MakeVisualization(props) {
    const svgRef = useRef();

    useEffect(() => {
        CreateChart(props.data, svgRef)      
    }, );

    return (
        <div>
            <div className="container">
                <div className="group">
                    <input type="checkbox" id="xd" />
                    <label htmlFor="xd">Click here to compare total P+R parking spaces for each Randstad city</label>
                </div>
            </div>
            <div className="mainContainer">
                <svg ref={svgRef}  style={ SvgStyle }></svg>
            </div>
        </div>
    );
}

export default MakeVisualization;