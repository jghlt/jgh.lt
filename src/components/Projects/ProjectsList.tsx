import React from "react";
import PropTypes from "prop-types";

function ProjectsList(props) {
  const { title, items, footer } = props;
  return (
    <div className="relative w-100 z-1">
      <div className="_u-fullscreen-l flex">
        <div className="flex-grow-1 flex flex-column pa3">
          <h1 className="ma0 _fs-title">
            {title}
            <br />↓
          </h1>
          <ul className="list ma0 pl0 pb4">
            {items.map((project) => {
              return (
                <li key={project.title} className="_fs-title">
                  <a
                    href={project.link}
                    className="no-underline hover-moon-gray _c-black"
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
            <p className="ma0 _fs-title">{footer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectsList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  footer: PropTypes.string.isRequired,
};

export default ProjectsList;
