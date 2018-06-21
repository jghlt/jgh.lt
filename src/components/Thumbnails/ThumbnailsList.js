import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailsListItem from './ThumbnailsListItem';

function ThumbnailList(props) {
  const { title, items } = props;
  return (
    <div className="relative w-100">
      <div className="pa3 pb0">
        <div className="pb4">
          <h1 className="ma0 _fs-title">
            {title}
            <br/>
            ↓
          </h1>
        </div>
        {items.map(item => <ThumbnailsListItem key={item.title} {...item} />)}
      </div>
    </div>
  );
}

ThumbnailList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      srcset: PropTypes.string.isRequired
    })
  })).isRequired
};

export default ThumbnailList;
