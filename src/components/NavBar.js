import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './MainPage';
import NewContact from './NewContactPage';
import Login from './LoginPage';


// Do we use this? See login button comment

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: true,
            newcontact: false,
            login: false
        };
    }
    render() {
    return (
        <>
			<div className="navbarContainer">
				<Router>
                    <Switch>
                        <Route exact path="/contacts" component={Home} />
                        <Route path="/contacts/new" component={NewContact}/>
                        <Route path="/users" component={Login} /> 
                    </Switch>
                    <div className="buttons">
                        <button><Link to='/contacts'>Home</Link></button>
                        <button><Link to='/contacts/new'>Create New Contact</Link></button>
                        <h3>{this.props.username}</h3>
                        <button><Link to='/users'>Login</Link></button>
                        <button>Log Off</button>
                    </div>
                </Router>
            </div>
            
        </>
    );
}
};