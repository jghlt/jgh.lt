import React from 'react';
import PropTypes from 'prop-types';

function LinkList(props) {
  return (
    <div className="link-list">
      <h1>
        {props.title}
        <br/>
        ↓
      </h1>
      {props.links.map(item => <li key={item.title} className="link-item">{item.title}</li>)}
    </div>
  );
}

LinkList.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

export default LinkList;
