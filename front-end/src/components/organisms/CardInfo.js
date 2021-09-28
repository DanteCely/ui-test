import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Typography, ThumbImg } from '@components/atoms';
import { ProgressBar } from '@components/molecules';
import { VoteSide } from '@components/organisms';

import { PreviousRulingContext } from '../../PreviousRulingContext';
import { greaterThan, getDiffDateDescription } from '@utils';
import i18n from '@i18n';

import './CardInfo.scss';

const thumbsValue = [true, false];

export const CardInfo = (props) => {
  const { character, vote, index } = props;
  const { name, description, category, picture, lastActivityDate } = character;
  const { positive, negative, voted: hasVoted, id: characterId } = vote;

  const isUp = useMemo(() => greaterThan(positive, negative), [positive, negative]);

  const propsName = {
    level: 3,
    className: 'card-info__name',
  };

  const propsDescription = {
    className: 'card-info__description',
  };

  const propsLatestWorkComment = {
    className: 'card-info__last-work-comment',
  };

  const propsProgressBar = {
    positive,
    negative,
  };

  const propsVoteSide = {
    className: 'card-info__vote-side',
    characterId,
    voted: hasVoted,
    index,
  };

  return (
    <>
      <div aria-describedby='voteSide' className={'card-info'} {...props}>
        <div className={'card-info__content'}>
          <div>
            <span className={`card-info__thumb-img card-info__thumb-img--${isUp ? 'up' : 'down'}`}>
              <ThumbImg isUp={isUp} />
            </span>
          </div>
          <div>
            <Typography {...propsName}>{name}</Typography> {/*      */}
            <Typography {...propsDescription}>{description}</Typography>
          </div>
          <div className={'card-info__rigth-side'}>
            {hasVoted && <Typography {...propsLatestWorkComment}>{i18n('CARD_INFO__THANKS')}</Typography>} {/*  */}
            {!hasVoted && (
              <Typography {...propsLatestWorkComment}>{getDiffDateDescription(lastActivityDate, category)}</Typography>
            )}
            <VoteSide {...propsVoteSide} />
          </div>
        </div>
        <ProgressBar {...propsProgressBar}>
          {thumbsValue.map((thumbValue, index) => (
            <ThumbImg key={index} isUp={thumbValue} />
          ))}
        </ProgressBar>
      </div>
      <span id='voteSide' className='sr-only'>
        {i18n('VOTE_CARD__DESCRIPTION')}
      </span>
    </>
  );
};

CardInfo.prototype = {
  character: PropTypes.object,
  vote: PropTypes.object,
  index: PropTypes.number,
};

CardInfo.defaultProps = {
  character: {},
  vote: {},
};
