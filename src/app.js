import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login.js';
import NewAccount from './components/NewAccount.js';
import './css/style.scss';

const App = (props) => {
    const baseURL = false 
    ? 'http://localhost:3000/'
    : 'https://ga-project-three-backend.herokuapp.com'


    return (
        <>
            
            <h1>Hello World</h1>
            
        </>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
