import React, { useState } from 'react';
import { GroupingControl, Button } from '@components/atoms';
import { BallotBox } from '@components/molecules';

import PreviousRulingProvider from './PreviousRulingContext';

const App = () => {
  return (
    <PreviousRulingProvider>
      <BallotBox characterId={'uevSFw44'} />
    </PreviousRulingProvider>
  );
};

export default App;
