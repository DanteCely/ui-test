import React, { createContext, useEffect, useCallback, useReducer } from 'react';
import { getCharacters, getVotes, initState, votesReducer, actionTypes } from '@services';

const { GET_DATA } = actionTypes;

export const PreviousRulingContext = createContext(undefined);

const PreviousRulingProvider = ({ children }) => {
  const [data, dispatch] = useReducer(votesReducer, initState);
  const { characters, votes } = useCallback(() => data, [data]);

  useEffect(() => {
    dispatch({ type: GET_DATA, payload: { dispatch } });
  }, []);

  const propsPreviousRuling = {
    characters,
    votes,
    dispatch,
  };

  return <PreviousRulingContext.Provider value={propsPreviousRuling}>{children}</PreviousRulingContext.Provider>;
};

export default PreviousRulingProvider;
