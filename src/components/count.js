// import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

export default function CountToTarget (props){
    const target = props.count;

    return (
        <div className="countContainer">
            <div className='counter' style={ counterValue }>
                <CountUp end={ target } duration={5}/>
            </div>
            <h3>{props.title}</h3>
        </div>
    );
}



let counterValue = {
    height: "10vw",
    width: "10vw",
    backgroundColor: "#00bfbf",
    borderRadius: "50%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2em",
    fontFamily: "'Thasadith', sans-serif",
    fontWeight: "700",
    color: "white",
    marginBottom: ".5em"

}

