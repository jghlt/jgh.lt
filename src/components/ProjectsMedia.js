import React from 'react';
import PropTypes from 'prop-types';
import ProjectsMediaItem from './ProjectsMediaItem';

function ProjectsMedia(props) {
  return (
    <div className="absolute w-100 z-0 _u-fullscreen">
      {props.project}
    </div>
  );
}

ProjectsMedia.propTypes = {
  media: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired
    })
  })).isRequired
};

export default ProjectsMedia;
