import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import LoginForm from './LoginForm.js';
import Footer from './Footer.js';

export default (props) => {
    return (
        <>
            <Header></Header>
            <LoginForm></LoginForm>
            <div>
                <img>SAMPLE IMAGE OF SITE</img>
            </div>
            <Footer></Footer>  
        </>
    );
};
