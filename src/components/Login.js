import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    React.useEffect(() =>{
        setFormData(props.initial);
    }, [props.initial]);
    const handleChange = (event) =>{
        setFormData({...handleSubmit, [event.target.name]: event.target.value})
    }
    return (
        <>
            <h1>Login Page</h1>
            <input
            type="text"
            name="username"
            value={FormData.username}
            placeholder="Username"
            ></input>
            <input
            type="text"
            name="password"
            value={FormData.password}
            ></input>
            <button
            onClick={() =>{
                props.handleSubmit(formData);
                resetFormData(resetForm);
            }}>Login</button>
        </>
    );
};
