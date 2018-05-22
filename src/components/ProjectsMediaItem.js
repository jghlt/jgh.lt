import React from 'react';
import PropTypes from 'prop-types';

class ProjectsMediaItem extends React.Component {
  constructor() {
    super();
    this.state = {
      src: null,
      loading: true
    };
  }

  componentDidMount() {
    console.log('ProjectsMediaItem: componentDidMount');
    // load image
  }

  componentDidUpdate() {
    console.log('ProjectsMediaItem: componentDidUpdate');
  }

  render() {
    return (
      <div className={`aspect-ratio aspect-ratio--16x9 ${!this.props.display ? 'dn' : ''}`}>
        <div className="aspect-ratio--object cover bg-near-white" />
        <div className="aspect-ratio--object cover" style={{ backgroundImage: `url(${this.props.image.src})` }} />
      </div>
    );
  }
}

export default ProjectsMediaItem;
