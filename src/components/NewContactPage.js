import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm';

export default (props) => {
    return (
        <>
            <h2>New Contact</h2>
            <ContactForm  initial={blank} handleSubmit={handleCreate}/>
        </>
    );
};