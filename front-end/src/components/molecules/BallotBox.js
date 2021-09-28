import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import i18n from '@i18n';
import { actionTypes, setVoteById } from '@services';
import { PreviousRulingContext } from '../../PreviousRulingContext';
import { GroupingControl, Button, ThumbImg } from '@components/atoms';

import './BallotBox.scss';

const { SET_DATA } = actionTypes;
export const BallotBox = (props) => {
  const { characterId, index, useSelectedOption, ...propsForm } = props;
  const [selectedOption, _] = useSelectedOption;

  const { dispatch } = useContext(PreviousRulingContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    setVoteById(false, selectedOption, characterId).then((votes) => {
      dispatch({ type: SET_DATA, payload: { votes } });
    });
  };

  const propsRadio = {
    name: `voteSelection${index}`,
    defaultValue: undefined,
    useSelectedOption,
    propsOptions: [
      { id: `approve${index}`, value: true },
      { id: `disapprove${index}`, value: false },
    ],
    className: 'ballot-box__options',
  };

  const propsVote = {
    type: 'submit',
    className: 'button-action',
    disabled: selectedOption === undefined,
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
  index: PropTypes.number,
  useSelectedOption: PropTypes.arrayOf(
    PropTypes.shape({
      selectedOption: PropTypes.bool,
      setSelectedOption: PropTypes.func,
    })
  ),
};

BallotBox.defaultProps = {
  type: 'button',
};
