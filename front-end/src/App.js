import React, { useState } from 'react';
import i18n from '@i18n';

import { Typography, Button } from '@components/atoms';
import { Dropdown } from '@components/molecules';
import { CharactersAndVotes } from '@components/templates';

import PreviousRulingProvider from './PreviousRulingContext';

import './App.scss';

const DROPDOWN_MENU__ITEM_LIST_VIEW = i18n('DROPDOWN_MENU__ITEM_LIST_VIEW');
const DROPDOWN_MENU__ITEM_GRID_VIEW = i18n('DROPDOWN_MENU__ITEM_GRID_VIEW');

const App = () => {
  const propsDropdownItems = [
    { itemName: DROPDOWN_MENU__ITEM_LIST_VIEW, ariaLabel: DROPDOWN_MENU__ITEM_LIST_VIEW },
    { itemName: DROPDOWN_MENU__ITEM_GRID_VIEW, ariaLabel: DROPDOWN_MENU__ITEM_GRID_VIEW },
  ];

  const [title, setTitle] = useState(propsDropdownItems[0].itemName);

  const propsDorpdown = {
    title,
    id: 'dropdownMenuView',
  };

  const handlerView = (itemName) => {
    setTitle(itemName);
    console.log('Change the view', itemName);
  };

  const renderDropdownItems = () => {
    return propsDropdownItems.map((props) => {
      const { itemName, ...rest } = props;
      const propsDropdownTitle = {
        onClick: () => handlerView(itemName),
        ...rest,
      };

      return <Button {...propsDropdownTitle}>{itemName}</Button>;
    });
  };

  const propsTitle = {
    level: 2,
    className: 'title-page',
  };

  return (
    <PreviousRulingProvider>
      <header className='previous-ruling__header'>
        <Typography {...propsTitle}>{i18n('PREVIOUS_RULING__TITLE')}</Typography>
        <Dropdown {...propsDorpdown}>{renderDropdownItems()}</Dropdown>
      </header>
      <CharactersAndVotes />
    </PreviousRulingProvider>
  );
};

export default App;
