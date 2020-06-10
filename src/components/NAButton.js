import React, { Component } from 'react';

export default class NAButton extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <button onClick={(event) => this.props.changeCurrentPageName('new account')}>Create New Account</button>;
	}
}