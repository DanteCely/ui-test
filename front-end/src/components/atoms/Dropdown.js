import React, { Children } from 'react';
import PropTypes from 'prop-types';

export const Dropdown = (props) => {
  const { children, ...propsDropdown } = props;
  const arrayChildren = Children.toArray(children);

  return (
    <div class='dropdown'>
      <button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenu1'>
        {title}
        <span class='caret'></span>
      </button>
      <ul class='dropdown-menu'>
        <li>
          <a class='dropdown-item' href='#'>
            My cart
          </a>
        </li>
        {Children.map(arrayChildren, (child, index) => {
          const propsCheckRadio = {
            type,
            name,
            selectedOption,
            onChange: onValueChange,
            ...(propsOptions[index] || {}),
          };

          <li key={index} {...propsCheckRadio}>
            {child}
          </li>;
        })}
      </ul>
    </div>
  );
};

Dropdown.prototype = {
  title: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Dropdown.defaultProps = {
  type: 'Dropdown',
};
