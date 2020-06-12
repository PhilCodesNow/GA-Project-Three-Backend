import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/LoginPage.js';
import NewAccount from './components/AccountPage.js';
import Home from './components/MainPage.js';
import DetailsPage from './components/DetailsPage.js';
import NewContact from './components/NewContactPage.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Layout from './components/Layout.js';
import './css/style.scss';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';


const App = (props) => {
    const baseURL = true 
    ? 'http://localhost:3000'
    : 'https://ga-project-three-backend.herokuapp.com'

    

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
    const [token, setToken] = React.useState('');
    const [formData, setFormData] = React.useState('');

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

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    //Function to get contacts from API
    const getInfo = async () => {
        const response = await fetch (`${baseURL}/contacts/`, {
            headers: {
                Authorization: `bearer ${token}`
            }
        });
        const result = await response.json();
        console.log(result);
        setContacts(result);
    };

    //Get Contacts from API
    React.useEffect(() => {
        if (token) {
            getInfo();
        }
    }, [token]);

    //handleCreate function
    const handleCreate = async (data) =>
    {
        const response = await fetch (`${baseURL}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${token}`,
            },
            body: JSON.stringify(data),
        });
        getInfo(); //Update the list of Contacts
    };

    const handleDelete = async (id) => {
        const response = await fetch (`${baseURL}/contacts/${id}`, {
            method: 'DELETE',
            Authorization: `bearer ${token}`,
        })
    }

const login = async () =>{
    const response = await fetch(`${baseURL}/users`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {"Content-Type": "application/json"}
    })
    if (response.status === 200) {
        const newToken = await response.json()
        setToken(newToken);
        window.localStorage.setItem('token', JSON.stringify(token));
    }
}
const test = async () =>{
    const response = await fetch(`${baseURL}/contacts`, {
        method: "GET",
        headers: {
            "Authorization": `bearer ${token}`,
        },
    })
    // Fails at forbidden
    const result = await response.json();
    console.log(result);
}
const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
}

    let currentPageComponent;
    if (currentPageName === 'main') {
        currentPageComponent = <Home contacts={contacts}/>
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
const createContact = async () =>{
    console.log('created Contact');
    const response = await fetch (`${baseURL}/contacts/new`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${token}`,
        },
        body: JSON.stringify({
            "name": "this guy",
                "contactInfo": {
                    "phone": "phone number",
                    "email": "email account",
                    "linkedinId": "Linked IN",
                    "other": "cool guy"
                },
                "firstMeetContact": {
                    "eventName": "meetup",
                    "eventDate": "",
                    "otherInfo": "Other Info Here"
                },
                "followUpDate": "",
                "conversationNotes": "notes here"
        }),
    });
    getInfo(); //Update the list of Contacts
}
const deleteContact = async () =>{
    console.log('Delete clicked');
    let lastItem = contacts[0]
    const response = await fetch (`${baseURL}/contacts/${lastItem._id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${token}`,
        },

    })
    getInfo();
}
    return (
        <>
                    <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button onClick={login}>Login</button>
            
            <button onClick={test}>Test</button>
            <button onClick={logout}>Logout</button>


            <Header />
            <button onClick={createContact}>Add A Contact! (hardcoded now)</button>
            <button onClick={deleteContact}>Delete First Contact</button>
           {/* <NavBar setCurrentPageName={setCurrentPageName}/> */}
            {currentPageComponent}
            <Footer />
            <Layout />
        </>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);