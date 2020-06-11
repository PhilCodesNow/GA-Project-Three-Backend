import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <>
            <form onSubmit={props.createAccount}>
                <label htmlFor="username">New Username:</label>
                <input type="text" name="username" />
                <label htmlFor="password">New Password:</label>
                <input type="password" name="password" />
                <input type="submit" value="Create New User"/>
            </form>
        </>
    );
};