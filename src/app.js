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
    const baseURL = process.env.NODE_ENV === 'production'
    ? 'https://ga-project-three-backend.herokuapp.com'
    : 'http://localhost:3000'

    //Create State

    const [contacts, setContacts] = React.useState([]);
    const [token, setToken] = React.useState('');

    // from https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
    const parseDate = (date) => {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + (d.getDate() + 1);
        const year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    const formatDates = (contacts) => {
        for (let contact of contacts) {
            contact.firstMeetContact.eventDate = parseDate(contact.firstMeetContact.eventDate)
            contact.followUpDate = parseDate(contact.followUpDate);
        }
    }

    //Function to get contacts from API
    const getInfo = async () => {
        try {
                const response = await fetch (`${baseURL}/contacts/`, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            });
            const result = await response.json();
            formatDates(result);
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
        getInfo(); //Update the list of Contacts
    };
    
    const handleEdit = async (data) => {
        const response = await fetch(`${baseURL}/contacts/${data._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${token}`,
            },
            body: JSON.stringify(data)
        })
        getInfo();
        props.history.push(`/contacts/${data._id}`)
    }

    const deleteContact = async (id) =>{
        const response = await fetch (`${baseURL}/contacts/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${token}`,
            },
        })
        getInfo();
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



    return (
        <Switch>
            <Route exact path="/" component={(props) => <MainPage {...props} contacts={contacts} deleteHandler={deleteContact} logoff={logout}/>} />
            <Route path="/contacts/new" component={(props) => <NewContactPage {...props} handleCreate={handleCreate} logoff={logout}/>} />
            <Route path="/contacts/:id" component={(props) => <DetailsPage {...props} contacts={contacts} handleEdit={handleEdit} logoff={logout}/>} />
            <Route path="/login" component={(props) => <LoginPage login={login} />} />
            <Route path="/new-account" component={(props) => <NewAccount {...props} createAccount={createAccount} />} />
        </Switch>
    );
};

// Needed to get props.history inside app, so use withRouter
const RoutedApp = withRouter(UnRoutedApp)
const App = (props) => <Router><RoutedApp/></Router>;

const target = document.getElementById('app');
ReactDOM.render(<App />, target);