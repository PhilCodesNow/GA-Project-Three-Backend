import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LoginButton from './LoginButton.js'

// Do we use this? See login button comment

export default class NavBar extends Component {
    constructor(props) {
		super(props);
    }
    render() {
    return (
        <>
			<div className="Navbar">
				{/*<div>
					<NavButton buttonName="Home" function={this.props.function} />
				</div>
				<div>
					<NavButton buttonName="About Us" function={this.props.function} />
				</div>
				<div>
					<NavButton buttonName="Contact Us" function={this.props.function} />
                </div>*/}
            </div>
            <LoginButton setCurrentPageName={this.props.setCurrentPageName} />
            <h3>{this.props.username}</h3>
            <h3>Logout</h3>
        </>
    );
}
};