import React from 'react';
import PropTypes from 'prop-types';

function ProjectsList(props) {
  return (
    <div className="relative w-100 z-1">
      <div className="_u-fullscreen flex">
        <div className="flex-grow-1 flex flex-column pa3">
          <h1 className="ma0 _fs-title">
            {props.title}
            <br/>
            ↓
          </h1>
          <ul className="list ma0 pl0 pb4">
            { props.projects.map((project) => {
              return (
                <li key={project.title} className="_fs-title">
                  <a
                    href={project.link}
                    className="_c-black no-underline hover-moon-gray"
                    target={project.target}
                    onMouseEnter={() => props.setProject(project.title)}
                    onMouseLeave={() => props.clearProject(project.title)}
                  >
                    {project.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="_mt-auto">
            <p className="ma0 _fs-title">
              {props.footer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectsList.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  footer: PropTypes.string.isRequired
};

export default ProjectsList;
