import React from 'react';
import ReactDOM from 'react-dom';
import DetailsButton from './DetailsButton.js';

export default (props) => {
    return (
        <>
          <div>
              <ul>
              {props.contacts.map((contact, index) => {
                  return (
                      <li key={index}>
                        <h2>{contact.followUpDate}</h2>
                        <h2>{contact.name}</h2>
                        {/* How was the link done in previous homework? Is there a separate show page? If so, where should we put that page?*/}
                        <DetailsButton />
                      </li>
                  )
              })}
              </ul>
          </div>
        </>
    );
};