import './App.css';
import Title from './components/title';
import React, { useState, useEffect } from 'react';
import { cleaningData } from './components/transform';
import HighlightComponent from './components/highlightComponent';
import Intro from './components/intro'
import MakeVisualization from './components/barChart'
import Background from './img/background.svg'; 
import CountFromInput from './components/countInput'
import CTA from './components/cta'
import SubTitle from './components/subHeader'


// RESOURCE: https://stackoverflow.com/questions/39195687/setting-a-backgroundimage-with-react-inline-styles

export default function App () {
const [allData, setAllData] = useState(null);

useEffect (() => {
  async function fetchData() {
    const endpointNPR = 'https://gist.githubusercontent.com/NathanNeelis/b28e16c0433b12da6bc716b276901ae9/raw/402754fa45924af802d06c5672043153bb990d5b/NPR_park_and_ride';
    const response = await fetch(endpointNPR);
    const data = await response.json();

    setAllData(data);
  }
  fetchData()
  

}, []);

  return (
    <div className="App" style={ AppStyle }>
      <div className="Content">
        <Title title='Laat je auto buiten de stad!' />
        <Intro />
        <HighlightComponent />
        <SubTitle title="Maar zijn er genoeg P+R faciliteiten?"/>
        <CTA target="#statistics" content="Bekijk jouw stad!"/>

        {allData && <section id="statistics" >
          <CountFromInput allData={ allData } />
        </section> }
        {/* Feedback blob */}

        <CTA target="#d3BarChart" content="P+R in de Randstad"/>

        {/* subkop d3 visual */}
        {/* intro d3 visual  */}
        {allData && <section id="d3BarChart">
          <MakeVisualization data={cleaningData(allData)}/>
        </section> }
        <CTA target="#endConclusion" content="Lees de conclusie"/>
        {/* CTA  */}
        <section id="endConclusion">

        </section>
        {/* subkop conlusie */}
        {/* intro conclusie */}
        {/* conclusie  */}
      </div>
    </div>
  )
}


// FETCH DATGA FROM AN API IN REACT
// RESOURCE https://www.youtube.com/watch?v=T3Px88x_PsA

// FETCH DATA WITH USE EFFECT
// RESOURCE https://www.youtube.com/watch?v=k0WnY0Hqe5c


let AppStyle = {
  height: "100%",
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};
