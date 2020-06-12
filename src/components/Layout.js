import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

export default (props) => {
    return (
        <>
            <Header />
            <NavBar login={props.login} handleCreate={props.handleCreate}/>
            {props.children}
            <Footer />
        </>
    );
};