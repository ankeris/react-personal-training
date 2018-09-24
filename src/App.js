import React, { Component } from 'react';
import './App.css';
import { Counter } from './components/counter';

class App extends Component {
  state = {
    number: 0
}
componentWillUnmount() {
    console.log('unmounting . . .');
}
componentDidUpdate() {
    console.log('update');
}
componentDidMount() {
    console.log('mounting . . .');
    
}
_Next = () => {
    this.setState({
        number: this.state.number + 1
    })
}
_Prev = () => {
    this.setState({
        number: this.state.number - 1
    })
}
  render() {

    return (
      <div className="App">
        <Counter 
        number={this.state.number} 
        increment={this._Next} 
        decrement={this._Prev}
        />
        <Counter 
        number={this.state.number} 
        increment={this._Next} 
        decrement={this._Prev}
        />
      </div>
    );
  }
}

export default App;
