import React from 'react';
import PropTypes from 'prop-types';

import './ThumbImg.scss';

export const ThumbImg = (props) => {
  const { isUp } = props;

  const thumbsDir = () => {
    return isUp ? 'up' : 'down';
  };

  return <img className={'thumb-image'} src={`img/thumbs-${thumbsDir()}.svg`} alt={`thumbs ${thumbsDir()}`} />;
};

ThumbImg.prototype = {
  isUp: PropTypes.bool,
};
