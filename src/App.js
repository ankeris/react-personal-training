import React, { Component } from 'react';
import './App.css';
// import { ImageSlider } from './components/ImageSlider';


class App extends Component {
  state = {
    visible: true,
  }
  render() {
    const buttonText = this.state.visible ? "Turn off" : "Turn on"

    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
