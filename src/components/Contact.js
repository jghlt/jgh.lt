import React from 'react';
import PropTypes from 'prop-types';
import contactData from '../data/contact';
import LinkList from './LinkList';

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
      <div className="contact">
        <LinkList
          title={contactData.title}
          links={contactData.items}
        />
      </div>
    );
  }
}

export default Contact;
