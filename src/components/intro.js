import React from 'react';
export default function Intro (props) {

      return (
      <p className="intro" style={ introStyle }>
        {props.intro}
          
      </p>
      );
  }


  let introStyle = {
    margin: "0 2em 2em 2em"
  };
  