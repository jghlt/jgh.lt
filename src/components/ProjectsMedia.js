import React from 'react';
import PropTypes from 'prop-types';

function ProjectsMedia(props) {
  if (!props.project) {
    return null;
  }
  return (
    <div className="absolute w-100 z-0 _u-fullscreen">
      <div className="absolute w-100 h-100 flex flex-column justify-center items-center">
        <div className="w-80 mw8">
          <div className="aspect-ratio aspect-ratio--16x9">
            <div className="aspect-ratio--object cover bg-near-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsMedia;
