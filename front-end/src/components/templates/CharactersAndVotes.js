import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { VoteCard } from '@components/organisms';

import { PreviousRulingContext } from '../../PreviousRulingContext';
import i18n from '@i18n';

import './CharactersAndVotes.scss';

export const CharactersAndVotes = (props) => {
  const { children, ariaLabel, ...propsCharactersAndVotes } = props;
  const { characters, votes, dispatch } = useContext(PreviousRulingContext);

  return (
    <section aria-describedby='charactersAndVotes' className={'characters-votes'} {...props}>
      {'CharactersAndVotes'}
      <VoteCard></VoteCard>
      <span id='charactersAndVotes' className='sr-only'>
        {i18n('CHARACTERD_VOTES__DESCRIPTION')}
      </span>
    </section>
  );
};

CharactersAndVotes.prototype = {
  className: PropTypes.string,
  children: PropTypes.node,
};

// CharactersAndVotes.defaultProps = {
//   type: 'button',
// };
