import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login.js';
import NewAccount from './components/NewAccount.js';
import './css/style.scss';




const App = (props) => {
    const baseURL = false 
    ? 'http://localhost:3000/'
    : 'https://ga-project-three-backend.herokuapp.com'

    
    const [userList, setUserList] = React.useState(null);

    const blank = {title:'', url:''};


    let token;
const login = async () =>{
    console.log('start');
    if(window.localStorage.getItem('token')){
        console.log('token exists');
        token = JSON.parse(window.localStorage.getItem('token'))
        console.log(token);
    }else{
        console.log('no token');
        const response = await fetch('https://ga-project-three-backend.herokuapp.com/users/new', {
        method: 'post',
        body: JSON.stringify({username: "The Phil", password: "password"}),
        headers: {"Content-Type": "application/json"}
        
    })
    const newToken = await response.json()
    console.log(newToken);
    token = newToken;
    window.localStorage.setItem('token', JSON.stringify(token));
    }
}
const test = async () =>{
    const response = await fetch('https://ga-project-three-backend.herokuapp.com/test', {
        method: "GET",
        headers: {
            "Authorization": `bearer ${token}`,
        },
    })

    const result = await response.json();
    console.log(result);
}
const logout = () => {
    token = ''
    window.localStorage.removeItem('token');
}
const getInfo = async() =>{
    const response = await fetch('https://ga-project-three-backend.herokuapp.com/users/');
    const result = await response.json();
    setUserList(result);
}
const userCreate = async(data) =>{
    const response = await fetch('https://ga-project-three-backend.herokuapp.com/users/new', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    getInfo();
}

    token
    return (
        <>
            
            <h1>Hello World</h1>
             <button onClick={login}>Login</button>
            <button onClick={test}>Test</button>
            <button onClick={logout}>Logout</button>
            <Login initial={blank} />
            <NewAccount initial={blank} handleSubmit = {userCreate}/>
            <div>
                {
                userList ? 
                userList.map((user, index) =>{
                    return (
                        <div key={user._id}>
                            <p>{user.username}</p>
                        </div>
                    )
                }) : 'there are no users currently'
                }
            </div>
        </>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
