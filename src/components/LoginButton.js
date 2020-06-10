import React, { Component } from 'react';

export default class LoginButton extends Component {
	constructor(props) {
		super(props);
	}
	changeState = event => {
		return this.props.function(this.props.login);
	};
	render() {
		return <button onClick={this.changeState}>{this.props.login}</button>;
	}
}