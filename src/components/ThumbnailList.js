import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailListItem from './ThumbnailListItem';

function ThumbnailList(props) {
  return (
    <div className="ThumbnailList">
      <h1>
        {props.title}
        <br/>
        ↓
      </h1>
      {props.links.map(item => <ThumbnailListItem key={item.title} {...item} />)}
    </div>
  );
}

ThumbnailList.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired
    })
  })).isRequired
};

export default ThumbnailList;
