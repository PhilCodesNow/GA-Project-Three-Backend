import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

export default (props) => {
    return (
        <>
            <Header />
            <NavBar />
            {props.children}
            <Footer />
        </>
    );
};