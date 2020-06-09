import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './css/style.scss';

const App = (props) => {
    const baseURL = false 
    ? 'http://localhost:3000/'
    : 'https://ga-project-three-backend.herokuapp.com'


    return (
        <>
            <Header />
            <h1>Hello World</h1>
            <Footer />
        </>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
