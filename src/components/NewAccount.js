import React from 'react';
import ReactDOM from 'react-dom';
import AccountForm from './AccountForm.js';
import Header from './Header.js';
import Footer from './Footer.js';

export default (props) => {
    return (
        <>
            <h1>New Account</h1>
            <AccountForm></AccountForm>
        </>
    );
};
