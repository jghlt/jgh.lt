import React from 'react';
import PropTypes from 'prop-types';
import ProjectsMediaItem from './ProjectsMediaItem';

function ProjectsMedia(props) {
  const title = (props.project && props.project.title) ? props.project.title : false;
  return (
    <div className="absolute w-100 z-0 _u-fullscreen _u-clipped">
      { props.projects.map((project) => {
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

export default ProjectsMedia;
