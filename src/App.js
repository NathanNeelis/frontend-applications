import './App.css';
import React from 'react';
import Background from './img/background.svg'; 
import Home from './pages/home'
import About from './pages/about'
import Navigation from './components/navigation'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// RESOURCE: https://stackoverflow.com/questions/39195687/setting-a-backgroundimage-with-react-inline-styles

export default function App () {

  return (
    <Router>
     <div className="App" style={ AppStyle }>
      <Navigation />
        <Switch>
          <Route exact path="/frontend-applications">
            <Home />
          </Route>
          <Route path="/frontend-applications/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


// RESOURCE ROUTING
// https://reactrouter.com/web/example/basic

let AppStyle = {
  height: "100%",
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};