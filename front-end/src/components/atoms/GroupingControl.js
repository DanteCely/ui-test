import React, { useEffect, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

const CheckRadio = (props) => {
  const { children, id, ...propsCheckRadio } = props;

  return (
    <>
      <input type='radio' id={id} {...propsCheckRadio} />
      <label htmlFor={id}>{children}</label>
    </>
  );
};

CheckRadio.prototype = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  selectedOption: PropTypes.any,
  children: PropTypes.node,
};

export const GroupingControl = (props) => {
  const { type, name, defaultValue, propsOptions, useSelectedOption, children, ...propsGroupingControl } = props;
  const arrayChildren = Children.toArray(children);

  const [, setSelectedOption] = useSelectedOption;

  useEffect(() => {
    setSelectedOption(defaultValue);
  }, []);

  const onValueChange = (event) => {
    setSelectedOption(event.target.value === 'true');
  };

  return (
    <fieldset {...propsGroupingControl}>
      {Children.map(arrayChildren, (child, index) => {
        const propsCheckRadio = {
          type,
          name,
          onChange: onValueChange,
          ...(propsOptions[index] || {}),
        };

        return (
          <CheckRadio key={index} {...propsCheckRadio}>
            {child}
          </CheckRadio>
        );
      })}
    </fieldset>
  );
};

GroupingControl.prototype = {
  type: PropTypes.oneOf(['radio', 'checkbox']),
  name: PropTypes.string,
  defaultValue: PropTypes.any,
  useSelectedOption: PropTypes.arrayOf(
    PropTypes.shape({
      selectedOption: PropTypes.bool,
      setSelectedOption: PropTypes.func,
    })
  ),
  propsOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.any,
    })
  ),
  className: PropTypes.string,
  children: PropTypes.node,
};

GroupingControl.defaultProps = {
  type: 'radio',
};
