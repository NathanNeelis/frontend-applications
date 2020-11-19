import './App.css';
import Welcome from './components/title';
import Counter from './components/counter';
import React from 'react';
import { cleaningData, combineDoubleCities } from './components/transform';
import HighlightComponent from './components/highlightComponent';
import Intro from './components/intro'

import Background from './img/background.jpg'; 

let AppStyle = {
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat, repeat",
  backgroundPosition: "center"

};

// RESOURCE: https://stackoverflow.com/questions/39195687/setting-a-backgroundimage-with-react-inline-styles

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null
    };
  }

  async componentDidMount() {
      const endpointNPR = 'https://gist.githubusercontent.com/NathanNeelis/b28e16c0433b12da6bc716b276901ae9/raw/402754fa45924af802d06c5672043153bb990d5b/NPR_park_and_ride';
      const response = await fetch(endpointNPR);
      const data = await response.json();

      let prData = cleaningData(data);
      let combine = combineDoubleCities(prData);

      this.setState({
          data: combine,
          loading: false
      })
  }

    render() {
      if (this.state.loading) {
        return <div> loading data... </div>
      }
      
      if (!this.state.data){
        return <div> Didn't get the data</div>
      }
      
      return (
        <div className="App" style={ AppStyle }>
          <div className="Content">
            <Welcome name={this.state.data[0].city} />
            <Counter />
            <Intro />
            <HighlightComponent />
          </div>
      </div>
      );
      
  }
}


// FETCH DATGA FROM AN API IN REACT
// RESOURCE https://www.youtube.com/watch?v=T3Px88x_PsA