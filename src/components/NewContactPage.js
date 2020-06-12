import React from 'react';
import ContactForm from './ContactForm.js';

export default (props) => {
     //Object For Blank Form For Create
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
            <ContactForm  initial={blank} handleSubmit={handleCreate}/>
        </>
    );
};