import React from 'react';
import Layout from './Layout.js';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <>
            <Layout logoff={props.logoff}>
            <div className="detailsContainer">
                <Link className="nabutton" to="/contacts/new" >Add New Contact</Link>
                <ul>
                {props.contacts.map((contact, index) => {
                    const followUpDate = new Date(contact.followUpDate).toDateString();
                    return (
                        <li key={index} className="items">
                            <h2>{followUpDate}</h2>
                            <h2>{contact.name}</h2>
                            <Link to={`/contacts/${contact._id}`}>More Info</Link>
                            <button onClick={() => props.deleteHandler(contact._id)}><img className="icon" src={require('../img/trashcan.svg')} /></button>
                        </li>
                    )
                })}
                </ul>
            </div>
            </Layout>
        </>
    );
};
