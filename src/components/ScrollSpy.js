import React from 'react';

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
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default ScrollSpy;
