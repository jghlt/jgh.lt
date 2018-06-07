import React from 'react';
import PropTypes from 'prop-types';
import SmoothScroll from 'smooth-scroll';
import { debounce, throttle } from 'lodash';
import { easeOutExpo } from './easings';

class ScrollSpy extends React.Component {
  constructor() {
    super();
    this.scroll = new SmoothScroll();
    this.state = {
      sections: null,
      currentSection: null
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', _.throttle(this.handleScroll, 160));
    window.addEventListener('resize', _.debounce(this.handleResize, 240));
    this.update();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  setSections = () => {
    const refs = this.refs;
    const keys = Object.keys(refs);
    const scrollPosition = this.currentScrollPosition();
    const sections = keys.map((key) => {
      const element = refs[key];
      const bounding = element.getBoundingClientRect();
      return {
        id: key,
        bounds: {
          top: bounding.top + scrollPosition,
          bottom: bounding.bottom + scrollPosition
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
        currentSection: parseInt(section, 10)
      };
    });
  }

  update = () => {
    this.setSections();
    setTimeout(() => {
      this.checkSections();
    }, 0);
  }

  currentScrollPosition = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    return scrollPosition;
  }

  checkSections = () => {
    const scrollPosition = this.currentScrollPosition();
    const activePosition = scrollPosition + (window.outerHeight / 2);
    const currentSection = this.state.sections.filter((section) => {
      return (activePosition > section.bounds.top) && (activePosition < section.bounds.bottom);
    });
    const setCurrentSection = (
      currentSection.length && currentSection[0].id !== this.state.currentSection
    ) ? currentSection[0].id : false;
    if (setCurrentSection) {
      this.setCurrentSection(setCurrentSection);
    }
  }

  scrollToSection = (event, index) => {
    event.preventDefault();
    const section = this.state.sections[index];
    const targetScrollPosition = (section) ? section.bounds.top : 0;
    this.scroll.animateScroll(targetScrollPosition, false, {
      speed: 650,
      customEasing: (time) => {
        return easeOutExpo(time, 0, 1, 1);
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
    return React.Children.map(this.props.children, (child, index) => {
      return (
        <div ref={`${index}`}>
          {child}
        </div>
      )
    });
  }

  render() {
    const { sections, currentSection } = this.state;
    return (
      <div className="relative">
        {this.renderSections()}
        {sections
          ?
            <div className="fixed z-1 w-10 top-0 right-0 h-100 flex flex-column justify-center items-center">
              {sections.map((section, index) => {
                return (
                  <div key={index} className="pa2">
                    <button onClick={event => this.scrollToSection(event, index)} className={`_o-dot pointer pa0 b--none ${currentSection === index ? 'bg-moon-gray' : 'bg-near-white'}`} />
                  </div>
                );
              })}
            </div>
          :
          null
        }
      </div>
    );
  }
}

ScrollSpy.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default ScrollSpy;
