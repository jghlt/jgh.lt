import React from 'react';
import PropTypes from 'prop-types';
import MediaGalleryItem from './MediaGalleryItem';

function MediaGallery(props) {
  return (
    <div className="MediaGallery">
      {props.images.map(item => <MediaGalleryItem key={item.title} image={item.image} />)}
    </div>
  );
}

MediaGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired
    })
  })).isRequired
};

export default MediaGallery;
