import React, { useMemo, Children } from 'react';
import PropTypes from 'prop-types';

import { getVotesPercent, convertToCharPercent } from '@utils';

import './ProgressBar.scss';

export const ProgressBar = (props) => {
  const { positive, negative, children } = props;
  const [leftSide, rightSide] = Children.toArray(children);

  const [positivePercentStr, negativePercentStr] = useMemo(() => {
    const [positivePercent, negativePercent] = getVotesPercent(positive, negative);

    return [convertToCharPercent(positivePercent), convertToCharPercent(negativePercent)];
  }, [positive, negative]);

  return (
    <div className={'progress-bar'}>
      <div className={'progress-bar__left-side'} style={{ width: positivePercentStr }}>
        {leftSide} <span>{positivePercentStr}</span>
      </div>
      <div className={'progress-bar__right-side'} style={{ width: negativePercentStr }}>
        <span>{negativePercentStr}</span> {rightSide}
      </div>
    </div>
  );
};

ProgressBar.prototype = {
  positive: PropTypes.number,
  negative: PropTypes.number,
  children: PropTypes.node,
};

ProgressBar.defaultProps = {
  percent: 100,
};
