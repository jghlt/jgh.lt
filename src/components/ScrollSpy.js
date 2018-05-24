import React from 'react';
import PropTypes from 'prop-types';
import { debounce, throttle } from 'lodash';

class ScrollSpy extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [],
      currentSection: null
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', _.throttle(this.handleScroll, 250));
    window.addEventListener('resize', _.debounce(this.handleResize, 250));
    this.update();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  setSections = () => {
    const refs = this.refs;
    const keys = Object.keys(refs);
    const sections = keys.map((key) => {
      return {
        id: key,
        bounds: {
          top: refs[key].offsetTop,
          bottom: refs[key].offsetTop + refs[key].offsetHeight
        }
      };
    });
    this.setState(() => {
      return {
        sections
      };
    });
  }

  setCurrentSection = (section) => {
    this.setState(() => {
      return {
        currentSection: section
      };
    });
  }

  update = () => {
    this.setSections();
    setTimeout(() => {
      this.checkSections();
    }, 0);
  }

  checkSections = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const activePosition = scrollPosition + (window.outerHeight / 2);
    this.state.sections.forEach((section) => {
      if ((activePosition > section.bounds.top) && (activePosition < section.bounds.bottom)) {
        // console.log(section.id);
        if (section.id !== this.state.currentSection) {
          this.setCurrentSection(section.id);
        }
      }
    });
  }

  handleScroll = () => {
    this.checkSections();
  }

  handleResize = () => {
    this.update();
  }

  renderSections = () => {
    return React.Children.map(this.props.children, (section, index) => {
      const sectionIndex = `section-${index}`;
      return (
        <div ref={sectionIndex} className="relative z-0">
          {section}
        </div>
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

  renderLinks = () => {
    return React.Children.map(this.props.children, () => {
      return (
        <div className="pa2">
          <button className="_o-dot pa0 bg-near-white b--none" />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="relative">
        {this.renderSections()}
        {this.renderIndicator()}
      </div>
    );
  }
}

ScrollSpy.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default ScrollSpy;
