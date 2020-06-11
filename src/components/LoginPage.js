import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import LoginForm from './LoginForm.js';
import Footer from './Footer.js';
import NAButton from './NAButton.js';

export default (props) => {

    return (
        <>
            <LoginForm login={props.loginHandlers.login} />
            <NAButton setCurrentPageName={props.setCurrentPageName} />
            <div>
                <h1>SAMPLE IMAGE OF SITE</h1>
            </div>
        </>
    );
};
