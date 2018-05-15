import React from 'react';
import PropTypes from 'prop-types';
import Projects from './Projects';
import Contact from './Contact';

class App extends React.Component {
  static propTypes = {
  }

  state = {
  }

  componentDidMount() {
    console.log('App: componentDidMount');
  }

  componentDidUpdate() {
    console.log('App: componentDidUpdate');
  }

  render() {
    return (
      <div className="app">
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
