import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import LoginForm from './LoginForm.js';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            newaccount: false
        });
    }
    render() {
        return (
            <>
                <LoginForm login={this.props.login} formDataPass={this.props.formDataPass} formDataUsername={this.props.formDataUsername} handleChange={this.props.handleChange}/>
                    <button><Link to="/users/new">Create New Account</Link></button>
                <div className="loginContainer">
                    <h1>SAMPLE IMAGE OF SITE</h1>
                </div>
            </>
        );
    }
};

