import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm.js';

export default (props) => {
    const blank = {
        name: '',
            contactInfo: {
                phone: '',
                email:'',
                linkedinId: '',
                other:''
            },
            firstMeetContact: {
                eventName:'',
                eventDate:'',
                otherInfo:'',
            },
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