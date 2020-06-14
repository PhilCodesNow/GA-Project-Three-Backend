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
    const [contacts, setContacts] = React.useState([]);
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
            console.error(e.message)
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
        props.history.push('/')
        // getInfo(); //Update the list of Contacts
    };

    const handleDelete = async (id) => {
        const response = await fetch (`${baseURL}/contacts/${id}`, {
            method: 'DELETE',
            Authorization: `bearer ${token}`,
        })
    }
    
    const handleEdit = async (data) => {
        const response = await fetch(`${baseURL}/contacts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${token}`,
            },
            body: JSON.stringify(data)
        })
        props.history.push(`/contacts/${id}`)
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
        props.history.push('/')
    } else {
        console.error('HTTP error ' + response.status)
        console.error(await response.text());
    }
}
const createAccount = async (formData) => {
    console.log(formData)
    const response = await fetch(`${baseURL}/users/new`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {"Content-Type": "application/json"}
    })
    if (response.status === 200) {
        props.history.push('/login');
    } else {
        console.error('HTTP error ' + response.status)
        console.error(await response.text());
    }
}
const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
    props.history.push('/');
    setContacts([])
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
                    <Route exact path="/" component={(props) => <MainPage {...props} contacts={contacts} deleteHandler={deleteContact} logoff={logout}/>} />
                    <Route path="/contacts/new" component={(props) => <NewContactPage {...props} handleCreate={handleCreate} logoff={logout}/>} />
                    <Route path="/contacts/:id" component={(props) => <DetailsPage {...props} contacts={contacts} handleEdit={handleEdit} logoff={logout}/>} />
                    <Route path="/login" component={(props) => <LoginPage login={login} />} />
                    <Route path="/new-account" component={(props) => <NewAccount {...props} createAccount={createAccount} />} />
                </Switch>
        </>
    );
};

// Needed to get props.history inside app
const RoutedApp = withRouter(UnRoutedApp)
const App = (props) => <Router><RoutedApp/></Router>;

const target = document.getElementById('app');
ReactDOM.render(<App />, target);