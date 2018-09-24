import React from 'react';

export default class FetchRandomUser extends React.Component {
    state = {
        loading: true,
        people: []
    }
    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=15";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            loading: false,
            people: data.results
        })
    }
    render() {
        return (
            <React.Fragment>
            {this.state.loading || !this.state.people ? (
                <div>Loading...</div> 
            ) : (
            <div>
                {this.state.people.map((person, i) => (
                    // key stands for unique id, u can do it however you want (just achieve unique result)
                    <div key={i}>
                        <div>{person.name.first} {person.name.last}</div>
                        <img src={person.picture.large}></img>
                    </div>
                ))}
            </div>
            )}
            </React.Fragment>
        )
    }
}