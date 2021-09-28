import React, { useState } from 'react';
import i18n from '@i18n';

import { Typography, Button } from '@components/atoms';
import { Dropdown } from '@components/molecules';
import { CharactersGroup } from '@components/templates';

import PreviousRulingProvider from './PreviousRulingContext';

import './App.scss';

const DROPDOWN_MENU__ITEM_LIST_VIEW = i18n('DROPDOWN_MENU__ITEM_LIST_VIEW');
const DROPDOWN_MENU__ITEM_GRID_VIEW = i18n('DROPDOWN_MENU__ITEM_GRID_VIEW');

const App = () => {
  const propsDropdownItems = [
    { itemName: DROPDOWN_MENU__ITEM_LIST_VIEW, ariaLabel: DROPDOWN_MENU__ITEM_LIST_VIEW },
    { itemName: DROPDOWN_MENU__ITEM_GRID_VIEW, ariaLabel: DROPDOWN_MENU__ITEM_GRID_VIEW },
  ];

  const [viewType, setViewType] = useState(propsDropdownItems[0].itemName);

  const propsDropdown = {
    title: viewType,
    id: 'dropdownMenuView',
  };

  const handlerView = (itemName) => {
    setViewType(itemName);
  };

  const renderDropdownItems = () => {
    return propsDropdownItems.map((props, index) => {
      const { itemName, ...rest } = props;
      const propsDropdownTitle = {
        onClick: () => handlerView(itemName),
        ...rest,
      };

      return (
        <Button key={index} {...propsDropdownTitle}>
          {itemName}
        </Button>
      );
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
        <Dropdown {...propsDropdown}>{renderDropdownItems()}</Dropdown>
      </header>
      <CharactersGroup viewType={viewType} />
    </PreviousRulingProvider>
  );
};

export default App;
