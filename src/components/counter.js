import React from 'react';

export class Counter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>{this.props.number}</div>
                <button onClick={this.props.decrement}>Previous</button>
                <button onClick={this.props.increment}>Next</button>
            </React.Fragment>
        )
    }
}