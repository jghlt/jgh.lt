import React from 'react';
import PropTypes from 'prop-types';
import contactData from '../data/holding';
import ContactList from './ContactList';

class Holding extends React.Component {
  static propTypes = {
  }

  state = {
  }

  componentDidMount() {
    console.log('Holding: componentDidMount');
  }

  componentDidUpdate() {
    console.log('Holding: componentDidUpdate');
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
