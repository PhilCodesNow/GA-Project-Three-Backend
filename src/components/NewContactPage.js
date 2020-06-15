import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm.js';
import Layout from './Layout.js'

export default (props) => {
    const blank = {
        name: '',
        contactInfo_phone: '',
        contactInfo_email: '',
        contactInfo_linkedinId: '',
        firstMeetContact_eventName:'',
        firstMeetContact_eventDate:'',
        firstMeetContact_otherInfo:'',
        followUpDate: '',
        conversationNotes:'',
    };
    return (
        <Layout logoff={props.logoff}>
            <h2 className="ncTitle"><u>New Contact Information</u></h2>
            <div className="editFormContainer">
                <ContactForm  initial={blank} handleSubmit={props.handleCreate} submitText="Create New Contact" />
            </div>
        </Layout>
    );
};