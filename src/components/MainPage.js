import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: false,
        };
    };
    
    render () {
        const {contacts} = this.props;
        console.log(this.props);
        return (
        <>
            <div className="detailsContainer">
                <ul>
                {contact.map((contact, index) => {
                    return (
                        <li key={index}>
                            <h2>{contact.followUpDate}</h2>
                            <h2>{contact.name}</h2>
                            {/* How was the link done in previous homework? Is there a separate show page? If so, where should we put that page?*/}
                        
                        </li>
                    )
                })}
                </ul>
                <Router>
                    <Switch>
                        <Route></Route>
                    </Switch>
                <button><Link to={`/contact/${contact._id}`}>For More Details</Link></button>
                </Router>
                <button>Delete Icon</button>
            </div>
        </>
    )};
};