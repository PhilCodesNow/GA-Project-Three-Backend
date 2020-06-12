import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm.js';
import Layout from './Layout.js'

export default class Details extends Component {
    constructor(props) {
        super(props);
    }

	render() {
        const {contact} = this.state;
        return (
            <>
                <Layout>
                <div className="container">
                    <ul>
                        <li>{`Name: ${contact.name}`}</li>
                        <li>Contact Info:</li>
                        <li>{`Phone: ${contact.contactInfo.phone}`}</li>
                        <li>{`Email: ${contact.contactInfo.email}`}</li>
                        <li>{`LinkedIn: ${contact.contactInfo.linkedinId}`}</li>
                        <li>{`Other: ${contact.contactInfo.other}`}</li>
                        <br />
                        <li>First Met Contact Info:</li>
                        <li>{`Event Name: ${contact.firstMeetContact.eventName}`}</li>
                        <li>{`Event Date: ${contact.firstMeetContact.eventDate}`}</li>
                        <li>{`Event Info: ${contact.firstMeetContact.eventInfo}`}</li>
                        <br />
                        <li>{`Follow Up Date: ${contact.followUpDate}`}</li>
                        <li>{`Converstaion Notes: ${contact.conversationNotes}`}</li>
                    </ul>
                    <button>Edit Icon</button>
                    <button>Delete Icon</button>
                </div>
                <div className="editFormContainer">
                    <h2>Edit Contact</h2>
                    <ContactForm intial={editContact} handleSubmit={handleEdit} />
                </div>
                </Layout>
            </>
        );
    } 
};