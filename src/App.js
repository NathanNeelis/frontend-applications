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
import Conclusion from './components/conlusion'


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
        <Intro content={introText}/>
        <HighlightComponent />
        <SubTitle title="Maar zijn er genoeg P+R faciliteiten?"/>
        <CTA target="#statistics" content="Bekijk jouw stad!"/>

        {allData && <section id="statistics" >
          <CountFromInput allData={ allData } />
        </section> }
        <CTA target="#d3BarChart" content="P+R in de Randstad"/>



        {allData && <section id="d3BarChart">
          <SubTitle title="Hoe goed facaliteren de randstad steden de Park & Rides mogelijkheden?"/>
          <Intro content={introD3}/>
          <MakeVisualization data={cleaningData(allData)}/>
        </section> }
        <CTA target="#endConclusion" content="Lees de conclusie"/>



        <section id="endConclusion">
          <SubTitle title="Welke randstad is goed te bereiken met Park & Ride faciliteiten?"/>
          <Conclusion cityName="Rotterdam" />
          <Conclusion cityName="Delft" />
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
let introText = "De steden worden jaarlijks steeds drukker en drukker. In het centrum is dan ook bijna geen ruimte meer om je auto kwijt te kunnen. Dit is dan ook de reden waarom steden goed te bereiken zijn het het openbaar vervoer. Maar aan het OV hangt ook wel een prijskaartje, zeker als je met meerdere mensen reist. Maar je auto bij een stad parkeren is ook niet goedkoop. Er zijn ook mensen die met de auto naar het station rijden om vanaf daar verder te gaan met het OV. Maar lang niet bij alle stations kan je goed parkeren. Neem Bijvoorbeeld Amsterdam Centraal, als je er al kan parkeren betaal je waarschijnlijk ook nog eens de hoofdprijs. Gelukkig is er een oplossing...";

let introD3 = "In de staafdiagram hieronder is af te lezen hoeveel P+R faciliteiten er zijn in de Randstad en hoeveel parkeerplaatsen deze hebben. Door de checkbox aan te vinken is te lezen hoeveel parkeerplaats elke stad in de randstad totaal heeft.";

let AppStyle = {
  height: "100%",
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};
