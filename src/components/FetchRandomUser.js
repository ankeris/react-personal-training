import React from 'react';

export default class FetchRandomUser extends React.Component {
    state = {
        loading: true,
        person: null
    }
    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            loading: false,
            person: data.results[0]
        })
    }
    render() {
        return (
            <React.Fragment>
            {this.state.loading || !this.state.person ? (
                <div>Loading...</div> 
            ) : (
            <div>
                <div>{this.state.person.name.first} {this.state.person.name.last}</div>
                <img src={this.state.person.picture.large}></img>
            </div>
            )}
            </React.Fragment>
        )
    }
}