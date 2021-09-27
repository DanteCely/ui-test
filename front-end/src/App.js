import React, { useState } from 'react';

import { GroupingControl, Button } from '@components/atoms';
import { BallotBox, Dropdown } from '@components/molecules';
import PreviousRulingProvider from './PreviousRulingContext';

const App = () => {
  const propsDorpdown = {
    title: 'Hi hihi hihi',
    id: 'lalalla',
  };

  return (
    <PreviousRulingProvider>
      <Dropdown {...propsDorpdown}>
        <>Holiii</>
        <>Chau</>
      </Dropdown>
      <BallotBox characterId={'uevSFw44'} />
    </PreviousRulingProvider>
  );
};

export default App;
