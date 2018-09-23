import React from 'react';
let defaultstate = {
    name: '',
    email: '',
    password: '',
    rememberme: true,

    nameError: '',
    emailError: '',
    passwordError: ''
}
export class MyForm extends React.Component {
    state = defaultstate;

    handleChange = (event) => {
        let isChecked = event.target.type
        this.setState({
            [event.target.name]: isChecked === 'checkbox' ? event.target.checked : event.target.value
        })
    }

    validate = () => {
        if(!this.state.email.includes('@')) {
            this.setState({
                emailError: 'Email is incorrect'
            })
            return false;
        } else {
            this.setState({
                emailError: ''
            })
        }
        return true;
    }

    handleSubmit = (ev) => {
        ev.preventDefault();

        let isValid = this.validate();

        if(isValid) {
            console.log(this.state);
        }
    }
    render() {
        return (
            <form className="react-form" onSubmit={this.handleSubmit}>
                <input 
                name='name'
                placeholder='name'
                value={this.state.name} 
                onChange={this.handleChange} />
                <p className="error">{this.state.nameError}</p>

                <input 
                name='email'
                placeholder='email'
                value={this.state.email} 
                onChange={this.handleChange}/>
                <p className="error">{this.state.emailError}</p>

                <input 
                name='password'
                placeholder='password'
                type='password'
                value={this.state.password} 
                onChange={this.handleChange}/>
                <p className="error">{this.state.passwordError}</p>

                <input 
                name='rememberme'
                type='checkbox' 
                checked={this.state.rememberme} 
                onChange={this.handleChange} />

                <button type='submit'>Submit</button>
            </form>
        )
    }
}