import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailListItem from './ThumbnailListItem';

function ThumbnailList(props) {
  return (
    <div className="relative w-100">
      <div className="pa3 pb0">
        <div className="pb4">
          <h1 className="ma0 _fs-title">
            {props.title}
            <br/>
            ↓
          </h1>
        </div>
        {props.links.map(item => <ThumbnailListItem key={item.title} {...item} />)}
      </div>
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
