import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Typography, ThumbImg } from '@components/atoms';
import { ProgressBar } from '@components/molecules';
import { CardInfo } from '@components/organisms';

import { PreviousRulingContext } from '../../PreviousRulingContext';
import i18n from '@i18n';

import './CharactersGroup.scss';

const DROPDOWN_MENU__ITEM_LIST_VIEW = i18n('DROPDOWN_MENU__ITEM_LIST_VIEW');
const DROPDOWN_MENU__ITEM_GRID_VIEW = i18n('DROPDOWN_MENU__ITEM_GRID_VIEW');

export const CharactersGroup = (props) => {
  const { viewType } = props;
  const { characters = [], votes = [], dispatch } = useContext(PreviousRulingContext);

  return (
    <section>
      {characters &&
        characters.map((character, index) => {
          const propsCardInfo = {
            character,
            vote: votes[index],
            index,
          };

          return <CardInfo key={index} {...propsCardInfo} />;
        })}
    </section>
  );
};

CharactersGroup.prototype = {
  viewType: PropTypes.string,
};
