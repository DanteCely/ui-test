import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
  const { children, ariaLabel, ...propsButton } = props;

  return (
    <button aria-label={ariaLabel} {...propsButton}>
      {children}
    </button>
  );
};

Button.prototype = {
  type: PropTypes.oneOf(['button', 'submit']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'button',
};
