import React from 'react';
import PropTypes from 'prop-types';

function LinkListItem(props) {
  return (
    <li className="LinkListItem">
      <a href={props.link} target={props.target}>
        <span>
          {props.title}
        </span>
      </a>
    </li>
  );
}

export default LinkListItem;
