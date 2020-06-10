import React from 'react';
import ReactDOM from 'react-dom';

// Do we use this? See login button comment

export default (props) => {
    return (
        <>
            <button onClick={() => props.setCurrentPageName('main')}>Home</button>
            <LoginButton setCurrentPageName={setCurrentPageName} />
            <h3>User's Name</h3>
            <h3>Logout</h3>
        </>
    );
};
