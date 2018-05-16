import React from 'react';
import MediaQuery from 'react-responsive';
import Breakpoints from './Breakpoints';

class ScrollSpy extends React.Component {
  static propTypes = {
  }

  state = {
  }

  componentDidMount() {
    console.log('ScrollSpy: componentDidMount');
  }

  componentDidUpdate() {
    console.log('ScrollSpy: componentDidUpdate');
  }

  render() {
    return (
      <div className="ScrollSpy">
        {this.props.children}
      </div>
    );
  }
}

export default ScrollSpy;
