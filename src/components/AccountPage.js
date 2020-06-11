import React from 'react';
import ReactDOM from 'react-dom';
import AccountForm from './AccountForm.js';

export default (props) => {
    return (
        <>
            <h1>New Account</h1>
            <AccountForm createAccount={props.createAccount}/>
        </>
    );
};
