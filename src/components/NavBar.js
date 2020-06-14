import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './MainPage';
import NewContact from './NewContactPage';
import Login from './LoginPage';


// Do we use this? See login button comment

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            home: true,
            newcontact: false,
            login: false
        });
    }
    render() {
    return (
        <>
			<div className="Navbar">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/new-account">Create New Account</Link>
                <button onClick={this.props.logoff}>Log Out</button>
            </div>
        </>
    );
}
};