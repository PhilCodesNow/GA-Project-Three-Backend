import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../app';
import NewContact from './NewContactPage';
import LoginPage from './LoginPage';
import Details from './DetailsPage';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import Layout from './Layout.js';
import {Link} from 'react-router-dom';



export default (props) => {
    return (
        <>
            <Layout>
            <div className="detailsContainer">
                <ul>
                {props.contacts.map((contact, index) => {
                    return (
                        <li key={index}>
                            <h2>{contact.followUpDate}</h2>
                            <h2>{contact.name}</h2>
                            <Link to={`/contacts/${contact._id}`}>More Info</Link>
                            <button onClick={() => props.deleteHandler(contact._id)}>✕</button>
                        </li>
                    )
                })}
                </ul>
            </div>
            </Layout>
        </>
    );
};
