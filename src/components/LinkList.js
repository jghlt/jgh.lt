import React from 'react';
import PropTypes from 'prop-types';
import LinkListItem from './LinkListItem';

function LinkList(props) {
  return (
    <div className="LinkList">
      <h1>
        {props.title}
        <br/>
        ↓
      </h1>
      { props.links.map((item) => {
        return (
          <LinkListItem
            key={item.title}
            {...item}
          />
        );
      })}
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
