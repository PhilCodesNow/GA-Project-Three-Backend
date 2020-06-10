import React, { Component } from 'react';

// Do we use this?

export default class LoginButton extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <button onClick={() => props.setCurrentPageName('login')}>Log In</button>
	}
}