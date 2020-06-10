import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login.js';
import NewAccount from './components/NewAccount.js';
import Main from './components/Main.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';
import './css/style.scss';

const App = (props) => {
    const baseURL = false 
    ? 'http://localhost:3000/'
    : 'https://ga-project-three-backend.herokuapp.com'

    let token;

    //Create State
    const [contacts, setContacts] = React.useState(null);

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
        const response = await fetch ('http://localhost:3000/contacts', {
            method: 'POST'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        getInfo(); //Update the list of Contacts
    };

    const handleDelete = async (id) => {
        const response = await fetch (`http://localhost:3000/contacts`)
    }

    return (
        <>
            <Header></Header>
            <NavBar></NavBar>
            <Main></Main>
            <Footer></Footer>
        </>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
