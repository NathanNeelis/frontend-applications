import React from 'react';
import {cleaningData, combineDoubleCities} from './transform'

export default class MyData extends React.Component {
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
        <div>
            {this.state.data[0].city}
        </div>
      );
    }
};

// FETCH DATGA FROM AN API IN REACT
// RESOURCE https://www.youtube.com/watch?v=T3Px88x_PsA