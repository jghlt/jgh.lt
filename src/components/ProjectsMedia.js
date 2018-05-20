import React from 'react';
import PropTypes from 'prop-types';
import ProjectsMediaItem from './ProjectsMediaItem';

function ProjectsMedia(props) {
  return (
    <div className="absolute w-100 vh-100">
      {props.media.map(item => <ProjectsMediaItem key={item.title} image={item.image} />)}
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
