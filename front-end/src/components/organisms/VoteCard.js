import React from 'react';
import PropTypes from 'prop-types';

import i18n from '@i18n';

export const VoteCard = (props) => {
  const { children, ariaDescribly, ...propsVoteCard } = props;

  return (
    <div aria-describedby='voteCard' {...propsVoteCard}>
      HOliii
      <span id='voteCard' className='sr-only'>
        {i18n('VOTE_CARD__DESCRIPTION')}
      </span>
    </div>
  );
};

VoteCard.prototype = {
  className: PropTypes.string,
  children: PropTypes.node,
};

VoteCard.defaultProps = {};
