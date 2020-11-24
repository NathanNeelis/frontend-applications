import React from 'react';
import ImageHeader from './imageHeader';
import AlineaDiap from './AlineaDiap'

export default function HighlightComponent () {
  return (
    <div className="highlight">
      <ImageHeader />
      <AlineaDiap 
        header="The solution:" 
        content="The solution for this is the P+R parking areas. 
          Often there is a special offer when you park your car in a P+R and travel 
          the last bit into the city center with public transport. 
          This saves you a high parking bill and the time of searching 
          for a viable parking spot near the city."
          />
    </div>
  );  
  }

