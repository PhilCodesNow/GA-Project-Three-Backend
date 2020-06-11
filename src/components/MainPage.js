import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from '../app';
import NewContact from './NewContactPage';
import LoginPage from './LoginPage';
import Details from './DetailsPage';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';


export default (props) => {
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
                
            </div>
        </>
    );
};