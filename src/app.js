import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/LoginPage.js';
import NewAccount from './components/AccountPage.js';
import MainPage from './components/MainPage.js';
import DetailsPage from './components/DetailsPage.js';
import './css/style.scss';
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import NewContactPage from './components/NewContactPage.js';


const UnRoutedApp = (props) => {

    // Might need to bind

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
    const [contactCreated, setContactCreated] = React.useState(false);

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
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

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
        try {
                const response = await fetch (`${baseURL}/contacts/`, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            });
            const result = await response.json();
            setContacts(result);
        } catch (e) {
            console.error(e.msg)
        }
    };

    //Get Contacts from API
    React.useEffect(() => {
        if (token) {
            getInfo();
        }
    }, [token]);

    //handleCreate function
    const handleCreate = async (data) => {
        const response = await fetch (`${baseURL}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${token}`,
            },
            body: JSON.stringify(data),
        });
        setContactCreated(true)
        props.history.push('/')
        // getInfo(); //Update the list of Contacts
    };

    const handleDelete = async (id) => {
        const response = await fetch (`${baseURL}/contacts/${id}`, {
            method: 'DELETE',
            Authorization: `bearer ${token}`,
        })
    }

const login = async (formData) =>{
    const response = await fetch(`${baseURL}/users`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {"Content-Type": "application/json"}
    })
    if (response.status === 200) {
        const newToken = await response.json()
        setToken(newToken);
        window.localStorage.setItem('token', JSON.stringify(token));
        setIsLoggedIn(true)
        props.history.push('/')
    } else {
        console.error('HTTP error ' + response.status)
        console.error(await response.text());
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

//     let currentPageComponent;
//     if (currentPageName === 'main') {
//         currentPageComponent = <Home contacts={contacts}/>
//     } else if (currentPageName === 'login') {
//         const loginHandlers = {
//             login,
//             logout,
//         }
//         // Need to decide how and where we want logout button to appear
//         currentPageComponent = <Login loginHandlers={loginHandlers} setCurrentPageName={setCurrentPageName}/>
//     } else {
//         currentPageComponent = <NewAccount createAccount={createAccount} />
//     }
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
const deleteContact = async (id) =>{
    console.log('Delete clicked');
    const response = await fetch (`${baseURL}/contacts/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${token}`,
        },
    })
        console.log(await response.json())
    getInfo();
}


    return (
        <>
                    {/* <input
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
            <h1>^ Da Fake Login</h1> */}

                <Switch>
                    <Route exact path="/" component={(props) => <MainPage {...props} contacts={contacts} deleteHandler={deleteContact}/>} />
                    <Route path="/contacts/new" component={(props) => <NewContactPage {...props} handleCreate={handleCreate}/>} />
                    <Route path="/contacts/:id" component={(props) => <DetailsPage {...props} contacts={contacts} />} />
                    <Route path="/login" component={(props) => <LoginPage login={login} />} />
                    <Route path="/new-account" component={NewAccount} />
                </Switch>
        </>
    );
};

// Needed to get props.history inside app
const RoutedApp = withRouter(UnRoutedApp)
const App = (props) => <Router><RoutedApp/></Router>;

const target = document.getElementById('app');
ReactDOM.render(<App />, target);