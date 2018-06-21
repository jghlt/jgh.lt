import React from 'react';
import data from '../../data';
import Contact from '../Contact/Contact';

class Holding extends React.Component {
  constructor() {
    super();
    this.state = {
      data
    };
  }

  render() {
    return (
      <Contact {...data.holding} />
    );
  }
}

export default Holding;
