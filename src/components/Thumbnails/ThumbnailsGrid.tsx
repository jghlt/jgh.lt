import React from "react";
import PropTypes from "prop-types";
import ThumbnailsGridItem from "./ThumbnailsGridItem";

const styles = [
  {
    paddingRight: "12.5%",
  },
  {
    paddingLeft: "12.5%",
  },
  {
    paddingRight: "12.5%",
  },
  {
    paddingLeft: "6.25%",
    paddingRight: "6.25%",
  },
];

function ThumbnailsGrid(props) {
  const { title, items } = props;
  return (
    <div className="relative w-100">
      <div className="pa3 pb0">
        <div className="pb4">
          <h1 className="ma0 _fs-title">
            {title}
            <br />↓
          </h1>
        </div>
        <div className="_o-thumbnail-grid">
          {items.map((item) => (
            <ThumbnailsGridItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

ThumbnailsGrid.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        srcset: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default ThumbnailsGrid;
