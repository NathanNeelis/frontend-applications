import React from 'react';
export default function AlinaDiap (props) {
    return (
        <div>
            <h2 style={ HeaderAlineaStyle }>{props.header}</h2>
            <p style={ AlineaStyle }>
                {props.content}
            </p>
      </div>
      );
  }

  let HeaderAlineaStyle = {
    marginTop: "1em",
    color: "white"
  };
  

  let AlineaStyle = {
    padding: "1em 2em 2em 2em",
    color: "white"
  };



