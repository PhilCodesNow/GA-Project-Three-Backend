import React from 'react';
import LoginForm from './LoginForm.js';


export default (props) => {

    return (
        <>
            <LoginForm login={props.loginHandlers.login} />
            <button>New Account</button>
            <div className="loginContainer">
                <h1>SAMPLE IMAGE OF SITE</h1>
            </div>
        </>
    );
};
