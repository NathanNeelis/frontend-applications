import './App.css';
import Title from './components/title';
import React, { useState, useEffect } from 'react';
import { cleaningData } from './components/transform';
import HighlightComponent from './components/highlightComponent';
import Intro from './components/intro'
import MakeVisualization from './components/barChart'
import Background from './img/background.svg'; 

let AppStyle = {
  height: "100%",
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};


// RESOURCE: https://stackoverflow.com/questions/39195687/setting-a-backgroundimage-with-react-inline-styles

export default function App () {
const [data, setData] = useState(null);

useEffect (() => {
  async function fetchData() {
    const endpointNPR = 'https://gist.githubusercontent.com/NathanNeelis/b28e16c0433b12da6bc716b276901ae9/raw/402754fa45924af802d06c5672043153bb990d5b/NPR_park_and_ride';
    const response = await fetch(endpointNPR);
    const data = await response.json();

    let prData = cleaningData(data);

    setData(prData);
    }
    fetchData()

  }, []);

  return (
    <div className="App" style={ AppStyle }>
      <div className="Content">
        {data && <Title title='Laat je auto buiten de stad!' /> }
        <Intro intro="The cities become busier and busier every year. 
          In the city centre areas of the cities is hardly 
          any room left for cars. This is the reason most 
          city centers can be reached with public transport. 
          But public transport can be very expensive if you travel 
          with multiple persons, especially for long distances. 
          ut parking your car near the city center can be very expensive as well. 
          There are also people that want to travel by train, 
          but cannot park their car at the train station. 
          Take for example Amsterdam Central station, 
          it's nearly impossible to park your car near 
          and if you are able to find a parking garage, 
          you probably pay a high amount. "/>
        <HighlightComponent />
        {data && <MakeVisualization data={data}/>}
      </div>
    </div>
  )
}


// FETCH DATGA FROM AN API IN REACT
// RESOURCE https://www.youtube.com/watch?v=T3Px88x_PsA

// FETCH DATA WITH USE EFFECT
// RESOURCE https://www.youtube.com/watch?v=k0WnY0Hqe5c