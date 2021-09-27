import React from 'react';
import PropTypes from 'prop-types';

import './CaretImg.scss';

export const CaretImg = (props) => {
  const { isUp } = props;

  const setClassNameOpen = (className) => {
    return `${className} ${className}${isUp ? '--up' : '--down'}`;
  };

  return <img className={setClassNameOpen('caret-image')} src={`img/caret.svg`} alt={'caret'} />;
};

CaretImg.prototype = {
  isUp: PropTypes.bool,
};
