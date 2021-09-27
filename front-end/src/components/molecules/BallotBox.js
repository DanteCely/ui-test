import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import i18n from '@i18n';
import { actionTypes, setVoteById } from '@services';
import { PreviousRulingContext } from '../../PreviousRulingContext';
import { GroupingControl, Button, ThumbImg } from '@components/atoms';

import './BallotBox.scss';

const { SET_VOTE_ID } = actionTypes;
export const BallotBox = (props) => {
  const { characterId, ...propsForm } = props;
  const [selectedOption, setSelectedOption] = useState();

  const { characters, votes, dispatch } = useContext(PreviousRulingContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    setVoteById(false, selectedOption, characterId).then((votes) => {
      dispatch({ type: 'SET_DATA', payload: { votes } });
    });
  };

  const propsRadio = {
    name: 'vote-selection',
    defaultValue: undefined,
    useSelectedOption: [selectedOption, setSelectedOption],
    propsOptions: [
      { id: 'approve', value: true },
      { id: 'disapprove', value: false },
    ],
    className: 'ballot-box__options',
  };

  const propsVote = {
    type: 'submit',
    className: 'ballot-box__vote-now',
  };

  return (
    <form className={'ballot-box'} onSubmit={handleSubmit} {...propsForm}>
      <GroupingControl {...propsRadio}>
        <ThumbImg isUp={true} />
        <ThumbImg isUp={false} />
      </GroupingControl>
      <Button {...propsVote}>{i18n('BALLOT_BOX__VOTE')}</Button>
    </form>
  );
};

BallotBox.prototype = {
  characterId: PropTypes.string,
};

BallotBox.defaultProps = {
  type: 'button',
};
