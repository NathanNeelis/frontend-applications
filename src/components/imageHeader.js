import React from 'react';
// import parking from './src/img/parking.jpg'
import parking from '../img/parking.jpg'; 

export default class ImageHeader extends React.Component {
    render() {
        return (
        <img src={parking} alt="Logo" className="imageHeader" />
        );
    }
  }

