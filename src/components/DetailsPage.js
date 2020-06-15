import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm.js';
import Layout from './Layout.js'
import {Link} from 'react-router-dom';

export default class Details extends Component {
    constructor(props) {
        super(props);
    }

    flatten(nestedContact) {
        // Deep copy
        const flattenedContact = JSON.parse(JSON.stringify(nestedContact))
        console.log(flattenedContact)
        flattenedContact.contactInfo_phone = flattenedContact.contactInfo.phone
        flattenedContact.contactInfo_email = flattenedContact.contactInfo.email
        flattenedContact.contactInfo_linkedinId = flattenedContact.contactInfo.linkedinId
        flattenedContact.contactInfo_other = flattenedContact.contactInfo.other
        delete flattenedContact.contactInfo
        flattenedContact.firstMeetContact_eventName = flattenedContact.firstMeetContact.eventName
        flattenedContact.firstMeetContact_eventDate = flattenedContact.firstMeetContact.eventDate
        flattenedContact.firstMeetContact_otherInfo = flattenedContact.firstMeetContact.otherInfo
        delete flattenedContact.firstMeetContact
        console.log(flattenedContact)
        return flattenedContact
    }

	render() {
        const contact = this.props.contacts.find(contact => contact._id === this.props.match.params.id);
        return (
            <>
                <Layout logoff={this.props.logoff}>
                <Link className="contactButton" to="/contacts/new" >Add New Contact</Link>
                <div className="container">
                    <ul>
                        <li>{`Name: ${contact.name}`}</li><br />
                        {contact.contactInfo &&
                            <>
                                <li><u>Contact Info</u></li>
                                <li>{`Phone: ${contact.contactInfo.phone}`}</li>
                                <li>{`Email: ${contact.contactInfo.email}`}</li>
                                <li>{`LinkedIn: ${contact.contactInfo.linkedinId}`}</li>
                                <li>{`Other: ${contact.contactInfo.other}`}</li>
                            </>
                        }
                        <br />
                        {contact.firstMeetContact &&
                            <>
                                <li><u>First Met Contact Info</u></li>
                                <li>{`Event Name: ${contact.firstMeetContact.eventName}`}</li>
                                <li>{`Event Date: ${contact.firstMeetContact.eventDate}`}</li>
                                <li>{`Event Info: ${contact.firstMeetContact.otherInfo}`}</li>
                            </>
                        }
                        <br />
                        <li>{`Follow Up Date: ${contact.followUpDate}`}</li>
                        <li>{`Converstaion Notes: ${contact.conversationNotes}`}</li>
                    </ul>
                    <div className="buttons">
                        <button className="detailsButton"><img className="icon" src={require('../img/edit.svg')} /></button>
                        <button className="detailsButton"><img className="icon" src={require('../img/trashcan.svg')} /></button>
                    </div>
                </div>
                <div className="editFormContainer">
                    <h2 className="editTitle">Edit Contact</h2>
                    <br></br>
                    <ContactForm initial={this.flatten(contact)} handleSubmit={this.props.handleEdit} submitText="Update Contact" />
                </div>
                </Layout>
            </>
        );
    } 
};