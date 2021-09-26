import React, { Children } from 'react';
import PropTypes from 'prop-types';

const CheckRadio = (props) => {
  const { children, id, name, value, selectedOption, ...propsCheckRadio } = props;

  return (
    <>
      <input type='radio' id={id} name={name} value={value} checked={selectedOption === value} {...propsCheckRadio} />
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

// const [selectedOption, setSelectedOption] = useState(defaultValue);

export const GroupingControl = (props) => {
  const { type, name, defaultValue, propsOptions, setSelectedOption, children, ...propsGroupingControl } = props;
  const arrayChildren = Children.toArray(children);

  useEffect(() => {
    setSelectedOption(defaultValue);
  }, []);

  const onValueChange = (event) => setSelectedOption(event.target.value);

  return (
    <fieldset {...propsGroupingControl}>
      {Children.map(arrayChildren, (child, index) => {
        const propsCheckRadio = {
          type,
          name,
          selectedOption,
          onChange: onValueChange,
          ...(propsOptions[index] || {}),
        };

        <CheckRadio key={index} {...propsCheckRadio}>
          {child}
        </CheckRadio>;
      })}
    </fieldset>
  );
};

GroupingControl.prototype = {
  type: PropTypes.oneOf(['radio', 'checkbox']),
  name: PropTypes.string,
  defaultValue: PropTypes.any,
  setSelectedOption: PropTypes.func,
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
