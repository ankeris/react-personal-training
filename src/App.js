import React, { Component } from 'react';
import './App.css';
import { ImageSlider } from './components/ImageSlider';
import { Counter } from './components/counter';
import { MyForm } from './components/MyForm';

class App extends Component {
  state = {
    visible: true,
  }
  render() {
    const buttonText = this.state.visible ? "Turn off" : "Turn on"

    return (
      <div className="App">
        {this.state.visible ? <ImageSlider /> : <Counter />}
        <br/>
        <button onClick={() => this.setState({visible: !this.state.visible})}>{buttonText}</button>
        <br/>
        <div className="form">
          <MyForm></MyForm>
        </div>

      </div>
    );
  }
}

export default App;
