import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Details from './DetailsPage.js';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.setState({
            details: false,
        });
    };
    
    render () {
        return (
        <>
            <div className="detailsContainer">
                <ul>
                {props.contacts.map((contact, index) => {
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