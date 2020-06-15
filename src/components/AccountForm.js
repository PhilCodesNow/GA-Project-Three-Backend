import React from 'react';

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
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}    
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input className="submit" type="submit" value="Create New User"/>
            </form>
        </div>
    );
};