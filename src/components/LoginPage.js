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
                <Link className="nabutton" to="/new-account">Create New Account</Link>
                <div className="sampleContainer">
                    <h2 className="sampleText"><u>Site Preview</u></h2>
                    <img className="sample" src={require('../img/sample-home.png')} />
                    <img className="sample" src={require('../img/sample-contacts.png')} />
                </div>
            </>
        );
    }
};

