import React from 'react';
import PropTypes from 'prop-types';

function ContactList(props) {
  const { title, items, footer } = props;
  return (
    <div className="relative w-100">
      <div className="_u-fullscreen flex">
        <div className="flex-grow-1 flex flex-column pa3">
          <h1 className="ma0 _fs-title">
            {title}
            <br/>
            ↓
          </h1>
          <ul className="list ma0 pl0 pb4">
            { items.map((item) => {
              return (
                <li key={item.title} className="_fs-title">
                  <a href={item.link} className="_c-black no-underline hover-moon-gray" target={item.target}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="_mt-auto">
            <p className="ma0 _fs-title">
              {footer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ContactList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  footer: PropTypes.string.isRequired
};

export default ContactList;
