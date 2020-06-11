import React, { Component } from 'react';

export default class DetailsButton extends Component {
	constructor(props) {
		super(props);
	}
	changeState(event) {
		return this.props.function(this.props.details);
	};
	render() {
		return <button onClick={this.changeState}>{this.props.details}</button>;
	}
}