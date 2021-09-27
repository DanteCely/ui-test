import React, { useState } from 'react';
import i18n from '@i18n';

import { GroupingControl, Button } from '@components/atoms';
import { BallotBox, Dropdown } from '@components/molecules';
import { VoteCard } from '@components/organisms';
import PreviousRulingProvider from './PreviousRulingContext';

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

  return (
    <PreviousRulingProvider>
      <VoteCard></VoteCard>
      <Dropdown {...propsDorpdown}>
        {propsDropdownItems.map((props) => {
          const { itemName, ...rest } = props;
          const propsDropdownTitle = {
            onClick: () => handlerView(itemName),
            ...rest,
          };

          return <Button {...propsDropdownTitle}>{itemName}</Button>;
        })}
      </Dropdown>
      <BallotBox characterId={'uevSFw44'} />
    </PreviousRulingProvider>
  );
};

export default App;
