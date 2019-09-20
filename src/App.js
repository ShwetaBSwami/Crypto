import React from 'react';
import logo from './logo.svg';
import './App.css';
import Crypto from './Crypto';
import Donut from './Donut';
import { Router, Route } from "react-router-dom";
import Information from './Information';
import history from './history';
import Signup from './auth/Signup';
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="App">
        Hello world
       <Router history={history}>
       <Route path="/information" component={Information}/>
       <Route path="/signup" component={Signup}/>
        <Route exact path="/" component={Crypto}/>
          <Donut/> 
            
          </Router> 
        </div>
    );
  }

}

export default App;




























           
    

