import React from 'react';
import ReactDOM from 'react-dom';
import DetailsButton from './DetailsButton.js';

export default (props) => {
    return (
        <>
          <div>
              {contact.map((contact, index) => {
                  return (
                      <div key={index}>
                        <h2>{contact.followUpDate}</h2>
                        <h2>{contact.name}</h2>
                        <a href={`/contacts/${index}`}><button>Details</button></a>
                      </div>
                  )
              })}
          </div>
        </>
    );
};