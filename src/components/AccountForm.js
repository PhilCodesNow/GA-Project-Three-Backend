import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {

    const [formData, setFormData] = React.useState('');

    const handleChange = (event) => {
        setFormData({ ...formData, [event.currentTarget.name]: event.currentTarget.value });
    };


    return (
        <div className="naContainer">
            <form onSubmit={(event) => {
                event.preventDefault();
                props.createAccount(formData)
            }}>
                <label htmlFor="username">New Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}    
                />
                <label htmlFor="password">New Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input type="submit" value="Create New User"/>
            </form>
        </div>
    );
};