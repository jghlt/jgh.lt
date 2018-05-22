import React from 'react';
import PropTypes from 'prop-types';
import ProjectsMediaItem from './ProjectsMediaItem';

function ProjectsMedia(props) {
  const title = (props.project && props.project.title) ? props.project.title : false;
  return (
    <div className="absolute w-100 z-0 _u-fullscreen">
      <div className="absolute w-100 h-100 flex flex-column justify-center items-center">
        <div className="w-80 mw8">
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
      </div>
    </div>
  );
}

export default ProjectsMedia;
