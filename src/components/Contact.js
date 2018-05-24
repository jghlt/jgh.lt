import React from 'react';
import PropTypes from 'prop-types';
import contactData from '../data/contact';
import ContactList from './ContactList';

function Contact() {
  return (
    <div className="relative">
      <ContactList
        title={contactData.title}
        links={contactData.items}
        footer={contactData.footer}
      />
    </div>
  );
}

export default Contact;
