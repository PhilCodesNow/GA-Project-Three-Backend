import React, { Component } from 'react';

export default class NAButton extends Component {
	constructor(props) {
		super(props);
	}
	changeState = event => {
		return this.props.function(this.props.newAccount);
	};
	render() {
		return <button onClick={this.changeState}>{this.props.newAccount}</button>;
	}
}