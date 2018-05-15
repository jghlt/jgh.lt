import React from 'react';
import PropTypes from 'prop-types';

function ThumbnailList(props) {
  return (
    <div className="thumbnail-list">
      <h1>
        {props.title}
        <br/>
        ↓
      </h1>
      {props.links.map(item => <li key={item.title} className="thumbnail-item">{item.title}</li>)}
    </div>
  );
}

ThumbnailList.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};


export default ThumbnailList;
