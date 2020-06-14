import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
        <>
			<div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/new-account">Create New Account</Link>
                <button onClick={this.props.logoff}>Log Out</button>
            </div>
        </>
    );
}
};