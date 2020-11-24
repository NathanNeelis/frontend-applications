// import React, { useState, useEffect } from 'react';

export default function CountToTarget (props){
    const target = props.count;

    return (
        <div className="countContainer">
            <div className='counter' style={ counterValue }>{ target }</div>
            <h3>{props.title}</h3>
        </div>
    );
}



// export default function CountToTarget (props){

//     const counters = document.querySelectorAll('.counter');
//     const speed = 900; // The lower the slower
//     const target = props.count;

//     console.log('this is props', props.count)

//     counters.forEach(counter => { 
//         const updateCount = () => {
//             const count = counter.innerText;
//             console.log('actual count', count)

//             // Lower inc to slow and higher to slow
//             const inc = target / speed;

//             // Check if target is reached
//             if (count < target) {
//                 // Add inc to count and output in counter
//                 counter.innerText = Math.round(count + inc);
//                 // Call function every ms
//                 setTimeout(updateCount, 1);
//             } else {
//                 counter.innerText = target;
//             }
//         };

//         updateCount();
//     })

//     return (
//         <div className="countContainer">
//             <div className='counter' style={ counterValue }></div>
//             <h3>{props.title}</h3>
//         </div>
//     );
// }

// RESOURCE COUNTER Brad Traversy
// https://codepen.io/bradtraversy/pen/poJwqOK



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

