import React from 'react';
import PropTypes from 'prop-types';
import ContactList from './ContactList';

function Contact(props) {
  return (
    <div className="relative">
      <ContactList {...props}/>
    </div>
  );
}

export default Contact;
