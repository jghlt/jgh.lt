import React from 'react';
import PropTypes from 'prop-types';

function ProjectsList(props) {
  return (
    <div className="relative w-100 vh-100">
      <div className="flex flex-column pa3 h-100">
        <h1 className="ma0 _fs-title">
          {props.title}
          <br/>
          ↓
        </h1>
        <ul className="list ma0 pl0">
          { props.links.map((item) => {
            return (
              <li key={item.title} className="_fs-title">
                <a href={item.link} className="_c-black link no-underline hover-moon-gray" target={item.target}>
                  {item.title}
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
  );
}

ProjectsList.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  footer: PropTypes.string
};

export default ProjectsList;
