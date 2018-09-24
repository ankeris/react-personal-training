import React, { Component } from 'react';
import './App.css';
import FetchUser from './components/FetchRandomUser';

class App extends Component {
  state = {
    smth: ''
  }
  render() {
    return (
      <div className="App">
        <FetchUser/>
      </div>
    );
  }
}

export default App;
