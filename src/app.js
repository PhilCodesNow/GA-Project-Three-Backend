import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login.js';
import NewAccount from './components/NewAccount.js';
import Main from './components/Main.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';
import './css/style.scss';
import AccountForm from './components/AccountForm.js';




const App = (props) => {
    const baseURL = false 
    ? 'http://localhost:3000'
    : 'https://ga-project-three-backend.herokuapp.com'

    let token;

    //Create State

    // hard coded contacts for debugging
    const [contacts, setContacts] = React.useState([
        {
            "_id": "5edfe2a321f3e237d03a1c24",
            "name": "Philsterrrrrrrrrr",
            "conversationNotes": "this guy is so cool",
            "createdAt": "2020-06-09T19:27:31.630Z",
            "updatedAt": "2020-06-09T19:27:31.630Z",
            "__v": 0
        },
        {
            "contactInfo": {
                "email": "ryan@example.com"
            },
            "_id": "5edfe2e921f3e237d03a1c26",
            "name": "Ryansterrrrrrrr",
            "conversationNotes": "this guy is way way cool",
            "createdAt": "2020-06-09T19:28:41.055Z",
            "updatedAt": "2020-06-09T19:29:34.980Z",
            "__v": 0
        }
    ]);
    const [currentPageName, setCurrentPageName] = React.useState('main');

    //Edit State
    const [editContact, setEditContact] = React.useState({
            name: '',
            contactInfo: {
                phone: '',
                email:'',
                linkedinId: '',
                other:''
            },
            firstMeetContact: {
                eventName:'',
                eventDate:'',
                otherInfo:'',
            },
            followUpDate: '',
            conversationNotes:'',
    });

    //Object For Blank Form For Create
    const blank = {
        name: '',
            contactInfo: {
                phone: '',
                email:'',
                linkedinId: '',
                other:''
            },
            firstMeetContact: {
                eventName:'',
                eventDate:'',
                otherInfo:'',
            },
            followUpDate: '',
            conversationNotes:'',
    };

    //Function to get contacts from API
    const getInfo = async () => {
        const response = await fetch (`${baseURL}/contacts/index`);
        const result = await response.json();
        console.log(result);
        setContacts(result);
    };

    //Get Contacts from API
    React.useEffect(() => {
        getInfo();
    }, []);

    //handleCreate function
    const handleCreate = async (data) =>
    {
        const response = await fetch (`${baseURL}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        getInfo(); //Update the list of Contacts
    };

    const handleDelete = async (id) => {
        const response = await fetch (`${baseURL}/contacts`)
    }

const login = async () =>{
    console.log('start');
    if(window.localStorage.getItem('token')){
        console.log('token exists');
        token = JSON.parse(window.localStorage.getItem('token'))
        console.log(token);
    }else{
        console.log('no token');
        const response = await fetch(`${baseURL}/login`, {
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
    const response = await fetch(`${baseURL}/test`, {
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

    let currentPageComponent;
    if (currentPageName === 'main') {
        currentPageComponent = <Main contacts={contacts}/>
    } else if (currentPageName === 'login') {
        const loginHandlers = {
            login,
            logout,
        }
        // Need to decide how and where we want logout button to appear
        currentPageComponent = <Login loginHandlers={loginHandlers} setCurrentPageName={setCurrentPageName}/>
    } else {
        currentPageComponent = <NewAccount createAccount={createAccount} />
    }
    return (
        <>
            <button onClick={login}>Login</button>
            <button onClick={test}>Test</button>
            <button onClick={logout}>Logout</button>
            <Header />
            <NavBar setCurrentPageName={setCurrentPageName}/>
            {currentPageComponent}
            <Footer />
        </>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
