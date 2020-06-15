import React from 'react';

export default (props) => {

    const [formData, setFormData] = React.useState('');

    const handleChange = (event) => {
        setFormData({ ...formData, [event.currentTarget.name]: event.currentTarget.value });
    };

    return (
        <div className="loginContainer">
            <form onSubmit={(event) => {
                event.preventDefault();
                props.login(formData);
            }}>
                <label>Username:</label> 
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                /><br/>
                <label>Password:</label> 
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <br/>
                <input className="submit" type="submit" value="Log In" />
            </form>
        </div>
    );
}