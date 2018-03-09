import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Card from './components/card.js'
import Game from './components/Game/game.js';
import Choices from './choices.json';

class App extends Component {
  render() {
    return (<Game />)
  }
}

export default App;
