import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './css/style.scss';




const App = (props) => {
    const baseURL = false 
    ? 'http://localhost:3000/'
    : 'https://ga-project-three-backend.herokuapp.com'

    let token;

const login = async () =>{
    console.log('start');
    if(window.localStorage.getItem('token')){
        console.log('token exists');
        token = JSON.parse(window.localStorage.getItem('token'))
        console.log(token);
    }else{
        console.log('no token');
        const response = await fetch('http://localhost:3000/login', {
        method: 'post',
        body: JSON.stringify({username: "Phil", password: "p"}),
        headers: {"Content-Type": "application/json"}
        
    })
    const newToken = await response.json()
    console.log(newToken);
    token = newToken;
    window.localStorage.setItem('token', JSON.stringify(token));
    }
}
const test = async () =>{
    const response = await fetch('http://localhost:3000/test', {
        method: "GET",
        headers: {
            "Authorization": `bearer ${token}`,
        },
    })
    // console.log('response.json = ' + response.json());
    const result = await response.json();
    console.log(result);
}
const logout = () => {
    token = ''
    window.localStorage.removeItem('token');
}

    token
    return (
        <>
            <Header />
            <h1>Hello World</h1>
            <button onClick={login}>Login</button>
            <button onClick={test}>Test</button>
            <button onClick={logout}>Logout</button>
            <Footer />
        </>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
