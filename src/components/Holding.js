import React from 'react';
import PropTypes from 'prop-types';
import contactData from '../data/holding';
import ContactList from './ContactList';

class Holding extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
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
}

export default Holding;
