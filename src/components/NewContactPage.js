import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm.js';

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
        <>
            <h2>New Contact</h2>
            <ContactForm  initial={blank} handleSubmit={props.handleCreate}/>
        </>
    );
};