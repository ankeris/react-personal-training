import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
    state = {
        visible: true,
    }
    render() {
        const buttonText = this.state.visible ? "Turn off" : "Turn on"

        return (
            <div className="App">
                <TodoList />
            </div>
        );
    }
}

export default App;
