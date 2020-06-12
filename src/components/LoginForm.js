import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    const {login, createAccount} = this.props.loginHandlers;
    return (
        <>
            <form onSubmit={login}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" />
                <input type="submit" value="Log In"/>
            </form>
            <button onClick={createAccount}>Create New Account</button>
        </>
    );
};