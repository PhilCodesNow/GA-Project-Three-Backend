import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <>
            Username: 
            <input
                type="text"
                name="username"
                key={props.username}
                value={props.formDataUsername}
                onChange={props.handleChange}
            /><br/>
            Password: 
            <input
                type="text"
                name="password"
                key={props.password}
                value={props.formDataPass}
                onChange={props.handleChange}
            />
            <br/>
            <button onClick={props.login}>Login</button>
            
        </>
    );
    }