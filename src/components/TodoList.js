import React from 'react';

export default class TodoList extends React.Component {
    state = {
        todos: ['read something', 'go sleep'],
        text: ''
    }
    insertText = (ev) => {
        this.setState({
            text: ev.target.value
        })
        console.log(ev.target.value);
    }
    submitTodo = (ev) => {
        ev.preventDefault();
        this.setState({
            todos: this.state.todos.push(this.state.text)
        })
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.state.todos.map((item, i) =>
                        (
                            <li key={i}>{i + 1}: {item}</li>
                        ))}
                </ul>

                <form onSubmit={this.submitTodo}>
                    <input
                        placeholder="add todo item"
                        value={this.state.text}
                        onChange={this.insertText}
                    />
                    <button type="submit">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}