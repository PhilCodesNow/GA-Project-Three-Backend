import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm.js';
import Header from './Header.js';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Header />
                <LoginForm login={this.props.login} />
                <Link to="/new-account">Create New Account</Link>
                <div className="sampleContainer">
                    <h1>SAMPLE IMAGE OF SITE</h1>
                </div>
            </>
        );
    }
};

