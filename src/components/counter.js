import React from 'react';

export class Counter extends React.Component {
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
    render() {
        return (
            <React.Fragment>
                <div>{this.state.number}</div>
                <button onClick={this._Next}>Next</button>
            </React.Fragment>
        )
    }
}