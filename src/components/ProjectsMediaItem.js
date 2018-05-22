import React from 'react';
import PropTypes from 'prop-types';

class ProjectsMediaItem extends React.Component {
  constructor() {
    super();
    this.state = {
      src: null,
      loaded: false
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

  handleOnLoad = (event) => {
    const image = event.target;
    const src = typeof image.currentSrc !== 'undefined' ? image.currentSrc : image.src;

    this.setSrc(src);
    this.setLoaded();
  }

  render() {
    return (
      <div className={`aspect-ratio aspect-ratio--16x9 ${!this.props.display ? 'dn' : ''}`}>
        {this.state.loaded ?
          <div className="aspect-ratio--object">
            <div className="aspect-ratio--object bg-near-white"/>
            <div className="aspect-ratio--object cover" style={{ backgroundImage: `url(${this.state.src})` }}/>
          </div>
        : null
        }
        <div className="dn">
          <img
            src={this.props.image.src}
            srcSet={this.props.image.srcset}
            onLoad={event => this.handleOnLoad(event)}
            alt=""
          />
        </div>
      </div>
    );
  }
}

ProjectsMediaItem.propTypes = {
  display: PropTypes.bool.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    srcset: PropTypes.string.isRequired,
  }).isRequired
};

export default ProjectsMediaItem;
