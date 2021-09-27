import React from 'react';
import PropTypes from 'prop-types';

import i18n from '@i18n';

import { Button } from '@components/atoms';
import { BallotBox, Dropdown } from '@components/molecules';
import { PreviousRulingContext } from '../../PreviousRulingContext';

export const VoteCard = (props) => {
  const { character, vote, ...propsVoteCard } = props;

  const propsVoteAgain = {
    className: 'button-action',
    onClick: () => console.log('vote again'),
  };

  return (
    <div aria-describedby='voteCard' {...propsVoteCard}>
      <Button {...propsVoteAgain}>{i18n('VOTE_CARD__VOTE_AGAIN')}</Button>
      <BallotBox characterId={'uevSFw44'} />
      <span id='voteCard' className='sr-only'>
        {i18n('VOTE_CARD__DESCRIPTION')}
      </span>
    </div>
  );
};

VoteCard.prototype = {
  className: PropTypes.string,
  character: PropTypes.object,
  children: PropTypes.node,
};

VoteCard.defaultProps = {};
