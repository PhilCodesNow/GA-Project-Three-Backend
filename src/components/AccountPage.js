import React from 'react';
import AccountForm from './AccountForm.js';
import Header from './Header.js';

export default (props) => {
    return (
        <>
            <Header />
            <h1 className="naPage"><u>New Account</u></h1>
            <AccountForm createAccount={props.createAccount}/>
        </>
    );
};