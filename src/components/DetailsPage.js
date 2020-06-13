import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm.js';
import Layout from './Layout.js'

export default class Details extends Component {
    constructor(props) {
        super(props);
    }

	render() {
        const contact = this.props.contacts.find(contact => contact._id === this.props.match.params.id);
        return (
            <>
                <Layout>
                <div className="container">
                    <ul>
                    {/* Some complex conditional rendering here could be eliminated by creating defaults for subdocuments on the backend */}
                        <li>{`Name: ${contact.name}`}</li>
                        {contact.contactInfo &&
                            <>
                                <li>Contact Info:</li>
                                <li>{`Phone: ${contact.contactInfo.phone}`}</li>
                                <li>{`Email: ${contact.contactInfo.email}`}</li>
                                <li>{`LinkedIn: ${contact.contactInfo.linkedinId}`}</li>
                                <li>{`Other: ${contact.contactInfo.other}`}</li>
                            </>
                        }
                        <br />
                        {contact.firstMeetContact &&
                            <>
                                <li>First Met Contact Info:</li>
                                <li>{`Event Name: ${contact.firstMeetContact.eventName}`}</li>
                                <li>{`Event Date: ${contact.firstMeetContact.eventDate}`}</li>
                                <li>{`Event Info: ${contact.firstMeetContact.eventInfo}`}</li>
                            </>
                        }
                        <br />
                        <li>{`Follow Up Date: ${contact.followUpDate}`}</li>
                        <li>{`Converstaion Notes: ${contact.conversationNotes}`}</li>
                    </ul>
                    <button>Edit Icon</button>
                    <button>Delete Icon</button>
                </div>
                <div className="editFormContainer">
                    <h2>Edit Contact</h2>
                    <ContactForm initial={contact} handleSubmit={this.props.handleEdit} />
                </div>
                </Layout>
            </>
        );
    } 
};