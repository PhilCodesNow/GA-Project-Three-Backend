import React from 'react'
import NavBar from './NavBar';
import Header from './Header.js';
import Footer from './Footer.js'

export default (props) => {
    return (
        <>
            <Header />
            <NavBar />
            {props.children}
            <Footer />
        </>
    )
}