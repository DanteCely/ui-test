import React, { useState } from 'react';
import PropTypes from 'prop-types';

import i18n from '@i18n';
import { GroupingControl, Button, ThumbImg } from '@components/atoms';

import './BallotBox.scss';

export const BallotBox = (props) => {
  const { characterId, ...propsForm } = props;
  const [selectedOption, setSelectedOption] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    // voteNow(/* userId */ 'asdf-sdfsdf', selectedOption, characterId);
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
