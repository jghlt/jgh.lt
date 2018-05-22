import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import Breakpoints from './Breakpoints';
import ScrollSpy from './ScrollSpy';
import Projects from './Projects';
import Contact from './Contact';

class App extends React.Component {
  static propTypes = {
  }

  state = {
  }

  render() {
    return (
      <div>
        <MediaQuery query={Breakpoints.small}>
          <Projects />
          <Contact />
        </MediaQuery>
        <MediaQuery query={Breakpoints.medium}>
          <ScrollSpy>
            <Projects />
            <Contact />
          </ScrollSpy>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
