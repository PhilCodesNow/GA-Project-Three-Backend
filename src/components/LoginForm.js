import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {

    const [formData, setFormData] = React.useState('');

    const handleChange = (event) => {
        setFormData({ ...formData, [event.currentTarget.name]: event.currentTarget.value });
    };


    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            props.login(formData);
        }}>
            Username: 
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
            /><br/>
            Password: 
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <br/>
            <input type="submit" value="Log In" />
        </form>
    );
    }