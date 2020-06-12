import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import LoginForm from './LoginForm.js';
import NewAccount from './AccountPage.js';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.setState({
            newaccount: false
        });
    }

    render() {
        return (
            <>
                <LoginForm login={props.loginHandlers.login} />
                <Router>
                    <Switch>
                        <Route path="/users/new" component={NewAccount} />
                    </Switch>
                    <button><Link to="/users/new">Create New Account</Link></button>
                </Router>
                <div className="loginContainer">
                    <h1>SAMPLE IMAGE OF SITE</h1>
                </div>
            </>
        );
    }
   
};
