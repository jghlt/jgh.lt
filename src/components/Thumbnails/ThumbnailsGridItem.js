import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

class ThumbnailListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: null,
      loaded: false,
      visible: false,
      once: false
    };
  }

  setSrc = (src) => {
    this.setState(() => {
      return {
        src
      };
    });
  }

  setLoaded = () => {
    this.setState(() => {
      return {
        loaded: true
      };
    });
  }

  setVisible = () => {
    this.setState(() => {
      return {
        visible: true
      };
    });
  }

  setOnce = () => {
    this.setState(() => {
      return {
        once: true
      };
    });
  }

  handleVisibilityChange = (visible) => {
    if (visible && !this.state.once) {
      this.setOnce();
      this.setVisible();
      console.log('called once per component');
    }
  }

  handleOnLoad = (event) => {
    const image = event.target;
    const src = typeof image.currentSrc !== 'undefined' ? image.currentSrc : image.src;

    this.setSrc(src);
    this.setLoaded();
  }

  render() {
    return (
      <VisibilitySensor
        scrollCheck
        scrollThrottle={100}
        partialVisibility
        onChange={this.handleVisibilityChange}
      >
        <div className="relative w-100 pb3">
          <a className="db no-underline relative" href={this.props.link} target={this.props.target}>
            <div className="relative z-1">
              <div className="aspect-ratio aspect-ratio--16x9">
                <div className="aspect-ratio--object cover bg-near-white"/>
                {this.state.loaded ?
                  <div className="aspect-ratio--object cover bg-center" style={{ backgroundImage: `url(${this.state.src})` }}/>
                : null
                }
                {this.state.visible ?
                  <div className="dn">
                    <img
                      src={this.props.image.src}
                      srcSet={this.props.image.srcset}
                      onLoad={event => this.handleOnLoad(event)}
                      alt={this.props.title}
                    />
                  </div>
                : null
                }
              </div>
            </div>
            <h2
              className="pa2 ma0 absolute w-100 bottom-0 left-0 z-1 _c-black"
            >
              {this.props.title}
            </h2>
          </a>
        </div>
      </VisibilitySensor>
    );
  }
}

ThumbnailListItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    srcset: PropTypes.string.isRequired,
  }).isRequired
};

export default ThumbnailListItem;
