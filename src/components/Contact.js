import React from 'react';
import PropTypes from 'prop-types';
import contactData from '../data/contact';
import ContactList from './ContactList';

class Contact extends React.Component {
  static propTypes = {
  }

  state = {
  }

  componentDidMount() {
    console.log('Contact: componentDidMount');
  }

  componentDidUpdate() {
    console.log('Contact: componentDidUpdate');
  }

  render() {
    return (
      <div>
        <ContactList
          title={contactData.title}
          links={contactData.items}
          footer={contactData.footer}
        />
      </div>
    );
  }
}

export default Contact;
