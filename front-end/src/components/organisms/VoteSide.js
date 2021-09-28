import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import i18n from '@i18n';
import { setVoteById } from '@services';

import { Button } from '@components/atoms';
import { BallotBox, Dropdown } from '@components/molecules';
import { PreviousRulingContext } from '../../PreviousRulingContext';

export const VoteSide = (props) => {
  const { characterId, voted: hasVoted, index, ...propsVoteSide } = props;

  const [selectedOption, setSelectedOption] = useState();
  const { dispatch } = useContext(PreviousRulingContext);

  const unVoteHandler = () => {
    setVoteById(true, selectedOption, characterId).then((votes) => {
      dispatch({ type: 'SET_DATA', payload: { votes } });
    });
  };

  const propsVoteAgain = {
    className: 'button-action',
    onClick: unVoteHandler,
  };

  const propsBallotBox = {
    characterId,
    index,
    useSelectedOption: [selectedOption, setSelectedOption],
  };

  return (
    <div aria-describedby='VoteSide' {...propsVoteSide}>
      {hasVoted && <Button {...propsVoteAgain}>{i18n('VOTE_CARD__VOTE_AGAIN')}</Button>}
      {!hasVoted && <BallotBox {...propsBallotBox} />}
    </div>
  );
};

VoteSide.prototype = {
  className: PropTypes.string,
  characterId: PropTypes.string,
  voted: PropTypes.bool,
  index: PropTypes.number,
};

VoteSide.defaultProps = {};
