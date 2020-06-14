import React from 'react';
import ReactDOM from 'react-dom';
import AccountForm from './AccountForm.js';
import Header from './Header.js';

export default (props) => {
    return (
        <>
            <Header />
            <h1>New Account</h1>
            <AccountForm createAccount={props.createAccount}/>
        </>
    );
};