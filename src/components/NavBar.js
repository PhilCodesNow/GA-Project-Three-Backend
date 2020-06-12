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
        this.setState({
            home: true,
            newcontact: false,
            login: false
        });
    }
    render() {
    return (
        <>
			<div className="navbarContainer">
				<Router>
                    <Switch>
                        <Route exact path="/contact" component={Home} />
                        <Route path="/newcontact" component={NewContact} handleCreate={this.props.handleCreate}/>
                        <Route path="/login" component={Login} login={this.props.login}/> 
                    </Switch>
                    <div className="buttons">
                        <button><Link to='/contact'>Home</Link></button>
                        <button><Link to='/newcontact'>Create New Contact</Link></button>
                        <h3>{this.props.username}</h3>
                        <button><Link to='/login'>Login</Link></button>
                        <button>Log Off</button>
                    </div>
                </Router>
            </div>
            
        </>
    );
}
};