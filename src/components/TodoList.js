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
            todos: [...this.state.todos, this.state.text]
        })
    }
    deleteItem = (number) => {
        let newList = [...this.state.todos];
        newList.splice(number, 1)
        this.setState({
            todos: newList
        })
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.state.todos.map((item, number) =>
                        (
                            <li key={number}>
                                {number + 1}: {item}
                                <button onClick={() => this.deleteItem(number)}>X</button>
                            </li>
                        ))
                    }
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