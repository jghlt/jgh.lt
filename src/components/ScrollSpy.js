import React from 'react';
import PropTypes from 'prop-types';

class ScrollSpy extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [],
      currentSection: null
    };
  }

  componentDidMount() {
    this.setCurrentSection()
    window.addEventListener('scroll', this.setCurrentSection)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setCurrentSection)
  }

  setCurrentSection = () => {
    const { sections } = this.state;
    const sectionCount = sections.length;
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log(event);
  }

  renderChildren = () => {
    return React.Children.map(this.props.children, (child, index) => {
      const childTypeName = child.type.name.toLowerCase();
      const sectionId = `${childTypeName}`;
      return (
        <div id={sectionId} className="relative z-0">
          {child}
        </div>
      )
    });
  }

  renderLinks = () => {
    return React.Children.map(this.props.children, (child) => {
      const childTypeName = child.type.name.toLowerCase();
      const LinkTarget = `#${childTypeName}`;
      return (
        <a className="pa2 db" href={LinkTarget} onClick={this.handleClick}>
          <span className="db w1 h1 br-100 bg-near-white">
            <span className="clip">
              {`${childTypeName}`}
            </span>
          </span>
        </a>
      );
    });
  }

  renderIndicator = () => {
    return (
      <div className="fixed z-1 w-10 top-0 right-0 h-100 flex flex-column justify-center items-center">
        {this.renderLinks()}
      </div>
    );
  }

  render() {
    return (
      <div className="relative">
        {this.renderChildren()}
        {this.renderIndicator()}
      </div>
    );
  }
}

ScrollSpy.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default ScrollSpy;
