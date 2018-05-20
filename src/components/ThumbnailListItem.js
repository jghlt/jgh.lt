import React from 'react';
import PropTypes from 'prop-types';

function ThumbnailListItem(props) {
  return (
    <div className="relative w-100 pb3">
      <div className="aspect-ratio aspect-ratio--16x9">
        <div className="aspect-ratio--object cover bg-near-white"/>
      </div>
    </div>
  );
}

export default ThumbnailListItem;
