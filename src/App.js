import React, { Component } from 'react';
import './App.css';
import Game from './components/Game/Game.js';
import Choices from './choices.json';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {
  render() {
      return (
          <div>
          <Game />
          <Footer />
          </div>
      )
  }
}

export default App;
