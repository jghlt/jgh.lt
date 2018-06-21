import React from 'react';
import PropTypes from 'prop-types';
import ProjectsMediaItem from './ProjectsMediaItem';

function ProjectsMedia(props) {
  const { items } = props;
  const title = (props.project && props.project.title) ? props.project.title : false;
  return (
    <div className="absolute w-100 z-0 _u-fullscreen-l _u-clipped">
      {items.map((project) => {
          return (
            <ProjectsMediaItem
              key={project.title}
              image={project.image}
              display={project.title === title}
            />
          );
        })
      }
    </div>
  );
}

ProjectsMedia.propTypes = {
  project: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      srcset: PropTypes.string.isRequired
    })
  })).isRequired
};

export default ProjectsMedia;
