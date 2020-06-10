import React from 'react';
import ReactDOM from 'react-dom';
// import DetailsButton from './DetailsButton.js';

export default (props) => {
    return (
        <>
          <div>
              {props.contacts.map((contact, index) => {
                  return (
                      <div key={index}>
                        <h2>{contact.followUpDate}</h2>
                        <h2>{contact.name}</h2>
                        {/* How was the link done in previous homework? Is there a separate show page? If so, where should we put that page?*/}
                        <a href={`/contacts/${index}`}><button>Details</button></a>
                      </div>
                  )
              })}
          </div>
        </>
    );
};