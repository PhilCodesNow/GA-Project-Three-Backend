import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import LoginForm from './LoginForm.js';
import Footer from './Footer.js';


export default (props) => {

    return (
        <>
            <LoginForm login={props.loginHandlers.login} />
            <div className="loginContainer">
                <h1>SAMPLE IMAGE OF SITE</h1>
            </div>
        </>
    );
};
