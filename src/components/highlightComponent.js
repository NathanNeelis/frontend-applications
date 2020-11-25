import React from 'react';
import ImageHeader from './imageHeader';
import AlineaDiap from './AlineaDiap'

export default function HighlightComponent () {
  return (
    <div className="highlight">
      <ImageHeader />
      <AlineaDiap 
        header="De oplossing:" 
        content={contentText}
          />
    </div>
  );  
  }

let contentText = "De oplossing hiervoor zijn Park & Ride parkeerplaatsen. Dit zijn parkeer faciliteiten die speciaal ontworpen zijn om de auto uit de stad te weren. Vaak als je hier parkeert zijn er speciale tarieven als je vervolgens met het OV naar de stad reist. "