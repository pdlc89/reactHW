import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Card from './components/card.js';
import Choices from './choices.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Memory Game</h1>
        </header>
        <div className="react-space">
            <p className="explain">Click on each image only once to win!</p>
            <button className="start">Start</button>
            </div>

        </div>
    );
  }
}

export default App;
