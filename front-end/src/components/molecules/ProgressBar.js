import React, { Children } from 'react';
import PropTypes from 'prop-types';

import { getVotesPercent } from '@utils';

// const [positivePercent, negativePercent] = useCallback(
//   () => getVotesPercent(positive, negative),
//   [positive, negative]
// );

export const ProgressBar = (props) => {
  const { className, percent, children } = props;
  const [leftSide, rightSide] = Children.toArray(children);

  const styles = useCallback(() => ({ width: `${percent}%` }), [percent]);

  return (
    <div className={className}>
      <div styles={styles}>
        <span>{leftSide}</span>
      </div>
      <div>
        <span>{rightSide}</span>
      </div>
    </div>
  );
};

ProgressBar.prototype = {
  className: PropTypes.string,
  percent: PropTypes.number,
  children: PropTypes.node,
};

ProgressBar.defaultProps = {
  percent: 100,
};
