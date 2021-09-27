import React, { createContext, useState, useEffect, useReducer } from 'react';
import { getCharacters, getVotes, votesReducer } from '@services';

export const PreviousRulingContext = createContext(undefined);

const PreviousRulingProvider = ({ children }) => {
  const [characters, setCharacters] = useState(async () => getCharacters());
  const [votes, dispatchVotes] = useReducer(votesReducer, undefined, getVotes);

  const propsPreviousRuling = {
    characters,
    votes,
    dispatchVotes,
  };

  return <PreviousRulingContext.Provider value={propsPreviousRuling}>{children}</PreviousRulingContext.Provider>;
};

export default PreviousRulingProvider;
