import React from 'react';
import Layout from './Layout.js';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <>
            <Layout logoff={props.logoff}>
            <div className="detailsContainer">
                <Link to="/contacts/new" > Add New Contact</Link>
                <ul>
                {props.contacts.map((contact, index) => {
                    return (
                        <li key={index}>
                            <h2>{contact.followUpDate}</h2>
                            <h2>{contact.name}</h2>
                            <Link to={`/contacts/${contact._id}`}>More Info</Link>
                            <button onClick={() => props.deleteHandler(contact._id)}><image className="icon" src='../img/trashcan.svg'></image></button>
                        </li>
                    )
                })}
                </ul>
            </div>
            </Layout>
        </>
    );
};
