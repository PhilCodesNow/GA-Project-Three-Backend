import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    const [formData, setFormData] = React.useState(props.initial);
    React.useEffect(() =>{
        setFormData(props.initial);
    }, [props.initial]);
    const handleChange = (event) =>{
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    return (
        <>
            <h1>Login Page</h1>
            <input
            type="text"
            name="username"
            value={FormData.username}
            placeholder="Username"
            onChange={handleChange}
            ></input>
            <input
            type="text"
            name="password"
            value={FormData.password}
            onChange={handleChange}
            ></input>
            <button
            onClick={() =>{
                props.handleSubmit(formData);
                setFormData(formData);
            }}>Login</button>
        </>
    );
};
