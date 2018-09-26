import React from 'react';

export default class TodoList extends React.Component {
    state = {
        todos: [1, 2, 3, 4]
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.state.todos.map(item => (
                        <li>hi</li>
                    ))}
                </ul>

                <form>
                    <input></input>
                </form>
            </React.Fragment>
        )
    }
}