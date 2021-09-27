import React, { useState, Children } from 'react';
import PropTypes from 'prop-types';

import { Button, CaretImg } from '@components/atoms';

import './Dropdown.scss';

export const Dropdown = (props) => {
  const { id, title, className, children, ...propsDropdown } = props;
  const arrayChildren = Children.toArray(children);

  const [isOpen, setIsOpen] = useState(false);

  const setClassNameOpen = (className) => {
    const classNameOpen = ` ${className}--open`;

    return `${className}${isOpen ? classNameOpen : ''}`;
  };

  const propsDropdownTitle = {
    className: 'dropdown-menu__title',
    id,
    ariaLabel: `${title} dropdown`,
    onClick: () => setIsOpen((open) => !open),
    onBlur: () => setIsOpen(false),
  };

  return (
    <div className={`dropdown-menu ${className || ''}`} {...propsDropdown}>
      <Button {...propsDropdownTitle}>
        <span>{title}</span>
        <CaretImg isUp={isOpen} />
      </Button>
      <ul className={setClassNameOpen('dropdown-menu__items-list')}>
        {Children.map(arrayChildren, (child, index) => {
          return <li key={index}>{child}</li>;
        })}
      </ul>
    </div>
  );
};

Dropdown.prototype = {
  title: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

// Dropdown.defaultProps = {
//   type: 'Dropdown',
// };
