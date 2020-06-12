import React from 'react';

export default (props) => {
    return (
        <>
            <form onSubmit={props.login}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" />
                <input type="submit" value="Log In"/>
            </form>
            
        </>
    );
};